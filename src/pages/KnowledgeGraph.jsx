// src/pages/KnowledgeGraph.jsx
//
// Interactive concept map. Deliberately NOT physics-simulated —
// positions are computed once per render in fixed zones (Foundations
// above center, Go Deeper below, Related to the sides, a tight inner
// ring for verses/hadith/lessons), then connecting lines are drawn as
// an SVG layer under the HTML nodes. No new dependency, no animation
// loop, calm and predictable rather than jittery.
//
// Route suggestion: /knowledge-graph, reading an optional ?focus=<id>
// query param so "Explore Connections" buttons elsewhere in the app
// can deep-link straight to a specific concept.
//
// Course routing/labels are centralized in COURSE_ROUTES and
// COURSE_LABELS below, rather than an if/else chain per course, so
// this component doesn't need another editing pass every time a new
// class is added (Adab, Tawheed, Tajweed Class, Seerah Class, and
// Arabiyyah Class all exist as of this writing) -- add one entry to
// each map for the next one. The underlying knowledgeGraph.js data
// file still needs its own concept nodes authored for whichever
// course's lesson nodes should actually appear in the graph; adding
// a course here only makes navigation work correctly once such nodes
// exist for it.

import { useState, useMemo, useCallback } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { GRAPH_NODES, getNeighbors, searchConcepts } from '../data/knowledgeGraph';
import './KnowledgeGraph.css';

const ZONE_COLOR = {
  prerequisite: '#85CCFF',
  advanced: '#094570',
  related: '#6a8090',
};

const RELATION_LABEL = {
  prerequisites: 'Foundations',
  advanced: 'Go Deeper',
  related: 'Related Concepts',
};

// One entry per course whose lessons can appear as graph nodes.
// Route: the base path a lesson node's ?unit=/&topic= params get
// appended to. Label: the human-readable name shown in the summary
// card underneath a lesson-adjacent concept.
const COURSE_ROUTES = {
  tawheed: '/tawheed',
  adab: '/adab',
  tajweedclass: '/tajweed-class',
  seerahclass: '/seerah-class',
  arabiyyahclass: '/arabiyyah-class',
};

const COURSE_LABELS = {
  tawheed: 'Tawheed Class',
  adab: 'Adab Class',
  tajweedclass: 'Tajweed Class',
  seerahclass: 'Seerah Class',
  arabiyyahclass: 'Arabiyyah Class',
};

function layoutPositions(neighbors) {
  // Returns { id: { x, y } } in a 0-100 viewBox, center fixed at 50,50.
  const positions = {};

  const placeArc = (items, yBase, ySpread, xCenter = 50, xSpread = 34) => {
    const n = items.length;
    if (n === 0) return;
    items.forEach((item, i) => {
      const t = n === 1 ? 0.5 : i / (n - 1);
      const x = xCenter - xSpread + t * xSpread * 2;
      const y = yBase + (n > 1 ? (i % 2 === 0 ? -1 : 1) * ySpread * 0.4 : 0);
      positions[item.node.id] = { x, y };
    });
  };

  placeArc(neighbors.prerequisites, 14, 6);
  placeArc(neighbors.advanced, 86, 6);

  const relN = neighbors.related.length;
  neighbors.related.forEach((item, i) => {
    const leftSide = i % 2 === 0;
    const row = Math.floor(i / 2);
    positions[item.node.id] = {
      x: leftSide ? 10 : 90,
      y: 40 + row * 20,
    };
  });

  // Inner satellite ring: lessons + evidence, close around the center
  const satellites = [...neighbors.lessons, ...neighbors.evidence];
  const satN = satellites.length;
  satellites.forEach((item, i) => {
    const angle = (i / Math.max(satN, 1)) * Math.PI * 2 - Math.PI / 2;
    const radius = 22;
    positions[item.node.id] = {
      x: 50 + Math.cos(angle) * radius,
      y: 50 + Math.sin(angle) * radius * 0.85,
    };
  });

  return positions;
}

export default function KnowledgeGraph() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialFocus = searchParams.get('focus');
  const [centerId, setCenterId] = useState(
    initialFocus && GRAPH_NODES[initialFocus] ? initialFocus : 'tawheed'
  );
  const [trail, setTrail] = useState([]);
  const [detailNode, setDetailNode] = useState(null);
  const [query, setQuery] = useState('');

  const centerNode = GRAPH_NODES[centerId];
  const neighbors = useMemo(() => getNeighbors(centerId), [centerId]);
  const positions = useMemo(() => layoutPositions(neighbors), [neighbors]);
  const results = useMemo(() => searchConcepts(query), [query]);

  const goTo = useCallback((id) => {
    if (id === centerId) return;
    setTrail((prev) => [...prev, centerId]);
    setCenterId(id);
    setQuery('');
  }, [centerId]);

  const goBackTo = useCallback((index) => {
    setTrail((prev) => {
      const target = prev[index];
      setCenterId(target);
      return prev.slice(0, index);
    });
  }, []);

  const handleNodeClick = (node) => {
    if (node.type === 'concept') {
      goTo(node.id);
      return;
    }
    if (node.type === 'lesson') {
      const basePath = COURSE_ROUTES[node.course];
      if (!basePath) return; // unknown course, nothing to navigate to
      const params = new URLSearchParams();
      if (node.unit) params.set('unit', node.unit);
      if (node.topicId) params.set('topic', node.topicId);
      const query = params.toString();
      navigate(query ? `${basePath}?${query}` : basePath);
      return;
    }
    setDetailNode(node);
  };

  const allNeighborItems = [
    ...neighbors.prerequisites.map((x) => ({ ...x, zone: 'prerequisites' })),
    ...neighbors.advanced.map((x) => ({ ...x, zone: 'advanced' })),
    ...neighbors.related.map((x) => ({ ...x, zone: 'related' })),
    ...neighbors.lessons.map((x) => ({ ...x, zone: 'satellite' })),
    ...neighbors.evidence.map((x) => ({ ...x, zone: 'satellite' })),
  ];

  return (
    <div className="kg-page">
      <div className="kg-header">
        <div className="kg-title">Knowledge Graph</div>
        <div className="kg-subtitle">Explore how Islamic concepts connect across every lesson.</div>
      </div>

      <div className="kg-search">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Jump to a concept..."
          className="kg-search-input"
        />
        {results.length > 0 && (
          <div className="kg-search-results">
            {results.map((n) => (
              <button key={n.id} className="kg-search-result" onClick={() => goTo(n.id)}>
                {n.title}
              </button>
            ))}
          </div>
        )}
      </div>

      {trail.length > 0 && (
        <div className="kg-breadcrumb">
          {trail.map((id, i) => (
            <span key={id} className="kg-breadcrumb-item">
              <button className="kg-breadcrumb-link" onClick={() => goBackTo(i)}>
                {GRAPH_NODES[id]?.title}
              </button>
              <span className="kg-breadcrumb-sep">›</span>
            </span>
          ))}
          <span className="kg-breadcrumb-current">{centerNode.title}</span>
        </div>
      )}

      <div className="kg-canvas">
        <svg className="kg-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
          {allNeighborItems.map(({ node, relation, zone }) => {
            const pos = positions[node.id];
            if (!pos) return null;
            const color = zone === 'satellite' ? '#c8d8e8' : (ZONE_COLOR[relation] || '#c8d8e8');
            return (
              <line
                key={node.id}
                x1={50} y1={50} x2={pos.x} y2={pos.y}
                stroke={color}
                strokeWidth={zone === 'satellite' ? 0.4 : 0.6}
                strokeDasharray={zone === 'satellite' ? '1.5,1.5' : undefined}
              />
            );
          })}
        </svg>

        {['prerequisites', 'advanced', 'related'].map((zoneKey) =>
          neighbors[zoneKey].length > 0 && (
            <div
              key={zoneKey}
              className={`kg-zone-label kg-zone-label--${zoneKey}`}
              style={
                zoneKey === 'prerequisites' ? { top: '4%', left: '50%' } :
                zoneKey === 'advanced' ? { top: '95%', left: '50%' } :
                { top: '28%', left: '2%' }
              }
            >
              {RELATION_LABEL[zoneKey]}
            </div>
          )
        )}

        {allNeighborItems.map(({ node, relation, zone }) => {
          const pos = positions[node.id];
          if (!pos) return null;
          const isSatellite = zone === 'satellite';
          return (
            <button
              key={node.id}
              className={`kg-node kg-node--${node.type} ${isSatellite ? 'kg-node--satellite' : `kg-node--${relation}`}`}
              style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
              onClick={() => handleNodeClick(node)}
            >
              <span className="kg-node-icon">
                {node.type === 'concept' ? '◆' : node.type === 'lesson' ? '▤' : node.type === 'verse' ? '﴾﴿' : '☾'}
              </span>
              <span className="kg-node-label">{node.title}</span>
            </button>
          );
        })}

        <div className="kg-center-node">
          <div className="kg-center-title">{centerNode.title}</div>
          {centerNode.subtitle && <div className="kg-center-subtitle">{centerNode.subtitle}</div>}
        </div>
      </div>

      {centerNode.summary && (
        <div className="kg-summary-card">
          <p>{centerNode.summary}</p>
          {centerNode.course && COURSE_LABELS[centerNode.course] && (
            <span className="kg-summary-course">{COURSE_LABELS[centerNode.course]}</span>
          )}
        </div>
      )}

      <div className="kg-legend">
        <span className="kg-legend-item"><span className="kg-legend-dot" style={{ background: ZONE_COLOR.prerequisite }} /> Foundation</span>
        <span className="kg-legend-item"><span className="kg-legend-dot" style={{ background: ZONE_COLOR.advanced }} /> Go Deeper</span>
        <span className="kg-legend-item"><span className="kg-legend-dot" style={{ background: ZONE_COLOR.related }} /> Related</span>
        <span className="kg-legend-item"><span className="kg-legend-dot kg-legend-dot--satellite" /> Verse / Hadith / Lesson</span>
      </div>

      {detailNode && (
        <div className="kg-sheet-overlay" onClick={() => setDetailNode(null)}>
          <div className="kg-sheet" onClick={(e) => e.stopPropagation()}>
            <div className="kg-sheet-header">
              <span className="kg-sheet-tag">{detailNode.type === 'verse' ? "Qur'an" : 'Hadith'}</span>
              <button className="kg-sheet-close" onClick={() => setDetailNode(null)}>×</button>
            </div>
            <p className="kg-sheet-arabic" lang="ar" dir="rtl">{detailNode.arabic}</p>
            <p className="kg-sheet-english">{detailNode.english}</p>
            <p className="kg-sheet-source">{detailNode.source}</p>
          </div>
        </div>
      )}
    </div>
  );
}
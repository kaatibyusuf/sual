// src/components/ExploreConnections.jsx
//
// Subtle pill button for lesson/topic pages, linking into the
// Knowledge Graph centered on a given concept. Renders nothing if
// no matching concept id is passed, so it's safe to drop into a
// page even before every topic has a graph entry.
//
// Usage inside a topic detail view (e.g. inside Adab.jsx or
// Tawheed.jsx, near the topic header):
//
//   <ExploreConnections conceptId="shirk" />
//
// The conceptId should match a real id in GRAPH_NODES
// (src/data/knowledgeGraph.js). A natural follow-up is adding a
// `conceptId` field directly onto each topic's data object in
// adab.js / tawheed.js, so this can be wired up automatically
// instead of passed by hand per page.

import { useNavigate } from 'react-router-dom';
import { GRAPH_NODES } from '../data/knowledgeGraph';
import './ExploreConnections.css';

export default function ExploreConnections({ conceptId }) {
  const navigate = useNavigate();
  if (!conceptId || !GRAPH_NODES[conceptId]) return null;

  return (
    <button
      className="explore-connections-pill"
      onClick={() => navigate(`/knowledge-graph?focus=${conceptId}`)}
    >
      <span className="explore-connections-icon">◆</span>
      Explore Connections
    </button>
  );
}
import fs from 'fs'
const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>What we've been building at Sual</title>
</head>
<body style="margin:0; padding:0; background-color:#f0f4f8; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0f4f8; padding: 30px 0;">
<tr>
<td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px; width:100%; background-color:#ffffff; border-radius:14px; overflow:hidden;">
  <tr>
    <td style="background: linear-gradient(160deg, #062f4a, #094570); padding: 40px 32px; text-align:center;">
      <div style="font-family: 'Times New Roman', serif; font-size: 2.2rem; color: #7EC8E3; margin-bottom: 6px;">سُؤَال</div>
      <div style="color: rgba(255,255,255,0.85); font-size: 0.85rem; letter-spacing: 0.05em;">SUAL — ISLAMIC KNOWLEDGE PLATFORM</div>
    </td>
  </tr>
  <tr>
    <td style="padding: 36px 32px 8px;">
      <p style="margin:0 0 20px; font-size: 15px; line-height: 1.7; color: #1a2733;">Assalamualaykum warahmatullahi wabarakaatuh,</p>
      <p style="margin:0 0 20px; font-size: 15px; line-height: 1.7; color: #1a2733;">In the name of Allah, the Most Gracious, the Most Merciful.</p>
      <p style="margin:0 0 20px; font-size: 15px; line-height: 1.7; color: #1a2733;">I am writing this to you, dear user, as an honest update on where Sual actually stands right now, what's changed, what we fixed, and what's still ahead of us.</p>
      <p style="margin:0 0 28px; font-size: 15px; line-height: 1.7; color: #1a2733;">When we started this, the question was simple: where does someone actually go to learn their deen properly, in a way they can trust. Everything since has been the slow, sometimes messy work of answering that question for real, one feature at a time, one correction at a time.</p>
      <p style="margin:0 0 24px; font-size: 15px; line-height: 1.7; color: #1a2733; font-weight:700;">Here's what's genuinely new since we last spoke.</p>
    </td>
  </tr>
  <tr>
    <td style="padding: 0 32px 22px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f7f9fc; border-radius: 10px; padding: 18px 20px;">
        <tr><td>
          <p style="margin:0 0 8px; font-size: 15px; font-weight:700; color:#094570;">📚 Book Quiz is live</p>
          <p style="margin:0 0 12px; font-size: 14px; line-height:1.6; color:#4a5b68;">Upload any Arabic book, a real PDF, a scan, even a photo of a page, and Sual generates a study quiz from it, every question checked against your actual text so nothing is invented. Two free generations to try it, then a small subscription for unlimited use.</p>
          <a href="https://app.usesual.com/book-quiz" style="color:#094570; font-size:14px; font-weight:600; text-decoration:none;">Try Book Quiz →</a>
        </td></tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="padding: 0 32px 22px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f7f9fc; border-radius: 10px; padding: 18px 20px;">
        <tr><td>
          <p style="margin:0 0 8px; font-size: 15px; font-weight:700; color:#094570;">📝 Exam Prep for UTME &amp; JUPEB — free</p>
          <p style="margin:0 0 12px; font-size: 14px; line-height:1.6; color:#4a5b68;">If you are writing  either UTME or JUPEB, we have you covered. Real syllabus-grounded notes and practice questions for Islamic Studies and Arabic, plus full timed mock exams. If you or someone you know is preparing for these exams, this is worth their time.</p>
          <a href="https://app.usesual.com/exam-prep" style="color:#094570; font-size:14px; font-weight:600; text-decoration:none;">Start Exam Prep →</a>
        </td></tr>
      </table>
    </td>
</tr>
  <tr>
    <td style="padding: 0 32px 22px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f7f9fc; border-radius: 10px; padding: 18px 20px;">
        <tr><td>
          <p style="margin:0 0 8px; font-size: 15px; font-weight:700; color:#094570;">🎓 My Courses — structured, self-paced learning</p>
          <p style="margin:0 0 12px; font-size: 14px; line-height:1.6; color:#4a5b68;">Structured Arabiyyah and Hadeeth courses broken into real sections and lessons, each with audio, readings, and quizzes, your progress tracked automatically. Part of what Spaces membership unlocks.</p>
          <a href="https://app.usesual.com/lms" style="color:#094570; font-size:14px; font-weight:600; text-decoration:none;">Open My Courses →</a>
        </td></tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="padding: 0 32px 22px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f7f9fc; border-radius: 10px; padding: 18px 20px;">
        <tr><td>
          <p style="margin:0 0 8px; font-size: 15px; font-weight:700; color:#094570;">🕌 Spaces has grown</p>
          <p style="margin:0 0 12px; font-size: 14px; line-height:1.6; color:#4a5b68;">Accountability partners now pair you privately with someone else on the same path as you. Sahaabah Circles give you a small group to actually belong to. And every class now has a full archive, joining midway through a series no longer means missing what came before it.</p>
          <a href="https://app.usesual.com/spaces" style="color:#094570; font-size:14px; font-weight:600; text-decoration:none;">Visit Spaces →</a>
        </td></tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="padding: 0 32px 28px;">
      <p style="margin:0 0 10px; font-size: 14px; line-height:1.7; color:#1a2733;">🗓️ The <strong>Islamic Calendar</strong> was rebuilt properly, each day now shows its real lunar phase, not just a number in a box, because a Hijri month is a real astronomical thing and the calendar should actually show that.</p>
      <p style="margin:0 0 10px; font-size: 14px; line-height:1.7; color:#1a2733;">🎧 <strong>Hifdh</strong> now lets you recite instead of type, your recitation is checked against the text directly.</p>
      <p style="margin:0; font-size: 14px; line-height:1.7; color:#1a2733;">📱 Sual is on its way to the <strong>Google Play Store</strong> as a proper Android app, not just something you add to your home screen.</p>
    </td>
  </tr>
  <tr>
    <td style="padding: 0 32px 28px;">
      <p style="margin:0 0 10px; font-size: 14px; line-height:1.7; color:#5a6b78; font-style:italic;">I won't pretend everything has been smooth. We found and fixed a scoring bug that was occasionally giving one extra point on a perfect quiz run. We found and fixed a Hijri date calculation that was a day off in places. These things happen when you're building honestly and quickly, and I'd rather tell you about them than pretend they didn't happen.</p>
    </td>
  </tr>
  <tr>
    <td style="padding: 0 32px 36px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#094570; border-radius: 12px; padding: 26px 24px; text-align:center;">
        <tr><td>
          <p style="margin:0 0 6px; font-size:15px; font-weight:700; color:#ffffff;">If you've been meaning to try Spaces, this is a good moment.</p>
          <p style="margin:0 0 18px; font-size:13px; color:rgba(255,255,255,0.8);">₦2,500/month for the community, scholar-answered questions, accountability partners, circles, and the full structured courses.</p>
          <a href="https://app.usesual.com/spaces" style="display:inline-block; background:#1976D2; color:#ffffff; font-size:14px; font-weight:700; padding:12px 28px; border-radius:8px; text-decoration:none;">Subscribe to Spaces →</a>
        </td></tr>
      </table>
    </td>
  </tr>
  <tr>
<td style="padding: 0 32px 36px;">
      <p style="margin:0 0 20px; font-size: 15px; line-height: 1.7; color: #1a2733;">Thank you for being here this early. Whatever Sual becomes, it's because people like you kept using it, kept telling us what was broken, and kept giving us reason to keep building.</p>
      <p style="margin:0 0 4px; font-size: 15px; color: #1a2733;">Baarakallahu feekum.</p>
      <p style="margin:0; font-size: 15px; font-weight:700; color: #094570;">Kaatib Yusuf</p>
      <p style="margin:0; font-size: 13px; color: #5a6b78;">Founder, Sual</p>
    </td>
  </tr>
  <tr>
    <td style="background:#062f4a; padding: 24px 32px; text-align:center;">
      <div style="font-family: 'Times New Roman', serif; font-size: 1.1rem; color: #7EC8E3; margin-bottom: 8px;">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div>
      <p style="margin:0; font-size: 12px; color: rgba(255,255,255,0.6);">
        <a href="https://app.usesual.com" style="color:rgba(255,255,255,0.6); text-decoration:underline;">app.usesual.com</a>
        &nbsp;·&nbsp;
        <a href="https://usesual.com/privacy.html" style="color:rgba(255,255,255,0.6); text-decoration:underline;">Privacy Policy</a>
      </p>
    </td>
  </tr>
</table>
</td>
</tr>
</table>
</body>
</html>`
const payload = {
  secret: 'SualBroadcast2026Secure',
  subject: "What we've been building at Sual",
  html,
}
fs.writeFileSync('broadcast-payload.json', JSON.stringify(payload))
console.log('broadcast-payload.json created successfully.')
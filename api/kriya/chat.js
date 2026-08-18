export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, sessionId } = req.body || {};

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'message is required' });
    }

    const workspaceId = 'e48c4435-15ff-42b2-90f1-e669cd804da6';
    const agentId = 'aec041c2-f963-470e-88c6-af9de3d417de';

    const endpoint = `https://agents.kriyaos.com/api/public/chat?workspaceId=${workspaceId}&agentId=${agentId}`;

    const messages = [
      {
        role: 'user',
        parts: [{ type: 'text', text: message }]
      }
    ];

    const upstream = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages,
        ...(sessionId ? { sessionId } : {})
      })
    });

    const text = await upstream.text();
    let data;
    try { data = JSON.parse(text); } catch { data = { raw: text }; }

    return res.status(upstream.status).json(data);
  } catch (error) {
    console.error('KriyaOS request failed:', error);
    return res.status(500).json({ error: 'KriyaOS request failed' });
  }
}

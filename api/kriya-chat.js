module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.KRIYAOS_WORKSPACE_API_KEY;
  const workspaceId = process.env.KRIYAOS_WORKSPACE_ID;
  const agentId = process.env.KRIYAOS_AGENT_ID;

  if (!apiKey || !workspaceId || !agentId) {
    return res.status(500).json({ error: 'KriyaOS is not configured yet.' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const messages = Array.isArray(body?.messages) ? body.messages : [];

    if (!messages.length) {
      return res.status(400).json({ error: 'At least one message is required.' });
    }

    const url = `https://api.kriyaos.com/api/secure/chat?workspaceId=${encodeURIComponent(workspaceId)}&agentId=${encodeURIComponent(agentId)}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messages }),
    });

    const text = await response.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = { text };
    }

    if (!response.ok) {
      return res.status(response.status).json({
        error: data?.error || data?.message || 'KriyaOS request failed.',
      });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error('KriyaOS proxy error:', error);
    return res.status(500).json({ error: 'Unable to reach the AI agent.' });
  }
};

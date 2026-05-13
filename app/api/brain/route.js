import { brainAsk, dispatchAgent, orchestrate, AGENTS } from '../../../lib/brain';

export async function POST(request) {
  try {
    const body = await request.json();
    const { action, question, agentId, business, data, businesses, priority } = body;

    if (action === 'dispatch' && agentId) {
      const result = await dispatchAgent({ agentId, action: data?.subAction || 'status_check', business: business || {}, data: data || {} });
      return Response.json(result);
    }
    if (action === 'orchestrate') {
      const result = await orchestrate({ businesses: businesses || [], priority: priority || 'risk' });
      return Response.json(result);
    }
    if (action === 'list_agents') {
      return Response.json({ success: true, agents: Object.entries(AGENTS).map(([id, a]) => ({ id, name: a.name, model: a.model, capabilities: a.capabilities })) });
    }
    if (action === 'ask' && question) {
      const result = await brainAsk(question);
      return Response.json(result);
    }
    return Response.json({ success: false, error: 'Invalid action. Use: ask, dispatch, orchestrate, list_agents' }, { status: 400 });
  } catch (err) {
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function GET() {
  return Response.json({ status: 'online', brain: 'NaijaComply Compliance Brain v2.0', agents: Object.keys(AGENTS).length, timestamp: new Date().toISOString() });
}

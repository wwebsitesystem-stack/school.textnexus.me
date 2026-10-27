import { handleGeneration } from './ai.js';
import { handleDeployment } from './deploy.js';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // CORS Preflight Handling
    if (request.method === 'OPTIONS') {
      return handleCors();
    }

    try {
      if (url.pathname === '/api/generate' && request.method === 'POST') {
        return await handleGeneration(request, env);
      }
      
      if (url.pathname === '/api/deploy' && request.method === 'POST') {
        return await handleDeployment(request, env);
      }

      return new Response('Not Found', { status: 404 });
    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }
};

function handleCors() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }
  });
}

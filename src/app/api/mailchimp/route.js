// app/api/mailchimp/route.js
export async function POST(req) {
    try {
      const body = await req.json();
      const { email } = body;
  
      if (!email) {
        return new Response(JSON.stringify({ error: 'Email is required' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }
  
      const url = `https://${process.env.DATACENTER}.api.mailchimp.com/3.0/lists/${process.env.AUDIENCE_ID}/members`;
  
      const options = {
        method: 'POST',
        headers: {
          Authorization: `Basic ${Buffer.from(`anystring:${process.env.API_KEY}`).toString('base64')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_address: email,
          status: 'subscribed',
          tags: ['Customer'],
        }),
      };
  
      const response = await fetch(url, options);
      const data = await response.json();
  
      if (response.ok) {
        return new Response(JSON.stringify({ message: 'Successfully subscribed!' }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      } else {
        return new Response(JSON.stringify({ error: data.detail || 'Subscription failed' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Internal server error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }
  
  export async function GET(req) {
    return new Response(JSON.stringify({ message: 'Great!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
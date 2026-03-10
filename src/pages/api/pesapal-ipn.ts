import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json(); // Parse JSON body from Pesapal
    const response = await fetch('https://donations.uwezolinkinitiative.org/pesapal/ipn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`Backend response error: ${response.status}`);
    }

    const data = await response.text();
    console.log('IPN forwarded successfully:', { order_tracking_id: body.order_tracking_id });

    return new NextResponse(data, { status: 200 });
  } catch (error) {
    console.error('Proxy error:', error);
    return new NextResponse('Error proxying IPN', { status: 500 });
  }
}
// app/api/analyze/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Forward the request to FastAPI backend
    const response = await fetch('http://localhost:8000/api/analyze', {
      method: 'POST',
      body: await request.formData()
    });

    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json({ error: error.detail }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to analyze bill' },
      { status: 500 }
    );
  }
}
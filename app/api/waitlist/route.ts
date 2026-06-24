import { Timestamp } from 'firebase-admin/firestore';
import { NextRequest, NextResponse } from 'next/server';

import { getAdminDb } from '@/lib/firebase-admin';

// Never statically render this route — it reads env vars and writes to Firestore at runtime.
export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (
      !email ||
      typeof email !== 'string' ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return NextResponse.json({ error: 'A valid email is required.' }, { status: 400 });
    }

    const normalised = email.toLowerCase().trim();
    const userAgent = req.headers.get('user-agent') ?? '';

    await getAdminDb().collection('waitlist').doc(normalised).set({
      email: normalised,
      createdAt: Timestamp.now(),
      source: 'landing-page',
      userAgent,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[waitlist]', err);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 },
    );
  }
}

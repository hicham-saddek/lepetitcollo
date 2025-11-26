import { NextRequest, NextResponse } from 'next/server';
import { authenticateUser, createSession, setSessionCookie } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json(
        { error: 'Nom d\'utilisateur et mot de passe requis' },
        { status: 400 }
      );
    }

    const user = await authenticateUser(username, password);

    if (!user) {
      return NextResponse.json(
        { error: 'Nom d\'utilisateur ou mot de passe incorrect' },
        { status: 401 }
      );
    }

    const sessionToken = await createSession(user.id);
    await setSessionCookie(sessionToken);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}


import { NextRequest, NextResponse } from "next/server";
import { getLogtoContext, getAccessTokenRSC } from "@logto/next/server-actions";
import { logtoConfig } from "@/lib/logto";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://zd-gw-9famg.ondigitalocean.app";

async function getToken() {
  return getAccessTokenRSC(logtoConfig, API_URL);
}

export async function GET() {
  try {
    const { isAuthenticated } = await getLogtoContext(logtoConfig);
    if (!isAuthenticated) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const token = await getToken();
    const res = await fetch(`${API_URL}/profiles/me`, {
      cache: "no-store",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (e) {
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { isAuthenticated } = await getLogtoContext(logtoConfig);
    if (!isAuthenticated) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const token = await getToken();
    const body = await request.json();
    const res = await fetch(`${API_URL}/profiles/me`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (e) {
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}

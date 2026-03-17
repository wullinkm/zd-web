import { NextRequest, NextResponse } from "next/server";
import { getLogtoContext, getAccessTokenRSC } from "@logto/next/server-actions";
import { logtoConfig } from "@/lib/logto";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://zd-gw-9famg.ondigitalocean.app";

export async function POST(request: NextRequest) {
  try {
    const { isAuthenticated } = await getLogtoContext(logtoConfig);
    if (!isAuthenticated) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const token = await getAccessTokenRSC(logtoConfig, API_URL);
    const body = await request.json();
    const res = await fetch(`${API_URL}/applications`, {
      method: "POST",
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

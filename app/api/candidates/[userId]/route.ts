import { NextRequest, NextResponse } from "next/server";
import { getLogtoContext, getAccessTokenRSC } from "@logto/next/server-actions";
import { logtoConfig } from "@/lib/logto";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://zd-gw-9famg.ondigitalocean.app";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
) {
  try {
    const { isAuthenticated } = await getLogtoContext(logtoConfig);
    if (!isAuthenticated) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const { userId } = await params;
    const token = await getAccessTokenRSC(logtoConfig, API_URL);
    const res = await fetch(`${API_URL}/profiles/${userId}`, {
      cache: "no-store",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (e) {
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}

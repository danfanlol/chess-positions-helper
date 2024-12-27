import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.json({ message: "Logged out!" });
  response.cookies.delete("auth_token");
  return response;
}
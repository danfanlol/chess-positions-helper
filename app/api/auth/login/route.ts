import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { username, password } = await req.json();
  if (!process.env.JWT_SECRET){
    throw new Error("JWT_Secret Token not set")
  }
  // Verify user credentials (this can be against a database)
  if (username === "user" && password === "password") {
    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: "1h" });
    const response = NextResponse.json({ message: "Logged in!" });
    response.cookies.set("auth_token", token, { httpOnly: false, secure: true, path: "/" });
    return response;
  }

  return NextResponse.json({ message: 'RETARD' }, { status: 500 })
}
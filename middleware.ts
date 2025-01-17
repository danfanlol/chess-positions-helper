import { NextRequest, NextResponse } from "next/server";


export async function middleware(req: NextRequest) {
    const token = req.cookies.get("auth_token");
  
    if (!token && req.nextUrl.pathname.startsWith("/loggedin")) {
      return NextResponse.redirect(new URL("/signin", req.url));
    }
    if (token && req.nextUrl.pathname.startsWith("/signin")) {
        return NextResponse.redirect(new URL("/loggedin", req.url));
      }
  }

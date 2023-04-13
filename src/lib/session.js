

import { withIronSessionApiRoute } from "iron-session/next";

export function withNextSession(apiRoute) {
  return withIronSessionApiRoute(apiRoute, {
    password: process.env.SECRET_COOKIE_PASSWORD,
    cookieName: "user-session",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production"
    }
  });
}



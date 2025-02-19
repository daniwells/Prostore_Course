import { NextRequest } from "next/server";
import { authorized } from "./auth.config";

export async function middleware(request: NextRequest) {
    return authorized(request);
}

export const config = {
  runtime: "nodejs",
};

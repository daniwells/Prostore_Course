import { NextRequest } from "next/server";
import { authorized } from "./auth.config";

// A função do middleware precisa ser exportada com o nome correto
export async function middleware(request: NextRequest) {
    return authorized(request);
}

// Força o middleware a rodar no Node.js, ao invés do Edge Runtime
export const config = {
  runtime: "nodejs",
};

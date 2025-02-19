export { auth as middleware } from "@/auth";

// Força o middleware a ser executado no ambiente node, ao invés do navegador
export const config = {
    runtime: "nodejs",
};
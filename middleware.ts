import { GetServerSidePropsContext } from 'next';

export async function middleware(req: GetServerSidePropsContext) {
    // Importação dinâmica da lógica de autenticação
    const { auth } = await import('@/auth');
    return auth(req);
  }
  
// Força o middleware a rodar no Node.js
export const config = {
    runtime: "nodejs",
};
  
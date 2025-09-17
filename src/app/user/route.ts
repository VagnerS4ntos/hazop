// app/api/user/route.ts

import { NextResponse } from "next/server";
import os from "os";

type UserResponse = {
  user: string;
  host: string;
};

export async function GET(): Promise<NextResponse<UserResponse | { error: string }>> {
  try {
    const host = os.hostname();
    const user = os.userInfo()?.username || "Desconhecido";

    // Retorna a resposta com o status 200 (OK)
    return NextResponse.json({ user, host });
  } catch (error) {
    console.error("Erro ao obter informações do sistema:", error);
    // Em caso de erro, retorna uma resposta com o status 500 (Internal Server Error)
    return NextResponse.json(
      { error: "Erro interno no servidor." },
      { status: 500 }
    );
  }
}


// import os from "os";
// import { NextResponse } from "next/server";

// export async function GET() {
//   const host = os.hostname()
//   const user = os.userInfo()?.username || "Desconhecido";
//   return NextResponse.json({ user, host })
// }

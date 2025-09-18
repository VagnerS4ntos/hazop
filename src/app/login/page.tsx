"use client";
import React from "react";
import { setCookie } from "cookies-next";
import { toast } from "react-toastify";
import { useUserDatabase } from "../states/config";

function page() {
  const [matricula, setMatricula] = React.useState("");
  const { getUsersDatabase, users } = useUserDatabase((state) => state);

  async function Login(event: React.FormEvent) {
    console.log("RODOU");
    event.preventDefault();
    toast.dismiss();
    if (!matricula) {
      toast.error("Favor informar uma matrícula");
      return;
    }

    try {
      const res = await fetch(
        `/api/database?matricula=${encodeURIComponent(matricula)}`
      );
      const data = await res.json();
      if (data.error) {
        toast.error(data.error);
        return;
      }
      getUsersDatabase(data);
      //   setCookie("matricula", matricula)
    } catch (err) {
      toast.error(JSON.stringify(err));
    }
  }

  return (
    <div className="flex h-[calc(100vh-4rem)] items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-sm rounded-lg bg-white p-8 shadow-lg">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-green-petro">LOGIN</h1>
          <p className="mt-2 text-sm text-gray-600">
            Acesse sua conta para continuar
          </p>
        </div>

        <form className="space-y-4" onSubmit={Login}>
          <div>
            <input
              type="text"
              className={`mt-1 block w-full rounded-md  bg-gray-50 px-3 py-2 text-black shadow-sm border-2 border-gray-300  `}
              placeholder="Matrícula"
              required
              value={matricula}
              onChange={({ target }) => {
                setMatricula(target.value);
              }}
            />
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md border border-transparent bg-green-petro-hover px-4 py-2 text-white shadow-sm cursor-pointer active:scale-105 transition-all"
            >
              ENTRAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default page;

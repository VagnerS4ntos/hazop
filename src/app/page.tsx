"use client";
// import Redirect from "./component/Redirect";
import React from "react";
import { auth, db } from "./firebase/client";
import { collection, getDocs } from "firebase/firestore";

export default function Home() {
  async function getData() {
    const querySnapshot = await getDocs(collection(db, "hazop"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  }

  return (
    <main>
      <button
        className="bg-green-600 px-2 py-1 rounded-md hover:bg-green-700 cursor-pointer mx-auto mt-4"
        onClick={getData}
      >
        Salvar
      </button>
    </main>
    // <>
    //   <main className="text-center h-[calc(100vh-4rem)]">
    //     <section className="grid grid-cols-1 items-center h-full">
    //       <div className="grid grid-cols-1 gap-4">
    //         <Redirect text="Ações documentais" redirectTo="documentais" />
    //         <Redirect text="Ações no FAT" redirectTo="FAT" />
    //         <Redirect text="Comentário de TAP" redirectTo="comentariosDeTAP" />
    //         <Redirect text="Ações de campo" redirectTo="AcoesDeCampo" />
    //         <Redirect text="TAP" redirectTo="TAP" />
    //         <Redirect text="Pré-operação" redirectTo="preOperacao" />
    //       </div>
    //     </section>
    //   </main>
    // </>
  );
}

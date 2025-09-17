import React from "react";
import Image from "next/image";
import Link from "next/link";
Link;

function Header() {
  return (
    <header className="bg-green-petro p-4 flex items-center relative h-16">
      <div className="absolute xs:block hidden">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
        </Link>
      </div>
      <p className="font-bold text-2xl grow text-center">Recomendações HAZOP</p>
    </header>
  );
}

export default Header;

import React from "react";
import Link from "next/link";

function Redirect({ text, redirectTo }: { text: string; redirectTo: string }) {
  return (
    <Link
      href={redirectTo}
      className="bg-green-petro-hover p-4 rounded-md mx-auto w-72"
    >
      {text}
    </Link>
  );
}

export default Redirect;

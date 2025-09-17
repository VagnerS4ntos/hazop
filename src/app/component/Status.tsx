"use client";
import React from "react";

function Status() {
  const [status, setStatus] = React.useState("");

  return (
    <select
      onChange={({ target }) => setStatus(target.value)}
      className="cursor-pointer border border-gray-300 rounded-lg bg-white px-3 py-2 mb-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-black"
    >
      <option value="pendente">⏳ Pendentes</option>
      <option value="andamento">🚀 Em andamento</option>
      <option value="concluido">✅ Concluídos</option>
    </select>
  );
}

export default Status;

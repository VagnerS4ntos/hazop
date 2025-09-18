"use client";
import React from "react";
import * as XLSX from "xlsx";
import Status from "./Status";

function Table() {
  const [data, setData] = React.useState<string[][]>([]);
  const [selectedRow, setSelectedRow] = React.useState<number | null>(null);

  React.useEffect(() => {
    const fetchExcel = async () => {
      const response = await fetch("/hazop.xlsx");
      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: "array" });

      // Pega a primeira aba da planilha
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];

      const jsonData = XLSX.utils.sheet_to_json(sheet, {
        header: 1,
      }) as string[][];

      setData(jsonData);
      console.log(jsonData);
    };

    fetchExcel();
  }, []);

  return (
    <section className="my-2 p-4">
      <Status />
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 divide-y divide-gray-200 text-sm">
          <tbody>
            {data.map((row, i) => (
              <tr
                key={i}
                onClick={() => i != 0 && setSelectedRow(i)}
                className={`transition-colors ${
                  selectedRow === i && "bg-yellow-petro text-white"
                } ${
                  i == 0
                    ? "bg-white text-black"
                    : "cursor-pointer hover:bg-slate-800"
                }`}
              >
                {row.map((cell, j) => (
                  <td key={j} className="px-4 py-2 border border-gray-200">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Table;

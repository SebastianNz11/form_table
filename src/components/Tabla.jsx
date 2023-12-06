import { React, useState } from "react";
import {
  GoMoveToEnd,
  GoMoveToStart,
  GoArrowRight,
  GoArrowLeft,
} from "react-icons/go";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";

export const Tabla = ({ data, columns }) => {
  const [filtering, setFiltering] = useState("");

  const onDelete = (dato) => {
    console.log(dato);
  };

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter: filtering,
    },
    onGlobalFilterChange: setFiltering,
  });
  console.log(data);

  return (
    <div>
      <h2 className="mb-4">Tabla</h2>
      <div className="w-50 mb-3 mt-3">
        <input
          type="text"
          value={filtering}
          onChange={(e) => setFiltering(e.target.value)}
          className="form-control"
          placeholder="Buscar"
        />
      </div>
      <table className="table table-success table-striped text-center">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>{header.column.columnDef.header}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="ms-1">
        <button onClick={() => table.setPageIndex(0)} className="me-2">
          <GoMoveToStart />
        </button>
        <button onClick={() => table.previousPage()} className="me-2">
          <GoArrowLeft />
        </button>
        <button onClick={() => table.nextPage()} className="me-2">
          <GoArrowRight />
        </button>
        <button onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
          <GoMoveToEnd />
        </button>
      </div>
    </div>
  );
};

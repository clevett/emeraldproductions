"use client";
import { useState } from "react";
import { Table as RadixTable } from "@radix-ui/themes";

import { ArrowUpIcon } from "@/components";

type Rows = { header: string; cell: (string | number)[]; id: string }[];

export const Table = ({
  columns,
  onRowClick,
  rows,
}: {
  columns: { header: string }[];
  onRowClick: (id: string) => void;
  rows: Rows;
}) => {
  const [isAscending, setAscending] = useState(true);
  const [sort, setSort] = useState(columns[0].header);

  const sortedRows = (r: Rows) => {
    if (sort) {
      const columnIndex = columns.findIndex((column) => column.header === sort);
      return r.sort((a, b) => {
        const aValue = columnIndex === 0 ? a.header : a.cell[columnIndex - 1];
        const bValue = columnIndex === 0 ? b.header : b.cell[columnIndex - 1];

        const aValueStr = aValue.toString();
        const bValueStr = bValue.toString();

        if (isAscending) {
          return aValueStr.localeCompare(bValueStr, undefined, {
            numeric: true,
          });
        } else {
          return bValueStr.localeCompare(aValueStr, undefined, {
            numeric: true,
          });
        }
      });
    }
    return r;
  };

  return (
    <RadixTable.Root variant="surface" className="bg-card">
      <RadixTable.Header>
        <RadixTable.Row>
          {columns.map((column, index) => (
            <RadixTable.ColumnHeaderCell
              key={"table-column-" + index}
              className={`capitalize cursor-pointer hover:text-sky-500 ${
                sort === column.header ? "text-sky-500" : ""
              }`}
              onClick={() => {
                setAscending(!isAscending);
                setSort(column.header);
              }}
            >
              <div className="grid grid-flow-col gap-1 auto-cols-min items-center">
                {column.header}
                <span
                  className={`w-4 h-4
                      ${sort === column.header ? "inline" : "hidden"}	
                      ${isAscending ? "" : "rotate-180"}`}
                >
                  <ArrowUpIcon />
                </span>
              </div>
            </RadixTable.ColumnHeaderCell>
          ))}
        </RadixTable.Row>
      </RadixTable.Header>

      <RadixTable.Body>
        {sortedRows(rows).map((row, index) => (
          <RadixTable.Row
            key={"table-row-" + index}
            className=" cursor-pointer hover:text-sky-500"
            onClick={() => onRowClick(row.id)}
          >
            <RadixTable.RowHeaderCell className="max-[390px]:py-4 max-[390px]:px-0.5 capitalize text-center sm:text-left">
              {row.header}
            </RadixTable.RowHeaderCell>

            {row.cell.map((cell, index) => (
              <RadixTable.Cell
                key={"table-cell-" + index}
                className="max-[390px]:py-4 max-[390px]:px-0.5 text-center sm:text-left"
              >
                {cell}
              </RadixTable.Cell>
            ))}
          </RadixTable.Row>
        ))}
      </RadixTable.Body>
    </RadixTable.Root>
  );
};

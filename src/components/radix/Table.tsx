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
  const [sort, setSort] = useState<string | undefined>(undefined);

  const sortedRows = (rows: Rows) => {
    if (sort) {
      const columnIndex = columns.findIndex((column) => column.header === sort);
      return rows.sort((a, b) => {
        const aValue = columnIndex === 0 ? a.header : a.cell[columnIndex - 1];
        const bValue = columnIndex === 0 ? b.header : b.cell[columnIndex - 1];

        if (isAscending) {
          return aValue > bValue ? 1 : -1;
        } else {
          return aValue < bValue ? 1 : -1;
        }
      });
    }
    return rows;
  };

  return (
    <RadixTable.Root variant="surface" className="bg-card">
      <RadixTable.Header>
        <RadixTable.Row>
          {columns.map((column, index) => (
            <RadixTable.ColumnHeaderCell
              key={"table-column-" + index}
              className={`capitalize cursor-pointer hover:text-blue-500 ${
                sort === column.header ? "text-blue-500" : ""
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
            className="cursor-pointer hover:text-blue-500"
            onClick={() => onRowClick(row.id)}
          >
            <RadixTable.RowHeaderCell className="capitalize">
              {row.header}
            </RadixTable.RowHeaderCell>
            {row.cell.map((cell, index) => (
              <RadixTable.Cell key={"table-cell-" + index}>
                {cell}
              </RadixTable.Cell>
            ))}
          </RadixTable.Row>
        ))}
      </RadixTable.Body>
    </RadixTable.Root>
  );
};

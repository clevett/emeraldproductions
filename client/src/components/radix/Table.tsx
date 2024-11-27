import { Table as RadixTable } from "@radix-ui/themes";

export const Table = ({
  columns,
  rows,
  onRowClick,
}: {
  columns: { header: string }[];
  rows: { header: string; cell: (string | number)[]; id: string }[];
  onRowClick: (id: string) => void;
}) => {
  return (
    <RadixTable.Root variant="surface">
      <RadixTable.Header>
        <RadixTable.Row>
          {columns.map((column, index) => (
            <RadixTable.ColumnHeaderCell
              key={"table-column-" + index}
              className="capitalize"
            >
              {column.header}
            </RadixTable.ColumnHeaderCell>
          ))}
        </RadixTable.Row>
      </RadixTable.Header>

      <RadixTable.Body>
        {rows.map((row, index) => (
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

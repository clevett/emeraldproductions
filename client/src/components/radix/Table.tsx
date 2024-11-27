import { Table as RadixTable } from "@radix-ui/themes";

export const Table = ({
  columns,
  rows,
}: {
  columns: { header: string }[];
  rows: { header: string; cell: (string | number)[] }[];
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
          <RadixTable.Row key={"table-row-" + index}>
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

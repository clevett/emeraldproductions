import { EuiBasicTable, EuiButton, EuiTableSortingType } from "@elastic/eui";
import { useState } from "react";
import { Monster } from "../EncounterBuilder";

export const MonsterTable = ({ data }: { data: Monster[] }) => {
  const columns = [
    {
      field: "name",
      name: "Name",
      truncateText: true,
      render: (name: Monster["name"]) => (
        <EuiButton
          className="text-left"
          size="s"
          fill
          onClick={() => console.log(name)}
        >
          {name}
        </EuiButton>
      ),
    },
    {
      field: "difficulty",
      name: "Difficulty",
      truncateText: true,
    },
    {
      field: "descriptor",
      name: "Descriptor",
      truncateText: true,
    },
    {
      field: "source",
      name: "Source",
      truncateText: true,
    },
  ];

  const [sortField, setSortField] = useState<keyof Monster>(
    columns[0].field as keyof Monster
  );
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  const pagination = {
    pageIndex,
    pageSize,
    showPerPageOptions: false,
    totalItemCount: Math.ceil(data.length / 10),
  };

  const onTableChange = ({
    page,
    sort,
  }: {
    page?: { index: number; size: number };
    sort?: typeof sorting.sort;
  }) => {
    if (page) {
      setPageIndex(page.index);
      setPageSize(page.size);
    }

    if (sort) {
      setSortField(sort.field);
      setSortDirection(sort.direction);
    }
  };

  const sorting: EuiTableSortingType<Monster> = {
    sort: {
      field: sortField,
      direction: sortDirection,
    },
    enableAllColumns: true,
  };

  return (
    <EuiBasicTable
      columns={columns}
      items={data}
      onChange={onTableChange}
      pagination={pagination}
      sorting={sorting}
      tableCaption="Bestiary"
    />
  );
};

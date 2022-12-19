import { EuiBasicTable, EuiTableSortingType } from "@elastic/eui";
import { useState } from "react";
import { Monster } from "../EncounterBuilder";

const columns = [
  {
    field: "name",
    name: "Name",
    sortable: true,
    truncateText: true,
    mobileOptions: {
      render: (item: Monster) => <span>{item.name}</span>,
      header: false,
      truncateText: false,
      enlarge: true,
      width: "100%",
    },
  },
  {
    sortable: true,
    field: "difficulty",
    name: "Difficulty",
    truncateText: true,
    mobileOptions: {
      header: false,
      truncateText: false,
      enlarge: true,
      width: "100%",
    },
  },
  {
    sortable: true,
    field: "descriptor",
    name: "Descriptor",
    truncateText: true,
    mobileOptions: {
      header: false,
      truncateText: false,
      enlarge: true,
      width: "100%",
    },
  },
  {
    sortable: true,
    field: "source",
    name: "Source",
    truncateText: true,
    mobileOptions: {
      header: false,
      truncateText: false,
      enlarge: true,
      width: "100%",
    },
  },
];

export const MonsterTable = ({ data }: { data: Monster[] }) => {
  const [sortField, setSortField] = useState<keyof Monster>(
    columns[0].field as keyof Monster
  );
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const sorting: EuiTableSortingType<Monster> = {
    sort: {
      field: sortField,
      direction: sortDirection,
    },
    enableAllColumns: true,
  };

  const pagination = {
    pageIndex,
    pageSize,
    pageSizeOptions: [10],
    showPerPageOptions: false,
    totalItemCount: Math.ceil(data.length / 10),
  };

  const onTableChange = ({
    page,
    sort,
  }: {
    page: { index: number; size: number };
    sort?: typeof sorting.sort;
  }) => {
    const { index, size } = page;
    setPageIndex(index);
    setPageSize(size);

    console.log(page);
    console.log(sort);

    console.table(sorting);

    if (sort) {
      setSortField(sort.field);
      setSortDirection(sort.direction);
    }
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

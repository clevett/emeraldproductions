import { EuiBasicTable, EuiTableSortingType } from "@elastic/eui";
import { useState } from "react";
import { Monster } from "../EncounterBuilder";

const columns = [
  {
    field: "name",
    name: "Name",
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

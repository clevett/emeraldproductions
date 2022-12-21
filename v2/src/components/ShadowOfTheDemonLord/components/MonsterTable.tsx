import { EuiBasicTable, EuiButton, EuiTableSortingType } from "@elastic/eui";
import { useState } from "react";
import { Action, Monster } from "../EncounterBuilder";

export const MonsterTable = ({
  data,
  onSelect,
}: {
  data: Monster[];
  onSelect: (arg: Monster, action: Action) => void;
}) => {
  const handleSelect = (monster: Monster) => {
    onSelect(monster, "add");
  };

  const columns = [
    {
      field: "name",
      name: "Name",
      truncateText: true,
    },
    {
      field: "difficulty",
      name: "Difficulty",
      truncateText: true,
      sortable: true,
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
    {
      name: "",
      actions: [
        {
          render: (item: Monster) => {
            return (
              <EuiButton onClick={() => handleSelect(item)} color="primary">
                Add
              </EuiButton>
            );
          },
        },
      ],
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
      hasActions={true}
    />
  );
};

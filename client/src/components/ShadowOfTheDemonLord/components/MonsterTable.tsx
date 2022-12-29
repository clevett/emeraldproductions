import {
  EuiBasicTable,
  EuiButton,
  EuiTableSortingType,
  EuiText,
} from "@elastic/eui";
import { useState } from "react";
import { Action, Actions, Monster } from "../EncounterBuilder";

enum Sort {
  DESC = "desc",
  ASC = "asc",
}

export const MonsterTable = ({
  action,
  data,
  onSelect,
}: {
  data: Monster[];
  onSelect: (arg: Monster) => void;
  action: Action;
}) => {
  const columns = [
    {
      field: "name",
      name: "Name",
      truncateText: true,
      render: (name: Monster["name"]) => {
        return <EuiText className="capitalize">{name}</EuiText>;
      },
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
              <EuiButton
                className="capitalize"
                color={action === Actions.ADD ? "success" : "danger"}
                fill
                onClick={() => onSelect(item)}
                size="s"
              >
                {action}
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
  const [sortDirection, setSortDirection] = useState<`${Sort}`>(Sort.ASC);

  const onTableChange = ({ sort }: { sort?: typeof sorting.sort }) => {
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

  const sortData = (monsters: Monster[]) => {
    const items = monsters.sort((a, b) => {
      const keyA = a[sortField],
        keyB = b[sortField];
      return keyA < keyB ? -1 : keyA > keyB ? 1 : 0;
    });
    return sortDirection === "asc" ? items : items.reverse();
  };

  return (
    <EuiBasicTable
      columns={columns}
      hasActions={true}
      items={sortData(data)}
      onChange={onTableChange}
      sorting={sorting}
      tableCaption="Bestiary"
      tableLayout="auto"
    />
  );
};

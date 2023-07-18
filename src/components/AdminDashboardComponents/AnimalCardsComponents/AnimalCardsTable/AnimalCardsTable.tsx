import React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Typography from "components/SharedComponents/Typography/Typography";
import styled from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";

type Animal = {
  animalName: string;
  additionDate: string;
  genre: string;
  sex: "samiec" | "samiczka";
  colour: string;
  weight: string;
  sterilization: "tak" | "nie";
  visible: "tak" | "nie";
  action: any;
};

const defaultData: Animal[] = [
  {
    animalName: "Kot",
    additionDate: "2021-07-19",
    genre: "Kot",
    sex: "samiec",
    colour: "czarny",
    weight: "4kg",
    sterilization: "tak",
    visible: "tak",
    action: null,
  },
];

const columnHelper = createColumnHelper<Animal>();

const columns = [
  columnHelper.accessor("animalName", {
    header: () => (
      <Typography
        variant="UI Small/UI Text 13 Med"
        color="midGray2">
        Imię zwierzaka
      </Typography>
    ),
  }),
  columnHelper.accessor("additionDate", {
    header: () => (
      <Typography
        variant="UI Small/UI Text 13 Med"
        color="midGray2">
        Data dodania
      </Typography>
    ),
  }),
  columnHelper.accessor("genre", {
    header: () => (
      <Typography
        variant="UI Small/UI Text 13 Med"
        color="midGray2">
        Gatunek
      </Typography>
    ),
  }),
  columnHelper.accessor("sex", {
    header: () => (
      <Typography
        variant="UI Small/UI Text 13 Med"
        color="midGray2">
        Płeć
      </Typography>
    ),
  }),
  columnHelper.accessor("colour", {
    header: () => (
      <Typography
        variant="UI Small/UI Text 13 Med"
        color="midGray2">
        Umaszczenie
      </Typography>
    ),
  }),
  columnHelper.accessor("weight", {
    header: () => (
      <Typography
        variant="UI Small/UI Text 13 Med"
        color="midGray2">
        Waga
      </Typography>
    ),
  }),
  columnHelper.accessor("sterilization", {
    header: () => (
      <Typography
        variant="UI Small/UI Text 13 Med"
        color="midGray2">
        Sterylizacja
      </Typography>
    ),
  }),
  columnHelper.accessor("visible", {
    header: () => (
      <Typography
        variant="UI Small/UI Text 13 Med"
        color="midGray2">
        Widoczny
      </Typography>
    ),
  }),
  columnHelper.accessor("action", {
    header: () => (
      <Typography
        variant="UI Small/UI Text 13 Med"
        color="midGray2">
        Akcja
      </Typography>
    ),
  }),
];

const StyledTableHeader = styled.thead`
  border-top: 1px solid ${getColor("lightGray3")};
  border-bottom: 1px solid ${getColor("lightGray3")};
`;

function AnimalCardsTable() {
  const [data, setData] = React.useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel<Animal>(),
  });

  return (
    <div>
      <table>
        <StyledTableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </StyledTableHeader>
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
      <div className="h-4" />
    </div>
  );
}

export default AnimalCardsTable;

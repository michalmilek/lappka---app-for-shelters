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
import { CheckIcon, MoreIcon } from "components/SharedComponents/icons/icons";
import {
  ActionHeaderContainer,
  Dot,
  DotFlexContainer,
  StyledDropdownContainer,
  StyledDropdownOption,
  StyledSexContainer,
  StyledTableHeader,
  StyledTableTD,
  StyledTableTH,
  StyledTableTHTextContainer,
  StyledTableTR,
  TableComponentContainer,
  TableComponentHeaderContainer,
  TableContainer,
} from "./AnimalCardsTable.styled";
import AnimalCardsTableActionItem from "./AnimalCardsTableActionItem";
import { Animal, columns, defaultData } from "./AnimalCardsTableUtils";

function AnimalCardsTable() {
  const [data, setData] = React.useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns: columns,
    getCoreRowModel: getCoreRowModel<Animal>(),
  });

  return (
    <TableComponentContainer>
      <TableComponentHeaderContainer>
        <Typography
          variant="UI/UI Text 16 Semi Bold"
          tag="h2"
          color="darkGray2">
          Karty zwierząt
        </Typography>
      </TableComponentHeaderContainer>
      <TableContainer>
        <StyledTableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <StyledTableTH key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </StyledTableTH>
              ))}
            </tr>
          ))}
        </StyledTableHeader>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <StyledTableTR key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <StyledTableTD
                  className={cell.id === "actions" ? "actions-cell" : ""}
                  key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </StyledTableTD>
              ))}
            </StyledTableTR>
          ))}
        </tbody>
      </TableContainer>
    </TableComponentContainer>
  );
}

export default AnimalCardsTable;



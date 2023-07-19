import React, { useState } from "react";
import {
  getPaginationRowModel,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  SortingState,
  getFilteredRowModel,
  PaginationState,
} from "@tanstack/react-table";
import Typography from "components/SharedComponents/Typography/Typography";
import styled from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
  MoreIcon,
} from "components/SharedComponents/icons/icons";
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
import Input from "components/SharedComponents/Inputs/Input";

function AnimalCardsTable() {
  const data = React.useMemo(() => defaultData, []);
  const columnsMemo = React.useMemo(() => columns, []);

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [sorting, setSorting] = useState<SortingState>([]);
  const [filtering, setFiltering] = useState("");

  const table = useReactTable({
    data,
    columns: columnsMemo,
    getCoreRowModel: getCoreRowModel<Animal>(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
      pagination: pagination,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
    debugTable: true,
    onPaginationChange: setPagination,
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
                <StyledTableTH
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  {{
                    asc: " 🔼",
                    desc: " 🔽",
                  }[header.column.getIsSorted() as string] ?? null}
                </StyledTableTH>
              ))}
            </tr>
          ))}
        </StyledTableHeader>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <StyledTableTR key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <StyledTableTD key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </StyledTableTD>
              ))}
            </StyledTableTR>
          ))}
        </tbody>
      </TableContainer>
      <div>
        <button
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}>
          <ArrowLeftIcon />
        </button>
        {pagination.pageIndex > 0 && (
          <button onClick={() => table.setPageIndex(0)}>1</button>
        )}
        {table.getCanPreviousPage() && pagination.pageIndex > 1 && (
          <button
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}>
            {pagination.pageIndex}
          </button>
        )}
        <span>{pagination.pageIndex + 1}</span>
        {table.getCanNextPage() &&
          pagination.pageIndex + 2 < table.getPageCount() && (
            <button onClick={() => table.nextPage()}>
              {pagination.pageIndex + 2}
            </button>
          )}
        {pagination.pageIndex + 3 < table.getPageCount() && (
          <button onClick={() => table.setPageIndex(pagination.pageIndex + 2)}>
            {pagination.pageIndex + 3}
          </button>
        )}
        {pagination.pageIndex !== table.getPageCount() - 1 && (
          <button onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
            {table.getPageCount()}
          </button>
        )}
        <button
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}>
          <ArrowRightIcon />
        </button>
        <Input
          placeholder="Wyszukaj w całej tabeli..."
          value={filtering}
          onChange={(e) => setFiltering(e.target.value)}
        />
      </div>
    </TableComponentContainer>
  );
}

export default AnimalCardsTable;

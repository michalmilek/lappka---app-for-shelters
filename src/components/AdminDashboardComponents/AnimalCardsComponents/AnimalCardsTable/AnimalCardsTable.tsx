import React, { useEffect, useState } from "react";
import {
  getPaginationRowModel,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  SortingState,
  getFilteredRowModel,
  PaginationState,
  VisibilityState,
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
  StyledTableArrowButton,
  StyledTableFooterButtonsContainer,
  StyledTableFooterContainer,
  StyledTableHeader,
  StyledTableInputContainer,
  StyledTableNumberButton,
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
import useDeviceType from "hooks/useDeviceType";
import AnimalCardsTableFooter from "./AnimalCardsTableFooter";

function AnimalCardsTable() {
  const deviceType = useDeviceType();
  const data = React.useMemo(() => defaultData, []);
  const columnsMemo = React.useMemo(() => columns, []);

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [sorting, setSorting] = useState<SortingState>([]);
  const [filtering, setFiltering] = useState("");
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const handleFiltering = (value: string) => {
    setFiltering(value);
  };


  const handlePageSize = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const optionValue = event.target.value;
    setPagination({ ...pagination, pageSize: +optionValue });
  };

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
      columnVisibility,
    },
    onColumnVisibilityChange: setColumnVisibility,
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
    onPaginationChange: setPagination,
  });

  useEffect(() => {
    table.getAllLeafColumns().forEach((header) => {
      if (
        deviceType !== "desktop" &&
        (header.id === "colour" || header.id === "visible")
      ) {
        header.toggleVisibility(false);
      } else if (deviceType === "mobile" && header.id === "additionDate") {
        header.toggleVisibility(false);
      } else {
        header.toggleVisibility(true);
      }
    });
  }, [deviceType, table]);

  return (
    <TableComponentContainer>
      <TableComponentHeaderContainer>
        <Typography
          $variant="UI/UI Text 16 Semi Bold"
          tag="h2"
          $color="darkGray2">
          Karty zwierząt
        </Typography>
      </TableComponentHeaderContainer>
      <TableContainer>
        <StyledTableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
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
                );
              })}
            </tr>
          ))}
        </StyledTableHeader>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <StyledTableTR key={row.id}>
              {row.getVisibleCells().map((cell) => {
                return (
                  <StyledTableTD key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </StyledTableTD>
                );
              })}
            </StyledTableTR>
          ))}
        </tbody>
      </TableContainer>
      <AnimalCardsTableFooter
        itemsPerPage={pagination.pageSize}
        handlePageSize={handlePageSize}
        table={table}
        pagination={pagination}
        handleFiltering={handleFiltering}
        filtering={filtering}
      />
    </TableComponentContainer>
  );
}

export default AnimalCardsTable;

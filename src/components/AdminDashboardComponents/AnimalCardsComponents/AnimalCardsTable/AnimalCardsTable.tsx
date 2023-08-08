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
import {
  StyledTableHeader,
  StyledTableTD,
  StyledTableTH,
  StyledTableTR,
  TableComponentContainer,
  TableComponentHeaderContainer,
  TableContainer,
} from "./AnimalCardsTable.styled";
import { columns } from "./AnimalCardsTableUtils";
import useDeviceType from "hooks/useDeviceType";
import AnimalCardsTableFooter from "./AnimalCardsTableFooter";
import { Pet, ShelterCardsResponse } from "apiCalls/pet/pet";

function AnimalCardsTable({ data }: { data: ShelterCardsResponse }) {
  const deviceType = useDeviceType();
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
    data: data.items,
    columns: columnsMemo,
    getCoreRowModel: getCoreRowModel<Pet>(),
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

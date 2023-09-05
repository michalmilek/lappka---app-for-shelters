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
import {
  columns,
  ExtendedSearchParams,
  sortParamFn,
  sortParams,
} from "./AnimalCardsTableUtils";
import useDeviceType from "hooks/useDeviceType";
import AnimalCardsTableFooter from "./AnimalCardsTableFooter";
import {
  Pet,
  PetWithImageUrl,
  ShelterCardsResponseWithProfilePictureUrl,
} from "services/pet/petTypes";
import { useDispatch } from "react-redux";
import { setTablePaginationState } from "redux/tableSlice";
import { useNavigate, useSearchParams } from "react-router-dom";
import { DashboardRoutes } from "router/router";

function AnimalCardsTable({
  data,
}: {
  data: ShelterCardsResponseWithProfilePictureUrl;
}) {
  console.log("🚀 ~ data:", data);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const pageIndexFromQueryParams = searchParams.get("pageIndex");
  const pageSizeFromQueryParams = searchParams.get("pageSize");
  const sortParamFromQueryParams = searchParams.get("sortParam");
  const sortParamOrderFromQueryParams = searchParams.get("asc");
  const deviceType = useDeviceType();
  const columnsMemo = React.useMemo(() => columns, []);

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: pageIndexFromQueryParams ? +pageIndexFromQueryParams : 1,
    pageSize: pageSizeFromQueryParams ? +pageSizeFromQueryParams : 10,
  });
  const [sorting, setSorting] = useState<SortingState>([
    {
      desc: sortParamOrderFromQueryParams
        ? Boolean(sortParamOrderFromQueryParams)
        : false,
      id: sortParamFromQueryParams ? sortParamFromQueryParams : "createdat",
    },
  ]);
  const [filtering, setFiltering] = useState("");
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const handleFiltering = (value: string) => {
    setFiltering(value);
  };

  const handlePageSize = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const optionValue = event.target.value;
    setPagination({ pageIndex: 1, pageSize: +optionValue });
  };

  const table = useReactTable({
    data: data.petInListInShelterDto,
    columns: columnsMemo,
    getCoreRowModel: getCoreRowModel<PetWithImageUrl>(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    manualPagination: true,
    manualSorting: true,
    pageCount: data.totalPages,
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
        (header.id === "breed" || header.id === "isVisible")
      ) {
        header.toggleVisibility(false);
      } else if (
        deviceType === "mobile" &&
        (header.id === "createdAt" || header.id === "gender")
      ) {
        header.toggleVisibility(false);
      } else {
        header.toggleVisibility(true);
      }
    });
  }, [deviceType, table]);

  useEffect(() => {
    let updatedSearchParams: ExtendedSearchParams = {
      ...searchParams,
      pageIndex: pagination.pageIndex.toString(),
      pageSize: pagination.pageSize.toString(),
    };

    if (sorting.length > 0) {
      updatedSearchParams = {
        ...updatedSearchParams,
        sortParam: sortParamFn(sorting[0].id).toLowerCase(),
        asc: String(!sorting[0].desc),
      };
    }

    setSearchParams(updatedSearchParams);
  }, [
    pagination.pageIndex,
    pagination.pageSize,
    sorting,
    searchParams,
    setSearchParams,
  ]);

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
            <StyledTableTR
              onClick={() => {
                navigate(DashboardRoutes.animalCards + `/${row.original.id}`);
              }}
              key={row.id}>
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

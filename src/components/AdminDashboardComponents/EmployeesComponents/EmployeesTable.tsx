import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Typography from "components/SharedComponents/Typography/Typography";
import React from "react";
import {
  StyledTableHeader,
  StyledTableTD,
  StyledTableTH,
  StyledTableTR,
  TableComponentHeaderContainer,
  TableContainer,
} from "../AnimalCardsComponents/AnimalCardsTable/AnimalCardsTable.styled";
import { EmployeesTableComponentContainer } from "./DashboardEmployees.styled";
import {
  dummyData,
  Employee,
  employeesColumns,
} from "./EmployeesComponentsUtils";

const EmployeesTable = () => {
  const data = React.useMemo(() => dummyData, []);
  const memoisedColumns = React.useMemo(() => employeesColumns, []);

  const table = useReactTable({
    data,
    columns: memoisedColumns,
    getCoreRowModel: getCoreRowModel<Employee>(),
  });

  return (
    <EmployeesTableComponentContainer>
      <TableComponentHeaderContainer>
        <Typography
          variant="UI/UI Text 16 Semi Bold"
          tag="h2"
          color="darkGray2">
          Lista pracowników
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
    </EmployeesTableComponentContainer>
  );
};

export default EmployeesTable;

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Button from "components/SharedComponents/Button/Button";
import Typography from "components/SharedComponents/Typography/Typography";
import React from "react";
import { useTranslation } from "react-i18next";
import { WorkerInterface } from "services/management/managementTypes";
import {
  StyledTableHeader,
  StyledTableTD,
  StyledTableTH,
  StyledTableTR,
  TableComponentHeaderContainer,
  TableContainer,
} from "../AnimalCardsComponents/AnimalCardsTable/AnimalCardsTable.styled";
import {
  EmployeesTableComponentContainer,
  EmployeesTableFooter,
} from "./DashboardEmployees.styled";
import { Employee, employeesColumns } from "./EmployeesComponentsUtils";
import { useEffect } from "react";
import useDeviceType from "hooks/useDeviceType";

const EmployeesTable = ({
  workersData,
}: {
  workersData: WorkerInterface[];
}) => {
  const deviceType = useDeviceType();
  const { t } = useTranslation("employees");
  const memoisedColumns = React.useMemo(() => employeesColumns, []);

  const table = useReactTable({
    data: workersData,
    columns: memoisedColumns,
    getCoreRowModel: getCoreRowModel<Employee>(),
  });

  useEffect(() => {
    table.getAllLeafColumns().forEach((header) => {
      if (deviceType === "mobile" && header.id === "additionDate") {
        header.toggleVisibility(false);
      } else {
        header.toggleVisibility(true);
      }
    });
  }, [deviceType, table]);

  return (
    <EmployeesTableComponentContainer>
      <TableComponentHeaderContainer>
        <Typography
          variant="UI/UI Text 16 Semi Bold"
          tag="h2"
          color="darkGray2">
          {t("employees.employeesList")}
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
      <EmployeesTableFooter>
        <Button variant="outline">Test</Button>
        {/* ADDED TO HAVE STYLING ON THE FOOTER, IN THE FUTURE I WILL REPLACE IT WITH PAGINATION */}
      </EmployeesTableFooter>
    </EmployeesTableComponentContainer>
  );
};

export default EmployeesTable;

import React from "react";
import Typography from "components/SharedComponents/Typography/Typography";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
} from "components/SharedComponents/icons/icons";
import {
  StyledTableFooterContainer,
  StyledTableInputContainer,
  StyledTableArrowButton,
  StyledTableNumberButton,
  StyledTableFooterButtonsContainer,
} from "./AnimalCardsTable.styled";
import Input from "components/SharedComponents/Inputs/Input";
import { PaginationState, Table } from "@tanstack/react-table";
import { Animal } from "./AnimalCardsTableUtils";

interface TableFooterProps {
  table: Table<Animal>;
  pagination: PaginationState;
  filtering: string;
  handleFiltering: (value: string) => void;
}

const AnimalCardsTableFooter: React.FC<TableFooterProps> = ({
  table,
  pagination,
  filtering,
  handleFiltering,
}) => {
  return (
    <StyledTableFooterContainer>
      <StyledTableInputContainer>
        <Input
          placeholder="Wyszukaj w całej tabeli..."
          value={filtering}
          onChange={(e) => handleFiltering(e.target.value)}
        />
      </StyledTableInputContainer>
      <StyledTableFooterButtonsContainer>
        <StyledTableArrowButton
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}>
          <ArrowLeftIcon />
        </StyledTableArrowButton>
        {pagination.pageIndex > 0 && (
          <StyledTableNumberButton onClick={() => table.setPageIndex(0)}>
            1
          </StyledTableNumberButton>
        )}
        {table.getCanPreviousPage() && pagination.pageIndex > 1 && (
          <StyledTableNumberButton
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}>
            {pagination.pageIndex}
          </StyledTableNumberButton>
        )}
        <StyledTableNumberButton active>
          {pagination.pageIndex + 1}
        </StyledTableNumberButton>
        {table.getCanNextPage() &&
          pagination.pageIndex + 2 < table.getPageCount() && (
            <StyledTableNumberButton onClick={() => table.nextPage()}>
              {pagination.pageIndex + 2}
            </StyledTableNumberButton>
          )}
        {pagination.pageIndex + 3 < table.getPageCount() && (
          <StyledTableNumberButton
            onClick={() => table.setPageIndex(pagination.pageIndex + 2)}>
            {pagination.pageIndex + 3}
          </StyledTableNumberButton>
        )}
        {pagination.pageIndex !== table.getPageCount() - 1 && (
          <StyledTableNumberButton
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
            {table.getPageCount()}
          </StyledTableNumberButton>
        )}
        <StyledTableArrowButton
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}>
          <ArrowRightIcon />
        </StyledTableArrowButton>
      </StyledTableFooterButtonsContainer>
    </StyledTableFooterContainer>
  );
};

export default AnimalCardsTableFooter;
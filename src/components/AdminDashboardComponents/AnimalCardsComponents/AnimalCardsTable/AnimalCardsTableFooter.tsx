import React from "react";
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
  AnimalCardsStyledPageSizeSelect,
} from "./AnimalCardsTable.styled";
import Input from "components/SharedComponents/Inputs/Input";
import { PaginationState, Table } from "@tanstack/react-table";
import { PetWithImageUrl } from "services/pet/petTypes";

interface TableFooterProps {
  table: Table<PetWithImageUrl>;
  pagination: PaginationState;
  filtering: string;
  handleFiltering: (value: string) => void;
  handlePageSize: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  itemsPerPage: number;
}

const AnimalCardsTableFooter: React.FC<TableFooterProps> = ({
  table,
  pagination,
  filtering,
  handleFiltering,
  handlePageSize,
  itemsPerPage,
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
      <AnimalCardsStyledPageSizeSelect
        value={itemsPerPage}
        onChange={handlePageSize}>
        <option value={8}>8</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
      </AnimalCardsStyledPageSizeSelect>
      <StyledTableFooterButtonsContainer>
        <StyledTableArrowButton
          disabled={pagination.pageIndex === 1}
          onClick={() => table.previousPage()}>
          <ArrowLeftIcon />
        </StyledTableArrowButton>
        {pagination.pageIndex > 1 && (
          <StyledTableNumberButton onClick={() => table.setPageIndex(1)}>
            1
          </StyledTableNumberButton>
        )}
        {table.getCanPreviousPage() && pagination.pageIndex > 2 && (
          <StyledTableNumberButton
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}>
            {pagination.pageIndex - 1}
          </StyledTableNumberButton>
        )}
        <StyledTableNumberButton active>
          {pagination.pageIndex}
        </StyledTableNumberButton>
        {table.getCanNextPage() &&
          pagination.pageIndex + 1 < table.getPageCount() && (
            <StyledTableNumberButton onClick={() => table.nextPage()}>
              {pagination.pageIndex + 2}
            </StyledTableNumberButton>
          )}
        {pagination.pageIndex + 2 < table.getPageCount() && (
          <StyledTableNumberButton
            onClick={() => table.setPageIndex(pagination.pageIndex + 2)}>
            {pagination.pageIndex + 2}
          </StyledTableNumberButton>
        )}
        {pagination.pageIndex !== table.getPageCount() && (
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

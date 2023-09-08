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
import { Pet } from "services/pet/petTypes";
import { useSearchParams } from "react-router-dom";

interface TableFooterProps {
  table: Table<Pet>;
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
  const [searchParams, setSearchParams] = useSearchParams();

  const customGetCanNextPage = () => {
    const { pageIndex } = table.getState().pagination;

    const pageCount = table.getPageCount();

    if (pageCount === -1) {
      return true;
    }

    if (pageCount === 0) {
      return false;
    }

    return pageIndex < pageCount;
  };

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
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          handlePageSize(e);
        }}>
        <option value={8}>8</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
      </AnimalCardsStyledPageSizeSelect>
      <StyledTableFooterButtonsContainer>
        <StyledTableArrowButton
          disabled={pagination.pageIndex === 1}
          onClick={() => {
            table.previousPage();
            const newSearchParams = new URLSearchParams(searchParams);
            newSearchParams.set("pageIndex", String(pagination.pageIndex - 1));
            setSearchParams(newSearchParams);
          }}>
          <ArrowLeftIcon />
        </StyledTableArrowButton>
        {pagination.pageIndex > 1 && (
          <StyledTableNumberButton
            onClick={() => {
              table.setPageIndex(1);
              //searchParams.set();
              const newSearchParams = new URLSearchParams(searchParams);
              newSearchParams.set("pageIndex", String(1));
              setSearchParams(newSearchParams);
            }}>
            1
          </StyledTableNumberButton>
        )}
        {table.getCanPreviousPage() && pagination.pageIndex > 2 && (
          <StyledTableNumberButton
            onClick={() => {
              table.previousPage();
              const newSearchParams = new URLSearchParams(searchParams);
              newSearchParams.set(
                "pageIndex",
                String(pagination.pageIndex - 1)
              );
              setSearchParams(newSearchParams);
            }}>
            {pagination.pageIndex - 1}
          </StyledTableNumberButton>
        )}
        <StyledTableNumberButton active>
          {pagination.pageIndex}
        </StyledTableNumberButton>
        {table.getCanNextPage() &&
          pagination.pageIndex + 1 < table.getPageCount() && (
            <StyledTableNumberButton
              onClick={() => {
                table.nextPage();
                setSearchParams({
                  ...searchParams,
                  pageIndex: String(pagination.pageIndex + 1),
                });
              }}>
              {pagination.pageIndex + 1}
            </StyledTableNumberButton>
          )}
        {pagination.pageIndex + 2 < table.getPageCount() && (
          <StyledTableNumberButton
            onClick={() => {
              table.setPagination({
                ...pagination,
                pageIndex: pagination.pageIndex + 2,
              });
              const newSearchParams = new URLSearchParams(searchParams);
              newSearchParams.set(
                "pageIndex",
                String(pagination.pageIndex + 2)
              );
              setSearchParams(newSearchParams);
            }}>
            {pagination.pageIndex + 2}
          </StyledTableNumberButton>
        )}
        {pagination.pageIndex !== table.getPageCount() && (
          <StyledTableNumberButton
            onClick={() => {
              table.setPagination({
                ...pagination,
                pageIndex: table.getPageCount(),
              });
              const newSearchParams = new URLSearchParams(searchParams);
              newSearchParams.set(
                "pageIndex",
                String(pagination.pageIndex + 1)
              );
              setSearchParams(newSearchParams);
            }}>
            {pagination.pageIndex + 1}
          </StyledTableNumberButton>
        )}
        <StyledTableArrowButton
          disabled={!customGetCanNextPage()}
          onClick={() => {
            table.setPagination({
              ...pagination,
              pageIndex: pagination.pageIndex + 1,
            });
            const newSearchParams = new URLSearchParams(searchParams);
            newSearchParams.set("pageIndex", String(pagination.pageIndex + 1));
            setSearchParams(newSearchParams);
          }}>
          <ArrowRightIcon />
        </StyledTableArrowButton>
      </StyledTableFooterButtonsContainer>
    </StyledTableFooterContainer>
  );
};

export default AnimalCardsTableFooter;

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
import { useSearchParams } from "react-router-dom";

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
          setSearchParams({
            ...searchParams,
            pageSize: String(e.target.value),
          });
        }}>
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
          <StyledTableNumberButton
            onClick={() => {
              table.setPageIndex(1);
              //searchParams.set();
              setSearchParams({
                ...searchParams,
                pageSize: String(1),
              });
            }}>
            1
          </StyledTableNumberButton>
        )}
        {table.getCanPreviousPage() && pagination.pageIndex > 2 && (
          <StyledTableNumberButton
            onClick={() => {
              table.previousPage();
              setSearchParams({
                ...searchParams,
                pageSize: String(pagination.pageIndex - 1),
              });
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
              setSearchParams({
                ...searchParams,
                pageIndex: String(pagination.pageIndex + 2),
              });
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
            }}>
            {table.getPageCount()}
          </StyledTableNumberButton>
        )}
        <StyledTableArrowButton
          disabled={!customGetCanNextPage()}
          onClick={() => {
            table.setPagination({
              ...pagination,
              pageIndex: pagination.pageIndex + 1,
            });
            setSearchParams((prev) => {
              return {
                tags: [
                  ...prev.getAll("tags"),
                  String(pagination.pageIndex + 1),
                ],
              };
            });
          }}>
          <ArrowRightIcon />
        </StyledTableArrowButton>
      </StyledTableFooterButtonsContainer>
    </StyledTableFooterContainer>
  );
};

export default AnimalCardsTableFooter;

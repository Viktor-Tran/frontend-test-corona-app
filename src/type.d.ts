import { React } from 'react';
export interface Country {
    Country: string,
    ID: string,
    CountryCode: string,
    Date: string,
    Slug: string,
    NewConfirmed: number,
    NewDeaths: number,
    NewRecovered: number,
    Premium: object,
    TotalConfirmed: number,
    TotalDeaths: number,
    TotalRecovered: number
}
export interface RestCountries {
    [key: string]: string,
    population: number,
    name: { common?: string },
    flags: { png?: string },
}

export interface Error {
    message: string
}

export interface Pagination {
    listPerPage: number,
    totalList: number,
    activePage: number,
    handleChangePage: (number: number) => void
}

export interface TableBodyProps {
    listItem: Array<Country>,
    handleShowDetail: (item: Country) => void
}

export interface TableHeadProps {
    handleSort: (name: string) => void
}
export interface Pagination {
    listPerPage: number,
    totalList: number,
    activePage: number,
    handleChangePage: (number: number) => void
}

export interface TableBodyProps {
    listItem: Array<Country>,
}

export interface TableHeadProps {
    handleSort: (name: string) => void
}

export interface ModalProps {
    countryCode: string,
    setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export interface hookSortListProps {
    currentList: Array<Country>,
    setCurrentList: React.Dispatch<React.SetStateAction<Array<Country>>>
}
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
}

export interface TableHeadProps {
    handleSort: (name: string) => void
}
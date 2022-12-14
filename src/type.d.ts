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
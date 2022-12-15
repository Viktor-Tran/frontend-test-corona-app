import { useEffect, useState } from "react"
import { COUNTRY_PER_PAGE } from "../constant"
import Summary from "../services/summary"
import { Country } from "../type"
import useSortList from "./useSortList"

export default function usePagination() {
    const [countries, setCountries] = useState<Array<Country>>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [caching, setCaching] = useState<string>('')
    const [currentList, setCurrentList] = useState<Array<Country>>([])

    const [currentPage, setCurrentPage] = useState<number>(1)
    const { handleSort } = useSortList({ currentList, setCurrentList })

    useEffect(() => {
        setLoading(true)
        Summary.getDailyCase()
            .then((res) => {
                const { Countries, Message } = res.data
                if (Message.includes('Caching in progress')) {
                    setCaching(Message)
                }
                if (Countries && Countries.length > 0) {

                    setCountries(Countries)
                    setLoading(false)
                }
            }).catch(e => {
                setLoading(true)
            })
    }, [])

    useEffect(() => {
        const lastListCountries = currentPage * COUNTRY_PER_PAGE
        const firstListCountries = lastListCountries - COUNTRY_PER_PAGE;
        const currentListPage = countries.slice(firstListCountries, lastListCountries)
        setCurrentList(currentListPage)
    }, [currentPage, countries])

    const handleChangePage = (pageNumber: number) => setCurrentPage(pageNumber)

    return { currentList, currentPage, handleChangePage, loading, caching, countries, handleSort }
};

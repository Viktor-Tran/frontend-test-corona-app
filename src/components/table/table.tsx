import { useEffect, useState } from 'react'
import { Country } from '../../type'

import Summary from '../../services/summary'
import Loading from '../loading'
import CustomError from '../customError'
import CustomPagination from '../customPagination'

import './_table.scss'
import TableBody from './tableBody'
import TableHead from './tableHead'
import { COUNTRY_PER_PAGE } from '../../constant'
import Modal from '../modal'
export default function Table() {
    const [countries, setCountries] = useState<Array<Country>>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [caching, setCaching] = useState<string>('')
    const [currentList, setCurrentList] = useState<Array<Country>>([])

    const [currentPage, setCurrentPage] = useState<number>(1)

    const [isShowModal, setIsShowModal] = useState<boolean>(false)
    const [countryCode, setCountryCode] = useState<string>('')

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

    const handleSort = (name: string) => {
        if (name && name !== '') {
            const sorted: Array<Country> = [...currentList].sort((a, b) => {
                switch (name) {
                    case 'recovered':
                        return a.NewRecovered - b.NewRecovered
                    case 'confirmed':
                        return b.NewConfirmed - a.NewConfirmed
                    default:
                        return b.NewDeaths - a.NewDeaths
                }
            })
            setCurrentList(sorted)
        }
    }

    const handleShowDetails = (item: Country) => {
        setIsShowModal(true)
        setCountryCode(item.CountryCode)
    }

    if (loading && caching.length === 0) return <Loading />

    return (
        <>
            {isShowModal && <Modal countryCode={countryCode} setIsShowModal={setIsShowModal} />}
            {
                caching.length > 0 ? <CustomError message={caching} /> : <>
                    <table className='fixed'>
                        <thead>
                            <tr>
                                {
                                    <TableHead handleSort={handleSort} />
                                }
                            </tr>
                        </thead>
                        {
                            countries && countries.length > 0 && <TableBody listItem={currentList} handleShowDetail={handleShowDetails} />
                        }
                    </table>
                    <CustomPagination listPerPage={COUNTRY_PER_PAGE} totalList={countries.length} handleChangePage={handleChangePage} activePage={currentPage} />
                </>
            }
        </>
    )
};

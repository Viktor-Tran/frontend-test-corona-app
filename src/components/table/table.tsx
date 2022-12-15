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
import usePagination from '../../hooks/usePagination'
import useModal from '../../hooks/useModal'
export default function Table() {
    const { currentList, currentPage, handleChangePage, loading, caching, countries, handleSort } = usePagination()

    const { handleShowDetails, countryCode, setIsShowModal, isShowModal } = useModal()

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

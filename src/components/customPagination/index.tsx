import { Pagination } from "../../type";

import './_pagination.scss'

export default function CustomPagination({ listPerPage, totalList, handleChangePage, activePage }: Pagination) {
    const pageOfNumber: Array<number> = []

    for (let i = 1; i < Math.ceil(totalList / listPerPage); i++) {
        pageOfNumber.push(i)
    }

    return (
        <nav>
            <ul className="pagination">
                {
                    pageOfNumber.map(number => (
                        <li key={number} className="pagination-item">
                            <a href="#" className={activePage === number ? 'active' : ''} onClick={() => handleChangePage(number)}>{number}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
};

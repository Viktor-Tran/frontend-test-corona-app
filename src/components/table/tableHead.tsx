import { useState } from "react";
import { TABLE_HEAD } from "../../constant";
import { TableHeadProps } from "../../type";

import { BiUpArrow, BiDownArrow } from 'react-icons/bi'


export default function TableHead({ handleSort }: TableHeadProps) {
    const [showIcon, setShowIcon] = useState<number>(-1)
    const [showName, setShowName] = useState<string>('')

    const handleSortTable = (name: string, index: number) => {
        handleSort(name)
        setShowIcon(index)
        setShowName(name)
    }

    return (
        <>
            {TABLE_HEAD.map(({ name, label }, index) => {
                return (
                    <th key={name} className='tableHead' onClick={() => handleSortTable(name, index)}>
                        <div className="tableHead__link">
                            {label}
                            {
                                index === showIcon && showName === name && index !== 0
                                    ? showName.includes('recovered')
                                        ? <BiDownArrow />
                                        : <BiUpArrow />
                                    : ''
                            }
                        </div>
                    </th>
                )
            })}
        </>
    )
};

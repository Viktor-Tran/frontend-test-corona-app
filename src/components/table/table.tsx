import { useEffect, useState } from 'react'
import { Country } from '../../type'

import Summary from '../../services/summary'
import Loading from '../loading/loading'
import CustomError from '../CustomError/error'

import './_table.scss'
export default function Table() {

    const [countries, setCountries] = useState<Array<Country>>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [caching, setCaching] = useState<string>('')

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


    if (loading && caching.length === 0) return <Loading />

    return (
        <>
            {caching.length > 0 ? <CustomError message={caching} /> : <table className='fixed'>
                <thead>
                    <tr>
                        <th>Country Name</th>
                        <th>Recovered</th>
                        <th>Confirmed</th>
                        <th>Deaths</th>
                    </tr>
                </thead>
                {
                    countries && countries.length > 0 ? countries.map((country, idx) => {
                        return (
                            <tbody key={idx}>
                                <tr>
                                    <td>{country.Country}</td>
                                    <td>{country.NewRecovered}</td>
                                    <td>{country.NewConfirmed}</td>
                                    <td>{country.NewDeaths}</td>
                                </tr>
                            </tbody>
                        )
                    }) : null
                }
            </table>}
        </>
    )
};

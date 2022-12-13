import { useEffect, useState } from 'react'
import '../scss/components/table.scss'
import Summary from '../services/summary'
import { Country } from '../type'
export default function Table() {

    const [countries, setCountries] = useState<Array<Country>>([])

    useEffect(() => {
        Summary.getDailyCase().then((res) => {
            const { Countries } = res.data
            setCountries(Countries)
        })
    }, [])

    return (
        <table className='fixed'>
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
        </table>
    )
};

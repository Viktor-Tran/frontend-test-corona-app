import { useEffect, useState } from 'react'
import useModal from '../../hooks/useModal'
import Summary from '../../services/summary'
import { ModalProps, RestCountries } from '../../type'
import Loading from '../loading'
import './_modal.scss'

export default function Modal({ countryCode, setIsShowModal }: ModalProps) {
    const [restCountries, setRestCountries] = useState<Array<RestCountries>>([])
    const [loading, setLoading] = useState<boolean>(false)
    useEffect(() => {
        setLoading(true)
        Summary.getDetailCountry(countryCode.length > 0 ? countryCode : '').then(res => {
            setLoading(false)
            setRestCountries(res.data)
        })
    }, [])

    const handleCloseModal = () => setIsShowModal(false)

    if (loading) return <Loading />

    return (
        <section className="modal">
            {
                restCountries.map((item, index) => {
                    return (
                        <>
                            <section className='modal-content' key={index}>
                                <button className='modal-content__btnClose' onClick={handleCloseModal}>X</button>
                                <section className='modal-content__name'>
                                    <h2>{item.name.common}</h2>
                                </section>
                                <section className='modal-content__flag'>
                                    <img src={item.flags.png} alt='' loading='lazy' />
                                </section>
                                <section className='modal-content__info'>
                                    <section className='modal-content__population general'>
                                        <h3>Population:</h3>
                                        <span>{item.population}</span>
                                    </section>
                                    <section className='modal-content__capital general'>
                                        <h3>Capital:</h3>
                                        <span>{item.capital}</span>
                                    </section>
                                    <section className='modal-content__region general'>
                                        <h3>Region:</h3>
                                        <span>{item.region}</span>
                                    </section>
                                    <section className='modal-content__subRegion general'>
                                        <h3>Sub-Region:</h3>
                                        <span>{item.subregion}</span>
                                    </section>
                                </section>
                                <section className='modal-content__btn'>
                                    <button className='modal-content__btnCancel' onClick={handleCloseModal}>Cancel</button>
                                </section>
                            </section>
                        </>
                    )
                })
            }
        </section>
    )
};

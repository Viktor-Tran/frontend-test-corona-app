import { useState } from "react"
import { Country } from "../type"

export default function useModal() {
    const [isShowModal, setIsShowModal] = useState<boolean>(false)
    const [countryCode, setCountryCode] = useState<string>('')

    const handleShowDetails = (item: Country) => {
        setIsShowModal(true)
        setCountryCode(item.CountryCode)
    }



    return { handleShowDetails, countryCode, setIsShowModal, isShowModal }
};

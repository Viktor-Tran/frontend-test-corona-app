import { useEffect, useState } from "react";
import { useInterval } from "../../hooks/useInterval";
import { Error } from "../../type";
import Loading from "../loading";
import './_error.scss'

export default function CustomError({ message }: Error) {
    const [countDown, setCountDown] = useState<number>(5)

    useInterval(() => {
        setCountDown(countDown - 1)
    }, 1000)

    useEffect(() => {
        if (countDown === 0) {
            window.location.reload()
        }
    }, [countDown])

    return (
        <>
            <Loading />
            <h2 className='error'>Something went wrong: {message}</h2>
            <h4 className='error'>The application going to reload automatically after {countDown}s</h4>
        </>
    )
};

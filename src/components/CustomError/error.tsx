import { useEffect, useState } from "react";
import { Error } from "../../type";
import Loading from "../loading/loading";

export default function CustomError({ message }: Error) {
    const [countDown, setCountDown] = useState<number>(5000)

    useEffect(() => {
        if (message && message.length > 0) {
            setTimeout(() => {
                setCountDown(prev => prev - 1000)
            }, countDown);
        }
    }, [])

    useEffect(() => {
        if (countDown === 0) {
            window.location.reload()
        }
    }, [countDown])
    return (
        <>
            <Loading />
            <h2 className='error'>{message}</h2>
            <h3 className='error'>The application going to reload automatically after {countDown}ms</h3>
        </>
    )
};

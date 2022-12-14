import { useEffect, useRef } from "react";

export function useInterval(callback: Function, delay: number) {
    const callBackFunc = useRef<Function>();

    useEffect(() => {
        callBackFunc.current = callback;
    }, [callback]);

    useEffect(() => {
        let id = setInterval(() => {
            if (callBackFunc && callBackFunc.current)
                callBackFunc.current();
        }, delay);
        return () => clearInterval(id);
    }, [delay]);
}
import axios from "axios";
import { useCallback, useState } from "react";

const HOME_API_BASE_URL = "http://localhost:8080//ai/simple";

export const useSpringAi = () => {

    const [answer, setAnswer] = useState('');

    const sendAction = useCallback((message: String) => {
        axios.post(HOME_API_BASE_URL , message, { withCredentials: true, headers: { 'Content-Type': 'application/json' } })
            .then((res) => {
                setAnswer(res.data.answer)
            })
            .catch((err) => {
                console.error(err)
            })
    }, [])

    return {sendAction, answer}
}
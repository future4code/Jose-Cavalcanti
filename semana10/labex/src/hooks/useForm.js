import { useState } from "react";

const useForm = (initialValue) => {
    const [form, setForm] = useState(initialValue)

    const onChange = (event) => {
        const {name, value } = event.target;
        setForm({...form, [name]: value})
    }

    const cleanFields = () => {
        setForm(initialValue)
    }
    return [form, onChange, cleanFields]
}

export default useForm
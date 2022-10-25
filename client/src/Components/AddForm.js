import React from 'react'
import { useState } from 'react'
import FormInput from './FormInput'
import { Controller, useForm } from 'react-hook-form'
import moment from 'moment'
import { url } from './serverUrl'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function AddForm() {

    const {
        handleSubmit,
        watch,
        control,
        formState: { errors }
    } = useForm();

    const [count, setCount] = useState([new Date()])


    const formStyle = {
        width: "75vw",
    }

    const imageStyle = {
        width: "10vh",
        margin: "20px auto",
        cursor: "pointer"
    }

    const handleClick = () => {
        setCount([...count, new Date()])
    }

    const remove = (id) => {
        setCount(count.filter((i) => i !== id))

    }

    const [date, setDate] = useState(moment().toDate())

    return (
        <form action={url.url + "add"} method="post" style={formStyle} className='mx-auto mt-5'>

            <Controller
                control={control}
                name="dateInput"
                render={({ field }) => (
                    <DatePicker
                        onChange={(date) => setDate(date)}
                        selected={date}
                    />
                )}
            />

            <input type="hidden" name="date" value={date} />

            {count.map((id) => {
                return <FormInput key={id} id={id} remove={remove} />
            })}

            <div className="row">
                <img className='btn' onClick={handleClick} style={imageStyle} src="https://i.postimg.cc/SjbjdbDx/png-clipart-first-aid-hospital-clinic-medicine-physician-health-red-cross-text-logo-thumbnail-remove.png" alt="" />
            </div>

            <div className="row">
                <button type="submit" className="col-1 btn btn-danger mx-auto">Save</button>
            </div>

        </form>
    )
}

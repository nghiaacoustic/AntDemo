import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import "./styles.css";

export default function ReactHookForm() {

    const FormValues = {
        firstName: '',
        lastName: '',
        age: null,
        gender: '',
        developer: ''
    }

    const { register, handleSubmit, formState: { errors }
    } = useForm(FormValues);
    const onSubmit = (data) => {
        if (errors.length !== -1) {
            return Swal.fire({
                title: 'Great! Now your infomation is:',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                },
                html:
                    `<div>Full name: ${data.firstName + ' ' + data.lastName}</div>` +
                    `<div>Age: ${data.age} years old</div>` +
                    `<div>Gender: ${data.gender}</div>` +
                    `<div>${data.developer ? 'You are developer' : 'You are not developer'}</div>`,

            })
        }
    };
    console.log('errors', errors)

    return (
        <div className='container'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor='firstName'>First name</label>
                <input {...register("firstName", { required: true, maxLength: 20 })} id='firstName' />
                {errors.firstName && <p>{errors.firstName.message}</p>}

                <label htmlFor='lastName'>Last name</label>
                <input {...register("lastName", { required: true, maxLength: 10 })} id='lastName' />
                {errors.lastName && <p>{errors.lastName.message}</p>}

                <label htmlFor='age'>Age</label>
                <input {...register("age", { required: true, max: 150, valueAsNumber: true })} id='age' />
                {errors.age && <p>{errors.age.message}</p>}
                <select {...register("gender")} id='gender'>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>

                <label htmlFor='developer'>Are you a developer</label>
                <input {...register("developer")} type='checkbox' value='yes' />

                <input type="submit" />
            </form>
        </div>
    );
}
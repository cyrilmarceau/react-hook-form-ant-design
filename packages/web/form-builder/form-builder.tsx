'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
enum GenderEnum {
    female = 'female',
    male = 'male',
    other = 'other',
}

interface IFormInput {
    firstName: string;
    gender: GenderEnum;
}

const FormBuilder = () => {
    const { handleSubmit, watch, register, getValues } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} onChange={(e) => console.log(e)}>
                <label>First Name</label>
                <input {...register('firstName')} />
                <label>Gender Selection</label>
                <select {...register('gender')}>
                    <option value='female'>female</option>
                    <option value='male'>male</option>
                    <option value='other'>other</option>
                </select>
                <input type='submit' />
            </form>
        </>
    );
};
export default FormBuilder;

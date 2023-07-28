'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { FormBuilder } from 'web';

enum GenderEnum {
    female = 'female',
    male = 'male',
    other = 'other',
}

interface IFormInput {
    firstName: string;
    gender: GenderEnum;
}

const TestForm = () => {
    return <FormBuilder />;
};
export default TestForm;

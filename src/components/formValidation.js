import * as yup from 'yup'

export const basicSchema = yup.object().shape({
    firstname: yup.string().required()
})
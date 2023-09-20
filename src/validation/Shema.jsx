import * as yup from 'yup';

export const ArticleCreateSchema = yup.object().shape({
    title: yup.string().min(3).required(),
    body: yup.string().min(12).required()
})
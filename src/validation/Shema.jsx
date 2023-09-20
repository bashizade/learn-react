import * as yup from 'yup';

export const ArticleCreateSchema = yup.object().shape({
    title: yup.string('حتما باید مقادیر متنی وارد کنید').min(3,'حداقل کاراکتر مجاز 3').required('فیلد عنوان اجباری می باشد'),
    body: yup.string('حتما باید مقادیر متنی وارد کنید').min(5,'حداقل کاراکتر مجاز 5').required('فیلد توضیحات اجباری می باشد')
})
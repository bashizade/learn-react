import { useFormik } from "formik"
import { TextInput, TextareaInput } from "../../components/Form"
import Button from "../../components/Button"
import { ArticleCreateSchema } from "../../validation/Shema"


const ArticleCreate = () => {
  const form = useFormik({
    initialValues: {
      title: "",
      body: ""
    },
    onSubmit: values => {
      console.log(values)
    },

    validationSchema: ArticleCreateSchema,
    
  })
  return (
    <div className="flex flex-col items-center justify-center pt-12">
      <h1 className="mb-5 text-xl font-semibold">افزودن نوشته</h1>
      <form onSubmit={form.handleSubmit} className="flex flex-col space-y-5 w-8/12">
        <div className="flex flex-col ">
          <TextInput name="title" placeholder="تلسکوپ..." value={form.values.title} onBlur={form.handleBlur} onChange={form.handleChange} />
          <span className="text-xs text-red-500">{form.errors.title && form.touched.title && form.errors.title}</span>
        </div>
        <div className="flex flex-col ">
          <TextareaInput name="body" placeholder="توضیحات تلسکوپ..." value={form.values.body} onBlur={form.handleBlur} onChange={form.handleChange} />
          <span className="text-xs text-red-500">{form.errors.body && form.touched.body && form.errors.body}</span>
        </div>
        <Button type="submit" color="neutral">افزودن نوشته</Button>
      </form>
    </div>
  )
}

export default ArticleCreate
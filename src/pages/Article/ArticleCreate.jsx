import { useFormik } from "formik"
import { TextInput, TextareaInput } from "../../components/Form"
import Button from "../../components/Button"

const ArticleCreate = () => {
  const form = useFormik({
    initialValues: {
      title: "",
      body: ""
    },
    onSubmit: values => {
      console.log(values)
    },
    validate: values => {
      let errors = {};
      if (values.title === "") {
        errors.title = "عنوان نوشته اجباری می باشد"
      } else if (values.title.length < 3) {
        errors.title = "عنوان نوشته باید بیش از 3 کاراکتر باشد"
      }
      if (values.body === "") {
        errors.body = "بدنه نوشته اجباری می باشد"
      } else if (values.body.length < 3) {
        errors.body = "بدنه نوشته باید بیش از 3 کاراکتر باشد"
      }
      return errors;
    }
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
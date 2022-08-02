import { object, string, array, date, number } from 'yup'

const YupMessages = {
  required: (field: string) => `${field}ს ველი სავალდებულოა`,
  short: (field: string) => `${field} ძალიან მოკლეა`,
  small: (field: string) => `${field} ძალიან ცოტაა`,
  format: (field: string, format: string) => `${field} უნდა იყოს "${format}"-ის`,
  length: (field: string, length: number) => `${field} უნდა იყოს ${length} სიმბოლო`,
  typeError: (field: string, type: string) => `${field} უნდა იყოს ${type}`,
}

const validationSchema = object().shape({
  fullName: string()
    .required(YupMessages.required('სახელი'))
    .min(2, YupMessages.short('სახელი'))
    .matches(/^[a-zA-Zა-ჰ]+( [a-zA-Zა-ჰ]+)+$/, 'სახელი და გვარი უნდა იყოს ერთად'),
  address: string()
    .required(YupMessages.required('მისამართი'))
    .min(2, YupMessages.short('მისამართი')),
  personalNumber: string()
    .required(YupMessages.required('პირადი ნომერი'))
    .length(11, YupMessages.length('პირადი ნომერი', 11)),
  transactions: array().of(
    object().shape({
      date: date().required(YupMessages.required('თარიღი')),
      amount: number()
        .required(YupMessages.required('დივიდენდი'))
        .typeError(YupMessages.typeError('დივიდენდი', 'რიცხვი'))
        .min(10, YupMessages.small('დივიდენდი')),
    }),
  ),
})

export default validationSchema

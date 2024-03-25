import * as yup from "yup"



export const userSchema=yup.object().shape({
    name:yup.string().required().min(5),
    email:yup.string().email().required(),
    message:yup.string().required(),
})
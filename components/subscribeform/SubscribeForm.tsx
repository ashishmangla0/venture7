'use client'
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../input/Input";

interface IFormInputs {
  yourEmail: string
  lastName: string
}

const onSubmit: SubmitHandler<IFormInputs> = data => console.log(data);

export default function SubscribeForm() {
  const { register, formState: { errors }, handleSubmit } = useForm<IFormInputs>();
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <Input
      id="yourEmail"
      type={"text"}
       label="Your Email"
       ariaInvalid={errors?.yourEmail ? true: false}
       register={register('yourEmail',{ 
        required: "Username is required", 
        pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address",
      }, })}
      
       />
      {errors.yourEmail && <p>{errors.yourEmail.message}</p>}

      <Input 
        id="lastname"
        type={"text"} 
        label="lastName" 
        register={register('lastName',{ required: "Username is required" })}
        />
      {errors.lastName && "Last name is required"}

      {/* <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} /> */}


      <input type="submit" />
    </form>
  );
}
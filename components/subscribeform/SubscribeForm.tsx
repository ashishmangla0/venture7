'use client'
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../input/Input";
import Button from "../button/Button";
import Checkbox from "../checkbox/Checkbox";

import subscribeFormStyle from './subscribeform.module.scss';

interface IFormInputs {
  yourEmail: string
  lastName: string,
  aaaa?: boolean
}

const onSubmit: SubmitHandler<IFormInputs> = data => console.log(data);

export default function SubscribeForm() {
  const { register, formState: { errors }, handleSubmit } = useForm<IFormInputs>();

  return (
    <section className={subscribeFormStyle.subscribeform}>
      <div className="container">
        <div className={subscribeFormStyle.subscribeform_wrap}>
          <h2>
          We live your business
          </h2>
          <p>
          We understand your business and then become part of it for the success. Get in touch and be the leader of a success story.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-12">

            <Input
              inputWrapperClasses="col-span-5"
              id="yourEmail"
              type={"text"}
              label="Your Email"
              ariaInvalid={errors?.yourEmail ? true : false}
              register={register('yourEmail', {
                required: "Username is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}

            />
            {errors.yourEmail && <p>{errors.yourEmail.message}</p>}

            <Input
              inputWrapperClasses="col-span-5"
              id="lastname"
              type={"text"}
              label="lastName"
              register={register('lastName', { required: "Username is required" })}
            />
            {errors.lastName && "Last name is required"}
            <div className="col-span-2">
              <label> a</label>
              <Button type="submit" buttonClass="" >
              
              Submit
            </Button>
            </div>
            

            {/* <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} /> */}
            <Checkbox label="subscribeValue" register={register('aaaa')} />


            
          </form>
        </div>



      </div>

    </section>

  );
}
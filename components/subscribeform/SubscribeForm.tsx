 'use client'
// import { useForm } from "react-hook-form";
 import Input from "../input/Input";
// const SubscribeForm = () =>{
//     const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
//     const onSubmit = data => console.log(data);
//     return (
//         <section>
//             <div className="container">
//             Form subscribe form

//             <form onSubmit={handleSubmit(onSubmit)}>
//       <Input label="First Name" register={register} required />
     
//       <input type="submit" />
//     </form>


//             <form 
//             //onSubmit={handleSubmit(onSubmit)}
//             >
//                 <Input type="text"/>
           
//             {/* <input  {...register("example")} />
            

//             {errors.exampleRequired && <span>This field is required</span>}

//             <input type="submit" /> */}
//             </form>

//             </div>
       
//         </section>
//     )
// }
// export default SubscribeForm


import React from "react";
import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form";

interface IFormValues {
  "First Name": string;
  Age: number;
}





// you can use React.forwardRef to pass the ref too
const Select = React.forwardRef<
  HTMLSelectElement,
  { label: string } & ReturnType<UseFormRegister<IFormValues>>
>(({ onChange, onBlur, name, label }, ref) => (
  <>
    <label>{label}</label>
    <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
  </>
));

const SubscribeForm = () =>{
  const { register, handleSubmit } = useForm<IFormValues>();
  const onSubmit: SubmitHandler<IFormValues> = data => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="First Name" register={register} type="text" />
      <Select label="Age" {...register("Age")} />
      <input type="submit" />
    </form>
  );
};
export default SubscribeForm
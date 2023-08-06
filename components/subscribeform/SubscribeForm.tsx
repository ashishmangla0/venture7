 'use client'
 import Input from "../input/Input";
import { SubmitHandler, useForm } from "react-hook-form";
interface IFormValues {
  "First Name": string;
}





// you can use React.forwardRef to pass the ref too
// const Select = React.forwardRef<
//   HTMLSelectElement,
//   { label: string } & ReturnType<UseFormRegister<IFormValues>>
// >(({ onChange, onBlur, name, label }, ref) => (
//   <>
//     <label>{label}</label>
//     <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
//       <option value="20">20</option>
//       <option value="30">30</option>
//     </select>
//   </>
// ));

const SubscribeForm = () =>{
  const { register, handleSubmit } = useForm<IFormValues>();
  const onSubmit: SubmitHandler<IFormValues> = data => {
   

    console.log(JSON.stringify(data));
    
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="First Name" register={register} type="text" />
      {/* <Select label="Age" {...register("Age")} /> */}
      <input type="submit" />
    </form>
  );
};
export default SubscribeForm
import { InputProps } from "@/types";
import inputStyle from './input.module.scss';
import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form";

const Input = (props: InputProps) => {
    const {
        type,
        inputClass,
        placeholder,
        value,
        name,
        disabled,
        onChange,
        label,
        id,
       register,
       required,
       ...resProps
    } = props;

    return (
        <>
            {label && <label htmlFor={id}>{label}</label>}
            <input
                id={id}
                type={type}
                className={`${inputStyle.input} ${inputClass}`}
                placeholder={placeholder}
                value={value}
                name={name}
                disabled={disabled}
                onChange={onChange}
                {...register}
                {...resProps}
                
                 />
        </>
    )

}

export default Input

function register(label: string | undefined, arg1: { required: boolean | undefined; }): import("react").JSX.IntrinsicAttributes & import("react").ClassAttributes<HTMLInputElement> & import("react").InputHTMLAttributes<HTMLInputElement> {
    throw new Error("Function not implemented.");
}

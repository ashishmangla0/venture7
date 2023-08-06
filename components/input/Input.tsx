import { InputProps } from "@/types";
import inputStyle from './input.module.scss';

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
        required,
        register,
        ...resProps
    } = props;

    return (
        <>
            {label && <label htmlFor={id}>{label}</label>}
            <input
                required={required}
                id={id}
                type={type}
                className={`${inputStyle.input} ${inputClass}`}
                placeholder={placeholder}
                value={value}
                name={name}
                disabled={disabled}
                onChange={onChange}
                {...register(label, { required })}
                {...resProps} />
        </>
    )

}

Input.defaultProps = {
   type: "text"
  }


export default Input
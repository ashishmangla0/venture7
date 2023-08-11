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
        register,
        required,
        ariaInvalid,
        lableClass,
        ...resProps
    } = props;

    return (
        <div>
            {label && <label htmlFor={id} className={`${inputStyle.label} ${lableClass}`}>{label}</label>}
            <input
                aria-invalid={ariaInvalid}
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
        </div>
    )

}

export default Input


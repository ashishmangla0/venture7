import { CheckboxProps } from '@/types'
const Checkbox = (props: CheckboxProps) => {
    const { label, id, value, disabled, ariaLabel, register, ...resProps } = props
    return (
        <div className="form-check form-check-inline">
            <input
                className="form-check-input"
                type="checkbox"
                id={id}
                value={value}
                disabled={disabled}
                aria-label={ariaLabel}
                {...register}
                {...resProps}
            />
            {label && <label className="form-check-label" htmlFor={id}>{label}</label>}
        </div>
    )

}

export default Checkbox
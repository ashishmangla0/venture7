import { ButtonProps } from "@/types";
const Button = (props:ButtonProps) => {
    const { children, buttonClass,handleOnClick,type='button', ...restProps } = props;
    return (
        <button 
            className={`button ${buttonClass}`} 
            onClick={handleOnClick}
            type={type}
            {...restProps}
        >
            {children}
        </button>
    );
}

export default Button
import { type } from "os";
import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form";

type CardCaseProps = {
  cardWrapperClass?: string;
  title ?: string,
  description ?: string | string[],
  imageSrc ?: string,
  readMoreLink ?: string,
  linkText ?: string
};
type LogoProps = {
  logoClass?: string,
  height?: number,
  width?: number
};
type SkipToMainProps = {
  sectionId: string,
  content: string
  customClass?: string
};

type FooterSubMenuItemProps = {
  title?: string;
  link: string;
};

type FooterItemProps = {
  title?: string,
  submenu?: FooterSubMenuItemProps[],
  wrapperClasses?: string,
  listClassName?: string

};

type SocialProps = {
  title?: string,
  titleClass?: string,
  linkClass?: string,
  linkWrapper?: string
};


type InputProps = {
  type ?: 'text' | 'number' | 'email' | 'password' | 'submit' | 'tel',
  placeholder ?: string,
  inputClass ?: string,
  value ?: string | number,
  name ?: string,
  disabled ?: boolean,
  onChange ?: (e: ChangeEvent<HTMLInputElement>) => void,
  label ?: string,
  id ?: string,
  required ?: boolean,
  register ?: UseFormRegister;
  ariaInvalid ?: boolean,
  lableClass ?: string,
  inputWrapperClasses ?: string
}

type ButtonProps = {
  type ?: 'button' | 'submit' | 'reset'
  children ?: string | React.ReactNode,
  buttonClass ?: string,
  handleOnClick ?: () => void
}

type CheckboxProps = {
  id ?: string,
  value ?: string,
label ?: string | React.ReactNode,
  disabled ?: boolean,
  ariaLabel ?: string,
  register ?: UseFormRegister;
}


export { 
    CardCaseProps, 
    LogoProps, 
    SkipToMainProps, 
    FooterItemProps, 
    FooterSubMenuItemProps, 
    SocialProps,
    InputProps,
    ButtonProps,
    CheckboxProps
   };
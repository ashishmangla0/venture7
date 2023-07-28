import { type } from "os";


type CardCaseProps = {
    cardWrapperClass ?: string;
  };
  type LogoProps = {
    logoClass ?: string,
    height ?: number, 
    width ?: number
  };
  type SkipToMainProps = {
    sectionId : string,
    content : string
    customClass ?: string
  };

  type FooterSubMenuItemProps = {
    title ?: string;
    link : string;
  };


  type FooterItemProps = {
    title ?: string,
    submenu ?: FooterSubMenuItemProps[],
    wrapperClasses ?: string,
    listClassName ?: string
    
  };


  type SocialProps = {
    title ?: string,
    titleClass ?: string, 
    linkClass ?: string,
    linkWrapper ?: string
   
    
  };
  
  export { CardCaseProps, LogoProps, SkipToMainProps, FooterItemProps, FooterSubMenuItemProps, type SocialProps };
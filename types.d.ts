

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


  interface FooterItemProps  {
    title ?: string,
    submenu? : FooterSubMenuItemProps[]
    
  };
  
  export {CardCaseProps,LogoProps,SkipToMainProps,FooterItemProps,FooterSubMenuItemProps};
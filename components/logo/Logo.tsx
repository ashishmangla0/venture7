import Image from "next/image";
import { LogoProps } from "@/types";
const Logo = (props:LogoProps) => {
    const { logoClass,height, width } = props
    return (
        <Image 
            src={`${process.env.IMG_HOST}w_${width}/h_${height}/v1689257425/venture7/logopng.webp`} 
            alt={'venture7 logo'} 
            height={height}
            width={width}
            className={logoClass} 
            loading='lazy'
            />
    )
}

export default Logo
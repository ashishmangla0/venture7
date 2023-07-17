import Image from "next/image"
import footerStyle from './footer.module.scss'

const Footer = () =>{
return(
    <footer className={footerStyle.footer}>

      

<Image src={`${process.env.IMG_HOST}w_43/v1689574968/venture7/India.svg`} alt="" width={43} height={43}/>
<Image src={`${process.env.IMG_HOST}w_43/v1689574969/venture7/USA.svg`} alt="" width={43} height={43}/>
<Image src={`${process.env.IMG_HOST}w_43/v1689574969/venture7/Singapore.svg`} alt="" width={43} height={43}/>
<Image src={`${process.env.IMG_HOST}w_43/v1689574968/venture7/Australia.svg`} alt="" width={43} height={43}/>




<Image src={`${process.env.IMG_HOST}/v1689579003/venture7/ISO27001-2013.svg`} alt="" width={64} height={64}/>
<Image src={`${process.env.IMG_HOST}v1689579003/venture7/ISO9001-2015.svg`} alt="" width={64} height={64}/>
<Image src={`${process.env.IMG_HOST}v1689579003/venture7/ISO20000-1-2018.svg`} alt="" width={64} height={64}/>
    </footer>
)
}

export default Footer
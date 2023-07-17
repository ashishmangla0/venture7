import Image from "next/image"

const Footer = () =>{
return(
    <footer>

      

<Image src={`${process.env.IMG_HOST}w_43/v1689574968/venture7/India.svg`} alt="" width={43} height={43}/>
<Image src={`${process.env.IMG_HOST}w_43/v1689574969/venture7/USA.svg`} alt="" width={43} height={43}/>
<Image src={`${process.env.IMG_HOST}w_43/v1689574969/venture7/Singapore.svg`} alt="" width={43} height={43}/>
<Image src={`${process.env.IMG_HOST}w_43/v1689574968/venture7/Australia.svg`} alt="" width={43} height={43}/>

    </footer>
)
}

export default Footer
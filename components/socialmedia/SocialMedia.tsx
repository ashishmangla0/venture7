import Image from "next/image";
import Link from "next/link";

import { SocialProps } from "@/types";

const socialLinks = [
    {
        title: 'facebook',
        url: '/v1690461932/venture7/facebook.svg',
        link : 'https://www.facebook.com/Venture7official/'
    },
    {
        title: 'twitter',
        url: '/v1690462070/venture7/twitter.svg', 
        link : 'https://twitter.com/Venture7T'
    },
    {
        title: 'linkedin',
        url: 'v1690462224/venture7/linkedin.svg',
        link : 'https://www.linkedin.com/company/venture7/'
    },
    {
        title: 'youtube',
        url: '/v1690462309/venture7/youtube.svg',
        link : 'https://www.youtube.com/@venture7technologyprivatel563'
    },
    {
        title: 'instagram',
        url: '/v1690462308/venture7/instagram.svg',
        link : 'https://www.instagram.com/venture7official/'
    }
]

const SocialMedia = (props:SocialProps) => {
    const { title, titleClass, linkClass,linkWrapper } = props;
    return (
        <div>
            {title && <h6 className={titleClass}>
                {title}
            </h6>}
            <div className={linkWrapper}>
                {socialLinks?.map((link) => <Link href={link?.link} className={linkClass} key={link.title} aria-label={`click for visit ${link.title}`}>
                    <Image src={`${process.env.IMG_HOST}${link?.url}`} alt="" width={14} height={14} />
                </Link>)}
            </div>
        </div>
    )
}
export default SocialMedia
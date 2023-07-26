import Image from "next/image"
import footerStyle from './footer.module.scss';
import { year } from '@/utils/date';
import Link from "next/link";
import { FooterItemProps, FooterSubMenuItemProps } from "@/types";


const footerList = [
    {
        title: 'services',
        menulinks: [
            {
                title: "Product Engineering Services",
                link: 'product-engineering'
            },
            {
                title: "Product Engineering Services",
                link: 'product-engineering'
            },
            {
                title: "Product Engineering Services",
                link: 'product-engineering'
            },
            {
                title: "Product Engineering Services",
                link: 'product-engineering'
            },
        ]

    },
    {
        title: 'solutions',
        menulinks: [
            {
                title: "Product Engineering Services",
                link: 'product-engineering'
            },
            {
                title: "Product Engineering Services",
                link: 'product-engineering'
            },
            {
                title: "Product Engineering Services",
                link: 'product-engineering'
            },
            {
                title: "Product Engineering Services",
                link: 'product-engineering'
            },
        ]

    },
    {
        title: 'insights',
        menulinks: [
            {
                title: "Blogs",
                link: '/blogs/'
            },
            {
                title: "Case Studies",
                link: '/casestudy/'
            },
            {
                title: "Business Vertical",
                link: '/venture7-research/'
            },
            {
                title: "Business Vertical",
                link: '/expertise/'
            },
            {
                title: "ProdXellence",
                link: '/prodxellence/'
            },
            {
                title: "Webinars",
                link: '/webinar/'
            },
        ]

    },
    {
        title: 'quick links',
        menulinks: [
            {
                title: "PHP Laravel Applications",
                link: 'product-engineering'
            },
            {
                title: "Tableau for BI & Reporting",
                link: 'product-engineering'
            },
            {
                title: "Mobile App Automation",
                link: 'product-engineering'
            },
            {
                title: "React Native Mobile Apps",
                link: 'product-engineering'
            },
            {
                title: "Power BI Analytics",
                link: 'product-engineering'
            },
            {
                title: "API Testing",
                link: 'product-engineering'
            },
            {
                title: "Dialogflow",
                link: 'product-engineering'
            },
            {
                title: "SSIS for ETL & DWH ",
                link: 'product-engineering'
            },
            {
                title: "Security Testing",
                link: 'product-engineering'
            },
            {
                title: "Microsoft Bot Framework",
                link: 'product-engineering'
            },
            {
                title: "DevOps for Quality",
                link: 'product-engineering'
            },
            {
                title: "JMeter Performance Testing",
                link: 'product-engineering'
            },
            {
                title: "Salesforce",
                link: 'product-engineering'
            },
            {
                title: "RPA - UiPath",
                link: 'product-engineering'
            },
            {
                title: "Cloud & Devops",
                link: 'product-engineering'
            },
            {
                title: "Digital Transformation ",
                link: 'product-engineering'
            },
        ]

    },
]


const FooterItem: React.FC<FooterItemProps> = (props) => {
    const { title, submenu } = props;
    return (
        <div>
            <h6 className={footerStyle.footer_item_title}>
                {title}
            </h6>

            <ul>
                {submenu?.map((menu: FooterSubMenuItemProps, index: number) => (
                    // Specify the type for 'menu' and 'index'
                    <li key={index}>
                        <Link href={menu.link}>{menu.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Footer = () => {
    return (
        <footer className={footerStyle.footer}>
            <div className="container">
                <div>
                    {footerList?.map((item) => <><li>{item?.title}

                        <FooterItem title={item?.title} submenu={item?.menulinks} />
                    </li></>)}
                </div>
                <div className={footerStyle.footer_submenu}>
                    a dsad
                </div>
                <div className={footerStyle.footer_copyright}>{year}</div>
            </div>




            <Image src={`${process.env.IMG_HOST}w_43/v1689574968/venture7/India.svg`} alt="" width={43} height={43} />
            <Image src={`${process.env.IMG_HOST}w_43/v1689574969/venture7/USA.svg`} alt="" width={43} height={43} />
            <Image src={`${process.env.IMG_HOST}w_43/v1689574969/venture7/Singapore.svg`} alt="" width={43} height={43} />
            <Image src={`${process.env.IMG_HOST}w_43/v1689574968/venture7/Australia.svg`} alt="" width={43} height={43} />




            <Image src={`${process.env.IMG_HOST}/v1689579003/venture7/ISO27001-2013.svg`} alt="" width={64} height={64} />
            <Image src={`${process.env.IMG_HOST}v1689579003/venture7/ISO9001-2015.svg`} alt="" width={64} height={64} />
            <Image src={`${process.env.IMG_HOST}v1689579003/venture7/ISO20000-1-2018.svg`} alt="" width={64} height={64} />
        </footer>
    )
}

export default Footer
import Image from "next/image"
import footerStyle from './footer.module.scss';
import { year } from '@/utils/date';
import Link from "next/link";
import { FooterItemProps, FooterSubMenuItemProps } from "@/types";
import { Fragment } from "react";
import SocialMedia from "../socialmedia/SocialMedia";

const footerList = [
    {
        title: 'services',
        menulinks: [
            {
                title: "Product Engineering Services",
                link: '/product-engineering/'
            },
            {
                title: "Quality Engineering Services",
                link: '/quality-engineering/'
            },
            {
                title: "Data Engineering Services",
                link: '/data-engineering/'
            },
            {
                title: "Future of Work",
                link: '/future-of-work/'
            },
        ]

    },
    {
        title: 'solutions',
        menulinks: [
            {
                title: "VReli® Product Suite",
                link: 'https://vreli.com/'
            },
            {
                title: "Venture7® Bots",
                link: '/chatbot/'
            },
            {
                title: "Automation Framework",
                link: '/automated-functional-testing/'
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
                title: "Venture7® Research",
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
                link: '/SaaS-apps-using-laravel/'
            },
            {
                title: "Tableau for BI & Reporting",
                link: '/tableau-for-bi-and-reporting/'
            },
            {
                title: "Mobile App Automation",
                link: '/mobile-application-automation/'
            },
            {
                title: "React Native Mobile Apps",
                link: '/react-native-mobile-apps/'
            },
            {
                title: "Power BI Analytics",
                link: '/power-bi/'
            },
            {
                title: "API Testing",
                link: '/api-testing/'
            },
            {
                title: "Dialogflow",
                link: '/dialogflow/'
            },
            {
                title: "SSIS for ETL & DWH ",
                link: '/ssis/'
            },
            {
                title: "Security Testing",
                link: '/security-testing/'
            },
            {
                title: "Microsoft Bot Framework",
                link: '/microsoft-bot-framework/'
            },
            {
                title: "DevOps for Quality",
                link: '"/devops/'
            },
            {
                title: "JMeter Performance Testing",
                link: '/jmeter-performance-testing/'
            },
            {
                title: "Salesforce",
                link: '/salesforce/'
            },
            {
                title: "RPA - UiPath",
                link: '/uipath/'
            },
            {
                title: "Cloud & Devops",
                link: '/cloud-devops/'
            },
            {
                title: "Digital Transformation ",
                link: '/digital-tranformation/'
            },
        ]

    },
]


const FooterItem: React.FC<FooterItemProps> = (props) => {
    const { title, submenu, wrapperClasses, listClassName } = props;
    return (
        <div className={wrapperClasses}>
            <h6 className={footerStyle.footer_item_title}>
                {title}
            </h6>
            <ul className={listClassName}>
                {submenu?.map((menu: FooterSubMenuItemProps) => (
                    <li key={menu.title}>
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
                <div className="grid grid-1 grid-md-12">
                    <div className="col-span-md-4 col-span-lg-3">
                        <div>
                            <h6 className={footerStyle.footer_item_title}>Global Presence</h6>
                            <div className={footerStyle.footer_flag}>
                                <Image src={`${process.env.IMG_HOST}w_43/v1689574968/venture7/India.svg`} alt="" width={43} height={43} />
                                <Image src={`${process.env.IMG_HOST}w_43/v1689574969/venture7/USA.svg`} alt="" width={43} height={43} />
                                <Image src={`${process.env.IMG_HOST}w_43/v1689574969/venture7/Singapore.svg`} alt="" width={43} height={43} />
                                <Image src={`${process.env.IMG_HOST}w_43/v1689574968/venture7/Australia.svg`} alt="" width={43} height={43} />
                            </div>
                        </div>
                        <hr/>
                        <div>
                            <h6 className={footerStyle.footer_item_title}>Certificates</h6>
                            <div className={footerStyle.footer_certificates}>
                                <Image src={`${process.env.IMG_HOST}/v1689579003/venture7/ISO27001-2013.svg`} alt="" width={64} height={64} />
                                <Image src={`${process.env.IMG_HOST}v1689579003/venture7/ISO9001-2015.svg`} alt="" width={64} height={64} />
                                <Image src={`${process.env.IMG_HOST}v1689579003/venture7/ISO20000-1-2018.svg`} alt="" width={64} height={64} />
                            </div>

                        </div>
                        <hr/>
                        <SocialMedia title="Follow Us" 
                        titleClass={footerStyle.footer_item_title} 
                        linkClass={footerStyle.footer_social_item}
                        linkWrapper={footerStyle.footer_social_wrap}
                        />
                    </div>
                    <div className="col-span-md-8 col-span-lg-9">
                        <div className="grid grid-sm-12">
                            {
                                footerList?.map((item, index) =>
                                    <Fragment key={item?.title}><FooterItem title={item?.title} submenu={item?.menulinks} wrapperClasses={`${index + 1 === footerList.length ? ' col-span-12' : ' col-span-12 col-span-sm-4'}`} listClassName={`${index + 1 === footerList.length ? `grid ${footerStyle.footer_list_last} grid-1 grid-sm-2 grid-xl-3` : 'sadsa'}`} /></Fragment>)
                            }
                        </div>
                    </div>
                </div>
                <div className={footerStyle.footer_submenu}>a dsd a</div>

                <div className={footerStyle.footer_copyright}>
                    © {year} Venture7® Technology Pvt Ltd. All Rights Reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer


import Image from 'next/image'
import cardCaseStyle from './cardcase.module.scss'

import { CardCaseProps } from '@/types'
import Link from 'next/link'

const CardCase = (props: CardCaseProps) => {
    const { cardWrapperClass, title, description,imageSrc,readMoreLink,linkText } = props
    return (
        <article className={`${cardCaseStyle.card} ${cardWrapperClass}`}>
            <div className={`${cardCaseStyle.card__img}`}>
                <Image
                    alt={title || ''}
                    src={imageSrc || ''}
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <div className={`${cardCaseStyle.card__content}`}>
                {title && <h3>
                    {title}
                </h3>}
                {description && <p>
                    {description}
                </p>}
                {readMoreLink && <Link className='button' href={readMoreLink} >{linkText}</Link> }
            </div>
        </article>
    )
}
CardCase.defaultProps = {
    cardWrapperClass: '',
    title: '',
    description: '',
    imageSrc:'',
    readMoreLink:'/',
    linkText: 'Read More'
}
export default CardCase
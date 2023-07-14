

import Image from 'next/image'
import cardCaseStyle from './cardcase.module.scss'

type cardcaseProps = {
    cardWrapperClass: string
}

const CardCase = (props:cardcaseProps) => {
    const { cardWrapperClass="" } = props
    return (
        <article className={`${cardCaseStyle.card} ${cardWrapperClass}`}>
            <div className={`${cardCaseStyle.card__img}`}>
                <Image
                    alt='Mountains'
                    src='/case-1.jpg'
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <div className={`${cardCaseStyle.card__content}`}>
                        <h3>
                            as dfsda sdfasdf sdfasd fsd sdfs<br/>
                        </h3>
                        <p>
                        If you are looking for a random city or town name to spark a location for a book, game, or a script millions.
                        </p>
                        <a href="" className='button'>Read More</a>
            </div>

           
        </article>
    )
}
CardCase.defaultProps = {
    cardWrapperClass: ''
}
export default CardCase
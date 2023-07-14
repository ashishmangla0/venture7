import skipStyle from './skiptomain.module.scss'
import { SkipToMainProps } from '@/types'
const SkipToMain = (props:SkipToMainProps) =>{
    const {sectionId,content,customClass} = props
    return(
        <a href={`#${sectionId}`} className={`${skipStyle.skipnav} ${customClass}`}>
        {content}
        </a>
    )
}


export default SkipToMain
import skipStyle from './skiptomain.module.scss'
const SkipToMain = (props) =>{
    const {sectionId,content,customClass} = props
    return(
        <a href={`#${sectionId}`} className={`${skipStyle.skipnav} ${customClass}`}>
        {content}
        </a>
    )
}


export default SkipToMain
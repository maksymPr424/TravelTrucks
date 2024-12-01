import css from './NotFound.module.css'

export default function NotFound({children}) {
    return <h3 className={css.title}>{children}</h3>
}
import styles from './HeaderLink.module.scss'

interface Props {
    name: string,
    active: boolean,
}

export const HeaderLink =({name, active}:Props)=>{

    return (
        <li className={active?styles.linkActive:styles.link}>
            {name}
        </li>
    )
}
import Link from "next/link"
import styles from '../styles/Navigator.module.css'

export default function Navegador(props) {
    return (
        <Link href={props.destiny} passHref>
            <div className={styles.navigator} style={{
                backgroundColor: props.color ?? 'dodgerblue'
            }}>
                {props.text}
            </div>
        </Link>
    )
}
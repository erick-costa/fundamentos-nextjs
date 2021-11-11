import styles from '../styles/Styled.module.css'
import Link from 'next/link'

export default function Styled() {
    return (
        <div className={styles.purple}>
            <Link href='/'>Voltar</Link>
            <h1>Estilo usando CSS Módulos</h1>
        </div>
    )
}
import styles from '../styles/Styled.module.css'
import Layout from '../components/Layout'

export default function Styled() {
    return (
        <Layout title='Exemplo de CSS Modularizado'>
            <div className={styles.purple}>
                <h1>Estilo usando CSS Módulos</h1>
            </div>
        </Layout>
    )
}
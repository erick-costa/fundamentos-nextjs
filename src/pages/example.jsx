import Header from '../components/Header'
import Layout from '../components/Layout'

export default function Example() {
    return (
        <Layout title='Usando componentes'>
            <Header title='Fundamentos de Next.js & React'/>
            <Header title='Next.js na prática'/>
        </Layout>
    )
}
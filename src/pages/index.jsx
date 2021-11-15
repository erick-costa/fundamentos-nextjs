import Navigator from '../components/Navigator'

export default function Home() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Navigator text='Estiloso' destiny='/styled' color='#9400d3'/>
            <Navigator text='Exemplo' destiny='/example'/>
            <Navigator text='JSX' destiny='/jsx' color='crimson'/>
       </div>
    )
}
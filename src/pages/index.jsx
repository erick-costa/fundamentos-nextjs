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
            <Navigator text='Navegação #01' destiny='/navigation' color='green'/>
            <Navigator text='Navegação #02' destiny='/client/sp/123' color='blue'/>
            <Navigator text='Componente com Estado' destiny='/state' color='pink'/>
            <Navigator text='Integração com API' destiny='/integration_1' color='yellow'/>
       </div>
    )
}
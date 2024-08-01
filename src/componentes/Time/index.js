import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    return (
        props.colaboradores.length > 0 && 
        <section className='time' style={{ backgroundColor: props.corSecundaria }}>
        <h3 style={ { borderColor: props.corPrimaria }}>{props.nomeTime}</h3>
        <div className='colaboradores'>
        {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.corPrimaria} nome={colaborador.nome} key={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
        </div>
        </section>
        
    )
}

export default Time
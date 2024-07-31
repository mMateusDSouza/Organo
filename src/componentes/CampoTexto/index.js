import './CampoTexto.css'


const CampoTexto = (props) => {

    const label = `${props.label}`
    const placeholder=`${props.placeholder}`
    const tipo = `${props.tipo}`


    const aoDigitado = (evento) =>{
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label htmlFor={label}>{label}</label>
            <input value={props.valor} onChange={aoDigitado} type={tipo} id={label} name={label} className="caixa-resposta" placeholder={placeholder} required={props.obrigatorio}/>
        </div>

    )
}

export default CampoTexto;
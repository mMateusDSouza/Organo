import './CampoTexto.css'


const CampoTexto = (props) => {
    console.log(props.label)

    const label = `${props.label}`
    const placeholder=`${props.placeholder}`
    const tipo = `${props.tipo}`

    return (
        <div className="campo-texto">
            <label for={label}>{label}</label>
            <input type={tipo} id={label} name={label} className="caixa-resposta" placeholder={placeholder} required/>
        </div>

    )
}

export default CampoTexto;
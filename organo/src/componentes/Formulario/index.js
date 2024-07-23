import CampoTexto from '../CampoTexto'
import './Formulario.css'

const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os Dados para fazer parte do squad do Colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" tipo="text"/>
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" tipo="text"/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" tipo="url"/>
            </form>
        </section>
    )
}

export default Formulario
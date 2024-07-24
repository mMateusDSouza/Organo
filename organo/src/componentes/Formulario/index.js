import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {

    

    const equipes = [
        'Programação', 'Front-End', 'Data Science', 'Devops', 'UX e Design', 'Mobile', 'Inovação e Gestão'
    ]

    const aoSalvar = (event) =>{
        event.preventDefault()
        console.log('Formulario foi submetido')
    }
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os Dados para fazer parte do squad do Colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" tipo="text" obrigatorio={true}/>
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" tipo="text" obrigatorio={true}/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" tipo="url" obrigatorio={true}/>
                <ListaSuspensa label="Time" itens={equipes} obrigatorio={true}/>
                <Botao>
                    Criar Card    
                </Botao>
            </form>
        </section>
    )
}

export default Formulario
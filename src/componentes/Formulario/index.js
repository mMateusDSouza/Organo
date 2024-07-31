import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (event) => {
        event.preventDefault()
        console.log('Formulario foi submetido =>', nome, cargo, imagem, time)
        props.aoColaboradorCadastrado({
            nome, 
            cargo,
            imagem,
            time
        })
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os Dados para fazer parte do squad do Colaborador</h2>
                <CampoTexto
                    label="Nome"
                    placeholder="Digite seu nome"
                    tipo="text"
                    obrigatorio={true}
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" tipo="text" obrigatorio={true} valor={cargo} aoAlterado={valor => setCargo(valor)}/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" tipo="url" obrigatorio={true} valor={imagem} aoAlterado={valor => setImagem(valor)}/>
                <ListaSuspensa label="Time" itens={props.times} obrigatorio={true} valor={props.ntime} aoAlterado={valor => setTime(valor)} />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario
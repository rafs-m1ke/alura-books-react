import styled from "styled-components"
import Input from "../Input"
import { useState } from "react"
import { livros } from './dadosPesquisa'

const PesquisaContainer = styled.section`
    background-color: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Resultado = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin: 20px 0;
    
    img {
        height: 150px;
    }
`

const Pesquisa = () => {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input 
                placeholder="Escreva sua proxima leitura"
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />
            {
                livrosPesquisados.map(livro => (
                    <Resultado>
                        <p>{livro.nome}</p>
                        <img src={livro.src} alt="" />
                    </Resultado>
            ))}
        </PesquisaContainer>
    )
}

export default Pesquisa
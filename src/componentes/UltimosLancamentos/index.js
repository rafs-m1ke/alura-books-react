import { livros } from './dadosUltimosLancamentos'
import { Titulo } from '../Titulo'
import styled from 'styled-components'
import CardRecomenda from '../CardRecomenda'
import livro2 from '../../imagens/livro2.png'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

const UltimosLancamentos = (props) => {
    return (
        <UltimosLancamentosContainer>
            <Titulo 
                cor='#EB9B00'
                tamanhoFonte='36px'
                alinhamento='center'
            >
                    {props.titulo}
            </Titulo>
            <NovosLivrosContainer>
                {
                    livros.map(livro => (
                        <img src={livro.src} alt="" />
                    ))
                }
            </NovosLivrosContainer>
            <CardRecomenda
                titulo='Talvez você se interesse por'
                subtitulo='Angular 11'
                descricao='construindo uma aplicação com a plataforma Google'
                imagem={livro2}
            />
            <CardRecomenda
                titulo='Talvez você se interesse por'
                subtitulo='Angular 11'
                descricao='construindo uma aplicação com a plataforma Google'
                imagem={livro2}
            />
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos
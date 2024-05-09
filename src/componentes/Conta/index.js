import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const UlContainer = styled.ul`
    display: flex;
    align-items: center;
    gap: 20px;
`

const Conta = () => {
    const icones = [perfil, sacola]
    return (
        <UlContainer>
            {icones.map(icone => <li key={icone}><img src={icone} alt="" /></li>)}
        </UlContainer>
    )
}

export default Conta
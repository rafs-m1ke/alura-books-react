import Logo from '../Logo'
import Menu from '../Menu'
import Conta from '../Conta'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: space-around;
`

const Header = () => {
    return (
        <HeaderContainer>
            <Logo/>
            <Menu/>
            <Conta/>
        </HeaderContainer>
    )
}

export default Header
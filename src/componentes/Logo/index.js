import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
`

const LogoImg = styled.img`
  margin-right: 10px;
`

const Logo = () => {
    return (
        <LogoContainer>
          <LogoImg 
            src={logo}
            alt="Alurabooks Logo"
          ></LogoImg>
          <p>
            <strong>Alura</strong>books
          </p>
        </LogoContainer>
    )
}

export default Logo
import styled from 'styled-components'

const MenuUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`
const Itens = styled.li`
  list-style: none;
  font-size: 16px;
  cursor: pointer;
`

const Menu = () => {
    const textoOpcoes = [
        'CATEGORIAS',
        'FAVORITOS',
        'MINHA ESTANTE',
      ]
      
    return (
        <MenuUl>
          {textoOpcoes.map(texto => <Itens key={texto}>{texto}</Itens>)}
        </MenuUl>
    )
}

export default Menu
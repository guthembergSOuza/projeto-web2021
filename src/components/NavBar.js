import React from 'react'
import {Link} from 'react-router-dom'
import { Header, Menu } from 'semantic-ui-react'

const NavBar = props => {
    return(
        <div>
            <Header >
                <Menu  style={{'background-color': 'gray'  }} >
                    <Menu.Item as={Link} to='/home'>Home</Menu.Item>
                    <Menu.Item as={Link}  to='/'>Login</Menu.Item>
                    <Menu.Item as={Link}  to='/lojista'>Lojista</Menu.Item>
                    <Menu.Item as={Link}  to='/artesao'>Artesao</Menu.Item>
                    <Menu.Item as={Link}  to='/produto'>Produto</Menu.Item>
                    <Menu.Item as={Link}  to='/estoque'>Estoque</Menu.Item>
                    <Menu.Item as={Link}  to='/venda'>Venda</Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item as={Link}  to='/'>Sair</Menu.Item>
                    </Menu.Menu>
                </Menu>
            </Header>
        </div>
    )

}
export default NavBar;
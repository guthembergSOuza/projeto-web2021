import React, { useState } from 'react'

import { MdEmail, MdLock } from "react-icons/md"
import { HiEye, HiEyeOff } from "react-icons/hi"
import './login.css' 
//import { validarUsuario} from 'api/apiCalls';

import { Button, Image, Modal } from 'semantic-ui-react'

const LoginPage  = (props) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)
    const [showModalCadastro, setShowModalCadastro] = React.useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        setShow(!show);
    }


    const loginClicked = (e) => {

        let usuario = {
            email: email,
            senha: password
        }

        // validarUsuario(usuario)
        //         .then(function (response) {
        //             console.log('sucesso ao logar', response.data)
        //         })
        //         .catch(function (error) {
        //             console.log('Login ou Senha inválido', error.response)
        //         })


    }

    return (
        <div className="login">
            
            <Modal
                onClose={() => setShowModalCadastro(false)}
                onOpen={() => setShowModalCadastro(true)}
                open={showModalCadastro}
                >
                <Modal.Header>Upload image</Modal.Header>
                <Modal.Content image>
                    <Image size='medium' src='/images/wireframe/image-square.png' wrapped />
                    <Modal.Description>
                    <p>Would you like to upload this image?</p>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={() => setShowModalCadastro(false)}>Cancel</Button>
                    <Button onClick={() => setShowModalCadastro(false)} positive>
                    Ok
                    </Button>
                </Modal.Actions>
                </Modal>


            
            <div className="login-logo">
                <img
                src="https://anzuns.org/wp-content/uploads/2018/02/admin_login.png"
                alt="MdLockLogin App"
                />
            </div>

            <div className="login-right">
                <h1>Arte Colaborativa</h1>
                <form onSubmit={loginClicked} >
                <div className="login-loginInputEmail">
                    <MdEmail />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className="login-loginInputPassword">
                    <MdLock />
                    <input
                        placeholder="Senha"
                        type={show ? "text" : "password"}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <div className="login-eye">
                        {show ? (
                            <HiEye
                                size={20}
                                onClick={handleClick}
                            />
                        ) : (
                                <HiEyeOff
                                size={20}
                                onClick={handleClick}
                                />
                            )}
                    </div>
                </div>

                <button type="submit">
                    Entrar
                </button>
                </form>
                <h4>Não tenho conta!</h4>

                <button onClick={() => {setShowModalCadastro(true)}} >
                    Cadastrar
                </button>
            </div>
        </div>
    )
}
 export default LoginPage;
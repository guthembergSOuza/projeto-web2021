import React, { useState } from 'react';
import axios from 'axios';

import { MdEmail, MdLock } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";
import './login.css' ;
//import { validarUsuario} from 'api/apiCalls';
import { Button, Segment, Form ,Modal} from 'semantic-ui-react';
import SweetAlert from 'react-bootstrap-sweetalert';
import { makeStyles } from "@material-ui/core/styles";
import sweetAlertStyle from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.js";
import {postNovoLojista } from "api/apiCalls"

const useStylesAlert = makeStyles(sweetAlertStyle);

const LoginPage  = (props) => {

    const [email, setEmail] = useState("")
    const [nome, setNome] = useState("")
    const [senha, setSenha] = useState("")
    const [tipousu, setTipoUsu] = useState("")
    const [marca, setMarca] = useState("")
    const [notificacao, setNotificacao] = React.useState(false);
    const [tipoMsg, setTipoMsg] = React.useState("primary");
    const [msg, setMsg] = React.useState("");

    const [show, setShow] = useState(false)
    const [showModalCadastro, setShowModalCadastro] = React.useState(false)
    const [alert, setAlert] = React.useState(null);
    const classesAlert = useStylesAlert();
    const server = 'http://localhost:8082'

    const tipoUsuario = [
        { key: 'a', text: 'Artesão', value: 'artesao' },
        { key: 'l', text: 'Lojista', value: 'lojista' }
      ]

    const handleClick = (e) => {
        e.preventDefault()
        setShow(!show);
    }

    const hideAlert = () => {
        setAlert(null);
    };

    const exibirNotificacao = (tipo, msg) => {
        setTipoMsg(tipo);
        setNotificacao(true);
        setMsg(msg);

        setTimeout(() => {
            setNotificacao(false)
            setMsg("")
        }, 5000)
    }

    const loginClicked = (e) => {

        let usuario = {
            email: email,
            senha: senha
        }

        // validarUsuario(usuario)
        //         .then(function (response) {
        //             console.log('sucesso ao logar', response.data)
        //         })
        //         .catch(function (error) {
        //             console.log('Login ou Senha inválido', error.response)
        //         })

    }

    const cadastrarUsuario = () => {


        if(tipousu == 'artesao'){

        } else {

            let lojista = {
                nome: nome,
                email: email,
                senha: senha
            }

            postNovoLojista(lojista).then((response) => {
                console.log('sucesso ao salvar lojista:', response)
                
            })
            .catch((error) => {
                console.log('erro ao extrair de arquivos:', error?.response)
                exibirNotificacao("danger", "Ocorreu um erro ao extrair os dados do(s) arquivo(s).")
            })


        }


    }

    const sucessoRetorno = (tipoUsuario) => {
        setAlert(
            <SweetAlert
                success
                style={{ display: "block", marginTop: "-170px" }}
                title="Sucesso!"
                onConfirm={() => hideAlert()}
                confirmBtnCssClass={classesAlert.button + " " + classesAlert.success}
            >
                {
                    <h4> Sucesso ao salvar o {tipoUsuario} !</h4>
                    
                }

            </SweetAlert>
        );
    };


    return (
        <div className="login">
             {alert}
            <Modal
                onClose={() => setShowModalCadastro(false)}
                onOpen={() => setShowModalCadastro(true)}
                open={showModalCadastro}
                >
                <Modal.Header>Upload image</Modal.Header>
                
                <Segment inverted>
                    <Form inverted >
                        <Form.Group  widths='equal'>
                            <Form.Input fluid label='Nome' placeholder='Nome' value={nome} onChange={e => setNome(e.target.value)} />
                        </Form.Group>
                        <Form.Group  widths='equal'>
                            <Form.Input fluid label='Email' placeholder='email@mail.com' value={email} onChange={e => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Input fluid type='password' label='Senha' placeholder='Senha' value={senha} onChange={e => setSenha(e.target.value)} />
                        </Form.Group>
                        <Form.Group  widths='equal'>
                            <Form.Select
                                fluid
                                label='Tipo de Usuário'
                                options={tipoUsuario}
                                placeholder='Tipo de Usuário'
                                value={tipousu} onChange={e => setTipoUsu(e.target.value)}
                            />
                        </Form.Group>
                    </Form>

                    {
                        tipousu == 'artesao' &&
                        <Form.Group widths='equal' style={{ display: {tipousu} == 'artesao' ? "block" : "none" }}  >
                            <Form.Input fluid label='Marca' placeholder='Marca' value={marca} onChange={e => setMarca(e.target.value)} />
                        </Form.Group>
                    }

                    

                </Segment>
                

                <Modal.Actions>
                    <Button onClick={() => setShowModalCadastro(false)}>Cancel</Button>
                    <Button onClick={() => cadastrarUsuario()} positive>
                    Salvar
                    </Button>
                </Modal.Actions>
                </Modal>



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
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
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
'use client'

import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';



export default function Contato(){

    const deuBom = () => toast.success("deu certo");
    const deuRuim = () => toast.error("deu ruim")

    const [name,setName] = useState("");
    const [message,setMessage] = useState("");


    function verifyForm(e){

        e.preventDefault()

        if(name == "" || message ==""){
            deuRuim()
        }else{
            deuBom()
        }
    }

    return(
        <div>
            <h1>página de contato</h1>
            <p>entre pra </p>

            <hr/>

            <form onSubmit={(e)=> verifyForm(e)}>
                <label>
                    <p>digite o seu nome</p>
                    <input onChange={(e)=> setName(e.target.value)} />
                    <ToastContainer />    
                </label>
                
                <br/>


                <label>
                    <p>digite o seu mensagem</p>
                    <input onChange={(e)=> setMessage(e.target.value)}/>
                </label>

                <button>enviar</button>

            </form>

     

        </div>
    )
}
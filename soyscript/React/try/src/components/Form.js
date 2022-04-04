import { useState } from "react";




function Form(){
    const [email, setEmail] = useState();
    const login = ()=>console.log("Enviado.");
const callback = ()=>alert("Enviado. ", name);
    return(
        <div className="Form">
            <form onSubmit={login}>
                <div>
                    <h4>
                        Email:
                    </h4>
                    <input type="text" onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <div>
                    <h4>
                        Senha:
                    </h4>
                    <input type="password"/>
                </div>
                <button onClick={callback}>Enviar</button>
            </form>
        </div>
    )
}

export default Form;
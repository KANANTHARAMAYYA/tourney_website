
import { Cusdiv } from "../../Cusdiv.js";
import {Nutton} from "../Nutton.js";
function Login() {
    return (
    <Cusdiv width="25%" height= "60vh" mtop="10" mleft="35">
        <p Style="font-weight: bold">Login</p>
        <Nutton>UserName</Nutton>
        <Nutton>Password</Nutton>
        <Nutton>Login</Nutton>
    </Cusdiv>
    );
}

export default Login;
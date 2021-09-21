import Footer from "../components/Footer/Footer.js";
import { Cusdiv } from "../Cusdiv.js";
import Footer from "../components/Nutton.js";

function Home(){
    return (
        <div>
            <Cusdiv width = "25%" height = " 10%" mtop = "10" mleft = "20">
                Login
                <Nutton>UserName</Nutton>
            
            </Cusdiv>
            <Footer></Footer>
        </div>
    );
}
export default Home
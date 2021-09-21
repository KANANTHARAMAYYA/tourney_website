import { Fcons } from "./Fcons";
import "./footer.css";

function Footer() {
    return (
        <div className = "outer-box">
            <Fcons onClick={(e) => {
                e.preventDefault();
                window.open('http://twitter.com', "_blank");
            }}>
                <i class="fab fa-twitter" Style="color: #00acee;"></i>
            </Fcons>
            <Fcons onClick={(e) => {
                e.preventDefault();
                window.location.href = 'http://facebook.com';
            }}>
                <i class="fab fa-facebook-f" color="#3b5998"></i>
            </Fcons>
            <Fcons> <i class="fab fa-dribbble" Style="color: #ea4c89;"></i></Fcons>
            <Fcons><i class="fab fa-linkedin-in" Style="color:#0e76a8;"></i></Fcons>
            <Fcons><i class="far fa-envelope"></i></Fcons>
            <Fcons> <i class="fab fa-get-pocket" Style="color:#ee4056;"></i></Fcons>
        </div>
    );
}

export default Footer;
import { Fcons } from "./Fcons";

function Footer(){
    return (
        <div>
                  <Fcons onClick={(e) => {
      e.preventDefault();
      window.open('http://twitter.com',"_blank");
      }}>
          <i class="fab fa-twitter" Style="color: #00acee;"></i>
      </Fcons>
      <Fcons onClick={(e) => {
      e.preventDefault();
      window.location.href='http://facebook.com';
      }}>
          <i class="fab fa-facebook-f" color="#3b5998"></i>
      </Fcons>
 
        </div>
    );
}

export default Footer;
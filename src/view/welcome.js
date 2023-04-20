export const welcome = () => {
    const body= document.getElementById("body")
    body.innerHTML= `<header>
    <img src="img/logo.png">
    <nav>    
      <ul>
        <button id="btnLoginhome">
          <a  href="#">Log In</a>
        </button>
        <li>
          <a href="#">Sign Up</a>
        </li>
      </ul> 
    </nav>
   </header>
   <main id="main">
  
    <h1> Be My Friend</h1>
    <p class="welcomemessage">Welcome <br>
      Your next friend is waiting for you. Check animals available to adopt!
    </p>
    <section class="contenedorcards">
      <div class="cardpet">      
        <div class="photopets">
          <img src="img/TOM.jpg">
        </div>
        <div class="interactionpets">
          <h3>TOM</h3>
          <input type="image" src="img/match.png" alt="logomatch">
          <input type="image" src="img/megusta.png" alt="logomegusta">
        </div>
      </div>
    
  
      <div class="cardpet">      
        <div class="photopets">
        <img src="img/Bob.png">
        </div>
        <div class="interactionpets">
        <h3>BOB</h3>
        <input type="image" src="img/match.png" alt="logomatch">
        <input type="image" src="img/megusta.png" alt="logomegusta">
        </div>
      </div>
    </section>
  
    <section class="contenedortestimonios">
      <h2 class="testimonies">Testimonies</h2>
      <div class="menssagetesti">
        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...”
  
          -Name, City</p>
      </div>
  
      <div class="menssagetesti">
        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...”
  
          -Name, City</p>
      </div>
    </section>
  
   </main>
   <footer>
    <p>CopyRight  Marissa-Gabriela-Rebeca  Contáctanos</p>
   </footer>
   </div>`
    console.log("hola")
 }

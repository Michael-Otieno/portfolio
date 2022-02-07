const createNav = () =>{
    let nav = document.querySelector('.navbar')

    nav.innerHTML =`
    <div class="logo logox">
        <p class="">m</p>
    </div>
  
    <div class="menu">
        <ul class="menu-items">
            <li>
                <a href="index.html">about me</a>
            </li>
            <li>
                <a href="projects.html">work</a>
            </li>
            <li>
                <a href="contact.html">contact</a>
            </li>
        </ul>
    </div>
    `
}
createNav()

const footer = () =>{
    let footer = document.querySelector('footer')

    footer.innerHTML =`
    <div>
    <p class="footer-links">
      <span class="footer-heading">lets connect:</span>
      <a href="">
        <img src="/assets/images/gmail.png" alt="" width="20">
      </a>
      <a href="">
        <img src="/assets/images/linkedin.png" alt="" width="20">
      </a>
      <a href="">
        <img src="/assets/images/github.png" alt="" width="20">
      </a>
      
    </p>
  </div>
    `
}
footer()
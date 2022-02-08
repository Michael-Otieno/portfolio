const header = () =>{
    let nav = document.querySelector('.primary-header')

    nav.innerHTML =`
    <div class="logo logox">
      <p class="">m</p>
    </div>

    <button aria-controls="primary-navigation" aria-expanded="false" class="mobile-nav-toggle">
        <span class="sr-only"></span>
     </button>
    <nav>
     <ul id="primary-navigation" data-visible="false" class="primary-navigation" style="display: flex;">
         <li class="active">
             <a href="index.html">
                 <span aria-hidden="true" class='pe-2'>1</span>About
             </a>
         </li>
         <li>
             <a href="projects.html">
                 <span aria-hidden="true" class='pe-2'>2</span>Work
             </a>
         </li>
         <li>
             <a href="contact.html">
                 <span aria-hidden="true" class='pe-2'>3</span>contact
             </a>
         </li>
         
     </ul>
    </nav>
    `
}
header()

const primarynav= document.querySelector('.primary-navigation')
const mobilenav= document.querySelector('.mobile-nav-toggle')

mobilenav.addEventListener('click', ()=>{
    const visible = primarynav.getAttribute('data-visible');

    if(visible==='false'){
        primarynav.setAttribute('data-visible',true);
        mobilenav.setAttribute('arial-expanded',true)
    }else if(visible==='true'){
        primarynav.setAttribute('data-visible',false)
        mobilenav.setAttribute('arial-expanded',false)

    }
});


const footer = () =>{
    let footer = document.querySelector('footer')

    footer.innerHTML =`
    <div>
    <p class="footer-links">
      <span class="footer-heading">lets connect:</span>
      <a href="mailto:m.otieno205@gmail.com" target="_blank">
        <img src="/assets/images/gmail.png" alt="" width="20">
      </a>
      <a href="https://www.linkedin.com/in/michael-otieno-924157217?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BEIfYgD4aSXG%2FPnZ%2B0YZuXA%3D%3D" target="_blank">
        <img src="/assets/images/linkedin.png" alt="" width="20">
      </a>
      <a href="https://github.com/Michael-Otieno" target="_blank">
        <img src="/assets/images/github.png" alt="" width="20">
      </a>
      
    </p>
  </div>
    `
}
footer()
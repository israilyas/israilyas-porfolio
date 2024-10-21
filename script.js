//  Header Toggle 

let  MenuBtn = document.getElementById('menuBtn')

MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')

})

// Typing Effect

let typed = new Typed('.auto-input',{
    strings: ['Front-End Developer!','Freelancer','Python Programmer','Backlinks Builder'],
    typeSpeed:100,
    backSpeed:70,
    backDelay:1000,
    loop:true,
})


// Active link State on Scroll

let  navLinks = document.querySelectorAll('nav ul li a')

// Get All Sections 

let sections = document.querySelectorAll('section')
console.log(sections)

window.addEventListener("scroll",  function(){
    const scrollPos =  window.scrollY;
    sections.forEach(section => {
        if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
            navLinks.forEach(link => {
                link.classList.remove('active')
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)){
                    link.classList.add('active')
                }
            });
        }
    } );
});
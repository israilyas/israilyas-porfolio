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


// Active link

let  active-link = document.querySelector('')




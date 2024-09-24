//  Header Toggle 

let  MenuBtn = document.getElementById('menuBtn')

MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')

})

// Typing Effect

let typed = new Typed('.auto-input',{
    strings: ['Front-End Developer!','Freelancer','Python Programmer','Database Administrator','Backlinks Builder'],
    typeSpeed:100,
    backSpeed:50,
    backDelay:2000,
    loop:true,
})
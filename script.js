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

// Close Nav Menu when click on any link
let links = document.querySelectorAll('.nav-link'); // Select all nav links

links.forEach(function(link) {
    link.addEventListener('click', function(e) {
        document.querySelector('body').classList.toggle('mobile-nav-active');
        document.getElementById('menuBtn').classList.toggle('fa-xmark');
        // Optionally, handle active state
        links.forEach(l => l.classList.remove('active')); // Remove active class from all links
        link.classList.add('active'); // Add active class to the clicked link
    });
});


<<<<<<< HEAD
const typingText = document.querySelector('.typing-text');
const words = ["Usman Ibrahim", "a Cyber-Security Student", "a CTF Player", "a Web Developer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isEnd = false;

function type() {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    typingText.textContent = currentChar;
    
    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(type, 100);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(type, 50);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            wordIndex = (wordIndex + 1) % words.length;
        }
        setTimeout(type, 1000);
    }
}


setTimeout(type, 1000);


document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
    
        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('active');
        });
        
        
        targetSection.classList.add('active');
        
        
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});


document.querySelector('.btn').addEventListener('click', function() {
    document.querySelectorAll('section').forEach(section => section.classList.remove('active'));
    document.querySelector('#projects').classList.add('active');
    window.scrollTo({
        top: document.querySelector('#projects').offsetTop,
        behavior: 'smooth'
    });
});


const backToTopBtn = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('active');
    } else {
        backToTopBtn.classList.remove('active');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const submitText = document.getElementById('submit-text');
const spinner = document.getElementById('spinner');
const formMessage = document.getElementById('form-message');




const animateOnScroll = () => {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);


const themeToggle = document.getElementById('themeToggle');
const body = document.body;


const savedTheme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');


if (savedTheme === 'light') {
    body.classList.add('light-mode');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const currentTheme = body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);
=======
const typingText = document.querySelector('.typing-text');
const words = ["Usman Ibrahim", "a Cyber-Security Student", "a CTF Player", "a Web Developer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isEnd = false;

function type() {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    typingText.textContent = currentChar;
    
    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(type, 100);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(type, 50);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            wordIndex = (wordIndex + 1) % words.length;
        }
        setTimeout(type, 1000);
    }
}


setTimeout(type, 1000);


document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
    
        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('active');
        });
        
        
        targetSection.classList.add('active');
        
        
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});


document.querySelector('.btn').addEventListener('click', function() {
    document.querySelectorAll('section').forEach(section => section.classList.remove('active'));
    document.querySelector('#projects').classList.add('active');
    window.scrollTo({
        top: document.querySelector('#projects').offsetTop,
        behavior: 'smooth'
    });
});


const backToTopBtn = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('active');
    } else {
        backToTopBtn.classList.remove('active');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const submitText = document.getElementById('submit-text');
const spinner = document.getElementById('spinner');
const formMessage = document.getElementById('form-message');




const animateOnScroll = () => {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);


const themeToggle = document.getElementById('themeToggle');
const body = document.body;


const savedTheme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');


if (savedTheme === 'light') {
    body.classList.add('light-mode');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const currentTheme = body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);
>>>>>>> 19e9bf292ef5214f478ddae9501d33fc88b86db0
});

const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

mobileMenuToggle?.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
        }
    });
});


const themeToggle = document.getElementById('themeToggle');
themeToggle?.addEventListener('touchstart', (e) => {
    e.preventDefault();
    themeToggle.click();
}, { passive: false });


document.addEventListener('dblclick', (e) => {
    if (window.innerWidth <= 768) {
        e.preventDefault();
    }
}, { passive: false });
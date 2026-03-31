// Menu Mobile
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Troca o ícone de hambúrguer para fechar
    const icon = menuBtn.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Fechar menu ao clicar em um link (Mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = menuBtn.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});

// Validação de Formulário
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if(nome && email && mensagem) {
        formStatus.textContent = "Mensagem enviada com sucesso! Em breve entraremos em contato.";
        formStatus.style.color = "green";
        contactForm.reset();
    } else {
        formStatus.textContent = "Por favor, preencha todos os campos.";
        formStatus.style.color = "red";
    }
});

// Animação de Scroll (Scroll Reveal)
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', reveal);

// Executa uma vez no load para itens que já estão na tela
window.addEventListener('load', reveal);

// Header dinâmico ao rolar
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.padding = "0.5rem 0";
        header.style.background = "rgba(255, 255, 255, 0.95)";
    } else {
        header.style.padding = "1rem 0";
        header.style.background = "#fff";
    }
});
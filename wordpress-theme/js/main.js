/**
 * Casa Aromani - main.js
 * Scripts principais do tema WordPress
 */

document.addEventListener('DOMContentLoaded', function () {

  // ===========================
  // MENU HAMBURGER MOBILE
  // ===========================
  const btnHamburger = document.getElementById('btn-hamburger');
  const menuMobile   = document.getElementById('menu-mobile');

  if (btnHamburger && menuMobile) {
    btnHamburger.addEventListener('click', function () {
      const aberto = menuMobile.classList.toggle('aberto');
      btnHamburger.classList.toggle('ativo', aberto);
      btnHamburger.setAttribute('aria-expanded', aberto ? 'true' : 'false');
      btnHamburger.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
    });

    // Fechar menu ao clicar em um link
    const linksMenu = menuMobile.querySelectorAll('a');
    linksMenu.forEach(function (link) {
      link.addEventListener('click', function () {
        menuMobile.classList.remove('aberto');
        btnHamburger.classList.remove('ativo');
        btnHamburger.setAttribute('aria-expanded', 'false');
        btnHamburger.setAttribute('aria-label', 'Abrir menu');
      });
    });
  }


  // ===========================
  // HERO SLIDESHOW
  // ===========================
  const slides = document.querySelectorAll('.hero-slide');
  const dots   = document.querySelectorAll('.hero-dot');
  let slideAtual = 0;
  let timer;

  function irParaSlide(index) {
    // Remove ativo do slide atual
    slides[slideAtual].classList.remove('ativo');
    slides[slideAtual].setAttribute('aria-hidden', 'true');
    dots[slideAtual].classList.remove('ativo');
    dots[slideAtual].setAttribute('aria-current', 'false');

    // Ativa o novo slide
    slideAtual = index;
    slides[slideAtual].classList.add('ativo');
    slides[slideAtual].setAttribute('aria-hidden', 'false');
    dots[slideAtual].classList.add('ativo');
    dots[slideAtual].setAttribute('aria-current', 'true');
  }

  function proximoSlide() {
    const proximo = (slideAtual + 1) % slides.length;
    irParaSlide(proximo);
  }

  function iniciarTimer() {
    timer = setInterval(proximoSlide, 5000);
  }

  function resetarTimer() {
    clearInterval(timer);
    iniciarTimer();
  }

  if (slides.length > 0) {
    iniciarTimer();

    // Clique nos dots
    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        const index = parseInt(this.getAttribute('data-slide'), 10);
        irParaSlide(index);
        resetarTimer();
      });
    });

    // Pausar ao passar o mouse (acessibilidade)
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.addEventListener('mouseenter', function () {
        clearInterval(timer);
      });
      heroSection.addEventListener('mouseleave', function () {
        iniciarTimer();
      });
    }
  }


  // ===========================
  // SCROLL SUAVE PARA ÂNCORAS
  // ===========================
  const linksAncora = document.querySelectorAll('a[href^="#"]');

  linksAncora.forEach(function (link) {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const destino = document.querySelector(href);
      if (destino) {
        e.preventDefault();
        const header      = document.getElementById('masthead');
        const alturaHeader = header ? header.offsetHeight : 0;
        const posicaoDestino = destino.getBoundingClientRect().top + window.pageYOffset - alturaHeader;

        window.scrollTo({
          top: posicaoDestino,
          behavior: 'smooth'
        });
      }
    });
  });


  // ===========================
  // SCROLL: LOGO AO TOPO
  // ===========================
  const logoLink = document.querySelector('.logo-link');
  if (logoLink) {
    logoLink.addEventListener('click', function (e) {
      if (this.getAttribute('href') === window.location.pathname || this.getAttribute('href') === '/') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }


  // ===========================
  // FADE IN AO ROLAR
  // Anima elementos ao entrarem na tela
  // ===========================
  const elementosFade = document.querySelectorAll(
    '.sobre-card, .produto-card, .galeria-item, .encomenda-card'
  );

  if ('IntersectionObserver' in window && elementosFade.length > 0) {
    // Esconder os elementos inicialmente
    elementosFade.forEach(function (el) {
      el.style.opacity    = '0';
      el.style.transform  = 'translateY(24px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity   = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    elementosFade.forEach(function (el) {
      observer.observe(el);
    });
  }

});

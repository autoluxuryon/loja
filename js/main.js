class MobileNavbar{
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks(){
        this.navLinks.forEach((link, index) =>{
            link.style.animation
                ?(link.style.animation = "")
                :(link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }
    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}
const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init();


$(document).ready(function() {
    $('.carousel').slick({
      autoplay: true,
      autoplaySpeed: 2000, // Defina o intervalo de tempo entre as transições das imagens (em milissegundos)
      dots: false, // Defina como true se desejar exibir pontos indicadores de navegação
      arrows: false, // Defina como true se desejar exibir setas de navegação
      infinite: true,
      speed: 500, // Defina a velocidade da transição das imagens (em milissegundos)
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768, // Defina um ponto de interrupção para dispositivos móveis
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // Adicione mais pontos de interrupção e configurações responsivas, se necessário
      ]
    });
  });
  
function navbarBrand(){
    if(window.matchMedia('(max-width: 992px)').matches){
        var navbrand = document.getElementsByClassName('navbar-brand');
        navbrand.classList.add("expanded");
    }    
}

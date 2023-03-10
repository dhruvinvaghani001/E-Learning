//for scroll 
window.addEventListener("scroll",()=>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>0);
});

//for the faqs
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener("click",()=>{
        faq.classList.toggle('open');
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-plus'){
            icon.className = 'uil uil-minus';
        }else{
            icon.className = 'uil uil-plus';
        }
    });
});


//navigation toggle

const open = document.querySelector('#menu-btn-open');
const close = document.querySelector('#menu-btn-close');
const menu = document.querySelector('.nav__menu');

open.addEventListener('click',()=>{
   menu.style.display = 'flex';
   open.style.display = 'none';
   close.style.display = 'inline-block';
});

close.addEventListener('click',()=>{
    menu.style.display = 'none';
    open.style.display = 'inline-block';
    close.style.display = 'none';
});



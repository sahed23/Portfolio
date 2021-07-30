document.addEventListener('contextmenu', (e) => e.preventDefault());
const hire = document.querySelector("ul li #hireBtn");
hire.href = 'http://sahedulislam.cf/Admin';
hire.target = '_blank';


const scroll = document.querySelector('body > section#pageWrapper > a.scroll');
const icon = document.querySelector('body > section#pageWrapper > a.scroll i');
  
scroll.href = '#bottom' ; // initial target

window.addEventListener('scroll',()=>{
  
  scroll.style.opacity = 1 ;
  let scrollHeight = window.scrollY ;
  
  if(scrollHeight > 0 ) {
    scroll.href = '#top' ;
    icon.classList.add('fa-angle-up');
    icon.classList.remove('fa-angle-down');
  }
  else {
    scroll.href = '#bottom' ;
    icon.classList.add('fa-angle-down');
    icon.classList.remove('fa-angle-up');
  }
});

 // /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi
// Regular Expression for Email validation 
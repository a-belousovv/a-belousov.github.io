import {btnChange,navButtonEn,navButtonRu} from './main.js';
function animFooter(){
    const btnFooter = document.querySelectorAll('.footer__right_img');
    
    document.addEventListener("scroll", () => {
      
      if(window.scrollY > 100){
        btnFooter.forEach((item) => {
          item.classList.remove('footer__right_img-unanim')
          item.classList.add('footer__right_img-anim')
        });
      }
      else if(window.scrollY < 100){
        btnFooter.forEach((item) => {
          item.classList.remove('footer__right_img-anim')
        });
      }

       
      
     
    })
  }
  function animTextFooter(){
    document.addEventListener('scroll', () => {
      const footerText = document.querySelectorAll('.footer__center_text');
      if(window.scrollY >= 3200){
        footerText.forEach((item) => {
          item.classList.add('footer__center_text-anim');
        })
      }
    })
  }
export {animFooter,animTextFooter,};
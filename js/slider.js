function slider(){
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      loop:true,
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper__button_next',
        prevEl: '.swiper__button_prev',
      },
    
      
      
    });

  }
  

export {slider};
(function(){
  let touch = document.querySelector('.touch');
  let target = document.querySelector('.target');

  touch.addEventListener('click',function(){
    if(target.classList.contains('active')){
      target.classList.remove('active');
    }else{
      target.classList.add('active');
    }
  });
}());

(function(){
  let item = document.querySelectorAll('.list li');

  for(let i = 0; i < item.length; i++){
    item[i].addEventListener('click',function(){
      if(item[i].classList.contains('active')){
        item[i].classList.remove('active');
      }else{
        item[i].classList.add('active');
      }
    });
  }
}());

(function(){
  let lazy = document.querySelectorAll('.lazy');

  window.addEventListener('load',function(){
    for(let i = 0; i < lazy.length; i++){
      let src = lazy[i].dataset.src;
      lazy[i].setAttribute('src', src);
    }
  });
}());
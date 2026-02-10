//header 
const header = document.querySelector('header')

let lastScroll = 0; //let변화하는 값

window.addEventListener('scroll', ()=>{
  let nowScroll = window.scrollY; //현제 스크롤값
  console.log(nowScroll);

  let start = lastScroll < nowScroll //내려가면 true 올라가면 false

  lastScroll = nowScroll;//과거의 스크롤 값
  console.log(start);

  if(start){
    header.classList.add('active')
  }else{
    header.classList.remove('active')
  }
} )

//header메뉴
const subMenuLi = document.querySelectorAll('.header_menu li');

subMenuLi.forEach(function(sub){
  const subMenu = sub.querySelector('.subMenu');

  if(subMenu) {
    sub.addEventListener('mouseenter', () => {
      subMenu.classList.add('open');
    });
    sub.addEventListener('mouseleave', () => {
      subMenu.classList.remove('open');
    });
  }
});

//서브메뉴
$(function(){
  $('.mobileMenue li > a').click(function(){
    $(this).next('.subMenu').toggleClass('on')
  })
})



//모바일 슬라이드 메뉴
const hamBtn = document.querySelector('.ham_menu')
const headerNav = document.querySelector('.mobileMenueBg')
const closeBtn = document.querySelector('.colse_btn')

/* hamBtn.onclick = function(){
  headerNav.style.right = '0'
} */
hamBtn .addEventListener('click',function(){
  headerNav.style.right = '0'
})
closeBtn.addEventListener('click', () => {
  headerNav.style.right = '-50%'
})

// 서브 메뉴 ---------?
const mobileSub = document.querySelectorAll('.mobileMenue .subMenu')
/* mobileSub.forEach(sub,idx){
  
} */



// slider
const sliderBox = document.querySelector('.slider_box');
const sliders = document.querySelectorAll('.slider_box li');

let sliderIndex = 0; // 현제 화면에 보여지는 슬라이드 번호

function sliderMove(){
  sliderIndex++; //슬라이더인덱스 번호 추가

  if(sliderIndex >= sliders.length){
    sliderIndex = 0;
  }

   sliderBox.style.transform = `translateX(-${sliderIndex * 100}%)`
}

//sliderMove();실행

setInterval(sliderMove,2500)//반복재생


// 슬라이더 버튼 클릭
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')

prevBtn.addEventListener('click', ()=>{
  sliderIndex--;

  if(sliderIndex < sliders.length){
    sliderIndex = 0;
  }
  sliderBox.style.transform = `translateX(${sliderIndex * 100}%)`
})

nextBtn.addEventListener('click', ()=>{
  sliderIndex++;

  if(sliderIndex >= sliders.length){
    sliderIndex = 0;
  }
  sliderBox.style.transform = `translateX(-${sliderIndex * 100}%)`
})


// tab 메뉴
const tabMenuBtn = document.querySelectorAll('.pageMain .bestTabMenu li') //텝 메뉴 버튼
const Product = document.querySelectorAll('.pageMain .bestContents ul') //텝 상품

let num = 0;

tabMenuBtn[0].classList.add('active')
Product[0].style.display = 'grid'

tabMenuBtn.forEach(function(bestProduct, idx){
  bestProduct.onclick = function(e){
    e.preventDefault(); // 링크 이동 막기
    tabMenuBtn[num].classList.remove('active')
    Product[num].style.display = 'none'

    Product[idx].style.display = 'grid'
    this.classList.add('active')

    num = idx;
  }
})
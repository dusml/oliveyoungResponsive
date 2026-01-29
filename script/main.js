//모바일 슬라이드 메뉴
const hamBtn = document.querySelector('.ham_menu')
const headerNav = document.querySelector('.mobileMenueBg')
const closeBtn = document.querySelector('.colse_btn')

hamBtn.onclick = function(){
  headerNav.style.right = '0'
}

closeBtn.addEventListener('click',function(){
  headerNav.style.right = '-100%'
})
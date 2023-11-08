// @gnb sub버튼
$('.header .gnb .sub-item, .header .all-menu .bhd-item').click(function(e){
  e.preventDefault();
  $(this).toggleClass('on');
})

// @gnb all 메뉴
$('.header .gnb .all').click(function(e){
  e.preventDefault();

  $('.header .all-menu').slideToggle();
  $('body').toggleClass('hidden')
  $('.dimmed').toggleClass('.hidden')
})


// @visual 영역
const mainSlide = new Swiper('.sc-visual .swiper',{
  speed:2000,
  autoplay:{
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination:{
    el:".sc-visual .fraction",
    type:"fraction"
  },
  navigation: {
    nextEl:'.sc-visual .next',
    prevEl:'.sc-visual .prev'
  },
  loop: true,
})

// @new 영역
const newSlide = new Swiper('.sc-new .swiper',{
  speed:1000,
  slidesPerView: 5,
  spaceBetween: 20,
  loop: true,
  navigation:{
    nextEl:".sc-new .next",
    prevEl:".sc-new .prev"
  }
})

// @event 영역
const eventSlide = new Swiper('.sc-event .swiper',{
  speed:1000,
  slidesPerView: 3,
  spaceBetween: 13,
  loop: true,
  pagination:{
    el:".sc-event .fraction",
    type:"fraction"
  },
  navigation:{
    nextEl:".sc-event .next",
    prevEl:".sc-event .prev"
  }
})

// @best 영역
$('.sc-best .btn-list li a').click(function(e){
  e.preventDefault();

  const tabName = $(this).attr('data-alt')

  $('.sc-best .btn-list li a').removeClass('on')
  $(this).addClass('on')

  $(tabName).addClass('on').siblings().removeClass('on')
})

// @sale 타이머 영역
function diffDay() {
    const setTime = new Date("2023-11-31");
    const todayTime = new Date();
    
    const diff = setTime - todayTime;
    
    const diffDay = Math.floor(diff / (1000*60*60*24));
    const diffHour = Math.floor((diff / (1000*60*60)) % 24);
    const diffMin = Math.floor((diff / (1000*60)) % 60);
    const diffSec = Math.floor(diff / 1000 % 60);
       
    html=`  <span class="hour">${diffHour}</span>
    <span class="col">:</span>
    <span class="min">${diffMin}</span>
    <span class="col">:</span>
    <span class="sec">${diffSec}</span>`

    $('#countdown').html(html);
    $('.sc-sale .time-text .date').html(`D-${diffDay}`);
}
diffDay();
setInterval(diffDay, 1000); //1초 간격으로 실행



// @brand 영역
$('.sc-brand .brand-item').hover(function(){
  $(this).addClass('on')
  $(this).siblings().removeClass('on') 
})

// @trend 영역
$('.sc-trend .btn-list li a').click(function(e){
  e.preventDefault();

  const tabName2 = $(this).attr('data-alt')

  $('.sc-trend .btn-list li a').removeClass('on')
  $(this).addClass('on')

  $(tabName2).addClass('on').siblings().removeClass('on')
})

// @이동 버튼 화살표
$(window).scroll(function(){
  curr = $(this).scrollTop();

  if(curr >= $(window).height()/2){ //window의 /2 한것보다 크다면
    $('.btn-wrap .btn-move').addClass('on');
  }else{
    $('.btn-wrap .btn-move').removeClass('on');
  }
})

// @상,하단 이동
$('.btn-move').click(function(){

  if ($(this).hasClass('on')) {
    topVal = 0;    
  } else {
    topVal = $('.wrapper').outerHeight(); //최종높이
  }
  window.scrollTo({
    top: topVal,
    behavior:"smooth"
  })
})
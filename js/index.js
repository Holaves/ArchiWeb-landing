// search-system

// search-open

const searchBtn = document.getElementById('search-icon')
const searchBar = document.getElementById('searchBar')
const searchCloseBtn = document.getElementById('searchCloseBtn')

let searchBarState = false

searchBtn.addEventListener('click', searchOpen)
searchCloseBtn.addEventListener('click', searchClose)

function searchOpen(){
    if(!searchBarState){
        searchBar.setAttribute('class', 'search_active')
        searchBarState = true
    }   
}

function searchClose(){
    if(searchBarState){
        searchBar.setAttribute('class', 'search_disabled')
        searchBarState = false
    }
}
// Доделать

let scrollAnimationState = true




$(window).scroll(function() {
    var hT = $('#scroll-to').offset().top,
        hH = $('#scroll-to').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+hH-wH)){
        if(scrollAnimationState){
            $aboutUs = $('.aboutUs__aboutUs-block__image-block_animated')
            $aboutUs.attr('class', 'aboutUs__aboutUs-block__image-block')
            scrollAnimationState = false
        }
    }
 });


//  swiper-button-prev"></div><div class="swiper-button-next
//  swiper-modern


const swiperModernNext = document.querySelector('.swiper-button-next')
const swiperModernPrev = document.querySelector('.swiper-button-prev')
let swiperModernPosition = -1

// arg: false or true
const swiperNextMove = (arg) => {
    if(arg){
        switch(swiperModernPosition){
            case 0:
                document.getElementById('header1').style.opacity = '0.0'
                break
            case 1:
                document.getElementById('header2').style.opacity = '0.0'
                break
            case 2:
                document.getElementById('header3').style.opacity = '0.0'
                break
        }
    }
    else if(!arg){
        switch(swiperModernPosition){
            case -1:
                document.getElementById('header1').style.opacity = '1'
                break
            case 0:
                document.getElementById('header2').style.opacity = '1'
                break
            case 1:
                document.getElementById('header3').style.opacity = '1'
                break
        }
    }
}


swiperModernNext.addEventListener('click', (e) => {
    if(e.target.getAttribute('aria-disabled') != true){
        swiperModernPosition++
        swiperNextMove(true)
    }
})
swiperModernPrev.addEventListener('click', (e) => {
    if(e.target.getAttribute('aria-disabled') != true){
        swiperModernPosition--
        swiperNextMove(false)
    }
})

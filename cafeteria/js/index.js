const arrow = document.getElementById("downArrow")
const destinoScroll = document.getElementById("benefCardCenter")

arrow.addEventListener('click', function(){
    destinoScroll.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    })
})
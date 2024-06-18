var tl= gsap.timeline({scrollTrigger:{
    trigger:"#open",
  
    start:"50% 50%",
    end:"100% 50%",
    scrub:2,
    pin:true
}})

tl.to("#top",{
    top:"-50%"
},'a')

.to("#bottom",{
    bottom:"-50%"
},'a')
.to("#top-h",{
    top:"80%"
},'a')
.to("#bottom-h",{
    bottom:"-80%"
},'a')

var tl2=gsap.timeline({scrollTrigger:{
    trigger:"#skill",
    start:"50% 50%",
    end:"100% 50%",
    scrub:2,
    pin:true
}})

tl2.from(".swiper-slide",{
    top:"80%",
  
})
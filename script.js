var anim= gsap.timeline();

anim.from("#nav",{
    y:-200,
    opacity:0,
    duration:0.5
})

anim.from("#lft h1",{
    x:-100,
    opacity:0,
    duration:0.5
},'a')

anim.from("#lft p",{
    y:100,
    opacity:0,
    duration:0.5
},)

anim.from(".btn",{
    x:-100,
    opacity:0,
    duration:0.5
},'b')
anim.from("#rght video",{
    y:100,
    opacity:0,
    duration:0.5
},'b');

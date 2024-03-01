const tl = gsap.timeline({defaults: {duration: 0.75,ease: "bounce.out"}})

tl.fromTo('.letter-container', {scale: 0}, {scale: 1,ease: "elastic.out(1,0.4)", duration: 1.5})
tl.fromTo('.letter', {opacity: 0, x:-50, rotation: '-200deg'}, {opacity:1, x:0, rotation: '0deg'},'<50%')
tl.fromTo('.text', {x:30, opacity: 0}, {x: 0, opacity: 1}, '<' )

//Letter jump
tl.fromTo('.letter', {y:0, rotation: '0deg'}, {y:-20,rotation:'-20deg', yoyo: true, repeat: -1})
tl.fromTo('.letter-blue', {y:0}, {y:-20, yoyo: true, repeat: -1})

//Fading the letter out
const button = document.querySelector('button');
button.addEventListener('click', ()=> {
    gsap.to('.letter-container', {opacity: 0, y: 100, duration: 0.75, ease: 'power1.out',})
})
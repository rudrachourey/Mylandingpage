
gsap.to("#a", {
     width: 1650,
     height: 1650,
     stagger: 2,
     duration: 2.5,
     delay: 1,
     opacity: 0,
     rotate: 370,
     ease: "expo.inOut"
})
gsap.to("#b", {
     width: 1300,
     height: 1300,
     stagger: 2,
     duration: 3.2,
     rotate: 360,
     delay: 2,
     opacity: 0,
     ease: "expo.inOut"
})
gsap.to("#c", {
     width: 1100,
     height: 1100,
     stagger: 2,
     duration: 3.2,
     delay: 3,
     opacity: 0,
     ease: "expo.inOut",
     rotate: 360,
})
gsap.to("#d", {
     width: 1000,
     height: 1000,
     stagger: 2,
     duration: 3.9,
     delay: 3.8,
     opacity: 0,
     ease: "expo.inOut",
     rotate: 360,
})
gsap.from(".img", {
     width: 0,
     stagger: 2,
     duration: 3,
     delay: 5,
     opacity: 0,
     ease: "expo.inOut",

})

gsap.from("#nav", {
     y: 50,
     opacity: 0,
     duration: 2,
     delay: 5.5,
     ease: "expo.inOut"
})


gsap.to("#text h2", {
     stagger: 3,
     delay: 6,
     opacity: 1,
     ease: Expo.inOut,
     top: 10
})


gsap.to("#text h2", {
     stagger: 3,
     delay: 7,
     ease: Expo.inOut,
     top: "-100%"
})

gsap.from("#overlay",{
     width: 0,
     opacity: 0,
     stagger :3,
     delay:6.5  
})

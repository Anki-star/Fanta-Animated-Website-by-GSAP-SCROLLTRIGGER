var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".two",
        start: "0% 95%",
        end: "70% 50%",
        scrub: true,
        // markers: true
    }
})

tl.to("#fanta", {
    top: "120%",
    left: "0%"
}, 'orange')

tl.to("#orng", {
    top: "150%",
    left: "23%"
}, 'orange')

tl.to("#oree", {
    width: "15%",
    top: "150%",
    right: "23%"
}, 'orange')

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".three",
        start: "0% 95%",
        end: "20% 50%",
        scrub: true,
        // markers: true
    }
})
tl2.from(".lem1", {
    rotate: "-90deg",
    left: "-100%",
    top: "110%"
}, 'ca')
tl2.from("#coke", {
    rotate: "-90deg",
    top: "110%",
    left: "-100%",
}, 'ca')
tl2.from(".lem2", {
    rotate: "90deg",
    left: "100%",
    top: "110%"
}, 'ca')
tl2.from("#pepsi", {
    rotate: "90deg",
    top: "110%",
    left: "100%",
}, 'ca')

tl2.to("#orng", {
    width: "18%",
    left: "42%",
    top: "204%"
}, 'ca')


tl2.to("#fanta", {
    width: "35%",
    top: "210%",
    left: "33%",
}, 'ca')
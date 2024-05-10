function timelineone(){
  var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#home",
        start: "top top",
        scrub: 1,
        pin: true,
        end:"bottom -250%"

    }
})


  tl.to("#circle #btm img",{
    rotate: "-180deg",
    scale:1,
    duration:1,
    stagger:.1,
    ease: Power1
},"uday")

   .to("#circle #top img",{
       scale:1,
       duration:1,
       stagger:.1,
       ease: Power1
   },"uday")

   .to("#cimage img",{
       scale: "0",
       duration:1,
       stagger:.1,
       ease: Power1
   },"uday")

   .to("#centerimg h5",{
    opacity: "0",
    stagger:.1,
    ease: Power1
  },"uday")

  .to("#overlay>h1#gallery",{
    bottom: "-50%",
    ease: Power1
  },"uday")

  .to("#gola",{
    top:"50%",
    scale: 2,
    ease: Power1
  },"uday")

  .to("#overlay>h1#pf",{
    rotate: 0,
    bottom: "10%",
    color: "white",
    ease: Power1
  },"tiwari")

  .to("#gola",{
    opacity: 0,
    duration:2.2,
    ease: Power1
  },"tiwari")

  .to("#smcircle",{
    scale: 0,
    stagger:.1,
    duration:2,
    ease: Power1
  },"tiwari")

  .to("#circle",{
    scale: 0,
    stagger:.1,
    duration:2,
    ease: Power1
  },"tiwari")

  .to("#pinkpart",{
    rotate: 0,
    top:0,
    duration:5,
    ease: Power1
  },"tiwari")

  .to("#pinkpart",{
    rotate: 0,
    top:"-70%",
    duration:3,
    ease: Power1
  })
}




function timelinetwo(){
  var tl2 = gsap.timeline({
   scrollTrigger: {
    trigger: "#second",
    scrub:1,
    start: "top top",
    // end:"bottom -250%",
    pin: true
   }
  })

  tl2
  .to(".circle",{
    top:"50%",
    stagger: .1,
    ease: Power1
  })

  
  .to(".circle",{
    left:"50%",
    stagger: .1,
    ease: Power1
  })


  .to(".pi",{
    scale:10,
    stagger: .1,
    ease: Power1
  })

  .to(".pi",{
    background:"linear-gradient(to right, #d5a7b4, #b8acd4)",
    stagger: .1,
    ease: Power1
  })

  .to("#stop h1",{
    left:"-200%",
    duration:8,
    ease: Power1
  },"a")


  .to("#sbtm #two",{
    opacity:0,
    delay:1,
    duration:2,
    ease: Power1
  },"a")


  .to("#sbtm #one",{
    opacity:1,
    duration:2,
    ease: Power1
  },"a")


}

timelineone();
timelinetwo();

// linear-gradient(to right, #d5a7b4, #b8acd4)
gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".main").style.transform
    ? "transform"
    : "fixed"*/
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();


let tl = gsap.timeline()

tl.from('.main-heading h1, .info h3, .main-img img',{
    y: 30,
    delay: 0.5,
    duration: 0.5,
    stagger: 0.2,
    opacity: 0
})
tl.from('.scroll-icon i',{
    y: 30,
    duration: 0.5,
    stagger: 0.2,
    opacity: 0
})

let mainImage = document.querySelector('.main-img')
let moreBtn = document.querySelector('.more-btn')

mainImage.addEventListener("mouseenter",()=>{
    gsap.to(moreBtn, {
        opacity: 1,
        scale: 1,
    })
})
mainImage.addEventListener("mouseleave",()=>{
    gsap.to(moreBtn, {
        opacity: 0,
        scale: 0,
    })
})
mainImage.addEventListener("mousemove",(dets)=>{
    gsap.to(moreBtn, {
        left: dets.x - 40,
        top: dets.y - 40
    })
})
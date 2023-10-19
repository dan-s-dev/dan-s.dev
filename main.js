

window.onscroll = function () {

    let isScrolledNav = false

    // Y offset to scroll past
    const ScrollPointNav = 10

    //HTML Elements
    const nav = document.querySelector('.nav-container')
    const head1 = document.querySelector('.heading-1')
    const head3 = document.querySelector('.heading-3')
    const heroLinks = document.querySelector('.hero-links')
    const heroLinksScroll = document.querySelector('.hero-links-scroll')
    
    if ( window.pageYOffset > ScrollPointNav && !isScrolledNav ) {
        nav.classList.add("scroll")
        head1.classList.add("scroll")
        head3.classList.add("scroll")
        heroLinks.classList.add("scroll")
        heroLinksScroll.classList.add("scroll")
        isScrolledNav = true
    }

    function onScroll() {
        if ( window.pageYOffset > ScrollPointNav && !isScrolledNav ) {
            nav.classList.add("scroll")
            head1.classList.add("scroll")
            head3.classList.add("scroll")
            heroLinks.classList.add("scroll")
            heroLinksScroll.classList.add("scroll")
            isScrolledNav = true
        }   else if ( window.pageYOffset <= ScrollPointNav && isScrolledNav ) {
            nav.classList.remove("scroll")
            head1.classList.remove("scroll")
            head3.classList.remove("scroll")
            heroLinks.classList.remove("scroll")
            heroLinksScroll.classList.remove("scroll")
            isScrolledNav = false
            }
    }

    onScroll ()
    return onScroll

}()

document.addEventListener('click', function ClickOutsideNav(event){
    const nav = document.querySelector('.mobile-nav-container')
    const navBtn = document.querySelector('.btn-burger')
    const checkbox = document.getElementById('mobile-nav')

    if(nav.contains(event.target) && checkbox.checked === true) {
        checkbox.checked = false
        console.log("clicked")
    }
});

let list = document.querySelectorAll(".grid-item");

console.log(list);
list.forEach(function(e){
    e.addEventListener('mouseover', function(){
        let item = this.children
        let child = item[0].children
        let cchild = child[1].children
        child[0].classList.add('hover')
        child[1].classList.add('hover')
        child[2].classList.add('hover')
        cchild[0].classList.add('hover')
        cchild[1].classList.add('hover')
    }, false);
    e.addEventListener('mouseout', function(){
        let item = this.children
        let child = item[0].children
        let cchild = child[1].children
        child[0].classList.remove('hover')
        child[1].classList.remove('hover')
        child[2].classList.remove('hover')
        cchild[0].classList.remove('hover')
        cchild[1].classList.remove('hover')
    }, false);
});

function scrollToHome() {
    const anchorHome = document.getElementById("home")
    anchorHome.scrollIntoView({behavior: "smooth"})
}
function scrollToAbout() {
    const anchorAbout = document.getElementById("about")
    anchorAbout.scrollIntoView({behavior: "smooth"})
}
function scrollToProjects() {
    const anchorAbout = document.getElementById("projects")
    anchorAbout.scrollIntoView({behavior: "smooth"})
}
function scrollToTech() {
    const anchorAbout = document.getElementById("tech")
    anchorAbout.scrollIntoView({behavior: "smooth"})
}
function scrollToDesigns() {
    const anchorAbout = document.getElementById("Designs")
    anchorAbout.scrollIntoView({behavior: "smooth"})
}


function lightingMode() {
    const lightingToggle = document.getElementById("lighting");
    const iconSun = document.getElementById("sun");
    const iconMoon = document.getElementById("moon");
    const lightingButton = document.getElementById("lightingButton");
    let root = document.documentElement;
    

    if (lightingToggle.checked) {
        root.style.setProperty('--color-text-white', "#ffffff");
        root.style.setProperty('--color-text-med', "#a9ad9b");
        root.style.setProperty('--color-text-dark', "#231f20");
        root.style.setProperty('--color-text-switch-btn', "#231f20");

        root.style.setProperty('--color-green', "#b5f200");
        root.style.setProperty('--color-light-blue', "#00e4ff");
        root.style.setProperty('--color-light-blue-btn', "#00e4ff");
        root.style.setProperty('--color-dark-blue', "#009dd1");
        root.style.setProperty('--color-darker-blue', "#005fbd");
        root.style.setProperty('--color-works-bg', "rgba(0, 0, 0, 0.5)");
        root.style.setProperty('--color-works-btn', "#00e4ff");

        root.style.setProperty('--color-bg-dark', "#231f20");
        root.style.setProperty('--header-shadow', "0vh 0vh 1.75rem rgba(0, 0, 0, 0.75)");
        root.style.setProperty('--hero-inset-shadow', "0 0 0.25rem var(--color-bg-dark)");
        root.style.setProperty('--hero-links-hue', "hue-rotate(0deg)");
        
        iconSun.src="./img/icons/SVG/icon_sun.svg"
        iconMoon.src="./img/icons/SVG/icon_moon.svg"
        
        root.style.setProperty('--swap-icon-url', "url(./img/icons/SVG/icon_link_swap_white.svg)");
        
    }
    if (!lightingToggle.checked) {
        root.style.setProperty('--color-text-white', "#231f20");
        root.style.setProperty('--color-text-med', "#808377");
        root.style.setProperty('--color-text-dark', "#231f20");
        root.style.setProperty('--color-text-switch-btn', "#231f20");

        root.style.setProperty('--color-green', "#009dd1");
        root.style.setProperty('--color-light-blue', "#00e4ff");
        root.style.setProperty('--color-light-blue-btn', "#b5f200");
        root.style.setProperty('--color-dark-blue', "#009dd1");
        root.style.setProperty('--color-darker-blue', "#009dd1");
        root.style.setProperty('--color-works-bg', "rgba(0, 0, 0, 0.5)");
        root.style.setProperty('--color-works-btn', "#005fbd");

        root.style.setProperty('--color-bg-dark', "#d9dfec");
        root.style.setProperty('--header-shadow', "0vh 0vh .75rem rgba(0, 0, 0, 0.25)");
        root.style.setProperty('--hero-inset-shadow', "0 0 0.1rem white");
        root.style.setProperty('--hero-links-hue', "hue-rotate(100deg)");

        iconSun.src="./img/icons/SVG/icon_sun_blue.svg"
        iconMoon.src="./img/icons/SVG/icon_moon_blue.svg"
        
        root.style.setProperty('--swap-icon-url', "url(./img/icons/SVG/icon_link_swap_black.svg)");
    }
    

}


const sliders = document.querySelectorAll(".slider-container");
const leftBtn = document.querySelectorAll(".left");
const rightBtn = document.querySelectorAll(".right");
const indexArray = [];
const containerWidth = document.querySelector(".social-slider").offsetWidth;
console.log("conatiner width " + containerWidth);

let ytVidIDs = [];
let clickIndex = 0;

// set up our state
let isDragging = false,
  startPos = [],
  currentTranslate = [],
  prevTranslate = [],
  animationID;

sliders.forEach((slider, i) => {
  currentTranslate[i] = 0;
  prevTranslate[i] = 0;
  startPos[i] = 0;
  leftBtn[i].dataset.index = i;
  rightBtn[i].dataset.index = i;

  const slides = Array.from(slider.children);




  slider.style.width = `calc(100% * ${slides.length})`;
  indexArray[i] = 0;
  leftBtn[i].addEventListener("click", (e) => {
    console.log("left btn clicked, array is " + indexArray[i])
    if (indexArray[i] > 0) {
        indexArray[i] = (indexArray[i] - 1);
    }
    touchEnd()
  });
  rightBtn[i].addEventListener("click", (e) => {
    console.log("right btn clicked, array is " + indexArray[i])
    if (indexArray[i] < (slides.length - 1)) {
        indexArray[i] = (indexArray[i] + 1);
    }
    touchEnd()
  });

  // add our event listeners
  slides.forEach((slide, index) => {
    const slideImage = slide.querySelector(".social-video-thumb");

    setNextPrevCards();

    // disable default image drag
    slideImage.addEventListener("dragstart", (e) => e.preventDefault());
    slideImage.addEventListener("dragstart", (e) =>
      e.stopImmediatePropagation()
    );
    // touch events

    slide.addEventListener("touchstart", touchStart(index));
    slide.addEventListener("touchend", touchEnd);

    slide.addEventListener("touchmove", touchMove);
    // mouse events
    slide.addEventListener("mousedown", touchStart(index));
    slide.addEventListener("mouseup", touchEnd);

    slide.addEventListener("mousemove", touchMove);
    slide.addEventListener("mouseleave", touchEnd);


  });

  // make responsive to viewport changes
  window.addEventListener("resize", setPositionByIndex);

  // prevent menu popup on long press
  window.oncontextmenu = function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  };

  function getPositionX(event) {
    return event.type.includes("mouse")
      ? event.pageX
      : event.touches[0].clientX;
  }

  // use a HOF so we have index in a closure
  function touchStart(index) {
    return function (event) {
      indexArray[i] = index;
      clickIndex = index;
      startPos[i] = getPositionX(event);
      isDragging = true;
      animationID = requestAnimationFrame(animation);
      slider.classList.add("grabbing");
    };
  }

  function touchMove(event) {
    // console.log("current trans " + currentTranslate[i]);
    if (isDragging) {
      const currentPosition = getPositionX(event);
      currentTranslate[i] = prevTranslate[i] + currentPosition - startPos[i];
    }
  }

  function touchEnd() {
    // console.log("touch end ");
    cancelAnimationFrame(animationID);
    isDragging = false;

    const movedBy = currentTranslate[i] - prevTranslate[i];

    // if moved enough negative then snap to next slide if there is one
    if (movedBy < -100 && indexArray[i] < slides.length - 1) indexArray[i] += 1;

    // if moved enough positive then snap to previous slide if there is one
    if (movedBy > 100 && indexArray[i] > 0) indexArray[i] -= 1;

    setPositionByIndex();

    slider.classList.remove("grabbing");
    setNextPrevCards();
  }

  function animation() {
    setSliderPosition();
    if (isDragging) requestAnimationFrame(animation);
  }

  function setPositionByIndex() {
    currentTranslate[i] = indexArray[i] * -containerWidth;

    prevTranslate[i] = currentTranslate[i];
    setSliderPosition();
  }

  function setSliderPosition() {
    slider.style.transform = `translateX(${currentTranslate[i]}px)`;
  }

  function setNextPrevCards() {
    if (indexArray[i] < 1) {
      nextSwipeCard = slides[indexArray[i] + 1].querySelector(".social-video-thumb");
      nextSwipeCard.classList.add("next-swipe-card");
      nextSwipeCard.classList.remove("cur-swipe-card");

      curSwipeCard = slides[indexArray[i]].querySelector(".social-video-thumb");
      curSwipeCard.classList.add("cur-swipe-card");

      prevSwipeCard = slides[indexArray[i]].querySelector(".social-video-thumb");
      prevSwipeCard.classList.remove("next-swipe-card");
      prevSwipeCard.classList.remove("prev-swipe-card");
    }
    if (indexArray[i] > 0 && indexArray[i] < slides.length) {
      try {
        // console.log("middle slide " + currentIndex);
        nextSwipeCard = slides[indexArray[i] + 1].querySelector(".social-video-thumb");
        nextSwipeCard.classList.add("next-swipe-card");
        nextSwipeCard.classList.remove("cur-swipe-card");

        curSwipeCard = slides[indexArray[i]].querySelector(".social-video-thumb");
        curSwipeCard.classList.remove("next-swipe-card");
        curSwipeCard.classList.remove("prev-swipe-card");
        curSwipeCard.classList.add("cur-swipe-card");

        prevSwipeCard = slides[indexArray[i] - 1].querySelector(".social-video-thumb");
        prevSwipeCard.classList.remove("next-swipe-card");
        prevSwipeCard.classList.remove("cur-swipe-card");
        prevSwipeCard.classList.add("prev-swipe-card");
      } catch (err) {
        // console.log("last slide " + currentIndex);
        nextSwipeCard = slides[indexArray[i]].querySelector(".social-video-thumb");

        curSwipeCard = nextSwipeCard;
        curSwipeCard.classList.add("cur-swipe-card");
        curSwipeCard.classList.remove("next-swipe-card");
        curSwipeCard.classList.remove("prev-swipe-card");

        prevSwipeCard = slides[indexArray[i] - 1].querySelector(".social-video-thumb");
        prevSwipeCard.classList.remove("next-swipe-card");
        prevSwipeCard.classList.remove("cur-swipe-card");
        prevSwipeCard.classList.add("prev-swipe-card");
      }
    }
  }
});
document.addEventListener("DOMContentLoaded", function () {
    console.log('nav');
    const toggleButton = document.querySelector(".burger");
    let isOpen = false;

    const timeline = gsap.timeline({ paused: true });

    timeline.to(".block", {
        duration: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        stagger: 0.075,
        ease: "power3.inOut"
    })

    timeline.to(".menu-title, .menu-item", {
        duration: 0.3,
        opacity: 1,
        stagger: 0.05
    }, "-=0.5");

    toggleButton.addEventListener("click", function () {
        if (isOpen) {
            timeline.reverse();
            document.getElementById("logo_name").style.color = "white";
            let elements = document.getElementsByClassName('site-content');

            if (elements.length > 0) {
                setTimeout(function () {
                    elements[0].style.zIndex = 2;
                }, 1000);
            }

            console.log('close');
        } else {
            timeline.play();
            console.log('open');
            document.getElementById("logo_name").style.color = "black";
            // document.getElementById("site-content-2").style.zIndex= "10000";
            document.getElementById("site-content").style.zIndex = "-10";

        }
        isOpen = !isOpen;
    });
});

// document.getElementById("logo_name").style.color = "red"; 
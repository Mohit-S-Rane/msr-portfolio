window.addEventListener("load", () => {
    const scroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        multiplier: 0.75,
        scrollFromAnywhere: true,
    });

    setTimeout(() => {
        scroll.update();
    }, 3000);
});

gsap.to("h1", 2, {
    // delay: 0.25,
    top: "-40px",
    ease: "power4.inOut",
    stagger: {
        amount: 0.125,
    },
});
gsap.to(".hero .hero-img", 0.05, { opacity: 1 });

gsap.from(".hero .hero-img", 1, {
    delay: 1.5,
    clipPath: "inset(0 100% 0 0)",
    ease: "power4.inOut",
});

gsap.to(".disc-img", 1, {
    rotate: 360,
    ease: "power2.inOut",
});

// Select the disc image element
const discImg = document.querySelector(".disc-img");

// Array of objects with random h4 and h3 content
const discContent = [
    {
        img: "../assets/logo/img1.png",
        // h3: "Angular",
    },
    {
        img: "../assets/logo/img2.png",
        // h3: "React",
    },
    {
        img: "../assets/logo/img3.png",
        // h3: "Node",
    },
    {
        img: "../assets/logo/img4.png",
        // h3: "AWS",
    },
    {
        img: "../assets/logo/img5.png",
        // h3: "MongoDB",
    },
    {
        img: "../assets/logo/img6.png",
        // h3: "SAP",
    },
    {
        img: "../assets/logo/img7.png",
        // h3: "PostgreSQL",
    },
    {
        img: "../assets/logo/img8.png",
        // h3: "Chef",
    },
    {
        img: "../assets/logo/img9.png",
        // h3: "Kubernetes",
    },
    {
        img: "../assets/logo/img10.png",
        // h3: "Ansible",
    },
    {
        img: "../assets/logo/img11.png",
        // h3: "Docker",
    },
    {
        img: "../assets/logo/img12.png",
        // h3: "Redis",
    },
];

// Initial index for content
let currentIndex = 0;

// Function to update the content of the disc image
function updateContent() {
    // Select the h4 and h3 elements inside the disc image
    // const h4Element = discImg.querySelector("h4");
    const imgElement = discImg.querySelector("img");
    // const h3Element = discImg.querySelector("h3");

    // Get the current item based on the currentIndex
    const currentItem = discContent[currentIndex];

    // Update the content with the current item
    imgElement.src = currentItem.img;
    // h4Element.textContent = currentItem.h4;
    // h3Element.textContent = currentItem.h3;

    // Increment the currentIndex
    currentIndex = (currentIndex + 1) % discContent.length;
}

// Add a click event listener to the disc image
discImg.addEventListener("click", () => {
    // Use GSAP to animate the disc image
    gsap.to(discImg, {
        scale: 0, // Scale down to 0
        rotation: "+=360", // Rotate by 360 degrees
        onComplete: () => {
            // Update the content
            updateContent();

            // After the first animation completes, scale up to normal size with rotation
            gsap.to(discImg, {
                scale: 1,
                rotation: "+=360",
            });
        },
    });
});

// Initial content update on page load
updateContent();
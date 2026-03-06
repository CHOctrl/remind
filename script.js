// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Initial Load Animation for the first text
gsap.from("#text1", {
    duration: 1.5,
    y: 100,
    opacity: 0,
    ease: "power4.out",
    skewY: 7,
    stagger: 0.1
});

// Scroll Animation for Section 2
gsap.from("#text2", {
    scrollTrigger: {
        trigger: "#text2",
        start: "top 85%",
        end: "top 20%",
        scrub: 1,
        toggleActions: "play none none reverse"
    },
    y: 150,
    scale: 0.9,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
});

// Scroll Animation for Section 3
gsap.from("#copy-container", {
    scrollTrigger: {
        trigger: "#copy-container",
        start: "top 90%",
        end: "top 40%",
        scrub: 1
    },
    y: 100,
    opacity: 0,
    rotateX: -30,
    duration: 1
});

// Floating background circles
gsap.to("#circle1", {
    x: 100,
    y: 50,
    duration: 8,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

gsap.to("#circle2", {
    x: -120,
    y: -80,
    duration: 10,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

// Copy to Clipboard Interaction
const copyContainer = document.getElementById('copy-container');
const pathText = document.getElementById('path-text');
const copyBadge = document.getElementById('copy-badge');

copyContainer.addEventListener('click', () => {
    const textToCopy = "\\\\hofssv.tisconet.com\\ho_rollout$";
    
    // Copy to clipboard
    navigator.clipboard.writeText(textToCopy).then(() => {
        // Success Animation
        gsap.to(copyBadge, {
            opacity: 1,
            scale: 1,
            y: -10,
            duration: 0.3,
            ease: "back.out(2)"
        });
        
        gsap.to(pathText, {
            color: "#f43f5e",
            duration: 0.1,
            yoyo: true,
            repeat: 1
        });

        // Reset badge
        setTimeout(() => {
            gsap.to(copyBadge, {
                opacity: 0,
                scale: 0.5,
                y: 0,
                duration: 0.5,
                ease: "power2.in"
            });
        }, 2000);
    });
});

// Parallax Main Container
document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 15;
    const y = (e.clientY / window.innerHeight - 0.5) * 15;
    
    gsap.to("main", {
        duration: 1.2,
        x: x,
        y: y,
        ease: "power2.out"
    });
});

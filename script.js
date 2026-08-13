
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-links a");


menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("open");

    const spans =
        menuBtn.querySelectorAll("span");


    if (navLinks.classList.contains("open")) {

        spans[0].style.transform =
            "rotate(45deg) translate(5px, 5px)";

        spans[1].style.opacity = "0";

        spans[2].style.transform =
            "rotate(-45deg) translate(5px, -5px)";

    } else {

        spans[0].style.transform = "";

        spans[1].style.opacity = "1";

        spans[2].style.transform = "";

    }

});


navItems.forEach(item => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("open");

        const spans =
            menuBtn.querySelectorAll("span");

        spans[0].style.transform = "";

        spans[1].style.opacity = "1";

        spans[2].style.transform = "";

    });

});




const typingElement =
    document.getElementById("typing");


const words = [
    "Cybersecurity Enthusiast",
    "Software Developer",
    "UI/UX Enthusiast",
    "Technology Explorer"
];


let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    const currentWord =
        words[wordIndex];


    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex + 1
            );

        charIndex++;


        if (
            charIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1) %
                words.length;

        }

    }


    const speed =
        deleting ? 50 : 90;


    setTimeout(
        typeEffect,
        speed
    );

}


typeEffect();




const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});




const sections =
    document.querySelectorAll("section");


const links =
    document.querySelectorAll(
        ".nav-links a"
    );


window.addEventListener(
    "scroll",
    () => {

        let current = "";


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 160;

            const sectionHeight =
                section.offsetHeight;


            if (
                window.scrollY >=
                sectionTop &&
                window.scrollY <
                sectionTop +
                sectionHeight
            ) {

                current =
                    section.getAttribute(
                        "id"
                    );

            }

        });


        links.forEach(link => {

            link.classList.remove(
                "active"
            );


            if (
                link.getAttribute(
                    "href"
                ) ===
                "#" + current
            ) {

                link.classList.add(
                    "active"
                );

            }

        });

    }
);




const topBtn =
    document.getElementById("topBtn");


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 500) {

            topBtn.classList.add(
                "show"
            );

        } else {

            topBtn.classList.remove(
                "show"
            );

        }

    }
);


topBtn.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);




const contactForm =
    document.getElementById(
        "contactForm"
    );


const formMessage =
    document.getElementById(
        "formMessage"
    );


contactForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const name =
            document.getElementById(
                "name"
            ).value.trim();


        const email =
            document.getElementById(
                "email"
            ).value.trim();


        const subject =
            document.getElementById(
                "subject"
            ).value.trim();


        const message =
            document.getElementById(
                "message"
            ).value.trim();


        if (
            !name ||
            !email ||
            !subject ||
            !message
        ) {

            formMessage.textContent =
                "Please fill in all fields.";

            formMessage.style.color =
                "#ff6b6b";

            return;

        }


        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (
            !emailPattern.test(email)
        ) {

            formMessage.textContent =
                "Please enter a valid email address.";

            formMessage.style.color =
                "#ff6b6b";

            return;

        }


        if (
            message.length < 10
        ) {

            formMessage.textContent =
                "Message should contain at least 10 characters.";

            formMessage.style.color =
                "#ff6b6b";

            return;

        }


        formMessage.textContent =
            "Message validated successfully! Thank you for contacting me.";

        formMessage.style.color =
            "#00e5a0";


        contactForm.reset();

    }
);




const cyberBackground =
    document.querySelector(
        ".cyber-background"
    );


document.addEventListener(
    "mousemove",
    event => {

        if (!cyberBackground) {
            return;
        }


        const x =
            (
                event.clientX /
                window.innerWidth -
                0.5
            ) * 2;


        const y =
            (
                event.clientY /
                window.innerHeight -
                0.5
            ) * 2;


        cyberBackground.style.transform =
            `translate(${x * 6}px, ${y * 6}px)`;

    }
);




window.addEventListener(
    "load",
    () => {

        document
            .querySelectorAll(".reveal")
            .forEach(
                (element, index) => {

                    if (index < 3) {

                        setTimeout(
                            () => {

                                element.classList.add(
                                    "visible"
                                );

                            },
                            index * 150
                        );

                    }

                }
            );

    }
);
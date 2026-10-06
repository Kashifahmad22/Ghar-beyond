/* =====================================================
   GHAR BEYOND
   JAVASCRIPT
===================================================== */


/* =====================================================
   MOBILE MENU
===================================================== */

const mobileMenuBtn =
    document.getElementById("mobileMenuBtn");

const mobileMenu =
    document.getElementById("mobileMenu");


mobileMenuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

});


/* Close mobile menu after clicking a link */

const mobileLinks =
    mobileMenu.querySelectorAll("a");


mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

    });

});


/* =====================================================
   CHAT
===================================================== */

const chatBtn =
    document.getElementById("chatBtn");

const chatBox =
    document.getElementById("chatBox");

const closeChat =
    document.getElementById("closeChat");


chatBtn.addEventListener("click", () => {

    chatBox.classList.toggle("active");

});


closeChat.addEventListener("click", () => {

    chatBox.classList.remove("active");

});


/* =====================================================
   MEETING LINK
===================================================== */

const meetingLink =
    window.GB_CONFIG && window.GB_CONFIG.meetingUrl;


const meetingBtn =
    document.getElementById("meetingBtn");

const chatMeeting =
    document.getElementById("chatMeeting");


meetingBtn.addEventListener("click", (event) => {

    event.preventDefault();

    window.open(
        meetingLink,
        "_blank",
        "noopener,noreferrer"
    );

});


chatMeeting.addEventListener("click", (event) => {

    event.preventDefault();

    window.open(
        meetingLink,
        "_blank",
        "noopener,noreferrer"
    );

});


/* =====================================================
   TRAVEL FORM
===================================================== */

const travelForm =
    document.getElementById("travelForm");


travelForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const destination =
        document.getElementById("destination").value;

    const date =
        document.getElementById("date").value;

    const travellers =
        document.getElementById("travellers").value;

    const budget =
        document.getElementById("budget").value;

    const requirements =
        document.getElementById("requirements").value.trim();


    /*
       WhatsApp number of Ghar Beyond.
    */

    const whatsappNumber =
        "917044173849";


    /*
       Build WhatsApp message.
    */

    const message = `Hello Ghar Beyond!

I would like to plan a trip.

Name: ${name}
Mobile: ${phone}
Destination: ${destination || "Not decided yet"}
Travel Date: ${date || "Flexible"}
Travellers: ${travellers || "Not specified"}
Budget: ${budget || "Not specified"}

Special Requirements:
${requirements || "None"}

Please help me plan my trip.`;


    /*
       Encode message for WhatsApp.
    */

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


    /*
       Open WhatsApp.
    */

    window.open(
        whatsappURL,
        "_blank",
        "noopener,noreferrer"
    );

});


/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        navbar.style.boxShadow =
            "0 8px 30px rgba(0,0,0,.06)";

    } else {

        navbar.style.boxShadow =
            "none";

    }

});


/* =====================================================
   CURRENT YEAR
===================================================== */

const year =
    new Date().getFullYear();

const footerYear =
    document.querySelector(".footer-bottom span");


if (footerYear) {

    footerYear.textContent =
        `© ${year} Ghar Beyond. All rights reserved.`;

}
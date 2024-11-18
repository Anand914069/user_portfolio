//sticky navigation bar start

const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 120);
});

//sticky navigation bar end

// toggle navigation bar start

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("active");
};
// toggle navigation bar end

//mouse follower start
function mousefollow() {
  if (window.innerWidth > 700) {
    Shery.mouseFollower({
      //Parameters are optional.
      skew: true,
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 0.5,
    });
  } else {
    Shery.mouseFollower({
      //Parameters are optional.
      skew: true,
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 0.5,
      display: none,
    });
  }
}
mousefollow();
//mouse follower end

// mouse with magnet effect start
Shery.makeMagnet(
  ".logo, .navlist li, #my_name, .social a, .h-btn, .btn, .m-text, .send-btn, .scroll-top, .whatsapp_float" /* Element to target.*/,
  {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  }
);
// mouse with magnet effect end

// typing text effect start
var typing = new Typed("#typing-text", {
  strings: [
    
    "Full Stack Website Developer",
    "PHP Developer",
    "Digital marketer",
  ],
  typeSpeed: 100,
  backSpeed: 40,
  loop: true,
});
// typing text effect end

$(".glare-box").tilt({
  glare: true,
  maxGlare: 0.5,
  maxTilt: 5,
});

// Contact form data send to email

const form = document.querySelector("form");
const name1 = document.querySelector("#name");
const mob = document.querySelector("#mob");
const email = document.querySelector("#email");
const msg = document.querySelector("#msg");

function validateForm() {
  // Validate Name (should not be empty and should be less than 50 characters)
  if (name1.value.trim() === "" || name1.value.length > 50) {
    Swal.fire("Validation Error", "Please enter a valid name.", "error");
    return false;
  }

  // Validate Mobile Number (should be exactly 10 digits)
  const mobRegex = /^[0-9]{10}$/;
  if (!mobRegex.test(mob.value)) {
    Swal.fire(
      "Validation Error",
      "Please enter a valid 10-digit phone number.",
      "error"
    );
    return false;
  }

  // Validate Email (HTML5 email validation should suffice here)
  if (!email.checkValidity()) {
    Swal.fire(
      "Validation Error",
      "Please enter a valid email address.",
      "error"
    );
    return false;
  }

  // Validate Message (should not be empty and should be less than 100 characters)
  if (msg.value.trim() === "" || msg.value.length > 100) {
    Swal.fire(
      "Validation Error",
      "Please enter a message within 100 characters.",
      "error"
    );
    return false;
  }

  return true; // All validations passed
}

function sendEmail() {
  const bodyMesg = `Full Name : ${name1.value}<br> Email : ${email.value} <br> Mobile no : ${mob.value} <br> Message : ${msg.value}`;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "anandsingh93353022@gmail.co",
    Password: "3783230E81AF67D29D39E7F98F25B0096B3D",
    To: "anandsingh93353022@gmail.com",
    From: "anishkr2842003@gmail.com",
    Subject: "Message come from portfolio",
    Body: bodyMesg,
  })
    .then((res) => {
      Swal.fire({
        icon: "success",
        title: "Email sent successfully!",
        text: "I will contact you immediately.",
        timer: 2000,
      });
      console.log(res)
    })
    .catch(() => {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to send the email. Please try again later.",
        timer: 2000,
      });
    });
}
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent the form from submitting by default
  if (validateForm()) {
    // Show loading alert
    Swal.fire({
      title: "Now loading",
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    sendEmail(); // Call the email sending function
    form.reset(); // Reset the form
  }
});
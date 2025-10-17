
window.addEventListener("scroll", function () {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Dark Mode Toggle
  const toggleBtn = document.getElementById("themeToggle");
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
  });

  // Scroll to Top Button
  const scrollBtn = document.getElementById("scrollTopBtn");

  window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  };

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Hamburger Menu
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const navItems = document.querySelectorAll(".nav-item");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Close nav on item click (mobile)
  navItems.forEach(item => {
    item.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });

// Contact form EmailJS integration
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const status = document.getElementById("formStatus");
  const sendBtn = document.getElementById("sendBtn");

  sendBtn.disabled = true;
  sendBtn.textContent = "Sending...";

  emailjs.send("service_w3vzucw","template_1quqqr9");
    .then(() => {
      status.textContent = "✅ Message sent successfully!";
      status.style.color = "green";
      this.reset();
      sendBtn.disabled = false;
      sendBtn.textContent = "Send Message";
    }, (error) => {
      status.textContent = "❌ Failed to send message. Please try again.";
      status.style.color = "red";
      sendBtn.disabled = false;
      sendBtn.textContent = "Send Message";
      console.error("EmailJS Error:", error);
    });
});




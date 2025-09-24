const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const paragraphs = entry.target.querySelectorAll("p");
        paragraphs.forEach((paragraph) => {
          paragraph.classList.add("visible");
        });
        observer.unobserve(entry.target); // Stop observing once animation is triggered
      }
    });
  },
  {
    threshold: 0.1, // Trigger when 10% of the div is visible
  }
);

const descriptionDiv = document.querySelector(".description");
observer.observe(descriptionDiv);

const button = document.querySelector(".btn");
const nav = document.querySelector(".nav");

const displayButton = () => {
  window.addEventListener("scroll", () => {
    console.log(window.scrollY);

    if (window.scrollY > 100) {
      button.style.display = "block";
      nav.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    } else {
      button.style.display = "none";
    }
  });
};

const scrollToTop = () => {
  button.addEventListener("click", () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    console.log(event);
  });
};

displayButton();
scrollToTop();

const cards = document.querySelectorAll(".room-card");

    const revealOnScroll = () => {
      const triggerBottom = window.innerHeight * 0.85;
      cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerBottom) {
          card.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    window.addEventListener("load", revealOnScroll);


const slides = document.querySelector(".slides");
    const slideItems = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const dots = document.querySelectorAll(".dot");

    let index = 0;

    const showSlide = (i) => {
      index = (i + slideItems.length) % slideItems.length;
      slides.style.transform = `translateX(${-index * 100}%)`;
      dots.forEach((dot, idx) => {
        dot.classList.toggle("active", idx === index);
      });
    };

    const nextSlide = () => showSlide(index + 1);
    const prevSlide = () => showSlide(index - 1);

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    dots.forEach((dot, idx) => {
      dot.addEventListener("click", () => showSlide(idx));
    });

    // Auto play every 6s
    setInterval(nextSlide, 6000);



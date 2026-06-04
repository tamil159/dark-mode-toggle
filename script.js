const testimonials = [
  {
    name: "Constantine V",
    photo:
      "https://randomuser.me/api/portraits/men/1.jpg",
    text:
      "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best."
  },

  {
    name: "Sophia",
    photo:
      "https://randomuser.me/api/portraits/women/2.jpg",
    text:
      "This is amazing. I am really satisfied with the results. Highly recommended for everyone."
  },

  {
    name: "John Smith",
    photo:
      "https://randomuser.me/api/portraits/men/3.jpg",
    text:
      "The service was excellent and the experience was smooth from start to finish."
  }
];

const imgEl = document.getElementById("photo");
const textEl = document.getElementById("text");
const usernameEl = document.getElementById("username");

let idx = 0;

updateTestimonial();

function updateTestimonial() {
  const { name, photo, text } = testimonials[idx];

  imgEl.src = photo;
  textEl.innerText = text;
  usernameEl.innerText = name;

  idx++;

  if (idx === testimonials.length) {
    idx = 0;
  }

  setTimeout(updateTestimonial, 3000);
}
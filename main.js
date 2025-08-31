function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
    document.getElementById("overlay").classList.toggle("active");
}

// ---------------------------------------------------------------------------------------------------

const categories = document.getElementById('categories');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

let scrollAmount = 0;
const scrollStep = 200; // px per click

rightArrow.addEventListener('click', () => {
    rightArrow.style = categories;
    categories.style.gap = "58px";
    categories.style.marginLeft = "-80px";
});

leftArrow.addEventListener('click', () => {
    leftArrow.style = categories;
    categories.style.marginLeft = "0px";
});

                                            // EARBUDS SLIDER \\
// ---------------------------------------------------------------------------------------------------------

// Products array
const products = [
  {
    id: 1,
    title: "Zentality E-29 Ultra Concise V True Wireless Earbuds",
    image: "./assets/earbuds/earbuds 1.webp" ,
    currentPrice: 3859,
    originalPrice: 5000,
    discount: "23% OFF"
  },
  {
    id: 2,
    title: "Sony WH-1000XM5 Wireless ANC Headphones",
    image: "./assets/earbuds/earbuds 2.webp",
    currentPrice: 22999,
    originalPrice: 28000,
    discount: "18% OFF"
  },
  {
    id: 3,
    title: "SEGO Touch LCD Display Earbuds",
    image: "./assets/earbuds/earbuds 3.webp",
    currentPrice: 74999,
    originalPrice: 89000,
    discount: "16% OFF"
  },
  {
    id: 4,
    title: "Realme Buds T200 Lite",
    image: "./assets/earbuds/earbuds 4.webp",
    currentPrice: 8999,
    originalPrice: 11000,
    discount: "18% OFF"
  },
  {
    id: 5,
    title: "Sony WH-1000XM6 Wireless Headphones",
    image: "./assets/earbuds/earbuds 5.webp",
    currentPrice: 3859,
    originalPrice: 5000,
    discount: "23% OFF"
  },
  {
    id: 6,
    title: "QCY T32 AilyBuds Clear Wireless",
    image: "./assets/earbuds/earbuds 6.webp",
    currentPrice: 3859,
    originalPrice: 5000,
    discount: "23% OFF"
  },
  {
    id: 7,
    title: "Audionic Airbud 550",
    image: "./assets/earbuds/earbuds 7.webp",
    currentPrice: 3859,
    originalPrice: 5000,
    discount: "23% OFF"
  },
  {
    id: 8,
    title: "Sound Style T10 Stereo Earbuds",
    image: "./assets/earbuds/earbuds 8.webp",
    currentPrice: 3859,
    originalPrice: 5000,
    discount: "23% OFF"
  },
  {
    id: 9,
    title: "Audionic Wireless Airbuds 425",
    image: "./assets/earbuds/earbuds 9.webp",
    currentPrice: 3859,
    originalPrice: 5000,
    discount: "23% OFF"
  },
  {
    id: 10,
    title: "Lenovo HE05X Neckband Wireless",
    image: "./assets/earbuds/earbuds 10.webp",
    currentPrice: 3859,
    originalPrice: 5000,
    discount: "23% OFF"
  },
  {
    id: 11,
    title: "QCY MeloBuds Neo T31",
    image: "./assets/earbuds/earbud 11.webp",
    currentPrice: 3859,
    originalPrice: 5000,
    discount: "23% OFF"
  },
  {
    id: 12,
    title: "Samsung Galaxy Buds 3",
    image: "./assets/earbuds/earbuds 12.webp",
    currentPrice: 3859,
    originalPrice: 5000,
    discount: "23% OFF"
  }
];

const wrapper = document.getElementById("product-wrapper");

// Render cards dynamically
products.forEach(product => {
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide");

    slide.innerHTML = `
        <article class="card">
          <div class="image-wrap">
            <img src="${product.image}" alt="${product.title}">
          </div>
          <p class="title">${product.title}</p>
          <div class="price-row">
            <div class="price-left">
              <span class="current-price">RS. ${product.currentPrice}</span>
              <span class="original-price">RS. ${product.originalPrice}</span>
            </div>
            <span class="discount">${product.discount}</span>
          </div>
        </article>
      `;
    wrapper.appendChild(slide);
});

// Swiper initialization with 2 rows
const swiper = new Swiper('.swiper', {
    slidesPerView: 4.5,
    spaceBetween: 15,
    grid: {
        rows: 2,
        fill: 'row',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});
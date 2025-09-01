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

// Earbuds Products array
const earbudsProducts = [
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

// Correct wrapper ID
const earbudsWrapper = document.getElementById("earbuds-product-wrapper");

// Render cards dynamically
earbudsProducts.forEach(product => {
    const earbudsSlide = document.createElement("div");
    earbudsSlide.classList.add("swiper-slide", "earbuds-swiper-slide");

    earbudsSlide.innerHTML = `
        <article class="earbuds-card">
          <div class="earbuds-image-wrap">
            <img src="${product.image}" alt="${product.title}">
          </div>
          <p class="earbuds-title">${product.title}</p>
          <div class="earbuds-price-row">
            <div class="earbuds-price-left">
              <span class="earbuds-current-price">RS. ${product.currentPrice}</span>
              <span class="earbuds-original-price">RS. ${product.originalPrice}</span>
            </div>
            <span class="earbuds-discount">${product.discount}</span>
          </div>
        </article>
    `;
    earbudsWrapper.appendChild(earbudsSlide);
});

// Swiper initialization with 2 rows
const earbudsSwiper = new Swiper('.earbuds-swiper', {
    slidesPerView: 4.5,
    spaceBetween: 15,
    grid: {
        rows: 2,
        fill: 'row',
    },
    navigation: {
        nextEl: '.earbuds-swiper-button-next',
        prevEl: '.earbuds-swiper-button-prev',
    }
});

// ---------------------------------------------------------------------------------------------------------

// Watches Products array
const watchesProducts = [
  {
    id: 1,
    title: "Zentality Ultra Smart Smartwatch",
    image: "./assets/watches/watch 1.webp" ,
    currentPrice: 3859,
    originalPrice: 5000,
    discount: "23% OFF"
  },
  {
    id: 2,
    title: "Zero Luna Smart Watch",
    image: "./assets/watches/watch 2.webp",
    currentPrice: 22999,
    originalPrice: 28000,
    discount: "18% OFF"
  },
  {
    id: 3,
    title: "Samsung Galaxy Fit 3",
    image: "./assets/watches/watch 3.webp",
    currentPrice: 74999,
    originalPrice: 89000,
    discount: "16% OFF"
  },
  {
    id: 4,
    title: "Blaktron Storm S1 Smart Watch",
    image: "./assets/watches/watch 4.webp",
    currentPrice: 8999,
    originalPrice: 11000,
    discount: "18% OFF"
  },
  {
    id: 5,
    title: "Dany Thunder Smart Watch",
    image: "./assets/watches/watch 5.webp",
    currentPrice: 3859,
    originalPrice: 5000,
    discount: "23% OFF"
  },
  {
    id: 6,
    title: "Samsung Watch 8 44mm",
    image: "./assets/watches/watch 6.webp",
    currentPrice: 3859,
    originalPrice: 5000,
    discount: "23% OFF"
  },
  {
    id: 7,
    title: "Ultra Smart Watch with 7 Straps",
    image: "./assets/watches/watch 7.webp",
    currentPrice: 3859,
    originalPrice: 5000,
    discount: "23% OFF"
  },
  {
    id: 8,
    title: "Samsung Galaxy Watch 7 44mm",
    image: "./assets/watches/watch 8.webp",
    currentPrice: 3859,
    originalPrice: 5000,
    discount: "23% OFF"
  },
  {
    id: 9,
    title: "Apple Watch Series 10 Aluminnium (46mm)",
    image: "./assets/watches/watch 9.webp",
    currentPrice: 3859,
    originalPrice: 5000,
    discount: "23% OFF"
  },
  {
    id: 10,
    title: "Ultra Smart Watch with 10 Straps",
    image: "./assets/watches/watch 10.webp",
    currentPrice: 3859,
    originalPrice: 5000,
    discount: "23% OFF"
  },
  {
    id: 11,
    title: "HUAWEI Band 9",
    image: "./assets/watches/watch 11.webp",
    currentPrice: 3859,
    originalPrice: 5000,
    discount: "23% OFF"
  },
  {
    id: 12,
    title: "Apple Watch Ultra (49mm)",
    image: "./assets/watches/watch 12.webp",
    currentPrice: 3859,
    originalPrice: 5000,
    discount: "23% OFF"
  }
];

// Correct wrapper ID
const watchesWrapper = document.getElementById("watches-product-wrapper");

// Render cards dynamically
watchesProducts.forEach(product => {
    const watchesSlide = document.createElement("div");
    watchesSlide.classList.add("swiper-slide", "watches-swiper-slide");

    watchesSlide.innerHTML = `
        <article class="watches-card">
          <div class="watches-image-wrap">
            <img src="${product.image}" alt="${product.title}">
          </div>
          <p class="watches-title">${product.title}</p>
          <div class="watches-price-row">
            <div class="watches-price-left">
              <span class="watches-current-price">RS. ${product.currentPrice}</span>
              <span class="watches-original-price">RS. ${product.originalPrice}</span>
            </div>
            <span class="watches-discount">${product.discount}</span>
          </div>
        </article>
    `;
    watchesWrapper.appendChild(watchesSlide);
});

// Swiper initialization with 2 rows
const watchesSwiper = new Swiper('.watches-swiper', {
    slidesPerView: 4.5,
    spaceBetween: 15,
    grid: {
        rows: 2,
        fill: 'row',
    },
    navigation: {
        nextEl: '.watches-swiper-button-next',
        prevEl: '.watches-swiper-button-prev',
    }
});
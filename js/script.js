// Function to open the menu
function openMenu() {
  document.body.classList += " menu--open";
}

function closeMenu() {
  document.body.classList.remove("menu--open");
}

function injectContent() {
  // Sample data array
  const books = [
    {
      title: "Crack the Coding Interview",
      image: "./images/crack the coding interview.png",
      ratings: 4.5,
      price: 14.95,
    },
    {
      title: "Atomic Habits",
      image: "./images/atomic habits.jpg",
      ratings: 4.5,
      price: 14.95,
    },
    {
      title: "Can't Hurt Me",
      image: "./images/david goggins.jpeg",
      ratings: 4.5,
      price: 14.95,
    },
    {
      title: "Deep Work",
      image: "./images/deep work.jpeg",
      ratings: 4.5,
      price: 14.95,
    },
  ];

  const booksContainer = document.querySelector(".books");

  // Loop through books array and create HTML elements
  for (let i = 0; i < books.length; i++) {
    const book = books[i];

    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

    const bookImgWrapper = document.createElement("div");
    bookImgWrapper.classList.add("book__img--wrapper");

    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.classList.add("book__img");
    img.src = book.image;
    img.alt = book.title;

    const bookTitle = document.createElement("div");
    bookTitle.classList.add("book__title");
    bookTitle.textContent = book.title;

    const bookRatings = document.createElement("div");
    bookRatings.classList.add("book__ratings");
    const numRatings = Math.floor(book.ratings);
    const hasHalfStar = book.ratings % 1 !== 0;
    for (let j = 0; j < numRatings; j++) {
      const starIcon = document.createElement("i");
      starIcon.classList.add("fas", "fa-star");
      bookRatings.appendChild(starIcon);
    }
    if (hasHalfStar) {
      const halfStarIcon = document.createElement("i");
      halfStarIcon.classList.add("fas", "fa-star-half-alt");
      bookRatings.appendChild(halfStarIcon);
    }

    const bookPrice = document.createElement("div");
    bookPrice.classList.add("book__price");
    const originalPrice = document.createElement("span");
    originalPrice.classList.add("book__price--normal");
    originalPrice.textContent = `$${book.price}`;
    const salePrice = document.createElement("span");
    salePrice.textContent = `$${book.price}`;
    bookPrice.appendChild(originalPrice);
    bookPrice.appendChild(document.createTextNode(" "));
    bookPrice.appendChild(salePrice);

    figure.appendChild(img);
    bookImgWrapper.appendChild(figure);

    bookDiv.appendChild(bookImgWrapper);
    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookRatings);
    bookDiv.appendChild(bookPrice);

    booksContainer.appendChild(bookDiv);
  }
}



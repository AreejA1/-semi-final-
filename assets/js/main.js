/* slider--------------- */

      const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    autoplay: { delay: 4000,
         // Change slide every 4 seconds
       disableOnInteraction: false
        },
    // If we need pagination
    pagination: {
         el: '.swiper-pagination',
          clickable: true, 
          bulletClass: 'swiper-pagination-bullet', 
         bulletActiveClass: 'swiper-pagination-bullet-active',
          renderBullet: function (index, className) {
         return '<span class="' + className + '"></span>';
         },
        },
          

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    on: { init: function () { resetLoader(); },
     slideChange: function () { resetLoader(); }, 
    autoplay: function () { resetLoader(); },
     transitionEnd: function () { resetLoader(); } },

    speed: 1000
    , effect: 'fade', 
    // Enable the fade effect
     fadeEffect:  {  
         crossFade: true,
          // Enable crossFade
         },
        
});

function updatePageNumber() { 
    const totalSlides = swiper.slides.length - 2; 
    // Subtract 2 because Swiper clones slides for looping 
    const activeIndex = (swiper.realIndex + 1);
     const pageNumber = document.querySelector('.page-number');
      pageNumber.textContent = String(activeIndex).padStart(3, '0') + ' / ' + String(totalSlides).padStart(3, '0');
     }
     function resetLoader() { 
        const bullets = document.querySelectorAll('.swiper-pagination-bullet');
         bullets.forEach(bullet => { bullet.style.animation = 'none';
             bullet.offsetHeight;
         // Trigger a reflow, flushing the CSS changes
          bullet.style.animation = 'none'; 
         }); }
       

const dropdown = document.getElementById('dropdown-screen');
const navbaricon = document.querySelector(".navbar-icon");
const navSecondIicon = document.getElementById('nav-second-icon');
const firstIcon=document.getElementById('firstIcon');
const circle = document.querySelector('.circle');
const iconsNav= document.getElementById('icons-nav') ;
navbaricon.addEventListener("click", function () {



    if (dropdown.classList.contains('hidden')) {
        dropdown.classList.remove('hidden');
        circle.classList.toggle('running');
        dropdown.classList.add('visible');
        soso.setAttribute('style',"display: none;");
        iconsNav.setAttribute('style',"display: none;");
        firstIcon.style.position=" fixed";
        firstIcon.style.top=" 25px";
        firstIcon.style.right=" 50%";
       
        
      
    }
    else {
        dropdown.classList.remove('visible');
        dropdown.classList.add('hidden');
        soso.removeAttribute('style',"display: none;");
        iconsNav.removeAttribute('style',"display: none;");
    }

});
function startAnimation() {
    // Toggle the running class on click 
}
navSecondIicon.addEventListener("click", function () {


    if (dropdown.classList.contains('hidden')) {
        dropdown.classList.remove('hidden');
        dropdown.classList.add('visible');
    }
    else {
        dropdown.classList.remove('visible');
        dropdown.classList.add('hidden');
    }

});
function navigateTo(page) {
    window.location.href = page;
}

   /**products and categories----------------------------------------*/
   let products = {
    data: [
      {
        productName: "Regular White T-Shirt",
        category: "Apartment",
        price: "30",
        image: "./assets/img/Elegant-living-room.jpeg.webp",
      },
      {
        productName: "Beige Short Skirt",
        category: "Interior",
        price: "49",
        image: "assets/img/Royal-king-suite.jpg.webp",
      },
      {
        productName: "Sporty SmartWatch",
        category: "Interior",
        price: "99",
        image: "assets/img/luxuryTouch.webp",
      },
      {
        productName: "Basic Knitted Top",
        category: "House",
        price: "29",
        image: "assets/img/Hillside-Shelter.jpg.webp",
      },
      {
        productName: "Black Leather Jacket",
        category: "Architecture",
        price: "129",
        image: "assets/img/class-bulding.webp",
      },
      {
        productName: "Stylish Pink Trousers",
        category: "Interior",
        price: "89",
        image: "assets/img/queens-castle-sq.jpeg (1).webp",
      },
      {
        productName: "Brown Men's Jacket",
        category: "House",
        price: "189",
        image: "assets/img/Aristocratic-place.jpeg.webp",
      },
      {
        productName: "Comfy Gray Pants",
        category: "Apartment",
        price: "49",
        image: "assets/img/Scandinavian-room.jpg.webp",
      },
      
      {
        productName: "Comff",
        category: "Apartment",
        price: "49",
        image: "assets/img/European-style.jpg.webp",
      }
      ,
      
      {
        productName: "Comff",
        category: "House",
        price: "49",
        image: "assets/img/Vintage-sq.jpeg.webp",
      }
      ,
      
      {
        productName: "Comff",
        category: "Interior",
        price: "49",
        image: "assets/img/Platinum-sq.jpeg.webp",
      }
      ,
      
      {
        productName: "Comff",
        category: "Interior",
        price: "49",
        image: "assets/img/Dark-loft-sq.jpg.webp",
      }
    ],
  };
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Search button click

  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };




document.addEventListener('scroll', function() {
    const cards = document.querySelectorAll('.card');
   
    cards.forEach((card, index) => {
        const cardBottomOffset = getOffsetBottom(card);

        if (cardBottomOffset >= 0 ) {
            setTimeout(() => {
                card.classList.add('animate__animated', 'animate__fadeInUp');
                card.classList.remove('hide');
            }, index * 600); 
        }
    });
});

function getOffsetBottom(element) {
    const offsetParent = element.offsetParent;
    const elementHeight = element.offsetHeight;
    const elementOffsetTop = element.offsetTop;
    const parentHeight = offsetParent.offsetHeight;

    return parentHeight - (elementOffsetTop + elementHeight);
}


 



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
        productName: "Elegant Living Room",
        category: "Apartment",
        image: "./assets/img/Elegant-living-room.jpeg.webp",
        htmlPage:"elegantLivingRoom.html",
      },
      {
        productName: "Royal King Suite",
        category: "Interior",
        image: "./assets/img/Royal-king-suite.jpg.webp",
        htmlPage:"royalkingsuite.html",
      },
      {
        productName: "Luxury Touch",
        category: "Interior",
        image: "./assets/img/luxuryTouch.webp",
        htmlPage:"luxuryTouch.html",
      },
      {
        productName: "Hillside Shelter",
        category: "House",
        image: "./assets/img/Hillside-Shelter.jpg.webp",
        htmlPage:"hillsideShelter.html",
      },
      {
        productName: "Class Bulding",
        category: "Architecture",
        image: "./assets/img/class-bulding.webp",
        htmlPage:"class-bulding.html",
      },
      {
        productName: "Queens Castle",
        category: "Interior",
        image: "./assets/img/queens-castle-sq.jpeg (1).webp",
        htmlPage:"queenscastle.html",
      },
      {
        productName: "Aristocratic Place",
        category: "House",
        image: "./assets/img/Aristocratic-place.jpeg.webp",
        htmlPage:"aristocraticPlace.html",
      },
      {
        productName: "Scandinavian Room",
        category: "Apartment",
        image: "./assets/img/Scandinavian-room.jpg.webp",
        htmlPage:"scandinavianRoom.html",
      },
      
      {
        productName: "European Style",
        category: "Apartment",
        image: "./assets/img/European-style.jpg.webp",
        htmlPage:"europeanStyle.html",
      }
      ,
      
      {
        productName: "Vintage",
        category: "House",
        image: "./assets/img/Vintage-sq.jpeg.webp",
        htmlPage:"vintage.html",
      }
      ,
      
      {
        productName: "Platinum",
        category: "Interior",
        image: "./assets/img/Platinum-sq.jpeg.webp",
        htmlPage:"platinum.html",
      }
      ,
      
      {
        productName: "Dark Loft",
        category: "Interior",
        image: "./assets/img/Dark-loft-sq.jpg.webp",
        htmlPage:"darkLoft.html",
      }
    ],
  };
  const displayProduct = () => {
    let index=0;
    const result = products.data.map((card) => {
      return `<div class="card card--${index++} hide ${card.category} animate__animated animate__fadeInUp" >
          <div class="image-container">
          <img src="${card.image}"/>  </div>
            <div class="figcaption ">
              <span class="info">
                <a href="${card.htmlPage}">
                <span class="categorySpan">${card.category}</span>
                <h3 class ="animatedText">${card.productName}</h3>
                <i class="fa-solid fa-chevron-right"></i>
                </a>
              </span>
            </div>
          
          </div>`;
    }).join(''); // Join the array to a single string
    document.querySelector(".soso").innerHTML = result;
  };
  displayProduct();
  
  
  const cards = document.querySelectorAll('.card');


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
  
  

  
 




document.addEventListener('scroll', function() {
    const cards = document.querySelectorAll('.card');
   
    cards.forEach((card, index) => {
        const cardBottomOffset = getOffsetBottom(card);

        if (cardBottomOffset >= 0 ) {
            setTimeout(() => {
                card.classList.add('animate__animated', 'animate__fadeInUp');
                buttons.classList.add('animate__animated', 'animate__fadeInUp');
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
document.addEventListener("DOMContentLoaded", function() {
  const texts = document.querySelectorAll(".animatedText");

  texts.forEach(container => {
    const text = container.innerText;
    container.innerHTML = "";

    text.split(' ').forEach((word, wordIndex) => {
      const wordDiv = document.createElement('div');
      wordDiv.className = 'word';

      word.split('').forEach((char, charIndex) => {
        const span = document.createElement('span');
        span.className = 'letter';
        span.setAttribute('style', `--index:${charIndex}; left: calc(var(--h4-max-font-size) - ${charIndex}px);`);
        span.innerText = char;
      /* span.style.animation = `letterfadeInright 0.5s ease ${charIndex * 0.2}s forwards`;*/
        wordDiv.appendChild(span);
      });
      container.appendChild(wordDiv);
    });
  });
  const cards = document.querySelectorAll('.card');
let charIndex=0;
  cards.forEach(card => {
    charIndex++;
    card.addEventListener('mouseover', function() {
      const letters = card.querySelectorAll('.letter');
      const categoriesSpan= card.querySelectorAll('.categorySpan');
      letters.forEach(letter => {
        letter.style.animation = `fadeInRight 0.9s  forwards`;
        
       
      });
      categoriesSpan.forEach(categorySpan => {
        categorySpan.style.animation = `categorySpanDOWN 0.9s  forwards`;
        

      });
    });

    card.addEventListener('mouseout', function() {
      const letters = card.querySelectorAll('.letter');
      letters.forEach(letter => {
        letter.style.transform = ''; // Reset rotation
        letter.style.color = ''; // Reset color
        letter.style.fontWeight = ''; // Reset font weight
      });
    });

  });

  
 
});







  
    


 //Initially display all products
 window.onload = () => {
  filterProduct("all");
};

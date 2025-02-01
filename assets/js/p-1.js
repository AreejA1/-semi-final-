document.addEventListener('DOMContentLoaded', () => {
    const chars = document.querySelectorAll('.split-text__char');
    let switchPoint = 9; // Index of 't' in "Elegant" (0-based index)
    const spanChars = document.querySelectorAll('.split-text__char-span');
function animations (chars , switchPoint){
    chars.forEach((char, index) => {
        if (index <= switchPoint) {
            // Animate first group (from last char of "Elegant" backward)
            gsap.from(char, {
                x: -50,       // Move from the left
                opacity: 0,   // Start invisible
                duration: 0.8,
                delay: (switchPoint - index) * 0.059 ,// Reverse stagger
                ease: "power3.in"
                
            });
        } else {
            // Animate second group (from first char of "Living" forward)
            gsap.from(char, {
                x: 50,        // Move from the right
                opacity: 0,   // Start invisible
                duration: 0.8,
                delay: (index - switchPoint) * 0.059, 
                ease: "power3.in"
               
            });
        }
    }); 
}
animations(spanChars,4);
animations(chars,9);

    const text = "Was are delightful solicitude discovered collecting man.day Resolving neglected sir tolerably but existence.conveying for Day his put off unaffected".trim();
  const parts = text.split('.').map(part => part + '.'); // Split sentences by period

// Create columns dynamically and add them to the .about-info div
  const h3 = document.querySelector('.aboutInfoh3');
   parts.forEach((part, index) => {
    const Column = document.createElement('h3');
    Column.className = 'Column';
    Column.style.animationDelay = `${index * 0.2}s`; // Staggered animation delay
    Column.innerHTML = `${part}`;
    h3.appendChild(Column);
    
});
const animateOnScroll = () => {
const triggerPoint = window.innerHeight; // الجزء السفلي من النافذة
const line = document.querySelector('.line');
const Columns = document.querySelectorAll('.Column');


Columns.forEach(column => {
    const columnBottom = column.getBoundingClientRect().bottom;


    if (columnBottom <= triggerPoint) {
       
        Columns.forEach((Column, index) => {
            setTimeout(() => {
                Column.classList.add('animate__animated', 'animate__fadeInUp');
                Column.style.opacity = 1;
            }, index-1 * 30); // Staggered animation
        });

    
    }
});
}
window.addEventListener('scroll', animateOnScroll);
animateOnScroll();


 // Change circle outline color on hover for the 'big-circle' class
 document.querySelectorAll('.big-circle').forEach(item => {
    item.addEventListener('mouseenter', () => {
      document.querySelectorAll('.button-circles__circle').forEach(circle => {
    

        const svg = circle.querySelector('svg .circle');
        console.log('hd')
        svg.style.animation = 'loadingEffect .7s forwards';
      console.log('hhhh');
      });
    });

    item.addEventListener('mouseleave', () => {
      document.querySelectorAll('.button-circles__circle').forEach(circle => {
        circle.style.border = '2px solid rgba(136, 136, 136, .3)';
        const svg = circle.querySelector('svg .circle');
        svg.style.animation = '';
      });
    });
  });
  
  
  document.querySelectorAll('.section-nav-projects_inner_prev').forEach(item => {
 
    item.addEventListener('mouseenter', () => {

      document.querySelectorAll('.righLink').forEach(word => {
        word.style. display = 'block';
        word.style.animation = ' fadeInLeft .7s  forwards';
        const leftarrow=document.querySelector('.fa-chevron-left');
        leftarrow.style.animation = 'arrowfadeInLeft .7s  forwards';
      
      
      });
    });

    item.addEventListener('mouseleave', () => {
      document.querySelectorAll('.righLink').forEach(word => {
        word.style.animation = 'fadeOutRight .7s  forwards';
        const leftarrow=document.querySelector('.fa-chevron-left');
        leftarrow.style.animation = 'arrowfadeOutRight  .7s  forwards';
        
      });
    });
  });
  
  document.querySelectorAll('.section-nav-projects_inner_next').forEach(arrow=> {
 
    arrow.addEventListener('mouseenter', () => {

      document.querySelectorAll('.leftLink').forEach(word => {
        word.style. display = 'block';
        word.style.animation = 'fadeInRight .7s  forwards';
        const leftarrow=document.querySelector('.fa-chevron-right');
        leftarrow.style.animation = 'arrowfadeInRight  .7s  forwards';
      });
    });

    arrow.addEventListener('mouseleave', () => {
      document.querySelectorAll('.leftLink').forEach(word => {
        word.style.animation = 'fadeOutLeft .7s  forwards';
        const leftarrow=document.querySelector('.fa-chevron-right');
        leftarrow.style.animation = 'arrowfadeOutLeft  .7s  forwards';
      
        
      });
    });
  });


  
const rightText = "European Style".trim();
const rightparts = rightText.split(' ').map(part => part + ' '); // Split sentences by period

// Create columns dynamically and add them to the .about-info div
const rightProduct = document.querySelector('.rightProduct');
rightparts.forEach((rightpart, index) => {
    const righLink = document.createElement('div');
    righLink.className = 'righLink footer-split-text__char';
    righLink.style.animationDelay = `${index * 0.2}s`; // Staggered animation delay
    righLink.innerHTML = `<h3 class="rightinfo">${rightpart}</h3>`;
    rightProduct.appendChild(righLink);
    
});
/*-----------------*/
const lefttText = "Royal King Suite".trim();
const leftparts = lefttText.split(' ').map(part => part + ' '); // Split sentences by period

// Create columns dynamically and add them to the .about-info div
const leftProduct = document.querySelector('.leftProduct');
leftparts.forEach((leftpart, index) => {
    const leftLink = document.createElement('div');
    leftLink.className = 'leftLink footer-split-text__char';
    leftLink.style.animationDelay = `${index * 0.2}s`; // Staggered animation delay
    leftLink.innerHTML = `<h3 class="leftinfo">${leftpart}</h3>`;
    leftProduct.appendChild(leftLink);
    
});

});

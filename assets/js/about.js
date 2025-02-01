
    document.addEventListener('DOMContentLoaded', function() {
        // Split the h3 text into three parts
        const text = "We are Cassio – interior design agency Do danger in. to adieus ladies houses oh eldest Gone pure late gay. ham They sigh were not find are".trim();
        const parts = text.split('.').map(part => part + '.'); // Split sentences by period

        // Create columns dynamically and add them to the .about-info div
        const aboutInfoh3 = document.querySelector('.aboutInfoh3');
        parts.forEach((part, index) => {
            const column = document.createElement('div');
            column.className = 'column ';
            column.style.animationDelay = `${index * 0.2}s`; // Staggered animation delay
            column.innerHTML = `<h3 class="we">${part}</h3>`;
            aboutInfoh3.appendChild(column);
            
        });
       
        
        const ptext = "HOUSE INTERIOR DESIGN.APARTMENT INTERIOR DESIGN.HOTEL INTERIOR DESIGN.INDUSTRIAL DESIGN.OUTDOORS DESIGN.LANDSCAPE DESIGN".trim();
        const pparts = ptext.split('.').map(ppart => ppart + '.'); // Split sentences by period

        // Create columns dynamically and add them to the .about-info div
        const p = document.querySelector('.p');
        pparts.forEach((ppart, index) => {
            const pColumn = document.createElement('h6');
            pColumn.className = 'Pcolumn';
            pColumn.style.animationDelay = `${index * 0.2}s`; // Staggered animation delay
            pColumn.innerHTML = `${ppart}`;
            p.appendChild(pColumn);
            
        });

        const ctext = "Questions explained.agreeable preferred. strangers too him her. son Set put shyness. offices his females him distant Improve has. message besides shy. himself cheered however. how son".trim();
        const cparts = ctext.split('.').map(cpart => cpart + '.'); // Split sentences by period

        // Create columns dynamically and add them to the .about-info div
        const c = document.querySelector('.c');
        cparts.forEach((cpart, index) => {
            const cColumn = document.createElement('h6');
            cColumn.className = 'cColumn';
            cColumn.style.animationDelay = `${index * 0.2}s`; // Staggered animation delay
            cColumn.innerHTML = `${cpart}`;
            c.appendChild(cColumn);
            
        });
        
        
        
            // Split the h3 text into three parts
            const texth = "We love to design handcrafted interiors and think .outside of the box on each of our project".trim();
            const hparts = texth.split('.').map(hpart => hpart + '.'); // Split sentences by period
    
            // Create columns dynamically and add them to the .about-info div
            const midSectionh = document.querySelector('.midSectionh3');
            hparts.forEach((hpart, index) => {
                const column = document.createElement('div');
                column.className = 'hcolumn ';
                column.style.animationDelay = `${index * 0.2}s`; // Staggered animation delay
                column.innerHTML = `<h3 class="we">${hpart}</h3>`;
                midSectionh.appendChild(column);
                
            });
       
        

    
        const animateOnScroll = () => {
            const columns = document.querySelectorAll('.column');
            const triggerPoint = window.innerHeight; // الجزء السفلي من النافذة
            const line = document.querySelector('.line');
            const cColumns = document.querySelectorAll('.cColumn');
            const pColumns = document.querySelectorAll('.Pcolumn');
           const hcolumns =document.querySelectorAll('.hcolumn ')
           const aboutInfoh6= document.querySelector('.aboutInfoh6')
         // طباعة قيمة نقطة الزناد في وحدة التحكم
        
            columns.forEach(column => {
                const columnBottom = column.getBoundingClientRect().bottom;
                console.log(columnBottom); // طباعة قيمة المسافة السفلية في وحدة التحكم
        
                if (columnBottom <= triggerPoint) {
                  /*  column.classList.add('animate__animated', 'animate__fadeInUp');*/
                  // إظهار العنصر
                    column.style.animation = 'myf 1s';
                   
        
                    cColumns.forEach((cColumn, index) => {
                        setTimeout(() => {
                            cColumn.classList.add('animate__animated', 'animate__fadeInUp');
                            cColumn.style.opacity = 1;
                        }, index-1 * 30); // Staggered animation
                    });
        
                    pColumns.forEach((pColumn, index) => {
                        setTimeout(() => {
                            pColumn.classList.add('animate__animated', 'animate__fadeInUp');
                            pColumn.style.opacity = 1;
                        }, index-1 * 30); // Staggered animation
                    });
                }
            });

            hcolumns.forEach(hcolumn => {
                const hcolumnBottom = hcolumn.getBoundingClientRect().bottom;
             
        
                if (hcolumnBottom <= triggerPoint) {
                  /*  hcolumn.classList.add('animate__animated', 'animate__fadeInUp');*/
                  hcolumn.style.animation = 'myf 1s';
                    hcolumn.style.opacity = 1; // إظهار العنصر
                    aboutInfoh6.classList.add('animate__animated', 'animate__fadeInUp');
                }
            });
        };
        
        // إضافة مستمع الحدث scroll
        window.addEventListener('scroll', animateOnScroll);
        
        // تشغيل الدالة عند تحميل الصفحة لأول مرة
        animateOnScroll();
        
        
        // إضافة مستمع الحدث scroll
      
        
        
        
    });




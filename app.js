const observer = new IntersectionObserver((entries) => {
    
    entries.forEach((entry) => {
        if(entry.isIntersecting){

            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }


    });
});

const sections = document.querySelectorAll('.hidden');
sections.forEach((element) => observer.observe(element));

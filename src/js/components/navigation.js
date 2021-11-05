const links = document.querySelectorAll('.scroll-link');

  links.forEach(el => {
    el.addEventListener('click', (e)=>{
      e.preventDefault();

      const sectionID = e.target.getAttribute('href').substr(1);
      const sectionPosition = document.getElementById(sectionID).offsetTop;
      
      window.scrollTo({
        top: sectionPosition - 150,
        behavior: 'smooth'
      });
    });
  });
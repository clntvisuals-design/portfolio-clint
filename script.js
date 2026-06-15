
  let isLight = false;
  function toggleMode(){
    isLight = !isLight;
    document.getElementById('body').classList.toggle('light', isLight);
    document.getElementById('toggle-icon').textContent = isLight ? '🌙' : '☀';
    document.getElementById('toggle-label').textContent = isLight ? 'Dark Mode' : 'Light Mode';
  }

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('visible'); }
    });
  },{threshold:0.12});
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));


// Added enhancements
window.addEventListener('scroll',()=>{
  document.querySelectorAll('.nav-links a').forEach(link=>{
    const sec=document.querySelector(link.getAttribute('href'));
    if(sec){
      const top=sec.offsetTop-120;
      const bottom=top+sec.offsetHeight;
      if(window.scrollY>=top && window.scrollY<bottom){
        link.classList.add('active');
      } else link.classList.remove('active');
    }
  });
});

document.querySelectorAll('.pcard').forEach((card,i)=>{
  card.style.animationDelay=(i*0.05)+'s';
});

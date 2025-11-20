
// Menu toggle
document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav ul');
  if(toggle){
    toggle.addEventListener('click', ()=> nav.classList.toggle('open'));
  }
  // Gallery modal
  document.querySelectorAll('.gallery-thumb').forEach(img=>{
    img.addEventListener('click', ()=>{
      const src = img.getAttribute('data-src');
      const modal = document.getElementById('galleryModal');
      modal.querySelector('img').src = src;
      modal.classList.add('open');
      modal.style.display = 'flex';
    });
  });
  document.getElementById('galleryModal').addEventListener('click', (e)=>{
    if(e.target.id === 'galleryModal' || e.target.classList.contains('close')) {
      e.currentTarget.classList.remove('open');
      e.currentTarget.style.display = 'none';
    }
  });
  // Contact form
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const msg = form.message.value.trim();
      if(!name || !email || !msg){
        alert('Por favor completa todos los campos.');
        return;
      }
      alert('Formulario preparado para enviar');
      form.reset();
    });
  }
});

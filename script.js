const WHATSAPP_NUMBER = '51966840281';
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
menuBtn?.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('inscriptionForm').addEventListener('submit', function(e){
  e.preventDefault();
  const data = new FormData(this);
  const nombre = data.get('nombre') || '';
  const empresa = data.get('empresa') || '';
  const celular = data.get('celular') || '';
  const correo = data.get('correo') || '';
  const mensaje = data.get('mensaje') || 'Deseo información para inscribirme al Workshop de Power Apps SST.';
  const text = `Hola Ing. Jonathan, deseo inscribirme al Workshop de Power Apps SST.%0A%0A`+
    `Nombre: ${encodeURIComponent(nombre)}%0A`+
    `Empresa/Institución: ${encodeURIComponent(empresa)}%0A`+
    `Celular: ${encodeURIComponent(celular)}%0A`+
    `Correo: ${encodeURIComponent(correo)}%0A`+
    `Mensaje: ${encodeURIComponent(mensaje)}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
});
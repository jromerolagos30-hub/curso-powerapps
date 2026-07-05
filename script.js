const WHATSAPP_NUMBER = '51966840281';
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
if (menuBtn) menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));

document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('show'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const form = document.getElementById('leadForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {
      nombre: document.getElementById('nombre').value.trim(),
      empresa: document.getElementById('empresa').value.trim(),
      celular: document.getElementById('celular').value.trim(),
      correo: document.getElementById('correo').value.trim(),
      mensaje: document.getElementById('mensaje').value.trim()
    };
    const texto = `Hola Ing. Jonathan, deseo inscribirme al Workshop Power Apps SST.%0A%0A` +
      `Nombre: ${data.nombre}%0A` +
      `Empresa: ${data.empresa || 'No especifica'}%0A` +
      `Celular: ${data.celular}%0A` +
      `Correo: ${data.correo || 'No especifica'}%0A` +
      `Consulta: ${data.mensaje || 'Deseo recibir información del curso.'}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${texto}`, '_blank');
  });
}

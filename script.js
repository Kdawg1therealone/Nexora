const menu=document.querySelector('.menu');const nav=document.querySelector('.nav nav');menu.addEventListener('click',()=>nav.classList.toggle('open'));document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('contactForm').addEventListener('submit',e=>{
e.preventDefault();
const d=new FormData(e.target);
const subject=encodeURIComponent('Nexora Project Request — '+d.get('type'));
const body=encodeURIComponent(`Name / Username: ${d.get('name')}
Discord: kdawg9025
Email: kaydenrumble1234@gmail.com

Project Type: ${d.get('type')}

Project Details:
${d.get('details')}`);
window.location.href=`mailto:kaydenrumble1234@gmail.com?subject=${subject}&body=${body}`;
});
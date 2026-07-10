document.querySelectorAll('[data-full]').forEach(item=>item.addEventListener('click',()=>{
 const box=document.getElementById('lightbox');box.querySelector('img').src=item.dataset.full;box.classList.add('open');
}));
const box=document.getElementById('lightbox');
if(box){box.querySelector('button').addEventListener('click',()=>box.classList.remove('open'));box.addEventListener('click',e=>{if(e.target===box)box.classList.remove('open')});document.addEventListener('keydown',e=>{if(e.key==='Escape')box.classList.remove('open')})}

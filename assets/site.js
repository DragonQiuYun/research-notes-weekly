(function(){
  const root = document.documentElement;
  const btn = document.querySelector('[data-theme-toggle]');
  const saved = localStorage.getItem('research-theme');
  if(saved) root.setAttribute('data-theme', saved);
  function label(){
    if(!btn) return;
    btn.textContent = root.getAttribute('data-theme') === 'dark' ? '浅色' : '深色';
  }
  label();
  if(btn){
    btn.addEventListener('click', ()=>{
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('research-theme', next);
      label();
    });
  }
})();

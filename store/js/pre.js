
var initpre = function(){

  var li = document.createElement('link'),
  scr = document.createElement('script'),
  jsd = 'https://cdn.jsdelivr.net/gh/angeal185/pf/store/'

  li.rel = 'stylesheet';
  li.href = jsd + 'css/store.css';
  document.head.appendChild(styl);

  scr.src = jsd + 'js/store.js';
  document.body.appendChild(styl);

}

initpre();
initpre = undefined;
document.head.getElementById('prescr').remove();

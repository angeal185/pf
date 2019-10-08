
var initpre = function(){

  var li = document.createElement('link'),
  scr = document.createElement('script'),
  jsd = 'https://cdn.jsdelivr.net/gh/angeal185/pf/store/';

  li.rel = 'stylesheet';
  li.href = jsd + 'css/store.css';
  document.head.appendChild(li);

  scr.src = jsd + 'js/store.js';
  document.body.appendChild(scr);

  let nlink = document.getElementsByTagName('link');
  for (let i = 0; i < nlink.length; i++) {
    if(nlink[i].getAttribute('href') === '/asset/css/base?v=53'){
      nlink[i].remove()
    }
  }

}

initpre();
initpre = undefined;
console.log('pre finished!')
document.getElementById('prescr').remove();

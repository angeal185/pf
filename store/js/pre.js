
var initpre = function(){

  var li = document.createElement('link'),
  scr = document.createElement('script'),
  jsd = 'https://cdn.jsdelivr.net/gh/angeal185/pf/store/';

  li.rel = 'stylesheet';
  li.href = jsd + 'css/store.css';
  document.head.appendChild(li);

  scr.src = jsd + 'js/store.js';
  document.body.appendChild(scr);

}

initpre();
initpre = undefined;
console.log('pre finished!')
document.getElementById('prescr').remove();



var totop = h('div.totop.material-icons.shr8', {
  onclick: function (e) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}, 'expand_less'))

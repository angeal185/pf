

/*
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
*/


var totop = h('div.totop.material-icons.shr8', {
  onclick: function (e) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}, 'expand_less')


$k('.category-icons-2 li a img').on('load', function(){
  clonsole.log('img loaded');
})

//https://www.imjpg.com/a/uploads/2019/10/08/20191008131255602.png
//http://cambuilder.com/app/#/sitebuilder/edit?new_review_site_id=19081

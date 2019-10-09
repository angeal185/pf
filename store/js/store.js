const cl = console.log,
ce = console.error,
jp = JSON.parse,
js = JSON.stringify,
LS = localStorage,
SS = sessionStorage,
ls = {
  get: function(i){
    return jp(LS.getItem(i))
  },
  set: function(i, e){
    LS.setItem(i, js(e))
  },
  del: function(i){
    return LS.removeItem(i)
  }
},
ss = {
  get: function(i){
    return jp(SS.getItem(i))
  },
  set: function(i, e){
    SS.setItem(i, js(e))
  },
  del: function(i){
    return SS.removeItem(i)
  }
},
wow = new WOW({delay: '1s',duration: '1s'}),
signUpTpl = h('div.newsletter',
  h('form#emailSignupForm',
    h('div.row.inline-flex',
      h('div.col-md-6',
        h('h3.newsletterTitle', 'Sign up for our newsletter'),
        h('div.newsletterSub', 'Sign Up for Our Weekly Emails. Be the first to know about Deals &amp; Clearance! Unsubscribe Anytime. Your privacy is Important to us.')
      ),h('div.col-md-6',
          h('input#footer_email.text.field.fb-email.input-text.required-entry.validate-email',{
            type: 'text',
            name: 'email',
            placeholder: 'Enter Your Email Address'
          }),
          h('button#emailSignupBtn.button',{
            type: 'submit',
            title: 'Sign Up'
          }, 'SIGN UP'
        )
      )
    )
  )
),
recentTpl = h('div#recentviews.block',
  h('div.block-title.border-color1',
    h('h2.sidebar-header', 'Recently viewed')
  ),
  h('div#recentitems.media-list')
)

window.scrollTo({
  top: 0,
  behavior: 'smooth'
});

$k('*').contents().each(function() {
  if(this.nodeType === Node.COMMENT_NODE) {
    $k(this).remove();
  }
});

$k(document).ready(function() {
  wow.init();
  $k(document.body).fadeIn('slow')
  $k('.category-icons-2 li a img, .slider-item, .products-grid-homepage li').addClass('animated wow fadeIn');


  $k('body').prepend(
    h('div.logo-img',
      h('img.img-fluid', {
        src: 'https://www.imjpg.com/a/uploads/2019/10/08/20191008134654590.jpg'
      })
    )
  )

  $k('body').append(
    h('div.toTop',{
      onclick: function(){
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    },
    h('i.fa.fa-chevron-up')
    )
  )

  $k('.help-link').eq(0).remove();
  let srchform = $k('#search_mini_form'),
  satinfo = $k('.tm_headerlinkmenu'),
  cright = $k('.footer_bottom_inner address'),
  ftRight = $k('#footer'),
  nletter = $k('#emailSignupForm').parent('div').clone(true, true);

  $k('#emailSignupForm').parent('div').remove()

  $k('.header_top').append(srchform.clone(true));
  srchform.remove();

  $k('.breadcrumbs').eq(0).append(satinfo.clone(true));
  satinfo.remove();

  $k('.footer_custom').append($k('#header-img').clone().addClass('footer_logo'), cright.clone())
  cright.remove();

  $k('.last.help-link').removeClass('help-link').text('help')
  $k('.footer_bottom_inner').after(ftRight.clone());
  ftRight.remove()

  $k('.page .wrapper br').remove()

  $k('.col-main-inner').append(signUpTpl)

});

let cnf = {
  store: ['recent','saved']
}

for (let i = 0; i < cnf.store.length; i++) {
  if(!ls.get(cnf.store[i])){
    ls.set(cnf.store[i], [])
  }
}

function checkrecent(i){
  let recent = ls.get('recent');
  cl(i)

  if(i[0] === 'product'){
    //store recent
    let img = $k('.img-wrap').eq(0).find('img').attr('src'),
    url;

    if(!img || img === ''){
      img = $K('.product-image img').attr('src');
    }


    let obj = {
      img: img,
      title: i[2],
      id: i[1],
      price: $k('.price.actual-product-price').text(),
      stars: $k('#review_anchor .review-stars i.fa-star').length,
      save: $k('.price-box div').eq(2).find('span').text()
    }

    if(recent.length > 0){
      recent = recent.filter(function(o) {
        return o.id !== obj.id
      })
      recent.unshift(obj);
    } else {
      recent.push(obj);
    }

    if(recent.length > 5){
      recent = recent.slice(0, 5)
    }

    return ls.set('recent', recent)

  } else if(i[0] === 'category' || i[0] === 'topsextoys'){

    $k('#desktop-sidebar').prepend(recentTpl);

    if(recent.length === 0){
      return $k('#recentitems').text('no recently viewed items')
    }

    for (let i = 0; i < recent.length; i++) {
      url = ['', 'product', recent[i].id, recent[i].title].join('/');
      $k('#recentitems').append(
        h('div.media.recentitem',
          h('div.media-left',
            h('a', {
              href: url
              },
              h('img.media-object', {
                src:recent[i].img
              })
            )
          ),
          h('div.media-body',
            h('h5', recent[i].title.replace(/-/g, ' ')),
            h('h6', 'price: ', h('span', recent[i].price)),
            h('h6', 'save: ', h('span',  recent[i].save)),
            h('div.review-stars.recentstars'),
            h('div.viewrecent',
              h('a.viewrecentlnk',{
                href: url
              }, 'view')
            )
          )
        )
      )
      let len = recent[i].stars;
      for (let x = 0; x < len; x++) {
        $k('.recentstars').eq(i).append(h('i.fa.fa-star'))
      }
      for (let x = 0; x < (5 - len); x++) {
        $k('.recentstars').eq(i).append(h('i.fa.fa-star-o'))
      }
    }

  } else {
    //dont show
    return;
  }

}

checkrecent(location.pathname.slice(1).split('/'))

$k(document).ready(function() {
  $.getJSON('https://cdn.jsdelivr.net/gh/angeal185/pf/store/data/tags.json', function(data, textStatus) {
      /*optional stuff to do after success */
  });
});

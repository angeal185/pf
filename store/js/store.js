//store
var wow = new WOW({delay: '1s',duration: '1s'});

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
  ftLeft = $k('#footer'),
  nletter = $k('#emailSignupForm').parent('div').clone(true, true);

  $k('#emailSignupForm').parent('div').remove()

  $k('.header_top').append(srchform.clone(true));
  srchform.remove();

  $k('.breadcrumbs').eq(0).append(satinfo.clone(true));
  satinfo.remove();

  $k('.footer_custom').append($k('#header-img').clone().addClass('footer_logo'), cright.clone())
  cright.remove();

  $k('.last.help-link').removeClass('help-link').text('help')
  $k('.footer_bottom_inner').before(ftLeft.clone());
  ftLeft.remove()

  $k('.page .wrapper br').remove()

  $k('.col-main-inner').append(nletter.removeAttr('style').addClass('.newsletter'))

});

var signUpTpl = h('div.newsletter',
  h('form#emailSignupForm',
    h('div.block-content.row',
      h('div.col-md-6',

      ),h('div.col-md-6',
        h('input')
      )
    )
  )
)

  <div class="form-subscribe-header">
      <label for="newsletter" style="font-weight:bold;">Take 10% Off Your Order!&nbsp;</label><img class="hasToolTip" src="/images/assets/tooltip-icon.png" data-hasqtip="0">
      <div style="display:none;">Sign Up for Our Weekly Emails. Be the first to know about Deals &amp; Clearance! Unsubscribe Anytime. Your privacy is Important to us.</div>
      <input type="text" name="email" id="footer_email" title="Sign up for our newsletter" class="text field fb-email input-text required-entry validate-email" placeholder="Enter Your Email Address">
      <button type="submit" title="Sign Up" class="button" id="emailSignupBtn">SIGN UP</button>
  </div>

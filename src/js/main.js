
$('a.who').on('click', function(){
  console.log('funciona who');
 $('a.who').toggleClass('active').siblings().removeClass('active');
 $('div.tab-who').toggleClass('active').siblings().removeClass('active');
})
$('a.journals').on('click', function(){
  console.log('funciona journals');
  $('a.journals').toggleClass('active').siblings().removeClass('active');
  $('div.tab-journals').toggleClass('active').siblings().removeClass('active');
})
$('a.tutorials').on('click',function(){
  console.log('funciona tutorials');
  $("a.tutorials").toggleClass('active').siblings().removeClass('active');
  $('div.tab-tutorials').toggleClass('active').siblings().removeClass('active');
})
$('a.extras').on('click',function(){
  console.log('funciona extras');
})

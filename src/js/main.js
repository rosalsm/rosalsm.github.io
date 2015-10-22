
$('#who').on('click', function(){
  console.log('funciona');
 $(this).addClass('active').siblings().removeClass('active');
 $('div.tab-who').addClass('active').siblings().removeClass('active');
})
$('#journals').on('click', function(){
  console.log('funciona journals');
  $(this).addClass('active').siblings().removeClass('active');
  $('div.tab-journals').addClass('active').siblings().removeClass('active');
})

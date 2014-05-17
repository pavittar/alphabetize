$(document).ready(function(){
  $('.alphabetize').alphabetize()
  //  ---------------------------------------------------------------
  
  $('.alphabetize-reverse').alphabetize({
    alphabets: lower,
    reverse: true
  })
  //  ---------------------------------------------------------------

  $('.alphabetize-hide-empty').alphabetize({
    showEmpty: false, 
    showUnknown: false
  })
  //  ---------------------------------------------------------------

  $(".alphabetizeRunner").click(function(){
    $('.alphabetize-it').alphabetize()
    $(this).hide()
    $(".alphabetizeStopper").show()
  })
  //  ---------------------------------------------------------------

  $(".alphabetizeStopper").click(function(){
    $('.alphabetize-it').alphabetize('destroy')
    $(this).hide()
    $(".alphabetizeRunner").show()
  })
  //  ---------------------------------------------------------------
  
  element = $('.alphabetize-styled')
  element.alphabetize({
    emptyTemplate: '<b>I am empty</b>',
    showEmpty: false
  })
  
  alphabet = element.find('.alphabet')
  alphabet.addClass('toggle-down').next().hide()
 
  alphabet.click(function() { 
    $(this).next().slideToggle()
    $(this).toggleClass('toggle-down toggle-up')
  })
  //  ---------------------------------------------------------------
})
(function( $, window, undefined ) {
  upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']  

  $.fn.alphabetize = function( options ) {
    that = this

    defaults = {
      alphabets: upper,
      showEmpty: true,
      alphabetClass: 'alphabet'
    };
    settings = $.extend( {}, defaults, options );
    debug(settings)

    data     = that.find('li')
    content  = data.map(function(){ return $(this).html() })
    words    = data.map(function(){ return $(this).text() })

    

    // result   = []
    // settings.alphabets.forEach(function(alphabet) {
    //   container = $('<li class="'+alphabet+'">'+alphabet+'<ul></ul></li>')

    //   words.each(function(i, word){
    //     first_char = word.substr(0, 1).toUpperCase()
    //     if (alphabet == first_char) {
    //       container.find('ul').append(data[i].outerHTML)
    //     }
    //     console.log(1)
    //   })
    //   result.push(container)
    // })
    // that.html(result)

    alphabetObject = makeObject(settings.alphabets)

    words.each(function(i ,word){
      first_char = word.charAt(0)
      
      if (first_char.toUpperCase() in alphabetObject) {
        alphabetObject[first_char.toUpperCase()].push(data[i].outerHTML)
      } else if (first_char.toLowerCase() in alphabetObject) {
        alphabetObject[first_char.toLowerCase()].push(data[i].outerHTML)
      }
    })

    elements = []
    resultKeys = Object.keys(alphabetObject)    
    resultKeys.forEach(function(key){
      if (settings.showEmpty || alphabetObject[key] != '') {
        e = $('<li>', { 
          class: key,
          html: $('<span>', { text: key })
        }).append(
          '<ul>'+ alphabetObject[key].join('') +'</ul>'
        )      
        elements.push(e)
      }
    })
    that.html(elements)

  };

  function makeObject(alphabets) {
    object = {}
    alphabets.forEach(function(alphabet){
      object[alphabet] = []
    })
    return object
  }
  // Private function for debugging.
  function debug( obj ) {
    if ( window.console && window.console.log ) {
      console.log(obj)
    }
  };
})( jQuery, window );
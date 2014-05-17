// alphabetize.js
// version 1.0.0
// (c) 2014 Pavittar Gill [https://www.linkedin.com/pub/pavittar-gill/54/b33/41b]
// released under the MIT license

(function( $, window, undefined ) {
  upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']  

  $.fn.alphabetize = function( args ) {
    if (args === undefined) args = {}
    that = this

    if      (typeof args == 'string') action  = args
    else if (typeof args == 'object') options = args

    defaults = {
      alphabets       : upper,
      showEmpty       : true,
      
      emptyTemplate   : null,
      groupClass      : 'alphabetGroup',
      alphabetClass   : 'alphabet',
      groupValueClass : 'alphabetGroupElement',
      
      reverse         : false,
      showUnknown     : true
    }
    settings = $.extend( {}, defaults, options )

    additions()

    if (!that.hasClass('alphabetized')) {
      data  = that.find('li')
      words = data.map(function(){ return $(this).text() })

      alphabetObject = makeObject(settings.alphabets)
      mapWordsToAlphabets()
      that.addClass('alphabetized').html( generateHTML() )

    } else if (action == 'destroy') {
      that.removeClass('alphabetized').html( data )
    
    } else {
      // exception goes here
    }
    return that
  }

  // some defaults for plugin's internal usage
  function additions() {
    settings.alphabets = settings.alphabets.slice(0)
    if (settings.showUnknown) { settings.alphabets.push('#') }
  }

  // make alphabet key and empty array as value
  // to push matched elements in the value array later
  // e.g { a: [], ... }
  function makeObject(alphabets) {
    if (settings.reverse) alphabets = alphabets.reverse()
    object = {}
    alphabets.forEach(function(alphabet){ object[alphabet] = [] })
    return object
  }

  // push the matched element into matched key
  // lowercase || uppercase key
  // e.g { a: [<li>apple</li>], b: [], ... }
  function mapWordsToAlphabets() {
    words.each(function(i ,word){
      first_char = word.charAt(0)
      if (first_char.toUpperCase() in alphabetObject) { alphabetObject[first_char.toUpperCase()].push(data[i].outerHTML) } else
      if (first_char.toLowerCase() in alphabetObject) { alphabetObject[first_char.toLowerCase()].push(data[i].outerHTML) } else
      if (settings.showUnknown)                          { alphabetObject['#'].push(data[i].outerHTML) }
    })
  }

  // prepare the HTML to update the DOM
  function generateHTML() {
    elements = []
    // find all the keys to loop over the object
    resultKeys = Object.keys(alphabetObject)    
    
    resultKeys.forEach(function(key){
      if (settings.showEmpty             || 
          settings.emptyTemplate != null || 
          alphabetObject[key] != '') {

        // prepare the letter html 
        // <li><span class="A">A</li>...
         e = $('<li>', { 
          class: key +' '+ settings.groupClass,
          html: $('<span>', { 
            text: key,
            class: settings.alphabetClass
          })
        })

        // append the matched element
        e.append(
          $('<ul>', {
            class: settings.groupValueClass,
            html: (alphabetObject[key] != '' ? alphabetObject[key].join('') : settings.emptyTemplate)
          })
        )
        elements.push(e)
      }
    })
    return elements
  }
})( jQuery, window )
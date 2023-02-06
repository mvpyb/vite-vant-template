const Dobounce = {
  created : function( el, binding ) {
    let timer
    el.addEventListener( 'click', () => {
      if ( timer ) {
        clearTimeout( timer )
      }
      timer = setTimeout( () => {
        binding.value()
      }, 1000 )
    } )
  }
}

export default Dobounce

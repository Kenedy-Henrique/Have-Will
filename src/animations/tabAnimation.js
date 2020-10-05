function makeTabAnimation(isShow, tabsContainer){
    if(!isShow){
        tabsContainer.animate([
          { right: '-270px'},
          { right: '0px'}
        ], {
          duration: 800,
          fill: "forwards"
        })
      } else {
        tabsContainer.animate([
          { right: '0px'},
          { right: '-270px'}
        ], {
          duration: 800,
          fill: "forwards"
        })
      }
}

export default makeTabAnimation;
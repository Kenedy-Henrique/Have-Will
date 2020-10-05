function makeShowTabsBtnAnimation(isShow, tabsContainer){
    if(!isShow){
        tabsContainer.animate([
          { right: '40px'},
          { right: '310px'}
        ], {
          duration: 800,
          fill: "forwards"
        })
      } else {
        tabsContainer.animate([
          { right: '310px'},
          { right: '40px'}
        ], {
          duration: 800,
          fill: "forwards"
        })
      }
}

export default makeShowTabsBtnAnimation;
function makeShowTabsBtnAnimation(isShow, tabsContainer){
    if(!isShow){
        tabsContainer.animate([
          { right: '3%'},
          { right: '310px'}
        ], {
          duration: 800,
          fill: "forwards"
        })
      } else {
        tabsContainer.animate([
          { right: '310px'},
          { right: '3%'}
        ], {
          duration: 800,
          fill: "forwards"
        })
      }
}

export default makeShowTabsBtnAnimation;
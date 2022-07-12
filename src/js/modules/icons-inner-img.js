export const handler = function(event) {
  let iconsWrapper = event.target.parentNode.parentNode.parentNode.lastChild.firstChild
  console.log(event.target);
  if (event.type == 'onmouseenter') {
    iconsWrapper.classList.add("active__icons-inner-img")
  }
  if (event.type == 'onmouseleave' ) {
    iconsWrapper.classList.remove("active__icons-inner-img")
  }
};
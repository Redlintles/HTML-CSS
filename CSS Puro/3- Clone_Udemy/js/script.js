const arShow = document.querySelector("#ar-show");
const arLabel = document.querySelector("#aside-accordion-trigger");
const searchTrigger = document.querySelector("#search-icon");

arLabel.addEventListener("click", function() {

  if(!(arShow.checked)) {
    searchTrigger.checked = true;
    console.log("Foi");
  };
});


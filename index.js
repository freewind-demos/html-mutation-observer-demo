function addNew() {
  $('#xxx').text("sdfsdfdsf") ;
}

$(() => {
  const targetNode = document.querySelector("body");

  const observerOptions = {
    childList: true, // direct children
    attributes: true,
    subtree: true // descendants. Only available when childList is true
  };

  const observer = new MutationObserver(function () {
    console.log('DOM is changed')
  });

  observer.observe(targetNode, observerOptions);

});

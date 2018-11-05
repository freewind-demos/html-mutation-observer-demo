function addNew() {
  $('#main').append('<li>added</li>')
}

$(() => {
  const targetNode = document.querySelector("body");

  const observerOptions = {
    childList: true,
    attributes: true,
    subtree: true //Omit or set to false to observe only changes to the parent node.
  };

  const observer = new MutationObserver(function () {
    console.log('DOM is changed')
  });

  observer.observe(targetNode, observerOptions);

});

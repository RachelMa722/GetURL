

    console.log('entered function');
    const imageInfo = {};
  window.addEventListener('mouseover', function (event) {
      console.log('window event listener added');
      var currentElement = event.target;
      console.log(event.target);
      if (currentElement.tagName === 'IMG') {
        console.log(currentElement.outerHTML + "is a photo");
        imageInfo.source = currentElement.src;
        console.log("src is :" + imageInfo.source);
        alert(imageInfo.source.toString());
      }
    });

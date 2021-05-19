(function() {
  const getElt = document.getElementById.bind(document);

  function correctWidth() {
    const ratio = 1920 / 920;
    const previewIframe = getElt('preview-iframe');
    const width = previewIframe.clientWidth;
    previewIframe.setAttribute('height', Math.floor(width / ratio));
  }

  window.addEventListener('resize', correctWidth);
  document.addEventListener('DOMContentLoaded', correctWidth);
})();

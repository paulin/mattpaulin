/*
 * Lightweight click-to-enlarge for post/page images.
 * No dependencies. Idempotent (safe if loaded more than once).
 *
 * Behavior:
 *  - Any image inside the post/page content (.blog-post / main) becomes clickable.
 *  - Clicking opens a full-screen overlay showing the image at full size.
 *  - Close by clicking the backdrop, the X, or pressing Escape.
 *
 * Opt out per-image by adding class "no-zoom" to the <img>, e.g. in Markdown:
 *    ![alt](/path.png){:.no-zoom}
 */
(function () {
  if (window.__lightboxInit) return;
  window.__lightboxInit = true;

  var CONTENT_SELECTORS = ['.blog-post', 'article', 'main'];
  var overlay, overlayImg;

  function buildOverlay() {
    if (overlay) return;
    overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');

    var close = document.createElement('button');
    close.className = 'lightbox-close';
    close.setAttribute('type', 'button');
    close.setAttribute('aria-label', 'Close');
    close.innerHTML = '&times;';

    overlayImg = document.createElement('img');
    overlayImg.alt = '';

    overlay.appendChild(close);
    overlay.appendChild(overlayImg);
    document.body.appendChild(overlay);

    overlay.addEventListener('click', function (e) {
      // Close on backdrop or X; not when clicking the image itself.
      if (e.target !== overlayImg) closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeLightbox();
    });
  }

  function openLightbox(img) {
    buildOverlay();
    // Prefer a linked full-res source if present, else the displayed src.
    var full = img.getAttribute('data-full') || img.currentSrc || img.src;
    overlayImg.src = full;
    overlayImg.alt = img.alt || '';
    document.body.classList.add('lightbox-open');
    // Force reflow so the opacity transition runs.
    overlay.offsetHeight; // eslint-disable-line no-unused-expressions
    overlay.classList.add('is-open');
  }

  function closeLightbox() {
    if (!overlay) return;
    overlay.classList.remove('is-open');
    document.body.classList.remove('lightbox-open');
  }

  function isZoomable(img) {
    if (img.classList.contains('no-zoom')) return false;
    if (img.closest('a')) return false;            // already a link — leave it
    if (img.closest('.lightbox-overlay')) return false;
    // Skip decorative/tiny images (icons, avatars, emoji).
    var w = img.naturalWidth || img.width || 0;
    if (w && w < 150) return false;
    return true;
  }

  function enhance(img) {
    if (!isZoomable(img)) return;
    if (img.dataset.zoomBound) return;
    img.dataset.zoomBound = '1';
    img.classList.add('zoomable');
    img.addEventListener('click', function () {
      openLightbox(img);
    });
  }

  function scan() {
    var imgs = [];
    CONTENT_SELECTORS.forEach(function (sel) {
      document.querySelectorAll(sel + ' img').forEach(function (img) {
        if (imgs.indexOf(img) === -1) imgs.push(img);
      });
    });
    imgs.forEach(function (img) {
      // naturalWidth is only known once loaded; bind on load if needed.
      if (img.complete) {
        enhance(img);
      } else {
        img.addEventListener('load', function () { enhance(img); }, { once: true });
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', scan);
  } else {
    scan();
  }
})();

/**
 * LiteHub Web Presentation Interactive Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const slides = Array.from(document.querySelectorAll('.slide'));
  const totalSlides = slides.length;
  const currentSlideNumEl = document.getElementById('current-slide-num');
  const totalSlidesNumEl = document.getElementById('total-slides-num');
  const progressBarEl = document.getElementById('progress-bar');
  
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  const btnOverview = document.getElementById('btn-overview');
  const btnCloseOverview = document.getElementById('btn-close-overview');
  const btnFullscreen = document.getElementById('btn-fullscreen');
  const overviewModal = document.getElementById('overview-modal');
  
  const dotBtns = Array.from(document.querySelectorAll('.dot-btn'));
  const overviewCards = Array.from(document.querySelectorAll('.overview-card'));
  const saltoCards = Array.from(document.querySelectorAll('.salto-card'));

  let currentSlideIndex = 0;

  // Initialize display counts
  if (totalSlidesNumEl) {
    totalSlidesNumEl.textContent = String(totalSlides).padStart(2, '0');
  }

  /**
   * Update Slide View State
   * @param {number} index - Target slide index (0-based)
   */
  function goToSlide(index) {
    if (index < 0 || index >= totalSlides) return;

    // Remove active state from current slide
    slides.forEach((slide, idx) => {
      slide.classList.toggle('active', idx === index);
    });

    currentSlideIndex = index;

    // Update Counter
    if (currentSlideNumEl) {
      currentSlideNumEl.textContent = String(currentSlideIndex + 1).padStart(2, '0');
    }

    // Update Progress Bar
    if (progressBarEl) {
      const progressPercent = ((currentSlideIndex + 1) / totalSlides) * 100;
      progressBarEl.style.width = `${progressPercent}%`;
    }

    // Update Control Buttons state
    if (btnPrev) btnPrev.disabled = currentSlideIndex === 0;
    if (btnNext) {
      if (currentSlideIndex === totalSlides - 1) {
        btnNext.querySelector('span').textContent = 'Início';
      } else {
        btnNext.querySelector('span').textContent = 'Próximo';
      }
    }

    // Update Navigation Dots
    dotBtns.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentSlideIndex);
    });

    // Close overview modal if open
    if (overviewModal.classList.contains('active')) {
      overviewModal.classList.remove('active');
    }
  }

  function nextSlide() {
    if (currentSlideIndex < totalSlides - 1) {
      goToSlide(currentSlideIndex + 1);
    } else {
      // Loop back to first slide
      goToSlide(0);
    }
  }

  function prevSlide() {
    if (currentSlideIndex > 0) {
      goToSlide(currentSlideIndex - 1);
    }
  }

  // Button Listeners
  if (btnNext) btnNext.addEventListener('click', nextSlide);
  if (btnPrev) btnPrev.addEventListener('click', prevSlide);

  // Dot Navigation Listeners
  dotBtns.forEach((dot) => {
    dot.addEventListener('click', () => {
      const target = parseInt(dot.getAttribute('data-target'), 10) - 1;
      goToSlide(target);
    });
  });

  // Overview Modal Toggle
  function toggleOverview() {
    overviewModal.classList.toggle('active');
  }

  if (btnOverview) btnOverview.addEventListener('click', toggleOverview);
  if (btnCloseOverview) btnCloseOverview.addEventListener('click', toggleOverview);

  // Overview Cards Jump
  overviewCards.forEach((card) => {
    card.addEventListener('click', () => {
      const target = parseInt(card.getAttribute('data-jump'), 10) - 1;
      goToSlide(target);
    });
  });

  // Fullscreen Toggle
  if (btnFullscreen) {
    btnFullscreen.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch((err) => {
          console.log(`Error attempting to enable fullscreen: ${err.message}`);
        });
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    });
  }

  // SALTO interactive cards
  saltoCards.forEach((card) => {
    card.addEventListener('click', () => {
      saltoCards.forEach((c) => c.classList.remove('active'));
      card.classList.add('active');
    });
  });

  // Keyboard Navigation Controls
  document.addEventListener('keydown', (e) => {
    // Ignore keypresses if overview modal is open, except Escape
    if (overviewModal.classList.contains('active')) {
      if (e.key === 'Escape') {
        toggleOverview();
      }
      return;
    }

    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
      case 'PageDown':
      case ' ':
        e.preventDefault();
        nextSlide();
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
      case 'PageUp':
        e.preventDefault();
        prevSlide();
        break;
      case 'Home':
        e.preventDefault();
        goToSlide(0);
        break;
      case 'End':
        e.preventDefault();
        goToSlide(totalSlides - 1);
        break;
      case 'Escape':
        e.preventDefault();
        toggleOverview();
        break;
      case 'f':
      case 'F':
        if (btnFullscreen) btnFullscreen.click();
        break;
      default:
        break;
    }
  });

  // Touch Swipe Gestures
  let touchStartX = 0;
  let touchEndX = 0;

  document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, false);

  document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, false);

  function handleSwipe() {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
      nextSlide();
    } else if (touchEndX > touchStartX + swipeThreshold) {
      prevSlide();
    }
  }

  // Initial State
  goToSlide(0);
});

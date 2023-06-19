class Accordion {
  constructor(selector) {
    this.selector = document.querySelector(selector);
    this.items = this.selector.querySelectorAll('[data-accordion-item]');
  }
  renderAccordion() {
    this.selector.addEventListener('click', e => {
      const target = e.target;
      const item = target.closest('[data-accordion-item]');
      const head = target.closest('[data-accordion-head]');

      if (head) {
        const questionContent = item.querySelector('[data-accordion-body]');
        const contentHeight = questionContent.scrollHeight;

        if (item.classList.contains('active')) {
          item.classList.remove('active');
          questionContent.style.maxHeight = null;
        } else {
          this.items.forEach(currentItem => {
            currentItem.classList.remove('active');
            currentItem.querySelector('[data-accordion-body]').style.maxHeight = null;
          });

          item.classList.add('active');
          questionContent.style.maxHeight = `${contentHeight}px`;
        }
      }
    });


    // Open the accordion items that have the 'active' class in the HTML
    this.items.forEach(item => {
      if (item.classList.contains('active')) {
        const questionContent = item.querySelector('[data-accordion-body]');
        const questionContentHeight = questionContent.scrollHeight;
        console.log(questionContentHeight);

        questionContent.style.maxHeight = `${questionContentHeight}px`
      }
    });


  }

}

export default Accordion;

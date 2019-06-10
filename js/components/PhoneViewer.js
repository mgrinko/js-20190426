export default class PhoneViewer {
  constructor(element, props) {
    this.element = element;
    this.props = props;

    this.state = {
      currentPicture: this.props.phone.images[0],
    };

    this.render();

    this.element.addEventListener('click', (event) => {
      const delegateTargetBackButton = event.target.closest('[data-element="back-button"]');
      const delegateTargetPhoneThumbs = event.target.closest('[data-element="phone-thumbs"] img');
      const delegateTargetAddBasket = event.target.closest('[data-element="add-basket"]');

      if (delegateTargetBackButton) {
        this.props.onBack();
      }

      if (delegateTargetPhoneThumbs) {
        this.state.currentPicture = this.props.phone.images[ delegateTargetPhoneThumbs.dataset.srcImg ];
        this.render();
      }

      if (delegateTargetAddBasket) {
        this.props.addBasket(delegateTargetAddBasket.dataset.phoneId);
      }

      return;
    });
  }

  render() {
    const { phone } = this.props;

    this.element.innerHTML = `
      <div>
        <img class="phone" src="${ this.state.currentPicture }">
    
        <button data-element="back-button">Back</button>
        <button 
          data-element="add-basket"
          data-phone-id="${phone.id}"
        >Add to basket</button>
    
    
        <h1>${phone.name}</h1>
    
        <p>${phone.description}</p>
    
        <ul class="phone-thumbs" data-element="phone-thumbs">
          ${ phone.images.map((image, index) => `
            <li>
              <img src="${image}" data-src-img="${index}">
            </li>
          `).join('') } 
        </ul>
      </div>
    `;
  }
}

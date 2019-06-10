export default class PhoneViewer {
  constructor(element, props) {
    this.element = element;
    this.props = props;

    this.state = {
      currentPicture: this.props.phone.images[0],
      currentName: this.props.phone.name,
      currentDescr: this.props.phone.description,
    };

    this.render();

    this.element.addEventListener('click', (event) => {
      const delegateTarget = event.target.closest('[data-element="phone-link"]');

      if (!delegateTarget) {
        return;
      }

      this.props.onPhoneSelected(delegateTarget.dataset.phoneId);
    });
    this.element.addEventListener('click', (event) => {
      const delegateTarget =
        event.target.closest('[data-element="back-button"]');

      if (!delegateTarget) {
        return;
      }

      this.props.onBack();
    });
    
    this.element.addEventListener('click', (event) => {
      const delegateTarget =
        event.target.closest('[data-element="phone-img"]');

      if (!delegateTarget) {
        return;
      }

      this.state.currentPicture=delegateTarget.getAttribute('src');
      this.render();
    });
  }

  render() {

    const { phone } = this.props;


    this.element.innerHTML = `
      <div>
        <img class="phone" src="${ this.state.currentPicture}">
    
        <button data-element="back-button">Back</button>
        <button>Add to basket</button>
    
    
        <h1>${ this.state.currentName}</h1>
    
        <p>${ this.state.currentDescr}</p>
    
        <ul class="phone-thumbs">
        ${phone.images.map(image => `
          <li>
            <img data-element="phone-img" src="${image}">
          </li>
          `).join('')} 
        </ul>
      </div>
    `;
  }
}

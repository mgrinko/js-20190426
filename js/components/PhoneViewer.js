export default class PhoneViewer {
  constructor(element, props) {
    this.element = element;
    this.props = props;

    this.state = {
      currentPicture: this.props.phone.images[0],
    };

    this.render();

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
        event.target.closest('[data-element="thumbnail"]');

      if (!delegateTarget) {
        return;
      }

      this.state = {
        ...this.state,
        currentPicture: delegateTarget.src,
      };

      this.render();
    });
  }

  render() {
    const { phone } = this.props;
    const { currentPicture } = this.state;

    this.element.innerHTML = `
      <div>
        <img class="phone" src="${ currentPicture }">
    
        <button data-element="back-button">Back</button>
        <button>Add to basket</button>
    
        <h1>${phone.name}</h1>
        <p>${phone.description}</p>
    
        <ul class="phone-thumbs">
          ${phone.images.map(imageUrl => `
            <li>
              <img
                src="${imageUrl}"
                data-element="thumbnail"
              >
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  }
}

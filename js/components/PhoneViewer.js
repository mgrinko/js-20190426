import Component from '../Component.js';

export default class PhoneViewer extends Component {
  constructor(element, props) {
    super(element, props)


    this.state = {
      currentPicture: this.props.phone.images[0],
    };

    this.render();


    this.on('click', 'back-button', this.props.onBack);
    this.on('click', 'thumbnail', (event) => {
      this.state = {
        ...this.state,
        currentPicture: event.delegateTarget.src,
      };
    });
    this.on('click', 'add-button', () => {
      this.props.onAdd(this.props.phone.id)
    });



    this.element.addEventListener('click', (event) => {
      const delegateTarget = event.target.closest('[data-element="add-button"]');

      if (!delegateTarget) {
        return;
      }

      this.props.addToBasket(delegateTarget.dataset.phoneId)
    });
  }




  render() {
    const { phone } = this.props;
    const { currentPicture } = this.state;

    this.element.innerHTML = `
      <div>
        <img class="phone" src="${ currentPicture }">

        <button data-element="back-button">Back</button>
        <button data-element="add-button" data-phone-id="${phone.id}">Add to basket</button>


        <h1>${phone.name}</h1>

        <p>${phone.description}</p>
        <ul class="phone-thumbs">
          ${phone.images.map((imageUrl, number) => `
            <li>
              <img
              src="${imageUrl}"
              data-element="thumbnail">
            </li>
            `).join('')}
        </ul>
      </div>
    `;
  }
}

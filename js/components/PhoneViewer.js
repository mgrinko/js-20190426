import ImageGallery from '../api/gallery.js';

export default class PhoneViewer {
  
  
  constructor(element, props) {
    this.element = element;
    this.props = props;

    this.state = {
      currentPicture: this.props.phone.images[0],
    };

    this.render();

    this.element.addEventListener('click', (event) => {
      const backControl =
        event.target.closest('[data-element="back-button"]');

      if (backControl) {
        this.props.onBack();
        return;
      }

      const addToBasketControl =
        event.target.closest('[data-element="add-to-basket-button"]');

      if (addToBasketControl) {
        this.props.onAddToBasket(this.props.phone);
        return;
      }

    });

    new ImageGallery({
      thumbs: this.element.querySelectorAll(".phone-thumbs li"),
      bigImage: this.element.querySelector(".phone"),
      onThumbnailClick: (thumbnail, i) => { this.state.currentPicture = this.props.phone.images[i] },
    });

  }

  
  render() {
    const { phone } = this.props;

    this.element.innerHTML = `
      <div>
        <img class="phone" src="${ this.state.currentPicture }">

        <button data-element="back-button">Back</button>
        <button data-element="add-to-basket-button">Add to basket</button>

        <h1>${ phone.name }</h1>

        <p>${ phone.description }</p>

        <ul class="phone-thumbs">
          ${ phone.images.map( image => `
            <li>
              <img src="${ image }">
            </li>
          `).join("") }
        </ul>
      </div>
    `;

    // размышления: ставить обработчики здесь нагляднее, так как видна
    // DOM-структура компонента, можно найти необходимый элемент DOM
    // здесь; но тогда теряется смысл функции render() - только генерация
    // внутренностей компонента - нужно задать вопрос как лучше оформлять код
  }


}

'use strict';

export default class PhonesCatalog {
  constructor(element, props) {
    this.element = element;
    this.props = props;

    this.render();

    this.element.addEventListener('click', (event) => {
      const phoneLinkControl = event.target.closest('[data-element="phone-link"]');

      if (phoneLinkControl) {
        this.props.onPhoneSelected(phoneLinkControl.dataset.phoneId);
        return;
      }

      const addToBasketControl = event.target.closest('[data-element="add-to-basket-link"]');

      if (addToBasketControl) {
        const phone = this.props.phones.find( (phone) => phone.id == addToBasketControl.dataset.phoneId );
        if (phone) {
          this.props.onAddToBasket(phone);
          return;
        }
      }

    });
  }

  render() {
    this.element.innerHTML = `
      <ul class="phones">
        ${ this.props.phones.map(phone => `

          <li class="thumbnail">
            <a
              data-element="phone-link"
              data-phone-id="${phone.id}"
              href="#${phone.id}"
              class="thumb"
            >
              <img alt="${phone.name}" src="${phone.imageUrl}">
            </a>
  
            <div class="phones__btn-buy-wrapper">
              <a
                data-element="add-to-basket-link" 
                data-phone-id="${phone.id}"
                class="btn btn-success"
              >
                Add
              </a>
            </div>
  
            <a
              data-element="phone-link"
              data-phone-id="${phone.id}"
              href="#${phone.id}"
            >
              ${phone.name}
            </a>
            
            <p>${phone.snippet}</p>
          </li>
          
        `).join('') } 
      </ul>
    `;
  }
}

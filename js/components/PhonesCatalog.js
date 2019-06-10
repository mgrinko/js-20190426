'use strict';

export default class PhonesCatalog {
  constructor(element, props) {
    this.element = element;
    this.props = props;

    this.render();

    this.element.addEventListener('click', (event) => {
      const delegateTargetPhoneLink = event.target.closest('[data-element="phone-link"]');
      const delegateTargetAddBasket = event.target.closest('[data-element="add-basket"]');

      if (delegateTargetPhoneLink) {
        this.props.onPhoneSelected(delegateTargetPhoneLink.dataset.phoneId);
      }

      if (delegateTargetAddBasket) {
        this.props.addBasket(delegateTargetAddBasket.dataset.phoneId);
      }

      return;
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
                class="btn btn-success"
                data-element="add-basket"
                data-phone-id="${phone.id}"
              >Add</a>
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

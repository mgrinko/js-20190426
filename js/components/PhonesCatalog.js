'use strict';

export default class PhonesCatalog {
  constructor(element, props) {
    this.element = element;
    this.props = props;

    this.render();

    this.element.addEventListener('click', (event) => {
      const addToBasket = '[data-button-add=""]';
      const phoneItem = '[data-element="phone-link"]';
      const delegateTarget = event.target.closest(phoneItem) 
        || event.target.closest(addToBasket);
     
      if (!delegateTarget) {
        return;
      }

      if (delegateTarget === event.target.closest(phoneItem)) {
        this.props.onPhoneSelected(delegateTarget.dataset.phoneId);
      } else {
        this.props.onAddItem(delegateTarget.dataset.phoneName);
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
                data-button-add=""
                data-phone-name="${phone.name}" 
                class="btn btn-success">
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

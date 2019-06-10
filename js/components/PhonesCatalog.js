'use strict';

export default class PhonesCatalog {
    constructor(element, props) {
        this.element = element;
        this.props = props;

        this.render();

        this.element.addEventListener('click', (event) => {
            const delegateTarget = event.target.closest('[data-element="phone-link"]');

            if (!delegateTarget) {
                return;
            }

            this.props.onPhoneSelected(delegateTarget.dataset.phoneId);
        });

        this.element.addEventListener('click', (event) => {
            const delegateTarget = event.target.closest('.button-add');

            if (!delegateTarget) {
                return;
            }

            this.props.onAdd(delegateTarget.dataset.phoneName);
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
                    <a class="btn btn-success button-add"
                       data-phone-name="${phone.name}"
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

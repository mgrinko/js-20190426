import { getAll, getById } from '../api/phone.js';

export default class ShoppingCart {
  constructor(element, props) {
    this.element = element;
    this.props = props;

    this.state = {
      phones: getAll()
    };

    this.render();

    this.element.addEventListener('click', (event) => {
      const delegateTarget =
        event.target.closest('[data-element="delete-basket"]');
  
      if (!delegateTarget) {
        return;
      }
  
      this.props.deleteBasket(delegateTarget.dataset.phoneId);
    });
  }

  render() {
    const { basketItems } = this.props;
    const phones = {};
    this.state.phones.forEach( item => {
      phones[item.id] = item.name
    });
    
    this.element.innerHTML = `
      <section>
        <p>Shopping Cart</p>
        <ul>
        ${ basketItems.map( phoneId => `
          <li>
            ${ phones[phoneId] } 
            <button 
              data-element="delete-basket"
              data-phone-id="${phoneId}"
            >x</button>
          </li>
        `).join('') }
        </ul>
      </section>
    `;
  }
}

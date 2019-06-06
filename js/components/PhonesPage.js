import PhonesCatalog from './PhonesCatalog.js';
import PhoneViewer from './PhoneViewer.js';
import ShoppingCart from './ShoppingCart.js';
import { getAll, getById } from '../api/phone.js';

export default class PhonesPage {
  constructor(element) {
    this.element = element;

    this.state = {
      phones: getAll(),
      selectedPhone: null,
      basketItems: [],
    };

    this.render();
  }

  initComponent(constructor, props) {
    const container = this.element.querySelector(constructor.name);

    if (!container) {
      return;
    }

    return new constructor(container, props);
  }

  render() {
    this.element.innerHTML = `
      <div class="row">
        <!--Sidebar-->
        <div class="col-md-2">
          <section>
            <p>
              Search:
              <input>
            </p>
    
            <p>
              Sort by:
              <select>
                <option value="name">Alphabetical</option>
                <option value="age">Newest</option>
              </select>
            </p>
          </section>
    
          <section>
            <ShoppingCart></ShoppingCart>
          </section>
        </div>
    
        <!--Main content-->
        <div class="col-md-10">
          ${ this.state.selectedPhone ? `
            <PhoneViewer></PhoneViewer>
          ` : `
            <PhonesCatalog></PhonesCatalog>
          ` }
        </div>
      </div>
    `;

    this.initComponent(PhonesCatalog, {
      phones: this.state.phones,

      onPhoneSelected: (phoneId) => {
        this.state.selectedPhone = getById(phoneId);
        this.render();
      },

      onAddToBasket: (phone) => {
        const shoppingCart = this.components.shoppingCart;
        shoppingCart.addItem(phone);
        shoppingCart.render();
      }
    });

    this.initComponent(PhoneViewer, {
      phone: this.state.selectedPhone,

      onBack: () => {
        this.state.selectedPhone = null;
        this.render();
      },

      onAddToBasket: (phone) => {
        const shoppingCart = this.components.shoppingCart;
        shoppingCart.addItem(phone);
        shoppingCart.render();
      }
    });

    const shoppingCart = this.initComponent(ShoppingCart, {
      items: this.state.basketItems,
      onRemoveItem: (item) => { console.log(`remove ${ item.name }`); },
      onAddItem: (item) => { console.log(`add ${ item.name }`); },
    });

    this.components = {
      shoppingCart, 
    };

  }
}

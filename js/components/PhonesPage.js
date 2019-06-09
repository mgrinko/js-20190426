import PhonesCatalog from './PhonesCatalog.js';
import PhoneViewer from './PhoneViewer.js';
import { getAll, getById } from '../api/phone.js';
import Basket from './Basket.js';

export default class PhonesPage {
  constructor(element) {
    this.element = element;

    this.state = {
      phones: getAll(),
      selectedPhone: null,
      basketItems: ['MOTOROLA XOOM\u2122', 'Dell Streak 7'],
    };

    this.render();

    this.element.addEventListener('click', (event) => {
      const delegateTarget = event.target.closest('[data-element="basket-button"]');

      if (!delegateTarget) {
        return;
      }

      this.state.basketItems.push(delegateTarget.dataset.phoneName);
      this.render();
    });
  }

  initComponent(constructor, props) {
    const container = this.element.querySelector(constructor.name);

    if (!container) {
      return;
    }

    new constructor(container, props);
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

          <Basket></Basket>

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
    });

    this.initComponent(PhoneViewer, {
      phone: this.state.selectedPhone,

      onBack: () => {
        this.state.selectedPhone = null;
        this.render();
      }
    });

    this.initComponent(Basket, {
      basket: this.state.basketItems,
    });
  }
}

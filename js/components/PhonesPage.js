import PhonesCatalog from './PhonesCatalog.js';
import PhoneViewer from './PhoneViewer.js';
import Basket from './Basket.js';
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

    new constructor(container, props);
  }

  render() {
    this.element.innerHTML = `
      <div class="row">
        <Basket></Basket> 
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

       onAddItem: (phoneName) => {
        this.state.basketItems.push(phoneName);
        this.render();
      },

      onPhoneSelected: (phoneId) => {
        this.state.selectedPhone = getById(phoneId);
        this.render();
      },
    });

    this.initComponent(PhoneViewer, {
      phone: this.state.selectedPhone,

       onAddItem: (phoneName) => {
        this.state.basketItems.push(phoneName);
        this.render();
      },

      onBack: () => {
        this.state.selectedPhone = null;
        this.render();
      }
    });

    this.initComponent(Basket, {
      basketItems: this.state.basketItems,

      // onAddItem: (phoneName) => {
      //   this.state.basketItems.push(phoneName);
      //   this.render();
      // }
    });
  }
}

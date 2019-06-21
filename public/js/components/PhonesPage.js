import Component from '../Component.js';
import Basket from './Basket.js';

import PhonesCatalog from './PhonesCatalog.js';
import PhoneViewer from './PhoneViewer.js';
import { getAll, getById } from '../api/phone.js';

export default class PhonesPage extends Component {
  constructor(element) {
    super(element);

    const initialItem = localStorage.getItem('basketItems')
      ? localStorage.getItem('basketItems').split(',')
      : [];

    this.state = {
      phones: [],
      selectedPhone: null,
      basketItems: initialItem,
      query: 'Moto',
      sortField: '',
    };

    this.addBasketItem = (phoneId) => {
      this.setState({
        basketItems: [
          ...this.state.basketItems,
          phoneId
        ],
      });

      localStorage.setItem('basketItems', this.state.basketItems.join(','))
    };
    this.deleteBasketItem = (index) => {
      const items = this.state.basketItems;

      this.setState({
        basketItems: [
          ...items.slice(0, index),
          ...items.slice(index + 1)
        ],
      });

      localStorage.setItem('basketItems', this.state.basketItems.join(','))
    };

    this.showPhone = (phoneId) => {
      getById(phoneId)
        .then(phoneDetails => {
          this.setState({ selectedPhone: phoneDetails });
        });
    };
    this.hidePhone = () => {
      this.setState({
        selectedPhone: null,
      });
    };

    this.setQuery = (query) => {
      this.setState({ query });
    };

    this.setSortField = (sortField) => {
      this.setState({ sortField });
    };

    this.render();

    getAll({
      query: this.state.query,
      sortField: this.state.sortField,
    })
      .then(phones => {
        this.setState({ phones });
      });
  }

  render() {
    this.element.innerHTML = `
      <div class="row">
        <!--Sidebar-->
        <div class="col-md-2">
          <Filter></Filter>
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
      onPhoneSelected: this.showPhone,
      onAdd: this.addBasketItem
    });

    this.initComponent(PhoneViewer, {
      phone: this.state.selectedPhone,
      onBack: this.hidePhone,
      onAdd: this.addBasketItem
    });

    this.initComponent(Basket, {
      items: this.state.basketItems,
      onDelete: this.deleteBasketItem,
    });
  }
}

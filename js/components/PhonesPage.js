import Component from '../Component.js';
import Basket from './Basket.js';
import Loader from './Loader.js';
import PhonesCatalog from './PhonesCatalog.js';
import PhoneViewer from './PhoneViewer.js';
import { getAll, getById } from '../api/phone.js';

export default class PhonesPage extends Component {
  constructor(element) {
    super(element);

    this.state = {
      isDownloaded: false,
      phones: [], 
      selectedPhone: null,
      basketItems: [
        'qwqweqwe',
        'sadfasdf',
        '123123'
      ],
    };

    getAll().then(
      (phones) => {
        this.setState({ 
          phones,
          isDownloaded: true,
        });
      },
      // при rejected вывести ошибку
      (error) => console.warn(error)
    );

    this.addBasketItem = (phoneId) => {
      this.setState({
        basketItems: [
          ...this.state.basketItems,
          phoneId
        ],
      });
      
    };
    this.deleteBasketItem = (index) => {
      const items = this.state.basketItems;

      this.setState({
        basketItems: [
          ...items.slice(0, index),
          ...items.slice(index + 1)
        ],
      });
    };

    this.showPhone = (phoneId) => {
      getById(phoneId).then(
        (selectedPhone) => {
          this.setState({ selectedPhone });
          
        },
        // при rejected вывести ошибку
        (error) => console.warn(error)
      );
    };

    this.hidePhone = () => {
      this.setState({
        selectedPhone: null,
      });
    };

    this.render();
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
          ${ this.state.isDownloaded ? `
          <PhonesCatalog></PhonesCatalog>`
          :
          `<Loader></Loader>`}
          ` }
        </div>
        
      </div>
    `;

    this.initComponent(PhonesCatalog, {
      phones: this.state.phones,
      onPhoneSelected: this.showPhone,
      onAdd: this.addBasketItem,
      
    });

    this.initComponent(PhoneViewer, {
      phone: this.state.selectedPhone,
      onBack: this.hidePhone,
      onAdd: this.addBasketItem
    });

    this.initComponent(Loader, {
    });

    this.initComponent(Basket, {
      items: this.state.basketItems,
      onDelete: this.deleteBasketItem,
    });
  }
}

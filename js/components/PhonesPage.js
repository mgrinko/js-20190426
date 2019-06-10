import PhonesCatalog from './PhonesCatalog.js';
import PhoneViewer from './PhoneViewer.js';
import {getAll, getById} from '../api/phone.js';

export default class PhonesPage {
    constructor(element) {
        this.element = element;

        this.state = {
            phones: getAll(),
            selectedPhone: null,
            basketItems: [],
        };

        this.render();

        this.element.addEventListener('click', (event) => {
            const delegateTarget = event.target.closest('.button-delete');

            if (!delegateTarget) {
                return;
            }

            let itemNumber = this.state.basketItems.indexOf(delegateTarget.dataset.phoneName);
            if (itemNumber !== -1) {
                this.state.basketItems.splice(itemNumber, itemNumber + 1);
                this.render();
            }
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
    
                <section>
                    <p>Shopping Cart</p>
                    <ul>
                        ${this.state.basketItems.map(item => `
                            <li>
                                ${item}
                                <button class="button-delete"
                                        data-phone-name="${item}"
                                >x</button>
                            </li>
                        `).join("")}
                    </ul>
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

            onAdd: (phone) => {
                if (!this.state.basketItems.includes(phone, 0)) {
                    this.state.basketItems.push(phone);
                    this.render();
                }
            }

        });

        this.initComponent(PhoneViewer, {
            phone: this.state.selectedPhone,

            onBack: () => {
                this.state.selectedPhone = null;
                this.render();
            },

            onAdd: (phone) => {
                if (!this.state.basketItems.includes(phone, 0)) {
                    this.state.basketItems.push(phone);
                    this.render();
                }
            }
        });
    }
}

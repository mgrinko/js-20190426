export default class PhoneViewer {
    constructor(element, props) {
        this.element = element;
        this.props = props;

        this.state = {
            currentPicture: this.props.phone.images[0],
        };

        this.render();

        this.element.addEventListener('click', (event) => {
            const delegateTarget =
                event.target.closest('[data-element="back-button"]');

            if (!delegateTarget) {
                return;
            }

            this.props.onBack();
        });

        this.element.addEventListener('click', (event) => {
            const delegateTarget = event.target.closest('img');

            if (!delegateTarget) {
                return;
            }

            this.state.currentPicture = delegateTarget.attributes[0].nodeValue;
            this.render();
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
        const {phone} = this.props;
        this.element.innerHTML = `
        <div>
            <img class="phone" src="${ this.state.currentPicture }">
    
            <button data-element="back-button">Back</button>
            <button class="button-add"
                    data-phone-name="${phone.name}"
            >
                    Add to basket
            </button>
    
    
            <h1>${ phone.name }</h1>
    
            <p>${ phone.description }</p>
    
            <ul class="phone-thumbs">
                ${ 
                    phone.images.map((image) => `
                        <li>
                             <img src="${image}">
                        </li>
                    `).join("") 
                }
            </ul>
        </div>
        `;
    }
}

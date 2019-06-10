export default class Basket {
    constructor(element, props) {
        this.element = element;
        this.props = props;

        this.state = {
            // currentPicture: this.props.phone.images[0],
            product: this.props.selectedProduct
        };
        this.render();
        this.element.addEventListener('click', (event) => {
            const delegateTarget = event.target.closest('[data-element="del-button"]');

            if (!delegateTarget) {
                return;
            }
            let findText = event.target.parentNode.textContent.slice(0, -1);
            let foundedValue = this.state.product.indexOf(findText)
            this.state.product.splice(foundedValue, 1)

            console.log(this.state.product);
            this.props.onDel();
        });

    }

    render() {
        this.element.innerHTML = `
    <ul id="basket">    
    ${ this.state.product.map(productItem =>
            `<li>${productItem}<button data-element="del-button">x</button></li>`).join('') }
           </ul>
    `;
    }
}

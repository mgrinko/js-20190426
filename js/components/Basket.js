export default class Basket {
    constructor(element, props) {
        this.element = element;
        this.props = props;

        this.render();        
    }

    render() {
        this.element.innerHTML = `
            <section>
                <p>Shopping Cart</p>
                <ul>
                    ${this.props.basket.map((phoneName) => {
                        return `
                            <li>${phoneName} <button data-element="remove-button">x</button></li>
                        `
                    }).join('')}
                </ul>
            </section>
        `
    }
}
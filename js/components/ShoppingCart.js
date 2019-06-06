export default class ShoppingCart {


    constructor(element, props) {
        
        props = Object.assign({
            items: [],
            onAddItem: () => {},
            onRemoveItem: () => {},
        }, props);

        this.element = element;
        this.props = props;

        this.render();

        this.element.addEventListener("click", (event) => {
            const removeControl = event.target.closest('[data-element="remove-from-basket-button"]');
            if (!removeControl) {
                return;
            }
            
            const item = this.props.items.find( (item) => item.id == removeControl.dataset.itemId );
            if (item) {
                this.removeItem(item);
                this.render();
            }
        });

    }


    addItem(item) {
        if (this.props.items.includes(item)) {
            return;
        }
        if (this.props.onAddItem(item) !== false) {
            this.props.items.push(item);
        }
    }


    removeItem(item) {
        const itemIndex = this.props.items.indexOf(item);
        if (itemIndex < 0) { 
            return;
        }
        if (this.props.onRemoveItem(item) !== false) {
            this.props.items.splice(itemIndex, 1);
        }
    }    


    render() {

        this.element.innerHTML = 
            this.props.items.length ?
            
            `
            <p>Shopping Cart</p>
            <ul>
                ${ this.props.items.map( (item) => 
                    `
                    <li>
                        ${ item.name }
                        <button 
                            data-element="remove-from-basket-button"
                            data-item-id="${ item.id }">x</button>
                    </li>
                    `
                ).join("") }
            </ul>
            `  :

            `
            <p>Shopping Cart</p>
            <p>no items</p>
            `;
            
    }

}
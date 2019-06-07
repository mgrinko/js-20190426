export default class Basket {
  constructor(element, props) {
    this.element = element;
    this.props = props;

    this.state = {
      
      
    };

    this.render();

    this.element.addEventListener('click', (event) => {
      const delegateTarget = event.target.dataset.deleteItem;

      if (!delegateTarget) {
        return;
      }

      this.props.onDeleteItem(+delegateTarget);
    });
  }

  render() {

    this.element.innerHTML = `
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
            <ul class="basket-list">
            ${ this.props.basketItems.map( (item, i) => `
              <li class="basket-item">
                <button class="basket-item__delete" data-delete-item="${ i++}">x</button>
                ${ item }
              </li>
            `).join('') } 
            </ul>
          </section>
        </div>
    `;
  }
}
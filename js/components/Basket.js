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
            <ul>
            ${ this.props.basketItems.map( (item, i) => `
              <li>${ item }><button data-delete-item="${ i++}">x</button></li>
            `).join('') } 
            </ul>
          </section>
        </div>
    `;
  }
}
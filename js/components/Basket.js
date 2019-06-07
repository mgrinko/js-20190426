export default class Basket {
  constructor(element, props) {
    this.element = element;
    this.props = props;

    this.state = {
      
      
    };

    this.render();

    this.element.addEventListener('click', (event) => {
      const delegateTarget = event.target.closest('[data-button-add=""]');

      console.log(delegateTargete);

      if (!delegateTarget) {
        return;
      }

      this.props.onAddItem(this.element.dataset.phoneName);
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
            ${ this.props.basketItems.map( item => `
              <li>${ item }><button>x</button></li>
            `).join('') } 
            </ul>
          </section>
        </div>
    `;
  }
}
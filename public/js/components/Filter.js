import Component from '../Component.js';

export default class Basket extends Component {
  constructor(element, props) {
    super(element, props);


    this.render();
  }

  render() {
    this.element.innerHTML = `
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
    `
  }
}

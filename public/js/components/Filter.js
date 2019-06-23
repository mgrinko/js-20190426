import Component from '../Component.js';

export default class Filter extends Component {
  constructor(element, props) {
    super(element, props);


    this.render();

    this.on('change', 'query-field', (event) => {
      this.props.onQueryChange(event.target.value);
    })
  }

  render() {
    this.element.innerHTML = `
      <section>
        <p>
          Search:
          <input
          value="${this.props.query}"
          data-element="query-field"
          >
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

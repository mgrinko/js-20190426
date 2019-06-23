import Component from '../Component.js';

export default class Filter extends Component {
  constructor(element, props) {
    super(element, props);


    this.render();

    this.on('change', 'query-field', (event) => {
      this.props.onQueryChange(event.target.value);
    });

    this.on('change', 'sort-field', (event) => {
      this.props.onSortChange(event.target.value);
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
          <select
            value="${this.props.sortField}"
            data-element="sort-field"
          >
            <option
              value="name"
              ${this.props.sortField === 'name' ? 'selected' : ''}
            >
            Alphabetical
            </option>
            <option
              value="age"
              ${this.props.sortField === 'age' ? 'selected' : ''}
            >
            Newest
            </option>
          </select>
        </p>
      </section>
    `
  }
}

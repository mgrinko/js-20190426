import Component from '../Component.js';

export default class Loader extends Component {
  constructor(element) {
    super(element);


    this.render();

  }


  render() {

    this.element.innerHTML = `
    <p>Loading...</p>
    <img src="../img/832.gif"/>
    `;
  }
}

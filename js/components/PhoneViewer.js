export default class PhoneViewer {
  constructor(element, props) {
    this.element = element;
    this.props = props;

    this.state = {
      currentPicture: this.props.phone.images[0],
    };

    this.render();

    this.element.addEventListener('click', (event) => {
      const delegateTarget =
        event.target.closest('[data-element="back-button"]');

      if (!delegateTarget) {
        return;
      }

      this.props.onBack();
    });
  }

  render() {
    const { phone } = this.props;

    this.element.innerHTML = `
      <div>
        <img class="phone" src="${ this.state.currentPicture }">
    
        <button data-element="back-button">Back</button>
        <button>Add to basket</button>
    
    
        <h1>Motorola XOOM™ with Wi-Fi</h1>
    
        <p>Motorola XOOM with Wi-Fi has a super-powerful dual-core processor and Android™ 3.0 (Honeycomb) — the Android platform designed specifically for tablets. With its 10.1-inch HD widescreen display, you’ll enjoy HD video in a thin, light, powerful and upgradeable tablet.</p>
    
        <ul class="phone-thumbs">
          <li>
            <img src="img/phones/motorola-xoom-with-wi-fi.0.jpg">
          </li>
          <li>
            <img src="img/phones/motorola-xoom-with-wi-fi.1.jpg">
          </li>
          <li>
            <img src="img/phones/motorola-xoom-with-wi-fi.2.jpg">
          </li>
          <li>
            <img src="img/phones/motorola-xoom-with-wi-fi.3.jpg">
          </li>
          <li>
            <img src="img/phones/motorola-xoom-with-wi-fi.4.jpg">
          </li>
          <li>
            <img src="img/phones/motorola-xoom-with-wi-fi.5.jpg">
          </li>
        </ul>
      </div>
    `;
  }
}

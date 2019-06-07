export default class PhoneViewer {
  constructor(element, props) {
    this.element = element;
    this.props = props;

    this.imageSelected = null;

    this.state = {
      currentPicture: (imageSelected) => {
        let imageCollection = this.props.phone.images;

        for(let i = 0; i < imageCollection.length; i++) {

          if (imageSelected) {
            return imageCollection[imageSelected];
          } else {
            return imageCollection[0];
          }
        }
      }
    };

    this.render();

    this.element.addEventListener('click', (event) => {
      const back = '[data-element="back-button"]';
      const addToBasket = '[data-button-add=""]';
      const delegateTarget = event.target.closest(back) 
        || event.target.closest(addToBasket);
      this.imageSelected = +event.target.dataset.image;
      
      if (this.imageSelected || this.imageSelected === 0) {
        return this.render();
      }
      
      if (!delegateTarget) {
        return;
      }

      if (delegateTarget === event.target.closest(back)) {
        this.props.onBack();
      } else {
        this.props.onAddItem(delegateTarget.dataset.phoneName);
      }
     
      
    });
  }

  render() {
    const { phone } = this.props;

    this.element.innerHTML = `
      <div>
        <img class="phone" src="${ this.state.currentPicture(this.imageSelected) }">
    
        <button data-element="back-button">Back</button>
        <button 
          data-button-add=""
          data-phone-name="${phone.name}"
          >Add to basket</button>
    
    
        <h1>${ phone.name }</h1>
    
        <p>${ phone.description }</p>
    
        <ul class="phone-thumbs">
          ${ this.props.phone.images.map((image, i) => `
          <li>
            <img data-image= "${ i++ }" src="${ image }">
          </li>
          `).join('') } 
        </ul>
      </div>
    `;
  }
}

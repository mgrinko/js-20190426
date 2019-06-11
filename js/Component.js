export default class Component {
  constructor(element, props = {}) {
    this.element = element;
    this.props = props;
  }

  setState(data) {
    this.state = {
      ...this.state,
      ...data,
    };

    this.render();
  }

  on(eventName, elementName, callback) {
    this.element.addEventListener(eventName, (event) => {
      const delegateTarget =
        event.target.closest(`[data-element="${elementName}"]`);

      if (!delegateTarget) {
        return;
      }

      event.delegateTarget = delegateTarget;
      callback(event);
    });
  }
}

export default class Component {
  constructor(element, props = {}) {
    this.element = element;
    this.props = props;

    this.childred = {};
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

  initComponent(constructor, props) {
    const container = this.element.querySelector(constructor.name);

    if (!container) {
      delete this.childred[constructor.name];

      return;
    }

    const current = this.childred[constructor.name];

    if (current && _.isEqual(props, current.props)) {
      container.replaceWith(current.element);
    } else {
      this.childred[constructor.name] = new constructor(container, props);
    }
  }

}

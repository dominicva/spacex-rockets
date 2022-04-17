export default function Component(type = 'div', props = {}, ...children) {
  const element = document.createElement(type);

  const propEntries = Object.entries(props);

  if (propEntries.length > 0) {
    for (const [key, value] of propEntries) {
      element.setAttribute(key, value);
    }
  }

  if (children.length === 1) {
    element.innerHTML = children[0];
  } else if (children.length > 1) {
    for (const child of children) {
      element.append(child);
    }
  }

  return element;
}

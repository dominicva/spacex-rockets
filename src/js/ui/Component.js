export default function Component(type = 'div', props = {}, ...children) {
  const element = document.createElement(type);

  const propEntries = Object.entries(props);

  if (propEntries.length > 0) {
    for (const [key, value] of propEntries) {
      console.log('key:', key);
      console.log('value:', value);

      element.setAtrribute(key, value);
    }
  }

  if (children.length > 0) {
    for (const child of children) {
      element.append(child);
    }
  }

  return element;
}

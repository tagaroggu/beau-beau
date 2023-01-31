const elementStack: HTMLElement[] = [];

export const element = (tagName: string, setup: () => void = () => {}, append = true): HTMLElement => {
  const e = document.createElement(tagName);

  elementStack.push(e);
  try { setup(); }
  finally { elementStack.pop(); }

  if (append) {
    elementStack.length && elementStack[elementStack.length - 1].appendChild(e);
  }

  return e;
}
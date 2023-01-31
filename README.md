# beau-beau
A dumb experiment for building UIs

Note: I have done quite little work for this, as I am stuck on a few places on what to do in order to get this to work as I would like it to.

## The basic idea
What I want to build is a very simple and dumb templating-ish library. The basic idea for what I would want it to look like is this:

```js
document.body.appendChild(
    element('h1', () => {
        text('Hello, world');
    })
)
```

The result of the above would look like this:

```html
<body>
    <h1>Hello, world</h1>
</body>
```

The function signature for `element` would, likely, look something like this:

```ts
function element(name: string, body: () => void, append = true): HTMLElement {/* Implementation details */}
```

Components could be functions, like the `body` function from above. Just call it from within the `body` function of an element call, even from very deeply nested within other components, to get it to set up and create its elements. 

Or, components could be instantiated with the `element` function from above, with this signature instead:

```ts
function element(element: string | () => void, body: () => void, append = true): HTMLElement {/* Implementation details */}
```

The return type may have to be different. I am not quite sure at this point.

## How would it work?

Basically, the same way that signals work, examples including `@vue/reactivity`, `@preact/signals-core`, and `@webreflection/signals`. When `element` is called, it will push a value of some sort to a global stack. When `element` is called within an `element` call, it will just push its own value to the stack. It will then call its own `body` function, which can add children to the element, add text, or other things. When that `body` function finishes, the value that the `element` function pushed to the stack will be popped off. 
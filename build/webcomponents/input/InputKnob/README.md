# InputKnob

## Demo

```html
<input-knob></input-knob>
```

## Attribute

| summary             | attribute | value | default | type    |
| ------------------- | --------- | ----- | ------- | ------- |
| inputknob label     | active    |       | empty   | string  |
| inputknob max value | max       |       | 0       | integer |
| inputknob min value | min       |       | 0       | integer |
| inputknob value     | value     |       | 0       | integer |

## Styling

InputKnob have styled_e property.
default style is setted.
you want change style, please do like this.

```js
document.createElement("input-knob").style_e.textContent += "width: 0;"
```

InputKnob CSS Classes

| summary             | class              |
| ------------------- | ------------------ |
| inputknob container | div.container      |
| inputknob label     | p.label            |
| inputknob knob      | div.knob           |
| inputknob knob line | div.knob::after    |
| inputknob input     | input[type=number] |

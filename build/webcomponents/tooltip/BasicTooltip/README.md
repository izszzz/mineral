# BasicTooltip

## Demo

```html
<basic-tooltip text="sun" position="top">
  <sun-icon slot="target"></sun-icon>
</basic-tooltip>
```

## Attribute

### basic-tooltip

| summary          | attribute | value      | default | type   |
| ---------------- | --------- | ---------- | ------- | ------ |
| tooltip text     | text      |            | empty   | string |
| tooltip position | position  | top/bottom | bottom  | string |

### basic-tooltip child

| summary                        | attribute | value  | default | type   |
| ------------------------------ | --------- | ------ | ------- | ------ |
| add tooltip for target element | slot      | target | empty   | string |

## CSS Variable

| variable name        | type | default |
| -------------------- | ---- | ------- |
| --smallest-font-size | px   | 12px    |

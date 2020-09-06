# BasicModal

## Usage

```html
<basic-modal></basic-modal>
<script>
  const modal = document.querySelector("basic-modal")
  document.querySelector("#modal-test").addEventListener("click", () => {
    modal.setAttribute("active", "")
    modal.innerHTML = `
          <span slot="title">title</span>
          <p slot="content">this is modal</p>
        `
  })
</script>
```

## Attribute

### basic-modal

| summary       | attribute | value | default | type   |
| ------------- | --------- | ----- | ------- | ------ |
| modal display | active    |       | empty   | string |

### basic-modal child

| summary       | attribute | value   | default | type   |
| ------------- | --------- | ------- | ------- | ------ |
| modal title   | slot      | title   | empty   | string |
| modal content | slot      | content | empty   | string |
| modal style   | slot      | style   | empty   | string |

## CSS Variable

| variable name     | type  | default |
| ----------------- | ----- | ------- |
| --big-font-size   | px    | 12px    |
| --main-font-color | color | #2b2b2b |

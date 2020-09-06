# BasicDropdown

## Demo

```html
<basic-dropdown>
  <basic-btn slot="target" label="ドロップダウン"></basic-btn>
  <ul slot="lists">
    <basic-dropdown-list text="ドロップ"></basic-dropdown-list>
    <basic-dropdown-list text="ダウン"></basic-dropdown-list>
    <basic-dropdown-list text="かも"></basic-dropdown-list>
  </ul>
</basic-dropdown>
```

## Attribute

### basic-dropdown child

| summary           | attribute | value  | default | type   |
| ----------------- | --------- | ------ | ------- | ------ |
| get event element | slot      | target | empty   | string |
| get modal element | slot      | lists  | empty   | string |

### basic-dropdown-list

| summary            | attribute | value | default | type   |
| ------------------ | --------- | ----- | ------- | ------ |
| dropdown list text | text      |       | empty   | string |
| dropdown path      | path      |       | empty   | string |

## Usage

### CSS Variable

| variable name        | type  | default        |
| -------------------- | ----- | -------------- |
| --main-bg-color      | color | #2b2b2b        |
| --main-text-color    | color | #2b2b2b        |
| --shadow-color       | color | rgba(0,0,0,.2) |
| --small-font-size    | px    | 10px           |
| --normal-font-size   | px    | 12px           |
| --theme-change-speed | s     | 0.3s           |

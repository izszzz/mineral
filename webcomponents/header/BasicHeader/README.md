# BasicHeader

## Demo

```html
<basic-header>
  <h2 slot="logo">BasicHeader</h1>
  <ul slot="ul">
    <li>test1</li>
    <li>test2</li>
    <li>test3</li>
  </ul>
</basic-header>
```

## Attribute

### basic-header

| summary                         | attribute | value | default         | type  |
| ------------------------------- | --------- | ----- | --------------- | ----- |
| header background color         | bg        |       | white           | color |
| responsive nav background color | nav-bg    |       | rgba(0,0,0,0.8) | color |

### basic-header children

| summary         | attribute | value | default | type   |
| --------------- | --------- | ----- | ------- | ------ |
| header logo     | slot      | logo  |         | string |
| header nav > ul | slot      | ul    |         | string |

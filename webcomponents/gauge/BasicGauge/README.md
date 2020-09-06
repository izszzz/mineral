# BasicGauge

## 具体例

```html
<basic-gauge max-points="120" now-points="110" width="150"></basic-gauge>
```

## Attribute

| summary        | attribute  | value | default | type      |
| -------------- | ---------- | ----- | ------- | --------- |
| max points     | max-points |       | empty   | number    |
| current points | now-points |       | empty   | number    |
| gauge width    | width      |       | 100     | number    |
| gauge color    | color      |       | #a1deff | css color |
| gauge label    | label      |       | empty   | css color |

## Usage

max-points に ゲージ の最大値、now-points に現在の ゲージ の値を入れるとパーセントが計算され、バーの width に反映される。

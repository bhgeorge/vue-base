---
sidebar: auto
---

# Alert

## Props

| Name | Type              | Required | Default   | Desc |
| ---  | ---               | ---      | ---       | ---  |
| type | AlertType<String> |          | 'neutral' | Sets the alert styling. |

### AlertType
- neutral
- success
- warning
- error

## Slots

There is one unnamed slot that populates content below the `text` prop.

## AlertList

The `<AlertList>` component uses the `alerts` store module to populate global alerts. This should be placed in the

## Example Usage

<<< @/example/views/components/Alert.vue

---
sidebar: auto
---

# Modal

A modal wrapper meant to be used within the context of the component triggering it. Uses [ally.js](https://allyjs.io/api/maintain/tab-focus.html) to provide tab trapping and [portal-vue](https://portal-vue.linusb.org/) to render the component in another location in the DOM.

Importing this component will globally register the `<Portal>` and `<PortalTarget>` components.

## Props
| Name        | Type     | Required | Default | Desc |
| ---         | ---      | ---      | ---     | ---  |
| describedby | String   |          |         | `aria-describedby` |
| hasClose    | Boolean  |          | true    | Whether or not this modal can close itself. |
| labelledby  | String   |          |         | `aria-labelledby`  |
| modifiers   | String[] |          |         | Modifier classes to apply. |
| portal      | String   |          | 'modal' | The name of the `<PortalTarget>` to render this modal in. |

::: warning Accessibility
Either `describedby` or `labelledby` should be applied to the modal so that something is announced to screen readers when the modal is opened.
:::

## Example Usage

<<< @/example/views/components/Modal.vue

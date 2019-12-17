---
sidebar: auto
---

# Sidebar Layout

Displays the site navigation as a sidebar above tablet size, and creates a fixed menu icon that toggles the nav in the top right corner of the application when at tablet or smaller.

Place in `App.vue` as this component contains the `<router-view>` component.

## Props
| Name     | Type   | Required | Default | Desc |
| ---      | ---    | ---      | ---     | ---  |
| navItems | Object | false    |         | Text/Icon links to display in the sidebar |

### navItems model
```javascript
{
  text: [ // Text for internal links
    {
      text: 'Display Text',
      name: 'router_name',
      params?: {
        key: 'optional_param',
        ...
      },
      sub?: [
        {
          text: 'Sub Item Display Text',
          name: 'router_name',
          params: {
            key:'optional_param',
            ...
          },
        },
      ],
    },
    ...
  ],
  icon: [ // Icons for external links (Github, Twitter, etc..)
    {
      href: 'https://link.com',
      text: 'Screen Reader Text',
      type: 'icon_type',
    },
    ...
  ],
}
```
See [Icon types](/components/icon) for `icon_type`.

## Slots

| Name       | Desc |
| ---        | ---  |
| navLogo    | Logo for the application. Content placed in this slot will live inside of a `<router-link>` pointed at the `home` route. |
| navActions | For links that don't perform navigation but an action. (ex. Combat Window, Contact Modal) |
| misc       | Just in case. |

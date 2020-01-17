# VuexForm

VuexForm is a series of components that are meant to be used as a generic form generator. If you've got a bunch of funky fresh stuff going on with your form don't use this. You're going to have a bad time.

## Fields

- InputText

## Form Structure

```javascript
{
  id: 'uniqueFormID',
  fields: [
    {
      id: 'uniqueFieldID',
      component: 'VueComponentName', // Grab this from ../constants/fieldTypes
      label: 'Field Label',
      name: 'fieldMachineName',
      required?: true,
      validation?: [ // Grab these from ../utils/validations
        {
          test(val) => bool,
          errorText(label) => `Error on ${label}.`,
        },
        ...
      ],
      options?: [
        {
          value: 'someValue',
          text: 'Option Display Text',
        },
        ...
      ],
      prereqs?: [
        type: 'and', // Grab this from ../constants/prereqs
        field: 'prereqFieldId',
        eval: {
          method: 'isOneOf', // Grab this from ../constants/prereqs
          match: ['someValA', 'someValB'],
        },
      ],
      isVisible?: false
      modifiers: ['modifier-class-name'],
      computeValue: false // Prevents value from appearing in final output
    },
  ],
  onSubmit: this.someMethod,
  resetIfExists?: true, // Resets form state if form is re-registered
  errorHeadingTag?: 'h4',
}
```

## TODOs

Planning on adding this stuff. But likely won't until I need to use it.

- Add additional validations
- Add async validation options
- Add `allRequired` option to form
- Add a "slot-like" component for random content

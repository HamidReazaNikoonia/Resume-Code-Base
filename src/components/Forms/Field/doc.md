# Basic usage

```html
<ds-input placeholder="Name ..." />
```

## Usage with label

```html
<ds-input id="name" label="Your name" placeholder="Name ..." />
```

## Disabled

```html
<ds-input placeholder="Name ..." disabled />
```

## Input types

You can use an input for different types of input.

```html
<template>
  <div>
    <ds-input v-model="text"></ds-input>
    <ds-input v-model="text" type="password"></ds-input>
    <ds-input v-model="text" type="textarea" rows="2"></ds-input>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        text: 'Default text',
      }
    },
  }
</script>
```

## Bind to a value

Use v-model to bind a value to the input.

```html
<template>
  <div>
    <ds-input v-model="name" placeholder="Name ..."></ds-input>
    <ds-text>Your name: {{ name }}</ds-text>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        name: '',
      }
    },
  }
</script>
```

## Validation

We use [async-validator](https://github.com/yiminghe/async-validator) schemas for validation.

If you need to validate more than one field it is better to use the form component.

```html
<template>
  <div>
    <ds-input
      v-model="name"
      :schema="{ type: 'string', min: 6, message: 'Name must be longer' }"
      placeholder="Name ..."
    />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        name: '',
      }
    },
  }
</script>
```

## Input sizes

```html
<ds-input placeholder="Small ..." size="small"></ds-input>
<ds-input placeholder="Base ..."></ds-input>
<ds-input placeholder="Large ..." size="large"></ds-input>
```

## Input icons

Add an icon to help the user identify the input type.

```html
<ds-input placeholder="Search ..." icon="search"></ds-input>
<ds-input placeholder="Time ..." icon="clock"></ds-input>
<ds-input placeholder="Search ..." icon-right="search"></ds-input>
<ds-input placeholder="Search ..." icon="search" size="small"></ds-input>
<ds-input placeholder="Search ..." icon="search" size="large"></ds-input>
```

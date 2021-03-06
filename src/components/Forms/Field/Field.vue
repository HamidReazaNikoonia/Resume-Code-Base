<template>
  <fragment>
    <div class="ds-input-wrap">
      <div v-if="icon" class="ds-input-icon">
        <ds-icon :name="icon" />
      </div>
      <component
        :is="tag"
        :id="id"
        class="ds-input"
        :class="[
          icon && `ds-input-has-icon`,
          iconRight && `ds-input-has-icon-right`,
        ]"
        :name="name ? name : model"
        :type="type"
        :autofocus="autofocus"
        :placeholder="placeholder"
        :tabindex="tabindex"
        :disabled="disabled"
        :readonly="readonly"
        :value.prop="innerValue"
        :rows="type === 'textarea' ? rows : null"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        v-text="type === 'textarea' ? innerValue : null"
      />
      <div v-if="iconRight" class="ds-input-icon-right">
        <ds-icon :name="iconRight" />
      </div>
    </div>
  </fragment>
</template>

<script>
// eslint-disable-next-line import/no-relative-parent-imports
import inputMixin from './../Input/Input.js'

/**
 * Used for handling basic user input.
 * @version 1.0.0
 */
export default {
  name: 'Field',
  mixins: [inputMixin],
  props: {
    /**
     * The type of this input.
     * @options url|text|password|email|search|textarea
     */
    type: {
      type: String,
      default: 'text',
      validator: (value) => {
        return value.match(/(url|text|password|email|search|textarea)/)
      },
    },
    /**
     * The placeholder shown when value is empty.
     */
    placeholder: {
      type: String,
      default: null,
    },
    /**
     * Whether the input should be automatically focused
     */
    autofocus: {
      type: Boolean,
      default: false,
    },
    /**
     * How many rows this input should have (only for type="textarea")
     */
    rows: {
      type: [String, Number],
      default: 1,
    },
    /**
     * The name of the input's icon.
     */
    icon: {
      type: String,
      default: null,
    },
    /**
     * The name of the input's right icon.
     */
    iconRight: {
      type: String,
      default: null,
    },
  },
  computed: {
    tag() {
      if (this.type === 'textarea') {
        return 'textarea'
      }
      return 'input'
    },
  },
}
</script>

<style lang="scss" src="./index.scss"></style>

<docs src="./doc.md"></docs>

<template>
  <FieldWrapper>
    <div
      v-click-outside="closeAndBlur"
      class="ds-select-wrap"
      :class="[isOpen && `ds-select-is-open`]"
      :tabindex="searchable ? -1 : tabindex"
      @keydown.tab="closeAndBlur"
      @keydown.self.down.prevent="pointerNext"
      @keydown.self.up.prevent="pointerPrev"
      @keypress.enter.prevent.stop.self="selectPointerOption"
      @keyup.esc="close"
    >
      <div v-if="icon" class="ds-select-icon">
        <DsIcon :name="icon" />
      </div>
      <div
        class="ds-select"
        :class="[
          icon && `ds-select-has-icon`,
          iconRight && `ds-select-has-icon-right`,
          multiple && `ds-select-multiple`,
        ]"
        @click="openAndFocus"
      >
        <div v-if="multiple" class="ds-selected-options">
          <div
            v-for="(value, index) in innerValue"
            :key="value[labelProp] || value"
            class="ds-selected-option"
          >
            <!-- @slot Slot to provide a custom selected option display -->
            <slot name="optionitem" :value="value">
              <DsChip
                removable
                color="primary"
                :size="size"
                @remove="deselectOption(index)"
              >
                {{ value[labelProp] || value }}
              </DsChip>
            </slot>
          </div>
          <input
            :id="id"
            ref="search"
            v-model="searchString"
            class="ds-select-search"
            autocomplete="off"
            :name="name ? name : model"
            :autofocus="autofocus"
            :placeholder="placeholder"
            :tabindex="tabindex"
            :disabled="disabled"
            :readonly="readonly"
            @focus="openAndFocus"
            @keydown.tab="closeAndBlur"
            @keydown.delete.stop="deselectLastOption"
            @keydown.down.prevent="handleKeyDown"
            @keydown.up.prevent="handleKeyUp"
            @keypress.enter.prevent.stop="selectPointerOption"
            @keyup.esc="close"
          />
        </div>
        <div v-else class="ds-select-value">
          <!-- @slot Slot to provide a custom value display -->
          <slot v-if="innerValue" name="value" :value="innerValue">
            {{ innerValue[labelProp] || innerValue }}
          </slot>
          <div v-else-if="placeholder" class="ds-select-placeholder">
            {{ placeholder }}
          </div>
        </div>
        <input
          v-if="!multiple"
          :id="id"
          ref="search"
          v-model="searchString"
          class="ds-select-search"
          autocomplete="off"
          :name="name ? name : model"
          :autofocus="autofocus"
          :placeholder="placeholder"
          :tabindex="tabindex"
          :disabled="disabled"
          :readonly="readonly"
          @focus="openAndFocus"
          @keydown.tab="closeAndBlur"
          @keydown.delete.stop="deselectLastOption"
          @keydown.down.prevent="handleKeyDown"
          @keydown.up.prevent="handleKeyUp"
          @keypress.enter.prevent.stop="selectPointerOption"
          @keyup.esc="close"
        />
      </div>
      <div class="ds-select-dropdown">
        <div
          v-if="!options || !options.length"
          class="ds-select-dropdown-message"
        >
          {{ noOptionsAvailable }}
        </div>
        <div
          v-else-if="!filteredOptions.length"
          class="ds-select-dropdown-message"
        >
          {{ noOptionsFound }} "{{ searchString }}"
        </div>
        <ul v-else class="ds-select-options">
          <li
            v-for="(option, index) in filteredOptions"
            :key="option[labelProp] || option"
            class="ds-select-option"
            :class="[
              isSelected(option) && `ds-select-option-is-selected`,
              pointer === index && `ds-select-option-hover`,
            ]"
            @click="handleSelect(option)"
            @mouseover="setPointer(index)"
          >
            <!-- @slot Slot to provide custom option items -->
            <slot name="option" :option="option">
              {{ option[labelProp] || option }}
            </slot>
          </li>
        </ul>
      </div>
      <div v-if="iconRight" class="ds-select-icon-right">
        <DsIcon :name="iconRight" />
      </div>
    </div>
  </FieldWrapper>
</template>

<script>
import ClickOutside from 'vue-click-outside'
import FieldWrapper from '@components/Forms/FieldWrapper/index'
import DsChip from '@@/components/typography/Chip/Chip'
import DsIcon from '@@/components/typography/Icon/Icon'
import multiinputMixin from '../shared/multiinput'
import inputMixin from '../shared/input'

/**
 * Used for letting the user choose values from a set of options.
 * @version 1.0.0
 */
export default {
  name: 'DsSelect',
  components: {
    FieldWrapper,
    DsChip,
    DsIcon,
  },
  directives: {
    ClickOutside,
  },
  mixins: [inputMixin, multiinputMixin],
  props: {
    /**
     * The placeholder shown when value is empty
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
     * The name of the input's icon
     */
    icon: {
      type: String,
      default: null,
    },
    /**
     * The name of the input's right icon
     */
    iconRight: {
      type: String,
      default: 'angle-down',
    },
    /**
     * The select options.
     */
    options: {
      type: Array,
      default() {
        return []
      },
    },
    /**
     * The prop to use as the label when options are objects
     */
    labelProp: {
      type: String,
      default: 'label',
    },
    /**
     * Whether the options are searchable
     */
    searchable: {
      type: Boolean,
      default: false,
    },
    /**
     * Message to show when no options are available
     */
    noOptionsAvailable: {
      type: String,
      default: 'No options available.',
    },
    /**
     * Message to show when the search result is empty
     */
    noOptionsFound: {
      type: String,
      default: 'No options found for:',
    },
  },
  data() {
    return {
      searchString: '',
      pointer: 0,
      isOpen: false,
    }
  },
  computed: {
    filteredOptions() {
      if (!this.searchString) {
        return this.options
      }
      const searchParts = this.searchString.split(' ')

      return this.options.filter((option) => {
        const value = option.value || option
        return searchParts.every((part) => {
          if (!part) {
            return true
          }
          return value.toLowerCase().includes(part.toLowerCase())
        })
      })
    },
    pointerMax() {
      return this.filteredOptions.length - 1
    },
  },
  watch: {
    pointerMax(max) {
      if (max < this.pointer) {
        this.$nextTick(() => {
          this.pointer = max
        })
      }
    },
  },
  methods: {
    handleSelect(options) {
      this.selectOption(options)
      this.resetSearch()
      if (this.multiple) {
        this.$refs.search.focus()
        this.handleFocus()
      } else {
        this.close()
      }
    },
    resetSearch() {
      this.searchString = ''
    },
    openAndFocus() {
      this.open()
      if (!this.focus || this.multiple) {
        this.$refs.search.focus()
        this.handleFocus()
      }
    },
    open() {
      this.resetSearch()
      this.isOpen = true
    },
    close() {
      this.isOpen = false
    },
    closeAndBlur() {
      this.close()
      this.$refs.search.blur()
      this.handleBlur()
    },
    deselectLastOption() {
      if (
        this.multiple &&
        this.innerValue &&
        this.innerValue.length &&
        !this.searchString.length
      ) {
        this.deselectOption(this.innerValue.length - 1)
      }
    },
    handleKeyUp() {
      if (!this.isOpen) {
        this.open()
        return
      }
      this.pointerPrev()
    },
    handleKeyDown() {
      if (!this.isOpen) {
        this.open()
        return
      }
      this.pointerNext()
    },
    setPointer(index) {
      this.pointer = index
    },
    pointerPrev() {
      if (this.pointer === 0) {
        this.pointer = this.pointerMax
      } else {
        this.pointer--
      }
    },
    pointerNext() {
      if (this.pointer === this.pointerMax) {
        this.pointer = 0
      } else {
        this.pointer++
      }
    },
    selectPointerOption() {
      this.handleSelect(this.filteredOptions[this.pointer])
    },
  },
}
</script>

<style lang="scss" src="./style.scss"></style>

<docs src="./demo.md"></docs>

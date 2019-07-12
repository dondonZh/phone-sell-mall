<template>
    <svg class="icon" aria-hidden="true" :style="{width:iconStyle,height:iconStyle}">
        <use :xlink:href="iconName"></use>
    </svg>
</template>

<script>
const styleMap = new Map([['small', 30], ['middle', 45], ['large', 80]])
export default {
  name: 'icon-svg',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    iconSize: {
      type: String,
      required: false,
      default: 'middle'
    }
  },
  computed: {
    iconName () {
      return `#icon-${this.iconClass}`
    },
    iconStyle () {
      return `${styleMap.get(this.iconSize)}px`
    }
  }
}
</script>

<style scoped>
    .icon {
        vertical-align: middle;
        fill: currentColor;
        overflow: hidden;
    }
</style>

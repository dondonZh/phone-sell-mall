<template>
    <svg class="icon" aria-hidden="true">
        <use :xlink:href="iconName"></use>
    </svg>
</template>

<script>
export default {
  name: 'icon-svg',
  props: {
    iconClass: {
      type: String,
      required: true
    }
  },
  computed: {
    iconName () {
      return `#icon-${this.iconClass}`
    }
  }
}
</script>

<style scoped>
    .icon {
        width: 80px;
        height: 80px;
        vertical-align: middle;
        fill: currentColor;
        overflow: hidden;
    }
</style>

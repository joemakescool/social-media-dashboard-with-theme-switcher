<template>
  <transition
      v-bind:css="false"
      mode="out-in"
  >
  <div class="overview-card" >

    <div class="overview-card__top">
      <div class="overview-card__page-views"><p><slot name="description"></slot></p></div>
      <div class="overview-card__social-icon">
        <slot name="social-svg-icon"></slot>
      </div>
    </div>

    <div class="overview-card__bottom">
      <div class="overview-card__count">
        <p><slot name="count"></slot></p>
      </div>
      <div class="overview-card__percent">
        <slot name="percent-svg"></slot>
        <div class="overview-card__percent__number overview-card__percent__number--positive"><p><slot name="percent"></slot></p></div>
      </div>
    </div>
  </div>
  </transition>

</template>

<script>
export default {
  name: "OverviewCard"
}
</script>

<style scoped>

</style>

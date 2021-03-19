<template>
  <div class="social-media-card" :class="isDark">

    <div class="social-media-card__top">
      <div class="social-media-card__social-image">
        <slot name="svg"></slot>
      </div>
      <div class="social-media-card__name">
        <p><slot name="name"></slot></p>
      </div>
    </div>

    <div class="social-media-card__middle">
      <div class="social-media-card__media-followers-count">
        <p>
          <slot name="followers-count"></slot>
        </p>
      </div>
      <div
          class="social-media-card__media-followers-text"
      >
        <p>
          <slot name="description"></slot>
        </p>
      </div>
    </div>

    <div class="social-media-card__bottom">
      <div class="social-media-card__arrow">
        <slot name="arrow"></slot>
      </div>
      <slot name="today"></slot>
    </div>
  </div>

</template>

<script>
export default {
name: "SocialMediaCard",
  computed: {
    isDark() {
      // it's dark if it's false. Defaults light is true
      let isDark = this.$store.state.isLight
      return {
        'social-media-card--dark': !isDark,
      }

    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div class="social-media-card">

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
      <div class="social-media-card__media-followers-text">
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
name: "SocialMediaCard"
}
</script>

<style scoped>

</style>

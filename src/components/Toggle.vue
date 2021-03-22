<template>
  <div
      class="toggle-box"
      @click="switchToggle"
  >
    <div class="toggle-box__label"><p>Dark Mode</p></div>
    <div class="toggle-box__tool">
      <div class="toggle-box__switch"></div>
    </div>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';
import gsap from "gsap";

export default {
  name: "Toggle",
  data() {
    return {
      isLight: this.$store.state.isLight
    }
  },

  computed: {
    isActive() {
      return this.isLight
    },
    checkedValue: {
      get() {
        return this.isLight
      },

      set(newValue) {
        this.isLight = newValue
      }
    }
  },
  methods: {
    switchToggle() {
      this.isLight = !this.isLight
      this.$store.dispatch('changeLight', this.isLight)

      if (this.isLight) {
        anime({
          targets: '.toggle-box__switch',
          translateX: 0,
          duration: 300,
          easing: 'easeOutExpo'
        })
      } else {
        anime({
          targets: '.toggle-box__switch',
          translateX: '-100%',
          duration: 300,
          easing: 'easeOutExpo'
        })
      }
      this.animateCards()

    },
    animateCards() {
      let timeline = gsap.timeline({ ease: 'power4.out' });

      timeline.to('.overview-card, .social-media-card', { rotate: -20, duration: .2})
      timeline.to('.overview-card, .social-media-card',
          {
            rotate: 0,
            duration: .2,
            onComplete: this.toggleDarkMode
          }
      )

      // const timeline = anime.timeline({
      //   duration: 1000,
      //   easing: 'easeOutExpo',
      // })
      //
      // timeline.add({
      //   targets: ['.overview-card, .social-media-card'],
      //   rotate: [
      //     { value: '-15deg' },
      //     { value: 0 }
      //   ],
      //   // complete: function (anime) {
      //   //   // if (!this.isLight) {
      //   //   //   body.classList.add('dark')
      //   //   // } else {
      //   //   //   body.classList.remove('dark')
      //   //   // }
      //   // }
      //
      // })

      // timeline.add({
      //   targets: ['.overview-card, .social-media-card'],
      //   rotate: [
      //     {value: '-15deg'},
      //   ]
      // })

    },

    toggleDarkMode() {
      const body = document.querySelector('body')

      if (this.isLight) {
        body.classList.remove('dark')
      } else {
        body.classList.add('dark')
      }
    }
  }
}
</script>

<style scoped>

</style>

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
      //const body = document.querySelector('body')

      const timeline = anime.timeline({
        duration: 500,
        easing: 'easeOutExpo',
      })

      timeline.add({
        targets: ['.overview-card, .social-media-card'],
        rotate: [
          {value: '-15deg'},
          {value: '15deg'}
        ],
        // complete: function (anime) {
        //   // if (!this.isLight) {
        //   //   body.classList.add('dark')
        //   // } else {
        //   //   body.classList.remove('dark')
        //   // }
        // }

      })

      timeline.add({
        targets: ['.overview-card, .social-media-card'],
        rotate: [
          {value: '-15deg'},
        ]
      })

    }
  }
}
</script>

<style scoped>

</style>

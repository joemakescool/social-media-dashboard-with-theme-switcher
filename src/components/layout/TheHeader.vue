<template>
  <div class="header__background"></div>
  <div class="header">


    <div class="header__title-box">
      <p class="header__title">Social Media Dashboard</p>
      <div class="header__subtitle"><p>Total Followers: 23,004</p></div>
    </div>

    <Toggle></Toggle>


  </div>
</template>

<script>
import Toggle from "@/components/Toggle";
export default {
  name: "TheHeader",
  components: {
    Toggle
  }

}
</script>

<style></style>

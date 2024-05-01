<script setup lang="ts">
import { ref } from "vue"
import { RouterLink } from "vue-router"

import IconClose from "@/assets/images/shared/icon-close.svg"
import Logo from "@/assets/images/shared/logo.svg"
import IconHamburger from "@/assets/images/shared/icon-hamburger.svg"

const showNav = ref<Boolean>(false)

function closeNav(): void {
  showNav.value = false
}
</script>

<template>
  <nav class="nav">
    <div class="nav__wrapper">
      <div class="nav__left">
        <div class="nav__logo">
          <img width="40" height="40" :src="Logo" alt="Logo" />
        </div>
        <div class="nav__item btn-open">
          <img :src="IconHamburger" alt="Icon Close" role="button" @click="showNav = true" />
        </div>
      </div>
      <div class="nav__right" :class="{ open: showNav }">
        <div class="nav__item btn-close">
          <img :src="IconClose" alt="Icon Close" role="button" @click="showNav = false" />
        </div>
        <RouterLink class="nav__item" @click="closeNav" to="/">HOME</RouterLink>
        <RouterLink class="nav__item" @click="closeNav" to="/destination"> DESTINATION </RouterLink>
        <RouterLink class="nav__item" @click="closeNav" to="/crew">CREW</RouterLink>
        <RouterLink class="nav__item" @click="closeNav" to="/technology"> TECHNOLOGY </RouterLink>
      </div>
    </div>
  </nav>
</template>

<style src="./index.css" scoped></style>

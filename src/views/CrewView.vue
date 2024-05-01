<script setup lang="ts">
import { computed, ref } from "vue"

import type { Crew } from "@/@types"
import SourceCrews from "@/@db/crews.json"
import Carousel from "@/components/Carousel/Carousel.vue"

const sourceCrews: Crew[] = SourceCrews
const currentIndex = ref<number>(0)

const images = computed<string[]>(() => sourceCrews.map((c) => c.image))
const crew = computed<Crew>(() => sourceCrews.find((_, index) => index === currentIndex.value)!)
</script>

<template>
  <main class="crew__container">
    <h3 class="crew__title">MEET YOUR CREW</h3>
    <div class="crew__content">
      <Carousel :paths="images" @@changeIndex="currentIndex = $event" />
      <div class="crew__job">
        <p class="crew__job__position">{{ crew.jobPosition }}</p>
        <h4 class="crew__job__integrant">{{ crew.name }}</h4>
        <p class="crew__job__description">{{ crew.description }}</p>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
:global(#app:has(.crew__container)) {
  background-image: url("../assets/images/crew/background-crew-mobile.jpg");
  background-size: 125%;
  background-repeat: no-repeat;

  @media (min-width: 600px) {
    background-image: url("../assets/images/crew/background-crew-tablet.jpg");
  }

  @media (min-width: 900px) {
    background-image: url("../assets/images/crew/background-crew-desktop.jpg");
  }
}

.crew {
  &__container {
    padding: 1.5rem;
    @media (min-width: 900px) {
      padding-block-end: 0;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    @media (min-width: 600px) {
      flex-direction: column-reverse;
      & :deep(.carousel__controls) {
        border-color: transparent !important;
      }
      & :deep(.carousel img) {
        block-size: 639px;
      }
    }
    @media (min-width: 900px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 1fr 100px;
      grid-template-areas: "description img" "controls img";
      & :deep(.carousel__controls) {
        grid-area: controls;
        --size-control: 20px;
      }
      & :deep(.carousel__container) {
        grid-area: img;
      }
      & :deep(.carousel img) {
        block-size: 79vh;
      }
    }
  }
  &__title {
    font: var(--paragraph);
    text-align: center;
    margin-block-end: 2rem;
    @media (min-width: 600px) {
      text-align: start;
    }
    @media (min-width: 900px) {
      font-size: 28px;
      inline-size: 72.6%;
      margin: auto;
    }
    &::before {
      content: "02";
      padding-inline-end: 18px;
      font-weight: bold;
      opacity: 25%;
    }
  }
  &__figure {
    text-align: center;
    display: grid;
    grid-template-columns: repeat(4, 100%);
    overflow: hidden;
    img {
      block-size: 222px;
      vertical-align: bottom;
      margin: auto;
    }
  }
  &__controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding-block: 30px;
    border-top: 1px solid #383b4b;
    & > button {
      inline-size: 10px;
      block-size: 10px;
      border-radius: 50%;
      outline: none;
      border: none;
      cursor: pointer;

      &:not(.active) {
        opacity: 17.44%;
      }
    }
  }
  &__job {
    font-family: var(--font-bellefair);
    text-align: center;
    text-transform: uppercase;
    @media (min-width: 600px) {
      max-inline-size: 560px;
      margin: auto;
    }
    @media (min-width: 900px) {
      grid-area: description;
    }
    &__position {
      opacity: 49.51%;
      @media (min-width: 900px) {
        text-align: start;
        font-size: 32px;
      }
    }
    &__integrant {
      font-size: 24px;
      margin-block-end: 16px;
      @media (min-width: 900px) {
        text-align: start;
        font-size: 56px;
      }
    }
    &__description {
      font-family: var(--font-barlow);
      font-size: 15px;
      color: rgb(var(--light-blue));
      text-transform: none;
      line-height: 25px;
      @media (min-width: 900px) {
        text-align: start;
        font-size: 18px;
      }
    }
  }
}
</style>

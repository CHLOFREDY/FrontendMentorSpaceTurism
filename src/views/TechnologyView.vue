<script setup lang="ts">
import { computed, ref } from 'vue';
import TechnologySource from '@/@db/technology.json'

const currentStep = ref<number>(0);

const currentRecord = computed(() => {
  return TechnologySource[currentStep.value]
})

const changeStep = (step: number) => {
  currentStep.value = step
}
</script>

<template>
  <main class="technology">
    <h3 class="technology__title">SPACE LAUNCH 101</h3>
    <div class="technology__gallery">
      <picture v-if="0 === currentStep">
        <source srcset="/images/technology/image-launch-vehicle-portrait.jpg" media="(min-width: 900px)" />
        <img src="/images/technology/image-launch-vehicle-landscape.jpg" alt="Image launch vehicle portrait" />
      </picture>
      <picture v-else-if="1 === currentStep">
        <source srcset="/images/technology/image-spaceport-portrait.jpg" media="(min-width: 900px)" />
        <img src="/images/technology/image-spaceport-landscape.jpg" alt="Image launch vehicle portrait" />
      </picture>
      <picture v-else="2 === currentStep">
        <source srcset="/images/technology/image-space-capsule-portrait.jpg" media="(min-width: 900px)" />
        <img src="/images/technology/image-space-capsule-landscape.jpg" alt="Image launch vehicle portrait" />
      </picture>
    </div>
    <div class="technology__controls">
      <button @click="changeStep(0)" :class="currentStep == 0 && 'active'">1</button>
      <button @click="changeStep(1)" :class="currentStep == 1 && 'active'">2</button>
      <button @click="changeStep(2)" :class="currentStep == 2 && 'active'">3</button>
    </div>
    <div class="technology__information">
      <h4>THE TERMINOLOGY…</h4>
      <h2>{{ currentRecord.title }}</h2>
      <p>{{ currentRecord.description }}</p>
    </div>
  </main>
</template>

<style lang="scss" scoped>
:global(#app:has(.technology)) {
  background-image: url("../assets/images/technology/background-technology-mobile.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-width: 600px) {
    background-image: url("../assets/images/crew/background-technology-tablet.jpg");
  }

  @media (min-width: 900px) {
    background-image: url("../assets/images/crew/background-technology-desktop.jpg");
  }
}

.technology {
  &__title {
    margin-block-end: 2rem;
    font-family: var(--font-barlow-condensed);
    font-size: 16px;
    text-align: center;
    &::before {
      content: "03";
      padding-inline-end: 16px;
      font-weight: bold;
      opacity: 25%;
    }
    @media (min-width: 600px) {
      font-size: 1.25rem;
      text-align: start;
      padding-inline: 2.4063rem;
    }
    @media (min-width: 900px) {
      grid-area: title;
      padding-inline-start: 0;
      font-size: 1.75rem;
      margin-bottom: 0;
    }
  }

  &__gallery {
    max-block-size: 170px;
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden;
    margin-block-end: 2.125rem;
    picture {
      flex: 1;
      align-content: end;
    }
    img {
      inline-size: 100%;
      block-size: auto;
      object-fit: cover;
      object-position: bottom;
    }
    @media (min-width: 600px) {
      max-block-size: 310px;
    }
    @media (min-width: 900px) {
      inline-size: 515px;
      min-block-size: 527px;
      grid-area: preview;
      place-self: flex-end;
    }
  }
  
  &__controls {
    display: flex;
    justify-content: center;
    gap: 1rem; 
    margin-block-end: 1.625rem;
    --button-size: 2.5rem;
    button {
      inline-size: var(--button-size);
      block-size: var(--button-size);
      border-radius: 50%;
      outline: none;
      border: 1px solid rgb(var(--white) / 0.25);
      background-color: transparent;
      color: #fff;
      font-family: var(--font-bellefair);
      @media (min-width: 600px) {
        --button-size: 3.75rem;
        font-size: 1.5rem;
      }
      &.active,
      &:hover {
        color: rgb(var(--dark-blue));
        background-color: #fff;
      }
    }
    @media (min-width: 900px) {
      grid-area: controls;
      flex-direction: column;
      align-self: center;
      --button-size: 5rem;
    }
  }

  &__information {
    text-align: center;
    color: rgb(var(--light-blue));
    font-family: var(--font-barlow-condensed);
    h4 {
      font-family: var(--font-barlow-condensed);
      font-size: .875rem;
      margin-block-end: .5625rem;
    }
    h2 {
      font-family: var(--font-bellefair);
      color: #fff;
      font-size: 1.5rem;
      margin-block-end: 1rem;
    }
    p {
      font-size: 15px;
      font-family: var(--font-barlow);
      line-height: 25px;
      text-wrap: balance;
    }
    @media (min-width: 600px) {
      h4 {
        font-size: 1rem;
      }
      h2 {
        font-size: 2.5rem;
      }
      p {
        font-size: 1rem;
        max-inline-size: 458px;
        display: block;
        margin: auto;
      }
    }
    @media (min-width: 900px) {
      grid-area: description;
      text-align: start;
      align-content: center;
      p {
        margin: 0;
        font-size: 18px;
        padding: 0;
      }
    }
  }

  @media (min-width: 600px) {
    padding-block-start: 40px;
  }

  @media (min-width: 900px) {
    font-size: 1.75rem;
    display: grid;
    grid-template-areas: 
    "title title title"
    "controls description preview";
    grid-template-columns: 90px 500px 1fr;
    padding-inline-start: 16vw;
    gap: 2rem;
  }
}
</style>

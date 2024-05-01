<script setup lang="ts">
import { reactive, ref, computed } from "vue"
import type { Destination } from "@/@types"
import sourceDestination from "@/@db/destinations.json"
import ImageEuropa from "@/assets/images/destination/image-europa.png"
import ImageMoon from "@/assets/images/destination/image-moon.png"
import ImageTitan from "@/assets/images/destination/image-titan.png"
import ImageMars from "@/assets/images/destination/image-mars.png"

const images = ref<{ [key: string]: string }>({
  "image-europa": ImageEuropa,
  "image-moon": ImageMoon,
  "image-titan": ImageTitan,
  "image-mars": ImageMars
})

const currentDestinationId = ref<number>(1)
const destinations: Destination[] = reactive([...sourceDestination])
const currentDestination = computed<Destination>(() => {
  return destinations.find((c) => c.id === currentDestinationId.value)!
})
</script>

<template>
  <main class="destination__container">
    <h3 class="destination__title">Pick your destination</h3>
    <div class="destination__content">
      <figure class="destination__figure">
        <img v-if="currentDestination.image" :src="images[currentDestination.image]" :alt="currentDestination.destination" />
      </figure>
      <div class="destination__planets">
        <div class="destination__planets__links">
          <a
            v-for="(item, index) in destinations"
            :key="index"
            href="javascript:;"
            :class="{ active: currentDestinationId === item.id }"
            @click="currentDestinationId = item.id"
          >
            {{ item.destination }}
          </a>
        </div>
        <div class="destination__planets__information">
          <div class="information__header">
            <h3>{{ currentDestination.destination }}</h3>
            <p class="description">
              {{ currentDestination.description }}
            </p>
          </div>
          <hr />
          <div class="information__footer">
            <div>
              <p class="sub-h2">AVG. DISTANCE</p>
              <h5>{{ currentDestination.avgDistance }}</h5>
            </div>
            <div>
              <p class="sub-h2">Est. travel time</p>
              <h5>{{ currentDestination.travelTime }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
:global(#app:has(.destination__container)) {
  background-image: url("../assets/images/destination/background-destination-mobile.jpg");
  background-attachment: fixed;
  background-size: cover;

  @media (min-width: 600px) {
    background-image: url("../assets/images/destination/background-destination-tablet.jpg");
  }

  @media (min-width: 900px) {
    background-image: url("../assets/images/destination/background-destination-desktop.jpg");
  }
}

.destination {
  &__container {
    padding: 1.5rem;

    @media (min-width: 900px) {
      max-inline-size: 1340px;
      margin-inline: auto;
      margin-block-start: 50px;
      padding: 0;
    }
  }
  &__title {
    font: var(--nav-text);
    text-align: center;
    font-weight: 400;
    letter-spacing: 0.1688rem;
    margin-block-end: 2rem;
    @media (min-width: 600px) {
      text-align: start;
      font-size: 1.25rem;
      margin-block-end: 3.75rem;
    }
    @media (min-width: 900px) {
      font-size: 1.75rem;
    }

    &::before {
      content: "01";
      padding-inline-end: 18px;
      font-weight: bold;
      opacity: 25%;
    }
  }
  &__content {
    @media (min-width: 900px) {
      display: flex;
      justify-content: space-between;
    }
  }
  &__figure {
    text-align: center;
    margin-block-end: 1.625rem;
    @media (min-width: 600px) {
      margin-block-end: 3.3125rem;
    }

    & > img {
      --size: 170px;
      inline-size: var(--size);
      block-size: var(--size);
      @media (min-width: 600px) {
        --size: 300px;
      }
      @media (min-width: 900px) {
        --size: 445px;
      }
    }
  }
  &__planets {
    &__links {
      display: flex;
      gap: 1.5938rem;
      justify-content: center;
      margin-block-end: 1.25rem;
      a {
        color: rgb(var(--light-blue));
        font: var(--nav-text);
        display: inline-block;
        position: relative;
        padding-bottom: 0.4em;
        border-bottom: 3px solid transparent;

        &.active {
          border-color: rgb(var(--white));
          color: rgb(var(--white));
        }

        &:hover:not(.active) {
          border-color: rgb(var(--white) / 50%);
        }

        @media (min-width: 600px) {
          font-size: 1rem;
        }
      }

      @media (min-width: 900px) {
        justify-content: flex-start;
        margin-block-end: 2.3125rem;
      }
    }
    &__information {
      text-align: center;

      .information__header {
        & h3 {
          margin-block-end: 0.0625rem;
          text-transform: uppercase;
          @media (min-width: 600px) {
            font-size: 5rem;
          }
          @media (min-width: 900px) {
            font-size: 6.25rem;
          }
        }

        & .description {
          font-size: 0.9375rem;
          color: rgb(var(--light-blue));
          @media (min-width: 600px) {
            font-size: 1rem;
          }
        }
      }

      .information__footer {
        h5,
        p {
          text-transform: uppercase;
        }

        p {
          color: rgb(var(--light-blue));
          margin-block-end: 0.75rem;
        }

        h5 {
          font-family: var(--font-bellefair);
        }

        & > div {
          margin-block-end: 2rem;
        }

        @media (min-width: 600px) {
          padding-block-start: 1.8125rem;
          display: flex;
          justify-content: space-evenly;
        }

        @media (min-width: 900px) {
          gap: 80px;
          justify-content: flex-start;
        }
      }

      & > hr {
        border-color: #383b4b;
        margin-block: 2rem;
        background: #383b4b;
        @media (min-width: 600px) {
          margin-block-end: 0;
        }
      }

      @media (min-width: 600px) {
        max-inline-size: 573px;
        margin: auto;
      }

      @media (min-width: 900px) {
        text-align: start;
      }
    }
  }
}
</style>

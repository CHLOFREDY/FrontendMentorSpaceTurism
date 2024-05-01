<script setup lang="ts">
import { ref, watch, computed } from "vue"
const props = defineProps<{
  paths: string[]
}>()

const emit = defineEmits<{
  (e: "@changeIndex", index: number): void
}>()

const currentIndex = ref<number>(0)

const nextIndex = (newIndex: number) => {
  if (newIndex >= props.paths.length) return 0
  if (newIndex < 0) return props.paths.length - 1
  return newIndex
}

watch(currentIndex, (newValue) => {
  const newIndex = nextIndex(newValue)
  currentIndex.value = newIndex
  emit("@changeIndex", newIndex)
})

const renderImage = (path: string): string => {
  const imgUrl = new URL(path, import.meta.url).href
  return imgUrl
}

const translate = computed<string>(() => {
  const percentage = currentIndex.value * 100 * -1
  return `${percentage}%`
})
</script>

<template>
  <div class="carousel__container">
    <div class="carousel" :style="{ '--translate': translate, '--grid-columns': paths.length }">
      <slot v-for="(path, index) in paths" name="item" :message="path">
        <img :key="index" :src="renderImage(path)" :alt="path" />
      </slot>
    </div>
  </div>
  <div class="carousel__controls">
    <button v-for="(_, index) in paths.length" type="button" :class="{ active: index === currentIndex }" @click.stop="currentIndex = index"></button>
  </div>
</template>

<style lang="scss" scoped>
.carousel {
  &__container {
    overflow: hidden;
  }
  text-align: center;
  display: grid;
  grid-template-columns: repeat(var(--grid-columns), 100%);
  translate: var(--translate, 0%);
  transition: translate 150ms ease-in-out;
  img {
    block-size: 222px;
    vertical-align: bottom;
    margin: auto;
    user-select: none;
  }

  &__controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding-block: 30px;
    border-top: 1px solid #383b4b;
    --size-control: 10px;
    & > button {
      inline-size: var(--size-control);
      block-size: var(--size-control);
      border-radius: 50%;
      outline: none;
      border: none;
      cursor: pointer;

      &:not(.active) {
        opacity: 17.44%;
      }
    }
  }
}
</style>

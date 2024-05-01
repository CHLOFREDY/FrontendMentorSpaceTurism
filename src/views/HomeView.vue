<script setup lang="ts"></script>

<template>
  <main class="home">
    <div class="home__content">
      <p class="home__subtitle">SO, YOU WANT TO TRAVEL TO</p>
      <h2 class="home__title">SPACE</h2>
      <p class="home__description">
        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world experience!
      </p>
    </div>
    <div class="home__button">
      <button>EXPLORE</button>
    </div>
  </main>
</template>

<style scoped>
:global(#app:has(.home)) {
  background-image: url("../assets/images/home/background-home-mobile.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
}

.home {
  text-align: center;
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  gap: 81px;
}

.home__content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.home__subtitle {
  font: var(--nav-text);
  letter-spacing: 2.7px;
}

.home__title {
  font: var(--heading-2);
  font-size: 80px;
}

.home__description {
  font-size: 15px;
  line-height: 25px;
}

.home__button button {
  --shadow-size: 40px;
  --size-button: 150px;

  border: none;
  outline: none;
  inline-size: var(--size-button);
  block-size: var(--size-button);
  flex-shrink: 0;
  border-radius: 50%;
  font-family: var(--font-bellefair, "sans");
  font-size: 20px;
  transition: box-shadow 250ms ease;
}

.home__button button:active,
.home__button button:hover {
  box-shadow: 0 0 0 var(--shadow-size) rgb(var(--white) / 10%);
}

@media (min-width: 600px) {
  :global(#app:has(.home)) {
    background-image: url("../assets/images/home/background-home-tablet.jpg");
  }

  .home {
    align-items: center;
    padding-block-start: 100px;
    gap: 156px;
  }

  .home__content {
    max-inline-size: 450px;
  }

  .home__button button {
    --shadow-size: 80px;
    --size-button: 242px;
  }
}

@media (min-width: 900px) {
  :global(#app:has(.home)) {
    background-image: url("../assets/images/home/background-home-desktop.jpg");
  }

  .home {
    max-inline-size: 1110px;
    flex-direction: row;
    justify-content: space-between;
    margin: auto;
    padding-block-start: 150px;
    padding-inline: 0;
  }

  .home__content {
    text-align: start;
  }

  .home__subtitle {
    font: var(--heading-5);
  }

  .home__title {
    font: var(--heading-1);
  }

  .home__description {
    font-size: 18px;
  }

  .home__button button {
    --size-button: 274px;
  }
}
</style>

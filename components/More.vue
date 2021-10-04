<template>
  <section class="more-section">
    <div class="container mx-auto flex flex-col items-center mb-9">
      <img
        src="https://static.owlting.com/experiences_mountain_lodge/title-more.png"
        class="section-title"
        alt="title-features"
        width="320"
        height="30"
      >
      <p class="text-center">
        關於這場拍賣會，我們無法透露太多資訊<br>或許可以從影片中找到蛛絲馬跡
      </p>
    </div>

    <iframe class="video-container" width="800" height="500" src="https://www.youtube.com/embed/NPhTfDXDcZU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </section>
</template>

<style lang="sass" scoped>
.video-container
  @apply w-full mx-auto
  max-width: 800px
  height: 250px
  @screen md
    height: 500px
</style>

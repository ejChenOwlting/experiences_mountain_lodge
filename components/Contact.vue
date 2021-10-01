<template>
  <section class="contact-section">
    <div class="container mx-auto flex flex-col items-center">
      <div
        class="flex mb-12"
        style="max-width: 500px"
      >
        <div class="text-center">
          <img
            class="lawyer-img"
            :src="require('~/assets/img/contact-lawyer.png')"
            alt="lawyer"
            width="92"
            height="92"
          >
          關律師
        </div>
        <div class="chat-group">
          已經不知道是第幾個來打聽這個消息的人了......<br>
          但只要是想參加朱老爺拍賣會的人，我一定會好好招待，不過我可不想降低拍賣會的水準。<br>
          這裡有幾項測驗麻煩您完成，確認您是否有能力可以完成朱老爺的遺願。<br>
          你準備好了嗎？
        </div>
      </div>
      <a
        class="btn w-full"
        style="max-width: 500px"
        href="http://www.eatgether.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        立即聯絡關律師
      </a>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.lawyer-img
  @apply block mb-2
  width: 72px
  min-width: 72px
  @screen md
    width: 92px
    min-width: 92px

.chat-group
  @apply bg-white py-3 px-5 rounded-md relative ml-8
  background-color: #343434

  &:before
    @apply absolute top-0
    content: ''
    border: 32px solid transparent
    border-top-color: #343434
    left: -16px
</style>

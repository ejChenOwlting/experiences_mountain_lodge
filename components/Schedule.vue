<template>
  <section
    id="schedule"
    class="schedule-section"
  >
    <div class="container mx-auto flex flex-col items-center">
      <img
        src="https://static.owlting.com/experiences_mountain_lodge/title-schedule.png"
        class="section-title"
        alt="title-schedule"
        width="209"
        height="35"
      >
      <div
        class="md:flex md:justify-center w-full text-center md:text-left"
        style="max-width: 720px"
      >
        <p class="md:w-1/2 md:px-6 mb-8 md:mb-0">
          <strong>第一天</strong><br>
          13:30 辦理入住手續<br>
          14:00 活動入場程序<br>
          14:30 第一章-協調者<br>
          18:00 晚餐時段<br>
          19:20 第二章-成年禮<br>
          21:00 自由時段
        </p>
        <p class="md:w-1/2 md:px-6">
          <strong>第二天</strong><br>
          08:00 早餐時段＋辦理退房與行李寄放<br>
          09:00 第三章-逝者已逝<br>
          10:00 獎項與成就公布<br>
          11:00 活動結束
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ScheduleSection'
}
</script>


<style lang="sass" scoped>
.schedule-section
  @apply bg-cover
  background-image: url('https://static.owlting.com/experiences_mountain_lodge/bg-schedule-m.jpg')
  @screen md
    background-image: url('https://static.owlting.com/experiences_mountain_lodge/bg-schedule.png')
</style>

<template>
  <section
    id="tickets"
    class="tickets-section"
  >
    <div class="container mx-auto text-center flex flex-col items-center">
      <img
        src="https://static.owlting.com/experiences_mountain_lodge/title-tickets.png"
        class="section-title"
        alt="title-features"
        width="221"
        height="36"
      >
      <div class="flex flex-col md:flex-row mb-5">
        <div class="md:mr-12 mb-4 md:mb-0" style="max-width: 340px">
          <img
            src="https://static.owlting.com/experiences_mountain_lodge/tickets-2.png"
            alt="tickets-2"
            width="340"
            height="241"
          >
        </div>
        <div style="max-width: 340px">
          <img
            src="https://static.owlting.com/experiences_mountain_lodge/tickets-20.png"
            alt="tickets-2"
            width="340"
            height="241"
          >
        </div>
      </div>
      <p class="mb-8" style="max-width: 600px">
        看到這，代表你已被朱老爺委託為「協調者」<br>
        協助互相贈恨、埋怨、誤解的繼承人們，搞清楚已逝的朱老爺究竟玩什麼把戲<br>
        你有信心成功解開繼承人們的心結並贏得豐厚的遺產嗎？
      </p>
      <a
        class="btn w-full"
        href="https://www.owlting.com/experiences/products/6105?l=tw&curr=TWD"
        target="_blank"
        rel="noopener noreferrer"
      >
        購買入場券
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturesSection'
}
</script>


<style lang="sass" scoped>
.tickets-section
  @apply bg-cover
  background-image: url('https://static.owlting.com/experiences_mountain_lodge/bg-tickets-m.jpg')
  @screen md
    background-image: url('https://static.owlting.com/experiences_mountain_lodge/bg-tickets.jpg')
</style>

<template>
  <footer class="bg-grey text-sm tracking-normal px-6">
    <div class="container mx-auto py-4">
      <div class="grid grid-cols-4 gap-4">
        <div class="col-span-4 md:col-span-2 lg:col-span-1 mb-4 md:mb-0">
          <div class="mb-10">
            <div class="text-grey-lighter mb-2">
              客服資訊
            </div>
            客服電話：+886-2-7727-6538<br>
            傳真號碼：+886-2-7727-6536<br>
            客服時間：平日 10 : 00 ~ 18 : 30
          </div>
          <div class="col-span-4 md:col-span-2 lg:col-span-1">
            <div class="text-grey-lighter mb-2">
              認識奧丁丁體驗
            </div>
            <a
              class="inline-block"
              href="https://www.owlting.com/experiences/about?l=tw&curr=TWD"
              target="_blank"
              rel="noopener noreferrer"
            >
              關於品牌
            </a>
            <div>
              <a v-for="item in socialMediaList"
                :key="item.icon"
                class="mr-2"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="item.icon"
                :href="item.link"
              >
                <i style="font-size: 22px" :class="item.icon" />
              </a>
            </div>
          </div>
        </div>
        <div class="col-span-4 md:col-span-2 lg:col-span-1 mb-4 md:mb-0">
          <div class="text-grey-lighter mb-2">
            奧丁丁集團
          </div>
          <div
            v-for="service in serviceList"
            :key="service.enLabel"
          >
            <a
              :href="service.link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="inline-block">{{ service.label }}</span><br>
              <small class="inline-block text-grey-lightest" style="transform: translateY(-5px)">
                {{ service.enLabel }}
              </small>
            </a>
          </div>
        </div>
        <div class="col-span-4 md:col-span-2 lg:col-span-1 mb-4 md:mb-0">
          <div class="text-grey-lighter mb-2">
            網站條款
          </div>
          <div
            v-for="term in termList"
            :key="term.label"
          >
            <a
              :href="term.link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ term.label }}
            </a>
          </div>
        </div>
        <div class="col-span-4 md:col-span-2 lg:col-span-1 mb-4 md:mb-0">
          <div class="text-grey-lighter mb-2">
            客服資訊
          </div>
          <p class="text-grey-lightest mb-10">
            交觀甲8053-品保北2322<br>
            代表人: 王俊凱<br>
            聯絡人: 李俊宏<br>
            231 新北市新店區北新路三段215號3樓<br>
            聯絡電話： +886-2-7727-6538<br>
            傳真號碼： +886-2-7727-6536
          </p>
          <div class="text-grey-lighter mb-2">
            官方 APP 下載
          </div>
          <a
            class="inline-block mr-4"
            href="https://apps.apple.com/tw/app/%E5%A5%A7%E4%B8%81%E4%B8%81%E6%8F%AA%E4%BD%A0%E9%AB%94%E9%A9%97/id1552125085"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://static.owlting.com/experiences_mountain_lodge/apple-store.png"
              alt="apple-store"
              width="100"
              height="30"
            >
          </a>
          <a
            class="inline-block"
            href="https://play.google.com/store/apps/details?id=com.owlting.app.owljourney"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://static.owlting.com/experiences_mountain_lodge/google-play.png"
              alt="google-play"
              width="100"
              height="30"
            >
          </a>
        </div>
      </div>
    </div>
    <div class="border-t border-grey-light text-center text-xs py-2">
      ©奧丁丁旅行社股份有限公司 版權所有
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data () {
    return {
      serviceList: [
        { label: '官方網站', enLabel: 'Official Website', link: 'https://www.owlting.com/portal/?lang=zh' },
        { label: '奧丁丁區塊鏈旅宿管理服務', enLabel: 'OwlNest', link: 'https://www.owlting.com/owlnest?l=tw' },
        { label: '奧丁丁區塊鏈應用服務 ', enLabel: 'OwlTing Blockchain Services', link: 'https://www.owlting.com/obs' },
        { label: '奧丁丁市集', enLabel: 'OwlTing Market', link: 'https://www.owlting.com/market/' },
        { label: '奧丁丁揪你', enLabel: 'OwlJourney', link: 'https://www.owlting.com/owljourney' },
        { label: '故事所', enLabel: 'Owlstay', link: 'https://owlstay.travel/' },
        { label: '奧丁丁客棧', enLabel: 'OwlTing Blog', link: 'https://blog.owlting.com/' },
        { label: '奧丁丁新聞', enLabel: 'OwlNews', link: 'https://www.owlting.com/news/' }
      ],
      termList: [
        { label: '使用條款', link: 'https://static.owlting.com/experiences/%E5%A5%A7%E4%B8%81%E4%B8%81%E9%AB%94%E9%A9%97_%E4%BD%BF%E7%94%A8%E8%80%85%E6%A2%9D%E6%AC%BE_20191101.pdf' },
        { label: '隱私政策', link: 'https://www.owlting.com/experiences/privacy' },
        { label: 'Cookie 政策', link: 'https://www.owlting.com/portal/about/cookie-policy' }
      ],
      socialMediaList: [
        { icon: 'owl-social-fb', link: 'https://www.facebook.com/OwlTing/' },
        { icon: 'owl-social-ig', link: 'https://www.instagram.com/owlting_experiences/?igshid=juauvo8fatpk' },
        { icon: 'owl-social-youtube', link: 'https://www.youtube.com/playlist?list=PLUKsRY-b8NbLVcz2YY6ctPQEmD0cpJeT5' }
      ]
    }
  }
}
</script>

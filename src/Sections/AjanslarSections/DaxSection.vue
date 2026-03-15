<template>
  <section
    class="max-w-[1440px] w-full mx-auto px-4 lg:px-[60px] h-fit flex flex-col lg:flex-row justify-between gap-[25px] mt-[43px] lg:mt-[68px]">
    <!-- Card 1 -->
    <DaxInfoCard iconSrc="/icons/Logo-3.svg" title="DAX Hakkında"
      description="Markanız için en iyi ajansı keşfetmek, dijital pazarlama, web geliştirme, sosyal medya yönetimi ve daha birçok alanda profesyonel destek almanızı sağlar." />

    <!-- Card 2 -->
    <DaxInfoCard iconSrc="/icons/Trusted-dark.svg" title="DAX Güvencesi"
      description="Ajans profilleri doğrulanır, birebir görüşmelerle güvence altına alınır. Böylece iş ortaklarınızı şeffaf kriterlere göre belirleyebilirsiniz." />

    <!-- Card 3 -->
    <DaxInfoCard iconSrc="/icons/Git-pull-request.svg" title="Hızlı İletişim"
      description="Ajanslarla doğrudan bağlantı kurun. Teklif alın, sorularınızı sorun ve en uygun çözüme dakikalar içinde ulaşın." />
  </section>
</template>

<script setup>
import DaxInfoCard from '../../components/Cards/DaxInfoCard.vue';
</script>

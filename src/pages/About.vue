<template>
  <Layout>
    <div class="font-sans">
      <div class="grid grid-cols-2 gap-20">
        <div class="mt-10">
          <h1 class="text-red font-bold mb-4">ABOUT</h1>
          <h2 class="text-black font-serif text-5xl mb-8">SASHA</h2>
          <p class="mt-6 mb-3">SASHA stands for Support Against Sexual HArassment.</p>
          <p>At SASHA, we strive to create safe and inclusive workplaces. Not just because the law mandates it. But because every employee deserves to work at a place that makes them feel safe, secure, heard and respected.</p>
        </div>
        <div>
          <g-image src="~/assets/threewomen.svg"
                   alt="threewomen" />
        </div>
      </div>
      <!-- TODO: Teams svgs -->
      <div class="mt-20 mb-20 mr-20">
        <!-- <g-image src="~/assets/teams.svg"
                 alt="teams" /> -->
      </div>
      <div class="grid grid-cols-2 gap-20">
        <div>
          <h2 class="text-red font-bold mb-4">WE MEAN ALL THINGS</h2>
          <h3 class="text-black font-serif text-5xl mb-8">PoSH</h3>
          <p class="mt-6 mb-3">Since its inception in 2012, SASHA’s team, comprised of experienced legal consultants and a psychological counselor have stayed dedicated to the cause of helping organizations effectively become PoSH compliant. </p>
          <p>What began as a mere discussion between two friends, Founder Kanti Joshi and Co-Founder Sowmya Bhat, has grown into a proud organization that exclusively provides Sexual Harassment redressal and prevention services today. Our innovative approach focuses on effective awareness, sensitization and training. From drafting a PoSH policy to ensuring unbiased inquiries into complaints & providing timely grievance redressal, SASHA provides reliable support at every step of the way.
          </p>
        </div>
        <div class="bg-hammer">
          <g-image src="~/assets/circle.svg"
                   alt="circle" />
        </div>
      </div>
      <div class="mt-10 mb-10">
        <h2 class="font-light">Know more</h2>
        <div class="flex flex-nowrap">
          <h3 class="text-black font-bold">About SASHA</h3>
          <button aria-label="Know more about SASHA">
            <g-image class="max-w-7 max-h-7 fill-current"
                     src="~/assets/redroundarrow.svg"
                     alt="red round arrow"
                     aria-hidden="true" />
          </button>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-10">
        <div class="bg-telescope">
          <g-image class="circle-small"
                   src="~/assets/circlesmall.svg"
                   alt="circle small" />
        </div>
        <div>
          <h1 class="text-red font-bold mb-4">SASHA</h1>
          <h2 class="text-black font-serif text-5xl mb-8">VISION</h2>
          <p>SASHA’s vision is to create Safe & Inclusive Workplaces.</p>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-10">
        <div class="bg-rocket">
          <g-image class="circle-small"
                   src="~/assets/circlesmall.svg"
                   alt="circle small" />
        </div>
        <div>
          <h1 class="text-red font-bold mb-4">SASHA</h1>
          <h2 class="text-black font-serif text-5xl mb-8">Mission</h2>
          <p>Our mission is to ensure effective compliance by implementing the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013. </p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "About us"
  }
};
</script>
<style>
.bg-hammer {
  background-repeat: no-repeat;
  background-size: contain;
}
.bg-telescope {
  background-image: url("~@/assets/telescope.svg");
  background-repeat: no-repeat;
  background-size: contain;
}
.bg-rocket {
  background-image: url("~@/assets/rocket.svg");
  background-repeat: no-repeat;
  background-size: contain;
}
.circle-small {
  width: 50%;
}
</style>

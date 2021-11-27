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
          <h2 class="text-red font-bold mb-4">SASHA</h2>
          <h3 class="text-black font-serif text-5xl mb-8">VISION</h3>
          <p>SASHA’s vision is to create Safe & Inclusive Workplaces.</p>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-10 ">
        <div class="bg-rocket">
          <g-image class="circle-small"
                   src="~/assets/circlesmall.svg"
                   alt="circle small" />
        </div>
        <div>
          <h2 class="text-red font-bold mb-4">SASHA</h2>
          <h3 class="text-black font-serif text-5xl mb-8">Mission</h3>
          <p>Our mission is to ensure effective compliance by implementing the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013. </p>
        </div>
      </div>
      <div class="bg-black text-white  pledge-container">
        <div class="grid grid-cols-2 pledge-banner">
          <div>
            <h2 class="font-serif text-5xl mb-8">The <span class="text-red">SASHA</span> Pledge</h2>
            <p>WE, THE MEMBER OF SASHA HEREBY PLEDGE</p>
            <ul class="list-disc list-inside">
              <li>To help prevent sexual harassment at the workplace through awareness</li>
              <li>To strive to protect the rights of all employees against sexual harassment</li>
              <li>To foster a culture that leads to organizational progress</li>
            </ul>
            <p>By CREATING SAFE AND INCLUSIVE WORKPLACES.</p>
          </div>
        </div>
      </div>
      <div class="team">
        <h2 class="font-serif text-center">
          <span class="block text-red mb-2">MEET THE MEMBERS OF</span>
          <span class="text-5xl mb-8">Team SASHA</span>
        </h2>
        <!-- TODO: TEAM SCROLLER -->
      </div>
      <div class="grid grid-cols-2 gap-10">
        <div>
          <p>SASHA’s purpose is to make the provisions of the law simpler in order to sensitise and prevent instances of sexual harassment at the workplace. </p>
          <div class="mt-10 mb-10">
            <h2 class="font-light">For all things PoSH,</h2>
            <div class="flex flex-nowrap">
              <h3 class="font-light">visit the <span class="font-bold">Learning Centre</span></h3>
              <button aria-label="Learning Centre">
                <g-image class="max-w-7 max-h-7 fill-current"
                         src="~/assets/redroundarrow.svg"
                         alt="red round arrow"
                         aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
        <div class="bg-woman">
          <g-image class="circle-small"
                   src="~/assets/circlesmall.svg"
                   alt="circle small" />
        </div>
      </div>
      <div class="grid grid-cols-2 gap-10 ">
        <div class="bg-telephone">
          <g-image class="circle-small"
                   src="~/assets/circlesmall.svg"
                   alt="circle small" />
        </div>
        <div>
          <h2 class="mb-10">
            <span class="block mb-4 text-red font-bold">LET US MAKE</span>
            <span class="text-black font-serif text-5xl mb-8">Workplaces Safe & Inclusive. </span>
          </h2>
          <p class="font-bold mb-3">PARTNER WITH US</p>
          <p class="mb-5">Let's Get in Touch</p>
          <p class="mb-5 text-sm text-red font-bold">Kanti Joshi - +91 98450 9650</p>
          <p class="mb-5 text-sm text-red font-bold">Kanti@sashaindia.com</p>
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
.grid {
  margin-bottom: 50px;
}
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
.bg-woman {
  background-image: url("~@/assets/woman.svg");
  background-repeat: no-repeat;
  background-size: contain;
}
.bg-telephone {
  background-image: url("~@/assets/telephone.svg");
  background-repeat: no-repeat;
  background-size: contain;
}
.circle-small {
  width: 80%;
}
.pledge-container {
  position: absolute;
  left: 0;
  right: 0;
  margin: 0;
}
.pledge-banner {
  max-width: 760px;
  margin: 0 auto;
  padding: 20px;
}
.team {
  margin-top: 550px;
  margin-bottom: 100px;
}
</style>

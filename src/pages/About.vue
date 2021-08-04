<template>
  <Layout>
    <h1 class="text-red">ABOUT</h1>
    <h2 class="text-black font-serif text-5xl">SASHA</h2>
    <div class="font-sans">
    <p>SASHA stands for Support Against Sexual HArassment. We mean all things PoSH.</p>
    <p>At SASHA, we strive to create safe and inclusive workplaces. Not just because the law mandates it. But because every employee deserves to work at a place that makes them feel safe, secure, heard and respected.</p>
    <div class="mt-20 mb-20">
        <g-image src="~/assets/stats.png" alt="circle"/>
      </div>
    <div class="grid grid-cols-2 gap-4 mb-12">
      <div>
         <h2 class="text-red">WE MEAN ALL THINGS</h2>
         <h3 class="text-black font-serif text-5xl">PoSH</h3>
         <p class="mt-6 mb-3">Since its foundation in 2012, SASHA’s team, comprised of experienced legal consultants and a psychological counsellor have stayed dedicated to the cause of helping organisations understand not just the word, but the spirit, that results in the effective implementation of the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act 2013. </p>
        <p>What began as a mere discussion between two friends, Founder Kanti Joshi and Co-founder Sowmya Bhat, has grown into a proud organisation that exclusively provides PoSH services today. Our innovative approach focuses on effective awareness, sensitization and training. From drafting the PoSH policy to ensuring unbiased inquiries into complaints and providing timely grievance redressal, SASHA provides handholding support at every step of the way.
        </p>
      </div>
      <div class="bg-hammer bg-circle">
        <g-image src="~/assets/circle.svg" alt="circle"/>
        <!-- <g-image src="~/assets/hammerhand.svg" alt="hammerhand"/> -->
      </div>
     </div>
      <div class="grid gap-2 grid-cols-2 mb-12">
        <div class="bg-vision bg-circle">
        <g-image class="vision-circle" src="~/assets/circle.svg" alt="circle"/>
      </div>
        <div>
          <h2 class="text-red">SASHA</h2>
          <h3 class="text-black font-serif text-5xl">Vision</h3>
          <p class="mt-6 mb-3">SASHA’s vision is to create safe and inclusive workspaces.
          </p>
        </div>  
    </div>
      <div class="grid gap-4 grid-cols-2 mb-12">
        <div class="bg-mission bg-circle">
        <g-image class="vision-circle" src="~/assets/circle.svg" alt=""/>
      </div>
        <div>
          <h2 class="text-red">SASHA</h2>
          <h3 class="text-black font-serif text-5xl">Mission</h3>
          <p class="mt-6 mb-3">Our mission is to ensure effective compliance by implementing the Sexual Harrasment of Women at Workplace (Prevention, Prohibition and Redressal) Act,2013.
          </p>
        </div>  
    </div>
     
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About us'
  }
}
</script>
<style>
.bg-hammer {
  background-image: url("~@/assets/hammerhand.svg");
  background-repeat: no-repeat;
  background-size: contain;
}
.bg-vision {
  background-image: url("~@/assets/vis2x.png");
  background-repeat: no-repeat;
  background-size: contain;
}
.bg-mission {
  background-image: url("~@/assets/mis2x.png");
  background-repeat: no-repeat;
  background-size: contain;
}
.vision-circle {
  width:50%;
  }

</style>

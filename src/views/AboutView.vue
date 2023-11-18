<template>
  <div class="content about post">
    <div class="post-header h-100">
      <img src="https://i.postimg.cc/y8f3TqgG/C-LWEDDING-1170.jpg" class="rounded-circle post-img" alt="Justin Scholtz"
        loading="lazy">
      <div class="post-detail">
        <div class="d-flex align-items-center">
          <p class="m-0 ps-3 fw-bold">Justin</p>
          <p class="m-0 ps-3 fw-lighter date">15 July 2023</p>
        </div>
        <div class="ms-3">
          <p class="badge text-bg-primary"><i class="bi bi-code-slash"></i> coding</p>
        </div>
        <h1>About Me</h1>
        <p>My name is Justin Scholtz and web development has been a passion of mine ever since 2016 when I attended an
          intro
          to web development at a company called Rlabs, we did a month-long course where we were introduced to HTML and
          CSS.
          What made me realize it was my passion was the number of times I could have given up but didn't, I still had
          that
          fire in me to succeed in the challenges and become a front-end web developer. My journey consists of me joining
          a
          bootcamp and self studying, over my journey I've reached a point where I'm very comfortable with HTML and CSS
          but
          I'm still learning the ropes of JavaScript, I would love to then grow my VUE JS skills as my JS framework to
          broaden
          my skill set. I now feel like I'm ready to take on the next step in my journey and find employment as front end
          developer, Life Choices prepared me well for the next stage of my life so I'm ready for anything and everything.
        </p>
        <img src="https://i.postimg.cc/y8f3TqgG/C-LWEDDING-1170.jpg" class="img" alt="Justin Scholtz" loading="lazy">

        <!-- Skills Section -->
        
        <p class="text-center my-5 display-6">Skills</p>
        <div class="custom-container">
          <div class="card custom-border bg-dark text-white w-100" style="width: 18rem;" v-for="data in skills" :key="data.id">
            <div class="d-flex justify-content-center">
              <img :src="data.img" class="card-img-top w-25 mt-3" :alt="data.skillName">
            </div>
            <div class="card-body">
              <p class="card-title text-center">{{ data.skillName }}</p>
              <p class="card-text">{{ data.skillDesc }}</p>
              <p class="card-text">{{ data.skillLevel }}</p>
            </div>
          </div>
        </div>

        <!-- About Me Section -->

        <p class="text-center my-5 display-6">More About Me</p>
          <div class="custom-container">
            <div class="card custom-border bg-dark text-white w-100" style="width: 18rem;" v-for="data in aboutMe" :key="data.id">
              <div class="d-flex justify-content-center">
                <i :class="data.img" class="pt-3"></i>
              </div>
              <div class="card-body">
                <p class="card-title text-center">{{ data.title }}</p>
                <p class="card-text">{{ data.desc }}</p>
              </div>
            </div>
          </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    skills() {
      return this.$store.state.skills
    },
    aboutMe() {
      return this.$store.state.aboutMe
    }
  },
  mounted() {
    this.$store.dispatch('getSkills')
    this.$store.dispatch('getAboutMe')
  }
}
</script>

<style scoped>
.img {
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.about {
  margin-bottom: 3rem;
}

.custom-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.custom-border{
  border: 2px solid #fff;
}

</style>
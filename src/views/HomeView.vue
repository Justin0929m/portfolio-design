<template>
  <div class="content">
    <div class="post m-0" v-for="data in workData" :key="data.id">
      <div class="post-header h-100">
        <img src="https://i.postimg.cc/y8f3TqgG/C-LWEDDING-1170.jpg" class="rounded-circle post-img" alt="Justin Scholtz"
          loading="lazy">
        <div class="post-detail w-100">
          <div class="d-flex flex-column">
            <div class="d-flex align-items-center">
              <p class="m-0 ps-3 fw-bold">Justin</p>
              <p class="m-0 ps-3 fw-lighter date">{{ data.date }}</p>
            </div>
            <div class="ms-3">
              <p class="badge text-bg-primary"><i class="bi bi-code-slash pe-2"></i>{{ data.type }}</p>
            </div>
            <div class="post-body ps-md-3">
              <div class="d-flex">
                <p class="fw-bold m-0 pe-2">{{ data.company }}</p>
                <p>{{ data.role }}</p>
              </div>
              <p>{{ data.jobDesc }}</p>
              <img :src="data.img" class="rounded-2 mt-3" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="post m-0" v-for="data in eduData" :key="data.id">
      <div class="post-header h-100">
        <img src="https://i.postimg.cc/y8f3TqgG/C-LWEDDING-1170.jpg" class="rounded-circle post-img" alt="Justin Scholtz"
          loading="lazy">
        <div class="post-detail w-100">
          <div class="d-flex flex-column">
            <div class="d-flex align-items-center">
              <p class="m-0 ps-3 fw-bold">Justin</p>
              <p class="m-0 ps-3 fw-lighter date">{{ data.date }}</p>
            </div>
            <div class="ms-3">
              <p class="badge text-bg-primary"><i class="bi bi-code-slash pe-2"></i>{{ data.type }}</p>
            </div>
            <div class="post-body ps-md-3">
              <h2></h2>
              <p>{{ data.institution }}</p>
              <p>{{ data.eduDesc }}</p>
              <img :src="data.img" :alt="data.institution">
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
    workData() {
      return this.$store.state.workData
    },
    eduData() {
      return this.$store.state.eduData
    }
  },
  mounted() {
    this.$store.dispatch('getWork')
    this.$store.dispatch('getEdu')
  }
}
</script>

<style scoped></style>
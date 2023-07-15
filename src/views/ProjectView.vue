<template>
    <div class="content">
        <div class="post" v-for="data in jsonData" :key="data.id">
            <div class="post-header h-100">
                <img src="https://i.postimg.cc/y8f3TqgG/C-LWEDDING-1170.jpg" class="rounded-circle post-img" alt="">
                <div class="post-detail w-100">
                    <div class="d-flex flex-column">
                        <div class="d-flex align-items-center">
                            <p class="m-0 ps-3 fw-bold">Justin</p>
                            <p class="m-0 ps-3 fw-lighter date">15 July 2023</p>
                        </div>
                        <div class="ms-3">
                            <p class="badge text-bg-primary"><i class="bi bi-code-slash"></i> coding</p>
                        </div>
                        <div class="post-body ps-3">
                            <h2>{{ data.projectTitle }}</h2>
                            <p>{{ data.projectDesc }}</p>
                            <a :href="data.gitHubLink" target="_blank"><i class="bi bi-github"></i></a>
                            <a :href="data.demoLink" target="_blank"><i class="bi bi-box-arrow-up-right ps-3"></i></a>
                            <img :src="data.img" class="rounded-2 mt-3" alt="">
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
        jsonData() {
            return this.$store.state.jsonData
        }
    },
    mounted() {
        this.$store.dispatch('getData')
    }
}
</script>

<style scoped>
a {
    color: #fff;
}
</style>
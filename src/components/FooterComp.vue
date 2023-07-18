<template>
    <div class="content">
        <div class="flex">
            <div id="link">
                <a href="https://www.facebook.com/justin.scholtz.79/" class="text-white"  target="_blank"><i class="bi bi-facebook"></i></a>
                <a href="https://www.instagram.com/justin_scholtz_/"  class="text-white" target="_blank"><i class="bi bi-instagram"></i></a>
                <a href="https://www.linkedin.com/in/justin-scholtz-08403713a" class="text-white"  target="_blank"><i class="bi bi-linkedin"></i></a>
            </div>
            <div>
                <p>Justin © {{ new Date().getFullYear() }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.flex{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
}

#link{
    margin-bottom: 1rem;
}

i{
    padding-inline: 1rem;
}

</style>
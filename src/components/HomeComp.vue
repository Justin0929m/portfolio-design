<template>
    <div class="content">
        <div class="header"></div>
        <div class="header-grid gap-2">
            <div class="header-img-follow">
                <img src="https://i.postimg.cc/y8f3TqgG/C-LWEDDING-1170.jpg" class="rounded-circle" alt="">
                <button class="btn btn-primary h-50">Follow <i class="bi bi-twitter"></i></button>
            </div>
            <div class="header-title">
                <h1>Justin Scholtz</h1>
            </div>
            <div class="header-test">
                <p>Aspiring Front End Developer</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, facilis.</p>
            </div>
            <div class="btn-group gap-3">
                <i class="bi bi-briefcase-fill icons"></i>
                <p>Available</p>
                <i class="bi bi-calendar-day-fill icons"></i>September 29th
                <i class="bi bi-calendar-plus icons"></i>Joined June 2018
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
h1 {
    font-weight: bold;
}

.header {
    background: url(https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80) center no-repeat;
    height: 25vh;
}

.header-grid {
    display: grid;
    grid-template-rows: 100px 70px 90px 50px;
    padding-inline: 2rem;
}

.header-img-follow {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.btn-group {
    display: flex;
    color: var(--linkColor);
}

img {
    border: 3px solid #fff;
    width: 10rem;
    height: 10rem;
    object-fit: cover;
    position: relative;
    bottom: 2rem;
}
</style>
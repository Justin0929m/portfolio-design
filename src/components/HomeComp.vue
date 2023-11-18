<template>
    <div class="content">
        <div class="header mb-3">
            <img src="https://images.unsplash.com/photo-1507939040444-21d4dca3781e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="">
        </div>
        <div class="header-grid gap-2">
            <div class="header-img-follow">
                <img src="https://i.postimg.cc/y8f3TqgG/C-LWEDDING-1170.jpg" alt="Justin Scholtz" class="circle"
                    loading="lazy">
                <a target="_blank" href="https://drive.google.com/file/d/1vf9uVZKDlC2XRyc1jNNaw4ABykPqcnw9/view?usp=sharing"
                    class="btn btn-dark custom-btn px-2">Resume <i class="bi bi-download ps-2"></i></a>
            </div>
            <div>
                <h1>Justin Scholtz</h1>
            </div>
            <div>
                <p>Aspiring Front End Developer<i class="bi bi-braces ps-2"></i></p>
                <code>console.log("Code, Creativity, and Coffee: My Frontend Journey.<i class="bi bi-cup-hot-fill ps-2"></i>")</code>
            </div>
            <div class="btn-group gap-2 mt-3">
                <i class="bi bi-calendar-day-fill icons"></i>September 29th
                <i class="bi bi-calendar-plus icons"></i>Joined June 2018
            </div>
            <div>
                <nav>
                    <ul class="mt-5">
                        <router-link to="/" class="custom-nav-links">Feed</router-link>
                        <router-link to="/about" class="custom-nav-links">About Me</router-link>
                        <router-link to="/projects" class="custom-nav-links">Projects</router-link>
                        <router-link to="/contact" class="custom-nav-links">Contact</router-link>
                    </ul>
                </nav>
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
    height: 35vh;
    overflow: hidden;
}

.header-grid {
    display: grid;
    grid-template-rows: repeat(4, auto);
    padding-inline: 1rem;
    position: relative;
    top: -5rem;
}

.header-img-follow {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.btn-group {
    display: flex;
    color: var(--linkColor);
    font-size: .8rem;
}

.custom-btn {
    align-self: end;
    margin-bottom: 1rem;
}

.circle {
    border: 5px solid #fff;
    object-fit: cover;
    border-radius: 50%;
    aspect-ratio: 1 / 1;
    width: clamp(2rem, 40%, 10rem);
}

ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    padding-inline: .1rem;
}

.custom-nav-links {
    text-decoration: none;
    color: #fff;
}

a {
    padding: .3rem;
}

.custom-nav-links.router-link-active {
    border-bottom: 5px solid var(--activeLink);
    background-color: var(--hoverBgColor);
}
</style>
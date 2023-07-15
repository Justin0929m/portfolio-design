<template>
    <div class="content">
        <nav>
            <ul>
                <router-link to="/" class="custom-nav-links">Feed</router-link>
                <router-link to="/about" class="custom-nav-links">About</router-link>
                <router-link to="/projects" class="custom-nav-links">Projects</router-link>
                <router-link to="/contact" class="custom-nav-links">Contact</router-link>
                <router-link to="/moreabout" class="custom-nav-links">Media</router-link>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
ul{
    display: flex;
    justify-content: space-around;
    list-style: none;
    padding: 1rem;
}

li{
    padding-inline: 1rem;
}

.custom-nav-links{
    text-decoration: none;
    color: #fff;
}

a.router-link-active {
  border-bottom: 5px solid var(--activeLink);
}
</style>
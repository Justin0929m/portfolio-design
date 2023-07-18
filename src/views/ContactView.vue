<template>
    <div class="content mb-5">
        <div class="post m-0">
            <div class="post-header h-100">
                    <img src="https://i.postimg.cc/y8f3TqgG/C-LWEDDING-1170.jpg" class="rounded-circle post-img" alt="Justin Scholtz" loading="lazy">
                    <div class="post-detail w-100">
                        <div class="d-flex align-items-center">
                            <p class="m-0 ps-3 fw-bold">Justin</p>
                            <p class="m-0 ps-3 fw-lighter date">15 July 2023</p>
                        </div>
                        <p class="mt-3">Feel free to leave me a message, lets talk.</p>
                        <div class="msg w-100 mt-3">
                    <h4 class="text-uppercase">Get In Touch</h4><i @click="toggleContact" class="bi bi-caret-down-square-fill icon rounded-circle"></i>
                </div>
                <form action="https://formspree.io/f/xdovbwvy" method="POST" class="w-100" :class="{ 'hide-form': hide }">
                    <div class="mb-3">
                                <label for="text" class="form-label">Name</label>
                                <input type="text" class="form-control border-0" name="full-name" id="text" required>
                            </div>
                    <div class="mb-3">
                            <label for="email" class="form-label">Email address</label>
                            <input type="email" class="form-control border-0" name="email" id="email" required>
                        </div>
                        <div class="mb-3">
                            <label for="text" class="form-label">Subject</label>
                            <input type="text" class="form-control border-0" name="subject" id="subject" required>
                        </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                        <textarea class="form-control border-0" id="message" rows="3" name="message"></textarea>
                    </div>
                    <div class="d-flex justify-content-center">
                        <button class="btn btn-dark w-100">Send Message</button>
                    </div>
                </form>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            hide: true
        }
    },
    methods:{
        toggleContact(){
            this.hide = !this.hide
        }
    }
}
</script>

<style scoped>



input,textarea{
    background-color: #212529;
    color: #fff;
}

input:focus, textarea:focus{
    background-color: #212529;
    color: #fff;
}
.msg{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #495057;
    padding: 1rem;
    color: #fff;
}

.icon{
    cursor: pointer;
    color: #fff;
}

form{
    background-color: #495057;
    padding: 1rem;
    color: #fff;
}

.hide-form{
    display: none;
}
</style>
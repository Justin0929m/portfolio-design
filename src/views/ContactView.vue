<template>
    <div class="content mb-5">
        <div class="post">
            <div class="post-header h-100">
                    <img src="https://i.postimg.cc/y8f3TqgG/C-LWEDDING-1170.jpg" class="rounded-circle post-img" alt="">
                    <div class="post-detail w-100">
                        <div class="d-flex align-items-center">
                            <p class="m-0 ps-3 fw-bold">Justin</p>
                            <p class="m-0 ps-3 fw-lighter date">15 July 2023</p>
                        </div>
                        <div class="ms-3">
                            <p class="badge text-bg-primary"><i class="bi bi-code-slash"></i> coding</p>
                        </div>
                        <div class="msg ms-3 w-100">
                    <h4 class="text-uppercase">Leave me a message</h4><i @click="toggleContact" class="bi bi-arrow-down icon rounded-circle"></i>
                </div>
                <form action="#" class="w-100 ms-3" :class="{ 'hide-form': hide }">
                    <div class="mb-3">
                                <label for="text" class="form-label">Name</label>
                                <input type="text" class="form-control" name="full-name" id="text" placeholder="John Doe">
                            </div>
                    <div class="mb-3">
                            <label for="email" class="form-label">Email address</label>
                            <input type="email" class="form-control" name="email" id="email" placeholder="name@example.com">
                        </div>
                        <div class="mb-3">
                            <label for="subject" class="form-label">Subject</label>
                            <input type="text" class="form-control" name="subject" id="subject">
                        </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div class="d-flex justify-content-center">
                        <button class="btn btn-primary">Send Message</button>
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
            hide: false
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
.msg{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--bgContactColor);
    padding: 1rem;
    color: #000;
}

.icon{
    cursor: pointer;
    color: var(--activeLink);
}

form{
    background-color: var(--bgContactColor);
    padding: 1rem;
    color: #000;
}

.hide-form{
    display: none;
}
</style>
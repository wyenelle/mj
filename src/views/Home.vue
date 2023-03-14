<script setup>
import { RouterLink } from 'vue-router'
import Button from '../components/Button.vue'
import Img from '../assets/front.jpeg'


</script>

<template>
    <main class="w-full flex-vertical  h-screen bg-black text-white md:bg-white md:text-black ">
    <nav class="mt-3">
        <h2 class="font-extrabold text-2xl pl-6 md:pl-10 "> Counter App </h2>
    </nav>
    <header data-aos="zoom-in"  class="w-full h-auto md:h-5/6 mt-10 md:mt-3 grid grid-cols-2 ">
                <div class="col-span-2 md:col-span-1  flex flex-col justify-around items-center text-center gap-5 md:justify-center md:items-start  pl-10 md:text-start py-4">
                    <h1 class="w-9/12 h1">
                        A better way to build counter apps
                    </h1>
                    <p class="text-gray-300 md:text-gray-500 w-10/12">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam velit illo harum. Inventore aut rerum dolorem est, tempore sunt culpa?
                  </p>
                  <RouterLink to="/counter">
                          <Button text="counter" class="btn" />
                      </RouterLink>
                    </div>

                <div class="col-span-1  hidden md:block">
                    <img :src='Img' alt='girl smiling' class='img' />
                </div>
            </header>


    
    </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@1,700&display=swap');

.wrapper {
    font-family: 'Alegreya', serif;
}

.img {
    width: 100%;
    height: 100%;
}
</style>
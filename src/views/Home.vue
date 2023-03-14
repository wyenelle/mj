<script setup>
import {RouterLink} from 'vue-router'
import Button from '../components/Button.vue'
import Img from '../assets/girl.png'


</script>

<template>
    <div class="h-screen wrapper  h-auto  px-5 ">
        <nav class="mt-3">
            <h2 class="font-extrabold text-2xl "> counter app </h2>
        </nav>

        <main class="w-full  mt-10  h-auto mb-10">
            <header data-aos="zoom-in"  class="w-full grid grid-cols-2 ">
                <div class="col-span-2 md:col-span-1  flex-vertical  py-4">
                    <h1 class="w-9/12 h1">
                        A better way to build counter apps
                    </h1>
                    <p class="text-gray-500 w-10/12">
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


            <div class="grid grid-cols-3 mt-20 gap-3 md:gap-1 h-80 py-3" data-aos-duration="900" data-aos="fade-in">
                <div class="col-span-3 md:col-span-1 shadow-md shadow-slate-200 rounded-md px-3 py-4 flex-vertical">
                    <h2 class="text-xl font-bold">WHat you will see</h2>
                    <ul class="w-10/12 mx-auto ">
                        <li>Easy to use counter</li>
                        <li class="my-2">Implemented functionalities in a composable</li>
                        <li>State management with VueX</li>
                    </ul>
                    <RouterLink to="/counter">
                        <Button text="Explore" class="btn" />
                    </RouterLink>
                </div>
                <div class="col-span-3 md:col-span-1 shadow-md shadow-slate-200 rounded-md px-3 py-4 flex-vertical">
                    <h2 class="text-xl font-bold">WHat you will see</h2>
                    <ul class="w-10/12 mx-auto ">
                        <li>Easy to use counter</li>
                        <li class="my-2">Implemented functionalities in a composable</li>
                        <li>State management with VueX</li>
                    </ul>
                    <RouterLink to="/counter">
                        <Button text="Explore" class="btn" />
                    </RouterLink>
                </div>
                <div class="col-span-3 md:col-span-1 shadow-md shadow-slate-200 rounded-md px-3 py-4 flex-vertical">
                    <h2 class="text-xl font-bold">WHat you will see</h2>
                    <ul class="w-10/12 mx-auto ">
                        <li>Easy to use counter</li>
                        <li class="my-2">Implemented functionalities in a composable</li>
                        <li>State management with VueX</li>
                    </ul>
                    <RouterLink to="/counter">
                        <Button text="Explore" class="btn" />
                    </RouterLink>
                </div>
            </div>
        </main>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@1,700&display=swap');
.wrapper{
    font-family: 'Alegreya', serif;
}
.img{
    width: 500px;
    height: 600px;
}

</style>
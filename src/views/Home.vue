<script setup>
import { RouterLink } from 'vue-router'
import { RouterLink } from 'vue-router'
import Button from '../components/Button.vue'
import Img from '../assets/Calculator.gif'


</script>

<template>
    <main class="h-auto wrapper    px-5 ">

        <div class="w-full mt=5 md:mt-8  h-auto m">
            <nav class="mt-3">
                <h2 class="font-extrabold text-2xl "> counter app </h2>
            </nav>

                <div class=" mt-10 w-full h-full">
                        <div class="grid grid-cols-2 gap-5 w-full h-full ">
                            <div class="col-span-2 md:col-span-1 order-last md:order-first">
                                <div class="flex-vertical  h-full ">
                                    <header class="flex-vertical  gap-5 w-10/12">
                                        <div>
                                            <h1 class="text-3xl md:text-4xl font-extrabold">
                                            A blend of vue's finest concepts. 
                                        </h1>
                                        <h1 class="text-3xl md:text-4xl font-extrabold">
                                            A <span>counter</span>, original and simple
                                        </h1>
                                        </div>
                                        <p class="text-light">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem aliquid ipsam, fugit nemo temporibus voluptate!
                                        </p>
                                        <p class="text-light">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem aliquid ipsam, fugit nemo temporibus voluptate!
                                        </p>
                                        <RouterLink to="/counter">
                                            <button class="text-2xl font-extrabold text-white p-3 rounded h-auto w-auto">
                                                counter
                                            </button>
                                        </RouterLink>


                                    </header>
                                </div>
                            </div>
                            <div class="col-span-2 md:col-span-1 w-full ">
                                <div class="flex-centered ">
                                    <img :src="Img" alt="photo" class="" />
                                </div>
                            </div>
                        </div>



                </div>



        </div>
    </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@1,700&display=swap');

.wrapper {
    font-family: 'Alegreya', serif;
}

.img {
    width: 500px;
    height: 600px;
}
</style>

<!-- 

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
            </div> -->
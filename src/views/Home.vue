<script setup>
import {RouterLink} from 'vue-router'
import img from '../assets/png.png'
</script>

<template>
    <div class="h-screen md:h-screen wrapper flex gap-4 flex-col justify-between items-start ">
        <nav><h1 class="text-2xl text-black font-extrabold px-6"></h1></nav>
       <div class="grid grid-cols-2  px-3 py-5">
            <div class="col-span-2 md:col-span-1">
                <header class="flex flex-col justify-center items-start px-3 gap-4">
                    <h1 class="text-blue-500 text-4xl font-bold">No one stops you from counting</h1>
                    <p class="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere est blanditiis maiores minus maxime at similique. In, consequuntur excepturi praesentium modi aut autem facere voluptatibus!
                    </p>
                    <div class="hidden md:block">
                        <h1 class="text-blue-500 text-4xl font-bold">Get to see my counter developed with Vue</h1>
                    <p class="font-light"> A very simple app that has a host of dependable functionalities
                    </p>
                    <ul class="ml-10 mt-4 ">
                        <li class="text-xl">Increment</li>
                        <li class="text-xl">Decrement</li>
                        <li class="text-xl">Reset counter Value</li>
                    </ul>

                    <h2 class="text-2xl mt-2">...elegance in the making</h2>
                    </div>
                    <RouterLink to="/counter">
                        <button class="px-3 py-2 bg-blue-500 text-white rounded-md border border-blue-500"> See Counter</button>
                    </RouterLink>
                </header>
            </div>

            <div class="col-span-1 png hidden md:block">
                <img :src="img" alt="png image" />
            </div>
       </div>
       <div>
        <div class="w-10/12 px-2 rounded-md py-3 shadow-slate-200 shadow-md mb-4 mx-auto flex flex-col justify-center gap-4 items-center">
            <h1 class="text-2xl text-blue-500 font-bold"> Counter App</h1>
            <p class="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In ducimus voluptatibus maiores eos quia voluptas corrupti ipsa nostrum commodi ratione, natus quos eveniet dicta totam quod? Facilis, impedit consequuntur dolorem recusandae fuga ipsa? Illum, quaerat.</p>
           <RouterLink to="/counter"> <button class="px-3 py-2 bg-blue-500 text-white rounded-md border border-blue-500"> See in action</button> </RouterLink>
        </div>
    </div>
    </div>

    
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@1,700&display=swap');
.wrapper{
    background-image: url('../assets/bg.jpeg');
    background-size:cover;
    font-family: 'Alegreya', serif;
}
.png{

}

</style>
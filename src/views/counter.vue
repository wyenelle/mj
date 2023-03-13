<script setup>
import useCounter from '../composable/useCount.js'
import {ref} from 'vue'

let num = ''
const {increment,decrement,reset,setValue,number} = useCounter(num)
</script>

<template>
    <div class="h-screen counter w-full flex flex-col gap-5 justify-center items-center">
        <h1 class="text-4xl font-bold text-blue-500 ">Counter Page</h1> 
        <div class="">
            <input type="text" class=" border border-sltae-200 rounded-md h-10 py-4 outline-none px-3 shadow-md shadow-slate-200" placeholder="set value" v-model="num" />
            <button  @click="setValue(num)" class="bg-blue-500 text-white border border-blue-500 px-3 py-3 rounded-md font-extrabold text-xl">Add</button>
        </div>
        
        <div class="">
            <h1 class="text-4xl font-bold text-blue-500"> {{ number }}</h1>
        </div>
        
        <div>
            <div class="flex justify-center items-center gap-5">
                    <button @click="decrement" class="bg-blue-500 text-white px-2 rounded-ms  py-3 text-xl font-bold">Minus</button>
                    <button @click="reset" class="bg-red-500 text-white px-2 rounded-ms  py-3 text-xl font-bold">Reset</button>
                    <button @click="increment" class="bg-blue-500 text-white px-2 rounded-ms  py-3 text-xl font-bold">Add</button>
            </div>
        </div> 

            <router-link to='/' class="mt-7" >
                <button class="px-3 py-2 bg-green-500 text-white rounded-md border border-blue-500">
                    Return Home
                </button>
            </router-link>
    </div>
</template>

<style scoped>

    .counter{
    background-image: url('../assets/bg.jpeg');
    background-size:cover;
    font-family: 'Alegreya', serif;

    }
    

</style>
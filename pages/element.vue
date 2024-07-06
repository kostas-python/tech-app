
<template>
  <div class="flex flex-col items-center justify-center h-4/6 p-4 bg-gradient-to-b from-violet-950 to-gray-800">
    <!-- Calendar Component -->
    <el-calendar v-model="value" class="w-9/12 mb-10 border border-gray-300 rounded-lg shadow-md bg-white transform transition-transform duration-300 hover:scale-105" />
 </div>
 
    <!-- Image Lazy-loading Component -->
    <div class="demo-image__lazy">
      <el-image v-for="url in urls" :key="url" :src="url" lazy class="block h-auto rounded-sm shadow-lg"/>
    </div>
  
</template>

<script lang="ts" setup>
import { ref } from 'vue';


// Reactive reference for the calendar's date value

const value = ref(new Date());

// Reactive reference for the array of image URLs

const urls = ref([
  '/images/image1.jpg',
  '/images/image2.jpg',
  '/images/image3.jpg',
  '/images/image4.jpg',
  '/images/image5.jpg',
  '/images/image6.jpg',
  '/images/image7.jpg',
]);
</script>

<style scoped>
.demo-image__lazy {
  height: 800px;
  overflow-y: auto;
}
.demo-image__lazy .el-image {
  display: block;
  min-height: 200px;
  margin-bottom: 10px;
}
.demo-image__lazy .el-image:last-child {
  margin-bottom: 0;
  
}
</style>


  
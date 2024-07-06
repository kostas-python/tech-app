<template>
  <div>
    <el-calendar v-model="value" />
    <div class="demo-image__lazy ">
      <el-image v-for="url in urls" :key="url" :src="url" lazy />
    </div>
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
  border-radius: 8px
}
.demo-image__lazy .el-image {
  display: block;
  min-height: 200px;
  margin-bottom: 10px;
  border-radius: 8px
}
.demo-image__lazy .el-image:last-child {
  margin-bottom: 0;
  
}
</style>


  
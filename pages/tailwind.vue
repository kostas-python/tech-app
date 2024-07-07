<template>
  <div class="bg-white mx-auto max-w-2xl text-center lg:max-w-4xl mt-20 ">
    <div aria-hidden="true" class="relative">
      <img src="/images/huracan1.jpg" alt="" class=" h-96 w-full mb-20 object-cover object-center" />
      
    </div>

    <div class="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
      <div class="mx-auto max-w-2xl text-center lg:max-w-4xl">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Lamborghini Huracan Specifications</h2>
        <p class="mt-4 text-gray-500">The Lamborghini Huracan has 1 Petrol Engine on offer. The Petrol engine is 5204 cc . It is available with Automatic transmission.Depending upon the variant and fuel type the Huracan has a mileage of 10.6 to 11.24 kmpl & Ground clearance of Huracan is 125 mm. The Huracan is a 2 seater 10 cylinder car and has length of 4459mm, width of 1924mm and a wheelbase of 2620mm.</p>
      </div>

      <dl class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
        <div v-for="feature in features" :key="feature.name" class="border-t border-gray-200 pt-4">
          <dt class="font-medium text-gray-900">{{ feature.name }}</dt>
          <dd class="mt-2 text-sm text-gray-500">{{ feature.description }}</dd>
        </div>
      </dl>
    </div>
  </div>

  <div class="bg-gradient-to-b from-white from-10% via-gray-300 via-30% to-gray-700 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto w-full text-center lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our collection</h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">Explore a range of our latest Lamborghini models.</p>
      </div>
      <ul role="list" class="text-center mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <li v-for="car in cars" :key="car.name">
          <img class="aspect-[3/2] w-full rounded-2xl object-cover" :src="car.imageUrl" alt="" />
          <h3 class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{{ car.name }}</h3> 
          <ul role="list" class="mt-6 flex gap-x-6">
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>


<script setup>
const features = [
  { name: 'Engine Displacement', description: '5204 cc' },
  { name: 'Cylinders', description: '10' },
  { name: 'Max Torque', description: '600Nm@6500rpm' },
  { name: 'Fuel Tank Capacity', description: '90 Litres' },
  { name: 'Transmission Type', description: 'Automatic' },
  { name: 'Body Type', description: 'Coupe' },
]

const cars = [
  {
    name: 'Lamborghini Model',
    imageUrl: '/images/lambo1.jpg',
  },
  {
    name: 'Lamborghini Model',
    imageUrl: '/images/lambo2.jpg',
  },
  {
    name: 'Lamborghini Model',
    imageUrl: '/images/lambo3.jpg',
  },
  {
    name: 'Lamborghini Model',
    imageUrl: '/images/lambo4.jpg',
  },
  {
    name: 'Lamborghini Model',
    imageUrl: '/images/lambo51.jpg',
  },
  {
    name: 'Lamborghini Model',
    imageUrl: '/images/lambo6.jpg',
  },

  // More cars...
]

</script>


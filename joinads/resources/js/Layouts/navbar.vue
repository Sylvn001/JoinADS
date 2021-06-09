<template>
  <aside id="menu--bar" class="flex flex-col items-center bg-white text-gray-700 shadow h-full">
    <!-- Side Nav Bar-->

    <div class="h-16 flex items-center w-full">
      <!-- Logo Section -->
      <a class="h-6 w-6 mx-auto " href="/">
        <font-awesome-icon icon="rocket" class="green--custom" size="lg" />
      </a>
    </div>

    <ul>
      <!-- Items Section -->
      <li class="hover:bg-gray-100">
        <a
          href="."
          class="h-16 px-6 flex flex justify-center items-center w-full
          focus:text-green-600"> 
          <font-awesome-icon icon="user" class="green--custom" size="lg" />
        </a>
      </li>

      <li class="hover:bg-gray-100">
        <a
          href="."
          class="h-16 px-6 flex flex justify-center items-center w-full
          focus:text-green-600">
            <font-awesome-icon icon="plus" class="green--custom" size="lg" />
        </a>
      </li> 

      <li class="hover:bg-gray-100">
        <a
          href="user/profile"
          class="h-16 px-6 flex flex justify-center items-center w-full
          focus:text-green-600">
          <font-awesome-icon icon="cog" class="green--custom" size="lg" />
        </a>
      </li>

    </ul>

    <div class="mt-auto h-16 flex items-center w-full">
      <!-- Action Section -->
      <button
        @click="logout"
        class="h-16 w-10 mx-auto flex flex justify-center items-center
        w-full focus:text-green-600 hover:bg-gray-100 focus:outline-none">
        <font-awesome-icon icon="sign-out-alt" class="green--custom" size="lg" />
      </button>
    </div>

  </aside>
</template>


<script>
export default {
  methods: {
    logout() {
        this.$inertia.post(route('logout'));
    },
  }
}
</script>

<style>

svg{
  color: #108f83;
}

#menu--bar{
  background-color: #2e3442  ;
  height: 100vh;
}
</style>
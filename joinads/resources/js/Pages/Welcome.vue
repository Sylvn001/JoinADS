<template>
  <div class="relative flex items-top justify-start min-h-screen bg-gray-100 dark:bg-gray-900 items-center ">
    <div v-if="canLogin" class="fixed top-0 right-0 px-6 py-4 sm:block">
      <inertia-link v-if="$page.props.user" href="/dashboard" class=" btn btn--menu">
        Dashboard
      </inertia-link>

      <template v-else>
        <inertia-link :href="route('login')" class=" btn btn--menu">
            Log in
        </inertia-link>

        <inertia-link v-if="canRegister" :href="route('register')" class="ml-4 btn btn--menu">
            Register
        </inertia-link>
      </template>
    </div>

    <div class="flex justify-center" id="logo--menu">
      <div class="z-10 m-2">
        <a href="https://joinads.me/anunciantes/" target="_blank"> <img src="images/assets/joinadsLogo.png" class="w-full" /> </a>
      </div>
    </div>

    <img id="dashboard-img__right" class="sm:w-5/6 lg:w-3/6" src="images/assets/dashboard_3.svg" />
  </div>
</template>

<style scoped>
  @media (min-width: 992px){
    #logo--menu{
      width: 50%;
    }
  }

  @media (prefers-color-scheme: dark) {
    .dark\:bg-gray-800 {
        background-color: #2d3748;
        background-color: rgba(45, 55, 72, var(--tw-bg-opacity));
    }

    .dark\:bg-gray-900 {
        background-color: #1a202c;
        background-color: rgba(26, 32, 44, var(--tw-bg-opacity));
    }

    .dark\:border-gray-700 {
        border-color: #4a5568;
        border-color: rgba(74, 85, 104, var(--tw-border-opacity));
    }

    .dark\:text-white {
        color: #fff;
        color: rgba(255, 255, 255, var(--tw-text-opacity));
    }

    .dark\:text-gray-400 {
        color: #cbd5e0;
        color: rgba(203, 213, 224, var(--tw-text-opacity));
    }
  }
</style>

<script>
  export default {
      props: {
          canLogin: Boolean,
          canRegister: Boolean,
          laravelVersion: String,
          phpVersion: String,
      }
  }
</script>

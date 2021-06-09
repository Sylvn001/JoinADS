<template>
  <div class="">
    <jet-banner />
    <div class="flex min-h-screen bg-gray-100">
      <navbar/>

      <!-- Page Content -->
      <main id="dashboard--img" class="w-full">
        <header class="bg-white shadow" v-if="$slots.header">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <slot name="header"></slot>
            </div>
        </header>
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script>
  import JetApplicationMark from '@/Jetstream/ApplicationMark'
  import JetBanner from '@/Jetstream/Banner'
  import JetDropdown from '@/Jetstream/Dropdown'
  import JetDropdownLink from '@/Jetstream/DropdownLink'
  import JetNavLink from '@/Jetstream/NavLink'
  import JetResponsiveNavLink from '@/Jetstream/ResponsiveNavLink'
  import navbar from './navbar.vue'

  export default {
      components: {
          JetApplicationMark,
          JetBanner,
          JetDropdown,
          JetDropdownLink,
          JetNavLink,
          JetResponsiveNavLink,
          navbar,
      },

      data() {
          return {
              showingNavigationDropdown: false,
          }
      },

      methods: {
     
      }
  }
</script>

<style scoped>
#side--menu{
  background-color: #2E3442;
}
</style>
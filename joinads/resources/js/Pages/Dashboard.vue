<template>
  <app-layout>
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">
          Dashboard - Clients
      </h2>
    </template>

    <div class="py-12">
      <div class="mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
          <div class="m-3 flex justify-end">
            <inertia-link href="/create" class="btn btn--menu">
              <font-awesome-icon icon="plus" class="text-white" size="md" />
            </inertia-link>
          </div>
          <clients-table :clients="this.clients"  class="flex justify-center mb-4"/>
        </div>
      </div>
    </div>
  </app-layout>
</template>

<script>
  import AppLayout from '@/Layouts/AppLayout'
  import ClientsTable from './components/ClientsTable'
  
  export default {
    data(){
      return {
        clients: "",
      }
    },
    created(){
      this.clients = this.$page['props']["clients"]
      console.log(this.clients)
    },
      components: {
          AppLayout,
          ClientsTable,
      },
  }
</script>

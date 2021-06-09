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
          <client-form :client="this.client" />
        </div>
      </div>
    </div>
  </app-layout>
</template>

<script>
  import AppLayout from '@/Layouts/AppLayout'
  import ClientForm from './components/ClientForm'

  export default {
      components: {
          AppLayout,
          ClientForm,
      },
      data(){
        return{
          client: {
            id: "",
            name: "",
            cpf: "",
            email: "",
            country: "",
            status: "0",
            created_at: "",
            updated_at: "",
          },
        }
      }
  }
</script>

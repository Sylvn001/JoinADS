<template>
<!-- component -->
<div class="overflow-y-auto m-4">
  <table class="table-auto ">
    <thead class="justify-between">
      <tr class="bg-gray-800">
        <th class="px-16 py-2">
          <span class="text-gray-300">ID</span>
        </th>
        <th class="px-16 py-2">
          <span class="text-gray-300">Name</span>
        </th>
        <th class="px-16 py-2">
          <span class="text-gray-300">Cpf</span>
        </th>
        <th class="px-16 py-2">
          <span class="text-gray-300">Email</span>
        </th>

        <th class="px-16 py-2">
          <span class="text-gray-300">Country</span>
        </th>
        <th class="px-16 py-2">
          <span class="text-gray-300">Status</span>
        </th>
        <th class="px-16 py-2">
        </th>
      </tr>
    </thead>
    <tbody class="bg-gray-200">
      <tr class="bg-white border-4 border-gray-200" v-for="(client, cliIndex) in this.clients" :key="cliIndex">
        <td class="px-16 py-2 flex flex-row items-center">
          {{client.id}}
        </td>
        <td class="px-16 py-2">
          <span class="text-center ml-2 font-semibold">{{client.name}}</span>
        </td>
        <td class="px-16 py-2">
          {{client.cpf}}
        </td>
        <td class="px-16 py-2">
          <span>{{client.email}}</span>
        </td>

        <td class="px-16 py-2">
          <span>{{client.country}}</span>
        </td>

        <td class="px-16 py-2">
          <span v-if="!client.status" class="text-green-500">
            Active
          </span>
          <span v-if="client.status" class="text-red-500">
            Inactive
          </span>
        </td>
        <td class="px-16 py-2 flex">
          <inertia-link :href="'/create/'+ client.id" type="button"  class="mx-2">          
            <font-awesome-icon icon="pencil-alt" class="green--custom" size="lg" />
          </inertia-link>
          <button @click="deleteCli(client.id)" type="button" class="mx-2">          
            <font-awesome-icon icon="eraser" class="green--custom" size="lg" />
          </button>
        </td>
      </tr>

    </tbody>
  </table>
</div>
</template>

<script>
export default {
  created(){
    
  },
  props: {
    clients: Object,
  },
  methods: {
    deleteCli(idCli){
      if(confirm("this action will permanently delete the client")){
        axios.post("destroy/", {
            id: idCli
          }).then((response) => {
          console.log(response.data)
          //this.showSuccess = true;
        })
        .catch((error) => {
          console.log(error);
        });
      }
    }
  }
}
</script>

<style>

</style>
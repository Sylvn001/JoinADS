<template>
  <form class="form--container__middle mt-4 mb-4 px-2 py-2">
    <div class="form--control mb-2">
      <label
        for="name"
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >Name</label
      >
      <input
        class="block w-full text-gray-600 border rounded py-3 px-4 mb-3 leading-tight "        
        v-model="client.name"
        type="text"
        name="name"
        id="name"
        placeholder="Name"
      />
    </div>

    <div class="form--control mb-2">
      <label
        for="Email"
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >Email</label
      >
      <div class="mt-1">
        <input 
          v-model="client.email" 
          type="email" name="Email" 
          id="Email" 
          aria-placeholder="Email"
          class="block w-full text-gray-600 border rounded py-3 px-4 mb-3 leading-tight "        
        >     
      </div>
    </div>

    <div class="form--control mb-2">
      <label
        for="Email"
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >Cpf</label
      >
      <div class="mt-1">
        <input 
          v-model="client.cpf" 
          @change="validateCPF"
          type="email" name="Cpf" 
          id="cpf" 
          maxlength="11"
          aria-placeholder="cpf"
          class="block w-full text-gray-600 border rounded py-3 px-4 mb-3 leading-tight "  
          :class="cpfError ? 'border-red-600' : ''"      
        >     
        <span v-if="cpfError" class="semibold text-sm text-red-600">Invalid CPF!</span>
      </div>
    </div>

    <div class="form--control mb-2">
      <label
        for="status"
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
         Country
      </label>
      <div class="mt-1 relative">
        <select 
          v-model="client.country" 

          name="country" 
          id="country" 
          aria-placeholder="Country"
          class="block appearance-none w-full border  text-gray-700 py-3 px-4 pr-8 rounded leading-tight"
          >
          <option value="">Select a country</option>
          <option
          v-for="(country,index) in this.countries"
          :key="index"
          :value="country.name">{{country.name}}</option>
        </select>
      </div>
    </div>

    <div class="form--control mb-2">
      <label
        for="status"
        class=""
        >Status</label
      >
      <div class="mt-1 relative">
        <select 
          v-model="client.status" 
          name="status" 
          id="status" 
          aria-placeholder="Status"
          class="block appearance-none w-full border  text-gray-700 py-3 px-4 pr-8 rounded leading-tight"
          >
          <option value="0">Active</option>
          <option value="1">Inactive</option>
        </select>
      </div>

    </div>

    <div v-if="showSuccess" class="w-full bg-green-200 text-center rounded">
      <span class="text-green-600 ">Client info Saved! </span>
    </div>
    
    <div class="mt-4 flex justify-end w-full">
      <inertia-link href="/dashboard" class="btn btn--outline-menu mx-2">
        Cancel
      </inertia-link>
      <button  type="button" @click="save" class="disabled:opacity-50 btn btn--menu mx-2" :disabled="btnDisable">
        Save
        
      </button>
    </div>
  </form>
  
</template>

<script>
export default {
  props: {
      client: Object,
  },
  data(){
    return{
      countries: "",
      btnDisable: false,
      cpfError: false,
      showSuccess: false,
    }
  },
  created(){
    this.getCountries()
    this.verifyExistClient()
  },
  methods: {
    verifyExistClient(){
      console.log(this.$page.props.client)
      if(this.$page['props']["client"]){
        this.client.name = this.$page.props.client.name
        this.client.email = this.$page.props.client.email
        this.client.cpf = this.$page.props.client.cpf
        this.client.country = this.$page.props.client.country
        this.client.status = this.$page.props.client.status
        this.client.id = this.$page.props.client.id
      }
    },
    getCountries(){
       axios.get("https://restcountries.eu/rest/v2/all", {}).then((response) => {
        console.log(response.data)
        this.countries = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    },
    setTime(){
       setTimeout(function(){ this.showSuccess = false;}, 3000);
    },
    save(){
        axios.post("createOrUpdate", {
          formData: this.client
        }).then((response) => {
        console.log(response.data)
        this.showSuccess = true
        this.setTimer()
      })
      .catch((error) => {
        console.log(error);
      });
    },
    cpfCheck(strCPF) {
      let sum;
      let rest;
      sum = 0;
      if (strCPF == "00000000000") return false;

      for (let i=1; i<=9; i++)  sum =  sum + parseInt(strCPF.substring(i-1, i)) * (11 - i);
      rest = ( sum * 10) % 11;
        if ((rest == 10) || (rest == 11))  rest = 0;
        if (rest != parseInt(strCPF.substring(9, 10)) ) 
          return false;

        sum = 0;
        for (let i = 1; i <= 10; i++)   
          sum =   sum + parseInt(strCPF.substring(i-1, i)) * (12 - i);
        rest = ( sum * 10) % 11;

        if ((rest == 10) || (rest == 11))
          rest = 0;
        if (rest != parseInt(strCPF.substring(10, 11) ) ) 
          return false;

      return true;
    },
    validateCPF(){
      if(!this.cpfCheck(this.client.cpf)){
        this.cpfError = true
        this.btnDisable = true
      }else{
        this.cpfError = false
        this.btnDisable = false
      }
    }
  }
  
}
</script>
<style>

@media (max-width: 767.98px){
  .form--control{
    width:100%;
  }

 .form--container__middle{
    width: 100%;
  }
}

@media (max-width: 1199.98px){
  .form--container__middle{
    width: 100%;
  }
}

.form--control{
  width: 30%;
  display: flex;
  flex-direction: column;
}

</style>
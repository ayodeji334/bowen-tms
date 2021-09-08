<template>
    <form class="w-full" @submit.prevent="handleLogin">
      <div class="mb-4 text-left">
          <label class="block text-black text-sm font-bold mb-2" for="matric_number">
              Matric Number
          </label>
          <input 
              required 
              v-model="matric_number" 
              class="appearance-none border-2 rounded-md w-full py-4 px-3 text-gray-900 border-gray-300
                  leading-tight text-sm focus:outline-none placeholder-gray-400 focus:shadow-outline"
              id="matric_number" 
              type="text" 
              placeholder="Enter your matric number"
          />
        </div>
        <div class="mb-4 text-left">
            <label class="block text-black text-sm font-bold mb-2" for="password">
                Password
            </label>
            <input 
                required 
                v-model="password" 
                class="appearance-none border-2 border-gray-300 rounded-md 
                w-full py-4 px-3 text-gray-900 leading-tight text-sm
                focus:outline-none placeholder-gray-400 focus:shadow-outline" 
                id="password" 
                type="password" 
                placeholder="Enter your Password"
            />
        </div>
        <div class="mt-6 mb-4 text-center">
          <button 
          :disabled="loading"
          :class="{'opacity-75 bg-purple-800': loading}"
          class="w-full shadow-md bg-purple-800 text-white ring-4 ring-purple-800
          font-bold py-4 px-4 rounded-lg focus:outline-none focus:shadow-outline" 
          type="submit"> 
              <c-spinner
              thickness="2px"
              speed="0.65s"
              empty-color="#ffffff"
              color="vue.100"
              size="sm"
              v-if="loading"
              />
              &nbsp; Login
          </button>
      </div> 
    </form>
</template>

<script>
    export default {
      name: "LoginForm",
      data(){
        return {
          matric_number: "",
          password: "",
          error: false,
          loading: false,
        }
      },
      methods: {
        handleLogin() {
            this.loading = true;
            
            setTimeout(() => {
                console.log(this.matric_number, this.password);
                this.loading = false;
            }, 2000);
        }
      }
    }
</script>

<style>
  button.disabled_btn{
    background: inherit !important;
    cursor: not-allowed;
    opacity: .4;
  }
  .error {
    color: red;
    padding: 0px;
  }
  .toggle-password-icon {
    float: right;
    margin-right: 5px;
    margin-top: -58px;
    position: relative;
    padding: 10px;
    z-index: 2;
    cursor: pointer;
  }
  span.Breadstick__manager-top-right{
    top: 50px !important;
    padding: 0px 18px;
  }
</style>
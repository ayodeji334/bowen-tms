<template>
    <form class="w-full grid grid-cols-2 gap-8 px-4 lg:p-0" @submit.prevent="handleBooking">
        <div class="w-full text-left">
            <div className="mr-1">
                <label class="block text-black text-sm font-bold mb-2" for="fullname">
                    FullName
                </label>
                <input 
                    required 
                    v-model="fullname" 
                    class="appearance-none border-2 rounded-md w-full py-4 px-3 text-gray-900 border-gray-300
                        leading-tight text-sm focus:outline-none placeholder-gray-400 focus:shadow-outline"
                    id="fullname"
                    type="text" 
                    placeholder="Enter your fullname"
                />
            </div>
        </div>
         <div class="w-full text-left">
            <div className="lg:mr-1 md:ml-1">
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
        </div>
        <div class="w-full text-left">
            <div className="lg:mx-1 md:ml-1">
                <label class="block text-black text-sm font-bold mb-2" for="number_of_tent">
                    Number of Tent
                </label>
                <input 
                    required 
                    v-model="number_of_tents" 
                    class="appearance-none border-2 rounded-md w-full py-4 px-3 text-gray-900 border-gray-300
                        leading-tight text-sm focus:outline-none placeholder-gray-400 focus:shadow-outline"
                    id="number_of_tents"
                    type="number" 
                    placeholder="How many tents do you need?"
                />
            </div>
        </div>
         <div class="w-full text-left">
            <div className="lg:mx-1 md:ml-1">
                <label class="block text-black text-sm font-bold mb-2" for="number_of_tent">
                    Number of Chairs
                </label>
                <input 
                    required 
                    v-model="number_of_chairs" 
                    class="appearance-none border-2 rounded-md w-full py-4 px-3 text-gray-900 border-gray-300
                        leading-tight text-sm focus:outline-none placeholder-gray-400 focus:shadow-outline"
                    id="number_of_chairs"
                    type="number" 
                    placeholder="How many dozen of chairs do you need?"
                />
            </div>
        </div>
        <div class="w-full text-left">
            <div className="lg:ml-1 md:mr-1">
                <label class="block text-black text-sm font-bold mb-2" for="email">
                    Email
                </label>
                <input 
                    required 
                    v-model="email" 
                    class="appearance-none border-2 rounded-md w-full py-4 px-3 text-gray-900 border-gray-300
                        leading-tight text-sm focus:outline-none placeholder-gray-400 focus:shadow-outline"
                    id="email"
                    type="text" 
                    placeholder="Enter your email address"
                />
            </div>
        </div>
        <div class="w-full text-left">
            <div className="lg:ml-1 md:mr-1">
                <label class="block text-black text-sm font-bold mb-2" for="phone_number">
                    Phone Number
                </label>
                <input 
                    required 
                    v-model="phone_number" 
                    class="appearance-none border-2 rounded-md w-full py-4 px-3 text-gray-900 border-gray-300
                        leading-tight text-sm focus:outline-none placeholder-gray-400 focus:shadow-outline"
                    id="phone_number"
                    type="text" 
                    placeholder="Enter your phone number"
                />
            </div>
        </div>
        <div class="w-full mt-3">
          <button 
            :disabled="loading"
            :class="{'opacity-65 bg-blue-400 cursor-not-allowed': loading}"
            class="shadow-lg bg-blue-500 hover:bg-blue-900 text-white font-medium text-sm py-3 px-7 
                rounded-lg focus:outline-none focus:shadow-outline" 
            type="submit"> 
                Submit
          </button>
        </div> 
    </form>
</template>

<script>
    export default {
      name: "BookingForm",
      data(){
        return {
            fullname: "",
            number_of_chairs: "",
            number_of_tents: '',
            matric_number: '',
            email: '',
            phone_number: '',
            error: false,
            loading: false,
        }
      },
      methods: {
        handleBooking() {
            this.loading = true;
            
            setTimeout(() => {
                const data = {
                    fullname: this.fullname,
                    number_of_tent: this.number_of_chairs, 
                    number_of_chairs: this.number_of_tents, 
                    phone_number: this.phone_number,
                    email: this.email,
                    matric_number: this.matric_number
                }

                console.log(data);
                alert("Your tent booking process was successfully");
                this.loading = false;
            }, 6000);
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
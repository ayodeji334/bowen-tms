<template>
    <div className="w-full h-full">
        <Navbar />
        <div className="w-full h-full flex justify-center mt-3">
            <div className="w-full lg:w-8/12 h-full mt-9">
                <div className="w-full h-full">
                    <div className="w-full rounded-lg shadow-lg">
                        <h2 className="text-lg lg:text-left rounded-t-lg font-bold py-5 px-7 bg-gray-200">Booking Detail Tent</h2>
            
                        <div className="py-7 px-7 grid grid-cols-1 lg:grid-cols-2 gap-8 mt-7">
                            <div class="w-full text-left border-2 border-gray-400 rounded-lg p-4">
                                <p className="font-medium text-sm">Tent Number: <b>A2021</b></p>
                            </div>
                            <div class="w-full text-left border-2 border-gray-400 rounded-lg p-4">
                                <p className="font-medium text-sm">Amount: <b>#200, 000</b></p>
                            </div>
                            <div class="w-full text-left border-2 border-gray-400 rounded-lg p-4">
                                <p className="font-medium text-sm">FullName: <b>Odunayo Fawumi</b></p>
                            </div>
                            <div class="w-full text-left border-2 border-gray-400 rounded-lg p-4">
                                <p className="font-medium text-sm">Matric Number: <b>bu20cit2001</b></p>
                            </div>
                            <div class="w-full text-left border-2 border-gray-400 rounded-lg p-4">
                                <p className="font-medium text-sm">Number of Tents: <b>4</b></p>
                            </div>
                            <div class="w-full text-left border-2 border-gray-400 rounded-lg p-4">
                                <p className="font-medium text-sm">Number of Chairs: <b>4</b></p>
                            </div>
                            <div class="w-full text-left border-2 border-gray-400 rounded-lg p-4">
                                <p className="font-medium text-sm">Email: <b>fawumiayodeji@gmail.com</b></p>
                            </div>
                            <div class="w-full text-left border-2 border-gray-400 rounded-lg p-4">
                                <p className="font-medium text-sm">Phone Number: <b>07034311518</b></p>
                            </div> 
                        </div>
                        <div class="w-full mt-3 py-16 px-7 flex flex-row justify-end">
                            <button 
                                class="shadow-md bg-blue-600 text-white font-medium text-sm py-3 px-7
                                    rounded-md focus:outline-none focus:shadow-outline" 
                                type="submit"> 
                                    Proceed to Payment
                            </button>
                           
                            <!-- <paystack
                                :email="email"
                                :amount="amount * 100"
                                :paystackkey="PUBLIC_KEY"
                                :reference="reference"
                                :callback="processPayment"
                                :close="closePayment"
                                :embed="false"
                            /> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Navbar from "@/components/Navbar.vue";
    // import paystack from "vue-paystack";

    export default {
        name: 'BookingDetail',
        components: {
            Navbar,
            // paystack
        },
        computed: {
            reference(){
                let text = "";
                let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                 
                for(let i = 0; i < 10; i++){
                    text = possible.charAt(Math.floor(Math.random() * possible.length));
                }

                return text;
            }
        },
        data() {
            return {
                amount: 200000,
                fullname: 'Oduanyo Fawumi',
                email: 'fawumiayodeji@gmail.com',
                PUBLIC_KEY: 'pk_test_6327a61922f8120205b25f97222c77b6581e6c18'
            }
        },
        methods: {
            processPayment: () => {
                window.alert("Payment was successfully");
            },

            closePayment: () => {
                console.log("you close the payment")
            }
        }

    }
</script>
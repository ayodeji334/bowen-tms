<template>
    <div className="w-full h-full">
        <div className="w-full h-full flex flex-row">
            <div className="hidden lg:block lg:w-1/2 h-full bg-hro-picture">
                <div className="h-full mx-auto w-9/12 flex flex-col justify-center text-white text-left">
                    <h1 className="text-2xl font-extrabold py-4 mb-4">Welcome, Admin</h1>
                    <p className="text-lg xl:text-base pt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua?. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 h-full bg-white">
                <div className="h-full w-full">
                    <div className="w-full h-full flex flex-col items-center overflow-y-scroll overflow-x-hidden py-10">
                        <div className="w-11/12 lg:w-9/12 py-5 px-7 lg:px-10">
                            <h2 className="text-xl font-extrabold pt-6 pb-2">Staff Login</h2> 
                            <div className="py-9">
                                <StaffLoginForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import StaffLoginForm from "@/components/StaffLoginForm.vue";
export default {
  name: 'Admin',
  components: {
    StaffLoginForm
  },
}
</script>
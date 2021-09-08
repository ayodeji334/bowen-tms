<template>
    <div className="w-full h-full">
        <div className="w-full h-full flex flex-row-reverse">
            <div className="lg:block hidden w-1/2 h-full bg-hero-picture via-black to-black px-20 text-white">
            <div className="h-full w-full flex flex-col justify-center text-left">
                <h1 className="text-3xl font-extrabold py-5 mb-4">Welcome, Graduant</h1>
                <p className="text-lg xl:text-base pt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua?. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
            </div>
            </div>
            <div className="w-full lg:w-1/2 h-full">
                <div className="h-full w-full">
                    <div className="w-full h-full flex flex-col justify-center items-center">
                        <div className="w-9/12 lg:w-3/5 py-4">
                            <h2 className="text-xl lg:text-left font-extrabold py-3">Student Login</h2>
                            <div className="py-9">
                                <LoginForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
export default {
  name: 'Admin',
  components: {
    LoginForm
  },
}
</script>
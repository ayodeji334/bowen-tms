<template>
    <div className="w-full h-full">
        <Navbar />
        <div className="w-full h-full flex justify-center">
            <div className="w-full lg:w-8/12 h-full">
                <div className="h-full w-full">
                    <div className="w-full h-full flex flex-col justify-center items-center">
                        <div className="w-full p-8 rounded-md shadow-lg">
                            <h2 className="text-xl lg:text-left font-extrabold py-3">Book Tent</h2>
                            <p className="text-md lg:text-left font-medium py-2">Please fill the form below to book a tent.</p>
                            <div className="py-9">
                                <BookingForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BookingForm from "@/components/BookingForm.vue";
    import Navbar from "@/components/Navbar.vue";

    export default {
        name: 'Booking',
        components: {
            BookingForm,
            Navbar
        },
    }
</script>
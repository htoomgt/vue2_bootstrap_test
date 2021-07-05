<template>
    <div class="container-fluid">
        <h1>Contact Us</h1>
        <hr />
        <div class="row">
            <div class="col-8">
                <validation-observer>
                    <b-form @submit.prevent="onSubmit">
                        <validation-provider
                            name="email"
                            rules="required"
                            v-slot="{ errors }"
                        >
                            <b-form-group
                                id="input-group-1"
                                label="Email address"
                                label-for="input-1"
                                description="We'll never share your email with anyone else"
                            >
                                <b-form-input
                                    id="input-1"
                                    v-model="form.email"
                                    type="email"
                                    placeholder="Enter email"
                                    required
                                ></b-form-input>
                                <span class="text-danger">{{ errors[0] }}</span>
                            </b-form-group>
                        </validation-provider>
                    </b-form>
                </validation-observer>
            </div>
            <div class="col-4"></div>
        </div>
    </div>
</template>

<script>
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";

extend("required", {
    ...required,
    message: "Please enter email",
});

export default {
    name: "ContactUs",
    components: {
        ValidationObserver,
        ValidationProvider,
    },
    data: function() {
        return {
            form: {
                email: "",
            },
        };
    },
    methods: {
        onSubmit() {
            // e.preventDefault()
        },
    },
};
</script>

<style></style>

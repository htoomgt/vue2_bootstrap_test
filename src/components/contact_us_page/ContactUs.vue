<template>
    <div class="container-fluid">
        <h1>Contact Us</h1>
        <hr />
        <div class="row">
            <div class="col-6">
                <div>
                    <b-form @submit.stop.prevent="onSubmit">
                        <b-form-group
                            id="example-input-group-1"
                            label="Name"
                            label-for="example-input-1"
                        >
                            <b-form-input
                                id="example-input-1"
                                name="example-input-1"
                                v-model="$v.form.name.$model"
                                :state="validateState('name')"
                                aria-describedby="input-1-live-feedback"
                            ></b-form-input>

                            <b-form-invalid-feedback id="input-1-live-feedback" v-if="!$v.form.name.required"
                                >This is a required field.
                                characters.</b-form-invalid-feedback
                            >
                            <b-form-invalid-feedback id="input-1-live-feedback2" v-if="!$v.form.name.minLength"
                                >Must be at least 3
                                characters.</b-form-invalid-feedback
                            >
                        </b-form-group>

                        <b-form-group
                            id="example-input-group-2"
                            label="Food"
                            label-for="example-input-2"
                        >
                            <b-form-select
                                id="example-input-2"
                                name="example-input-2"
                                v-model="$v.form.food.$model"
                                :options="foods"
                                :state="validateState('food')"
                                aria-describedby="input-2-live-feedback"
                            ></b-form-select>

                            <b-form-invalid-feedback id="input-2-live-feedback"
                                >This is a required
                                field.</b-form-invalid-feedback
                            >
                        </b-form-group>

                        <b-button type="submit" variant="primary"
                            >Submit</b-button
                        >
                        <b-button class="ml-2" @click="resetForm()"
                            >Reset</b-button
                        >
                    </b-form>
                </div>
            </div>
            <div class="col-6"></div>
        </div>
    </div>
</template>

<script>


import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  name:'ContactUs',
  mixins: [validationMixin],
  data() {
    return {
      foods: [
        { value: null, text: "Choose..." },
        { value: "apple", text: "Apple" },
        { value: "orange", text: "Orange" }
      ],
      form: {
        name: null,
        food: null
      }
    };
  },
  validations: {
    form: {
      food: {
        required
      },
      name: {
        required,
        minLength: minLength(3)
      }
    }
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    resetForm() {
      this.form = {
        name: null,
        food: null
      };

      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

      alert("Form submitted!");
    }
  }
};
</script>

<style></style>

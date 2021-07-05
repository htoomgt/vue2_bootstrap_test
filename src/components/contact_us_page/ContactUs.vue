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
                                v-model.trim="$v.form.name.$model"
                                :state="validateState('name')"
                                aria-describedby="input-1-live-feedback"
                            ></b-form-input>

                            <b-form-invalid-feedback id="input-1-live-feedback" v-if="!$v.form.name.required"
                                >Please enter your name.</b-form-invalid-feedback
                            >
                            <b-form-invalid-feedback id="input-1-live-feedback2" v-if="!$v.form.name.minLength"
                                >Must be at least 3
                                characters.</b-form-invalid-feedback
                            >
                        </b-form-group>

                        <b-form-group
                            id="example-input-group-2"
                            label="Email"
                            label-for="example-input-2"
                        >
                            <b-form-input
                                id="example-input-2"
                                name="example-input-2"
                                v-model="$v.form.email.$model"
                                :state="validateState('email')"
                                aria-describedby="input-2-live-feedback"
                            ></b-form-input>

                            <b-form-invalid-feedback id="input-2-live-feedback" v-if="!$v.form.email.required"
                                >Please enter your email</b-form-invalid-feedback
                            >
                            <b-form-invalid-feedback id="input-2-live-feedback2" v-if="!$v.form.email.email"
                                >Must be email format</b-form-invalid-feedback
                            >
                        </b-form-group>

                        <b-form-group
                            id="example-input-group-3"
                            label="Subject"
                            label-for="example-input-3"
                        >
                            <b-form-input
                                id="example-input-3"
                                name="example-input-3"
                                v-model.trim="$v.form.subject.$model"
                                :state="validateState('subject')"
                                aria-describedby="input-3-live-feedback"
                            ></b-form-input>

                            <b-form-invalid-feedback id="input-3-live-feedback" v-if="!$v.form.subject.required"
                                >Please enter subject</b-form-invalid-feedback
                            >
                            
                        </b-form-group>

                        <b-form-group
                            id="example-input-group-4"
                            label="Message"
                            label-for="example-input-4"
                        >
                            <b-form-textarea
                                id="example-input-4"
                                name="example-input-4"
                                v-model.trim="$v.form.message.$model"
                                :state="validateState('message')"
                                aria-describedby="input-4-live-feedback"
                                rows="3"                                
                            ></b-form-textarea>

                            <b-form-invalid-feedback id="input-4-live-feedback" v-if="!$v.form.message.required"
                                >Please enter message</b-form-invalid-feedback
                            >
                            <b-form-invalid-feedback id="input-4-live-feedback" v-if="!$v.form.message.minLength"
                                >Please enter message at least 4 character</b-form-invalid-feedback
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
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  name:'ContactUs',
  mixins: [validationMixin],
  data() {
    return {      
      form: {
        name: null,
        email: null,
        subject: null,
        message: null,
      }
    };
  },
  validations: {
    form: {      
      name: {
        required,
        minLength: minLength(3)
      },
      email: { required, email },
      subject : { required},
      message : { 
        required,
        minLength: minLength(4)
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
        email: null,
        subject: null,
        message: null,
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

      console.log(this.form)
      alert("Form submitted!");
      this.resetForm();
    }
  }
};
</script>

<style></style>

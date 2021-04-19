<template>

    <div class="box">
            <figure class="avatar">
                <img src="https://placehold.it/128x128">
            </figure>
            <form>
              <div class="field">
                <div class="control">
                    <input  v-model="form.email"   
                            @blur="$v.form.email.$touch()"
                            class="input is-large"
                            type="email"
                            placeholder="Your Email"
                            autofocus=""
                            autocomplete="email">
                    <div v-if="$v.form.email.$error" class="form-error">
                        <span v-if="!$v.form.email.required" class="help is-danger">Email is required</span>
                        <span v-if="!$v.form.email.email" class="help is-danger">Email adress is not valid</span>
                    </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                    <input  v-model="form.password"  
                            @blur="$v.form.password.$touch()" 
                            class="input is-large"
                            type="password"
                            placeholder="Your Password"
                            autocomplete="current-password">
                    <div v-if="$v.form.password.$error" class="form-error">
                        <span v-if="!$v.form.password.required" class="help is-danger">Password is required</span>
                    </div>
                </div>
              </div>
              <button   @click.prevent="handleLogin()"
                        :disabled="isFormInvalid"
                        class="button is-block is-info is-large is-fullwidth">
                        Login</button>
            </form>
          </div>
</template>

<script>
    import { required, email } from 'vuelidate/lib/validators'

    export default {
        data() {
            return {
                form: {
                    email:null,
                    password:null
                }
            }
        },
        validations:{
            form: {
                email: {
                    required,
                    email
                },
                password:{
                    required,
                }
            }
        },
        computed: {
            isFormInvalid () {
                return this.$v.form.$invalid
            }
        },
        methods: {
            handleLogin(){
                this.$v.form.$touch()
                this.$store.dispatch('auth/loginWithEmailAndPassword', this.form)
                  .then(() => this.$router.push('/home'))
                  .catch(errMessage => {
                    this.$toasted.error(errMessage, {duration: 5000})
                  })
            }
        },
    }
</script>

 <style scoped>
  
</style>
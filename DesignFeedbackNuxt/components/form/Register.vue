<template>
  <section class="hero is-success is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-grey">Register</h3>
          <p class="subtitle has-text-grey">Please register to proceed.</p>
          <div class="box">
            <figure class="avatar">
                <img src="https://placehold.it/128x128">
            </figure>
            <form>
              <div class="field">
                <div class="control">
                    <input  v-model="form.username" class="input is-large"
                            @blur="$v.form.username.$touch()"
                            type="text"
                            placeholder="Username">
                    <div v-if="$v.form.username.$error" class="form-error">
                        <span v-if="!$v.form.username.required" class="help is-danger">Username is required</span>
                    </div>

                </div>
              </div>
              <div class="field">
                <div class="control">
                    <input  v-model="form.name" class="input is-large"
                            @blur="$v.form.name.$touch()"
                            type="text"
                            placeholder="Name">
                    <div v-if="$v.form.name.$error" class="form-error">
                        <span v-if="!$v.form.name.required" class="help is-danger">Name is required</span>
                    </div>

                </div>
              </div>
              <div class="field">
                <div class="control">
                    <input  v-model="form.email" class="input is-large"
                            @blur="$v.form.email.$touch()"
                            type="email"
                            placeholder="Your Email">
                    <div v-if="$v.form.email.$error" class="form-error">
                        <span v-if="!$v.form.email.required" class="help is-danger">Email is required</span>
                        <span v-if="!$v.form.email.email" class="help is-danger">Email adress is not valid</span>
                    </div>

                </div>
              </div>
              <div class="field">
                <div class="control">
                    <input  v-model="form.avatar" class="input is-large"
                            @blur="$v.form.avatar.$touch()"
                            type="text"
                            placeholder="Avatar"
                            autocomplete="">
                    <div v-if="$v.form.avatar.$error" class="form-error">
                        <span v-if="!$v.form.avatar.url" class="help is-danger">Not correct url</span>
                        <span v-if="!$v.form.avatar.supportedFileType" class="help is-danger">Not supported file type</span>

                    </div>

                </div>
              </div>
              <div class="field">
                <div class="control">
                    <input  v-model="form.password" class="input is-large"
                            @blur="$v.form.password.$touch()"
                            type="password"
                            placeholder="Your Password"
                            autocomplete="new-password">
                    <div v-if="$v.form.password.$error" class="form-error">
                        <span v-if="!$v.form.password.required" class="help is-danger">Password is required</span>
                        <span v-if="!$v.form.password.minLength" class="help is-danger">Password minimum length is 6 letters</span>
                    </div>

                </div>
              </div>
              <div class="field">
                <div class="control">
                    <input  v-model="form.passwordConfirmation" class="input is-large"
                            @blur="$v.form.passwordConfirmation.$touch()"
                            type="password"
                            placeholder="Password Confirmation"
                            autocomplete="off">
                    <div v-if="$v.form.passwordConfirmation.$error" class="form-error">
                        <span v-if="!$v.form.passwordConfirmation.required" class="help is-danger">Password Confirmation is required</span>
                        <span v-if="!$v.form.passwordConfirmation.sameAsPassword" class="help is-danger">Password Confirmation should be the same</span>
                    </div>

                </div>
              </div>
              <button   @click.prevent="handleRegister()" 
                        type="submit" 
                        class="">
                        Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

 <script>
    import { required, email, minLength, url, sameAs } from 'vuelidate/lib/validators'
    import { supportedFileType } from '@/helpers/validators'

    export default {
        data() {
            return {
                form: {
                    username: null,
                    name: null,
                    email: null,
                    avatar: null,
                    password: null,
                    passwordConfirmation: null
                }
            }
        },
        validations:{
            form: {
                username: {
                    //required,
                },
                name: {
                    //required,
                },
                email: {
                    required,
                    email,
                }, 
                avatar: {
                    url,
                    supportedFileType, 
                },
                password: {  
                    required,
                    minLength: minLength(6),
                },
                passwordConfirmation: {
                    required,
                    sameAsPassword: sameAs('password'),
                }
            }
        },
        computed: {
            isFormInvalid () {
                return this.$v.form.$invalid
            }
        },
        methods: {
            handleRegister(){
                this.$store.dispatch('auth/registerUser', this.form)
                  .then(() => this.$router.push('/login'))
                  .catch((errMessage ) => {
                    this.$toasted.error(errMessage , {duration: 5000})
                  })
            }
        }
    }
</script>

<style scoped>
  
</style>
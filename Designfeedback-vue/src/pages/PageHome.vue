<template>
  <div>
    <section>
      <h3>🎉 Welcome</h3>
      <p>
        We're adding people gradually. if you don't yet have an
        <b>invite passcode</b> please come back when someone gives you one
      </p>
      <p class="textfr">
        <i>Nous ajoutons des personnes progressivement. Si vous n'avez pas
          encore de code d'invitation, revenez lorsque quelqu'un vous en donnera
          un.</i>
      </p>

      <div>
            <figure class="avatar">
                <img src="https://placehold.it/128x128">
            </figure>
            <form>
              <div class="field">
                <div class="control">
                    <input  v-model="form.firstname" class="input is-large"
                            @blur="$v.form.firstname.$touch()"
                            type="text"
                            placeholder="Firstname">
                    <div v-if="$v.form.firstname.$error" class="form-error">
                        <span v-if="!$v.form.firstname.required" class="help is-danger">Username is required</span>
                    </div>

                </div>
              </div>
              <div class="field">
                <div class="control">
                    <input  v-model="form.surname" class="input is-large"
                            @blur="$v.form.surname.$touch()"
                            type="text"
                            placeholder="Surname">
                    <div v-if="$v.form.surname.$error" class="form-error">
                        <span v-if="!$v.form.surname.required" class="help is-danger">Name is required</span>
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
                    <input  v-model="form.linkedin" class="input is-large"
                            @blur="$v.form.linkedin.$touch()"
                            type="text"
                            placeholder="Linkedin Url"
                            autocomplete="">
                    <div v-if="$v.form.linkedin.$error" class="form-error">
                        <span v-if="!$v.form.linkedin.url" class="help is-danger">Not correct url</span>
                        <span v-if="!$v.form.linkedin.supportedFileType" class="help is-danger">Not supported file type</span>

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
                        class="button is-block is-info is-large is-fullwidth">
                        Register</button>
            </form>
          </div>
    </section>
  </div>
</template>

 <script>
    import { required, email, minLength, url, sameAs } from 'vuelidate/lib/validators'

    export default {
        data() {
            return {
                form: {
                    firstname: null,
                    surname: null,
                    email: null,
                    linkedin: null,
                    password: null,
                    passwordConfirmation: null
                }
            }
        },
        validations:{
            form: {
                firstname: {
                    //required,
                },
                surname: {
                    //required,
                },
                email: {
                    required,
                    email,
                }, 
                linkedin: {
                    url,
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
<style lang="scss" scoped>
</style>

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
    </section>
    <Register/>
  </div>
</template>

<script>
import Register from '@/components/form/Register.vue'
export default{
  name: 'App',
  components: {
    Register
  }
}
</script>

<style lang="scss" scoped>
</style>

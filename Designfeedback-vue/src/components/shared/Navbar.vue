<template>
        <div class="head">
            <router-link :to="'/'" >
            <div class="logo-label">
                <img class="logohead" alt="Design Feedback logo" src="@/assets/logo.svg">
            </div>
            </router-link>
            <div class="login">
                <p>already have an account?</p>
                <router-link to="/login">Login</router-link>
            </div>
        </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.head{
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    height: 13vh;

    margin-inline: 10vw;
    padding-top: 5vw;
    padding-bottom: 2vw;
    .login{
        display: flex;
        flex-direction: row;
        p{
            display: inline
        }
        a{
            margin-left:20px;
        }
    }
}
</style>
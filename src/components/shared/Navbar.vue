<template>
    <router-link :to="'/'" >
        <div class="head">
            <img class="logohead" alt="Design Feedback logo" src="@/assets/logo.svg">
            <h1>DesignFeedback</h1>
        </div>
    </router-link>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.head{
    display: flex;
    flex-direction: row;
    
    .logohead{
        width: 20vh;
    }
}
</style>
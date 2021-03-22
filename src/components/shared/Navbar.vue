<template>
    <router-link :to="'/'" >
        <div class="head">
            <img class="logohead" alt="Design Feedback logo" src="@/assets/logo.svg">
            <div>
                <h1>DesignFeedback</h1>
                <h5>improve your skills by peerlearning</h5>
            </div>
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
        width: 10%;
    }
}
</style>
<template>
    <header>
        <img src="/images/logo.png" alt="Logo">
        <div class="imput-group w-20">
            <input type="text" class="form-control">
            <button class="btn btn-outline-light"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
    </header>
</template>

<script>
    import { store } from '../store.js'
    export default {
        name: 'headerComponent',
        data() {
            return {
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
header{
    background-color: $headerbg;
    position: fixed;
    height: 90px;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 3000;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: $whitetxt;

    img{
        height: 70px;
    }

    .w-20{
        width: 200px;

    }
}
</style>
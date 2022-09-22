<template>
    <nav class="navbar">
        <div class="navbar__btns">
            <button @click="$router.push('/login')">Girish</button>
            <button @click="$router.push('/registration')">Qeydiyyat</button>
            <button @click="$router.push('/')">Chixish</button>
        </div>
    </nav>
</template>

<script>

</script>

<style>
    .navbar {
        background: red;
        padding:15px 0;
    }

    .navbar__btns {
        display: flex;
        justify-content: center;
        gap:5px;
    }

    .navbar__btns button {
        padding:5px 10px;
        font-size: 18px;
        border-radius: 10px;
        cursor: pointer;
    }
</style>
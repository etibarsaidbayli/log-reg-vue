<template>
  <nav class="navbar">
    <div class="navbar__btns">
      <button @click="$router.push('/login')">Girish</button>
      <button @click="$router.push('/registration')">Qeydiyyat</button>
      <button v-if="!isLogOut"  @click="logOut">cixish</button>
      <button v-else="isLogout"  @click="logOut">chixildi !</button>
    </div>
  </nav>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";
export default {
    data() {
        return {
            isLogOut:false
        }
    },
  methods: {
    logOut() {
      console.log("chixish ");
      const auth = getAuth();
      signOut(auth)
        .then(() => {
            this.isLogOut=true
        })
        .catch((error) => {
          alert(error)
        });
      this.$router.push("/");
    },
  },
};
</script>

<style>
.navbar {
  background: red;
  padding: 15px 0;
}

.navbar__btns {
  display: flex;
  justify-content: center;
  gap: 5px;
}

.navbar__btns button {
  padding: 5px 10px;
  font-size: 18px;
  border-radius: 10px;
  cursor: pointer;
}
</style>

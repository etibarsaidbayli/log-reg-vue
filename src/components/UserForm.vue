<template>
  <form id="form" @submit.prevent>
    <input
      :value="email"
      @input="(event) => (email = event.target.value)"
      type="email"
      placeholder="email"
    />
    <input
      :value="pass"
      @input="(event) => (pass = event.target.value)"
      type="password"
      placeholder="password"
    />
    <button @click="register">
      {{ title }}
    </button>
  </form>
  <h1 v-if="isError && this.title === 'girish'">
    email ve ya parol sehf daxil olunub
  </h1>
  <h1 v-if="isError && this.title === 'qeydiyyat'">
    bele istifadechi artiq var !
  </h1>
</template>

<script>
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      email: "",
      pass: "",
      isError: false,
    };
  },
  methods: {
    register() {
      if (this.title === "qeydiyyat") {
        console.log("qeydiyyat olunur", this.email);
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, this.email, this.pass)
          .then((userCredential) => {
            const user = userCredential.user;
            this.$router.push("/");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            this.isError = true;
            // ..
          });
      } else {
        console.log("log in olunur", this.email);
        const auth = getAuth();
        signInWithEmailAndPassword(auth, this.email, this.pass)
          .then((userCredential) => {
            this.$router.push("/");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            this.isError = true;
            // ..
          });
      }
    },
  },
};
</script>

<style scoped>
#form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
#form input {
  font-size: 22px;
  padding: 5px;
}

#form button {
  font-size: 20px;
  padding: 3px;
  cursor: pointer;
  align-self: center;
}
</style>

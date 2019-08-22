<template>
  <form class="ui form">
    <p v-if="alerts.length > 0">{{alerts.join(" ")}}</p>
    <div class="field">
      <label>First Name</label>
      <input v-model="name" type="text" name="name" placeholder="Enter your full name" required />
    </div>
    <div class="field">
      <label>Email</label>
      <input v-model="email" type="email" name="email" placeholder="Enter your email" required />
    </div>
    <div class="field">
      <label>Password</label>
      <input
        v-model="password"
        type="password"
        name="password"
        placeholder="Create a password"
        required
        minlength="6"
      />
    </div>
    <div class="field">
      <label>Password Confirm</label>
      <input
        v-model="password2"
        type="password"
        name="passsword2"
        placeholder="Re-enter password"
        required
        minlength="6"
      />
    </div>
    <button @click.prevent="handleRegister" class="ui button" type="submit">Submit</button>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password2: "",
      alerts: []
    };
  },
  methods: {
    ...mapActions(["register"]),
    async handleRegister() {
      if (this.password !== this.password2) {
        this.alerts = "Passwords must match";
        return;
      }
      const response = await this.register({
        name: this.name,
        email: this.email,
        password: this.password
      });
      if (response) {
        this.alerts = response.errors.map(error => error.msg);
        return;
      }
      this.alerts = [];
    }
  }
};
</script>

<style>
</style>
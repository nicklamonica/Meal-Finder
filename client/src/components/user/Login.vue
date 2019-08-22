<template>
  <div>
    <form class="ui form">
      <p v-if="alerts.length > 0">{{alerts.join(" ")}}</p>
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
      <button @click.prevent="handleLogin" class="ui button" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  methods: {
    ...mapActions(["login"]),
    async handleLogin() {
      const response = await this.login({
        email: this.email,
        password: this.password
      });
      if(response){
        this.alerts = response.errors.map(error => error.msg);
        return;
      }
      this.alerts = []
    }
  },
  data() {
    return {
      email: "",
      password: "",
      alerts: []
    };
  }
};
</script>

<style>
</style>
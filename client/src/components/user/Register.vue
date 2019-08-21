<template>
  <form class="ui form">
    <div class="field">
      <label>First Name</label>
      <input type="text" name="name" placeholder="Enter your full name" required />
    </div>
    <div class="field">
      <label>Email</label>
      <input type="email" name="email" placeholder="Enter your email" required />
    </div>
    <div class="field">
      <label>Password</label>
      <input type="password" name="password" placeholder="Create a password" required minlength="6" />
    </div>
    <div class="field">
      <label>Password Confirm</label>
      <input
        type="password"
        name="passsword2"
        placeholder="Re-enter password"
        required
        minlength="6"
      />
    </div>
    <button class="ui button" type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  name: "Register",
};
</script>

<style>
</style>
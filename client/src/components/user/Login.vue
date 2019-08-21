<template>
  <div>
    <form class="ui form">
      <div class="field">
        <label>Email</label>
        <input type="email" name="email" placeholder="Enter your email" required />
      </div>
      <div class="field">
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Create a password"
          required
          minlength="6"
        />
      </div>
      <button class="ui button" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login"
};
</script>

<style>
</style>
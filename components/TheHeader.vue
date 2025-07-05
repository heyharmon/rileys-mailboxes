<template>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <div class="nav-left">
          <NuxtLink to="/" class="logo">
            <span class="logo-text">Riley's</span>
            <span class="logo-subtext">MAILBOXES</span>
          </NuxtLink>
        </div>
        <div class="nav-center">
          <ul class="menu">
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/programs">Programs</NuxtLink></li>
            <li><NuxtLink to="/press">Press</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
          </ul>
        </div>
        <div class="nav-right">
          <NuxtLink to="/schedule" class="schedule-btn">SCHEDULE</NuxtLink>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
// Header component
</script>

<style scoped>
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  padding: 1.5rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
}

.logo-text {
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  font-style: italic;
}

.logo-subtext {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--primary-color);
  letter-spacing: 1px;
}

.menu {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.menu li a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.3s;
}

.menu li a:hover {
  opacity: 0.8;
}

.schedule-btn {
  background-color: white;
  color: black;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  font-weight: 600;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.schedule-btn:hover {
  background-color: #f0f0f0;
}
</style>

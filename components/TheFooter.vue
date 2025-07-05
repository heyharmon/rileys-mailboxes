<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-left">
          <div class="logo">
            <span class="logo-text">Riley's</span>
            <span class="logo-subtext">MAILBOXES</span>
          </div>
          <p class="footer-tagline">Fresh mailboxes, fresh curb appeal.</p>
        </div>
        <div class="footer-center">
          <ul class="footer-links">
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/programs">Programs</NuxtLink></li>
            <li><NuxtLink to="/press">Press</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
          </ul>
        </div>
        <div class="footer-right">
          <p class="footer-contact">
            <strong>Get in touch</strong><br>
            Schedule your mailbox makeover today
          </p>
          <NuxtLink to="/schedule" class="footer-cta">SCHEDULE NOW</NuxtLink>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 Riley's Mailboxes. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Footer component
</script>

<style scoped>
.footer {
  background-color: #333;
  color: white;
  padding: 3rem 0 1rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 2rem;
}

.logo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1rem;
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
  color: #f8d24a;
  letter-spacing: 1px;
}

.footer-tagline {
  font-size: 0.9rem;
  color: #ccc;
  margin: 0;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: white;
}

.footer-contact {
  font-size: 0.9rem;
  margin-bottom: 1rem;
  color: #ccc;
}

.footer-cta {
  display: inline-block;
  background-color: #f8d24a;
  color: #333;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  font-weight: 600;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.footer-cta:hover {
  background-color: #e9c43a;
}

.footer-bottom {
  border-top: 1px solid #555;
  padding-top: 1rem;
  text-align: center;
}

.footer-bottom p {
  font-size: 0.8rem;
  color: #999;
  margin: 0;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .logo {
    align-items: center;
  }
}
</style>
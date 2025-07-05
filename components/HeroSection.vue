<template>
  <section class="hero">
    <div class="hero-background">
      <!-- We'll use a div with background styling for now, but in production you would use NuxtImg -->
    </div>
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h1 class="hero-title">
        FRESH MAILBOXES,<br />
        FRESH CURB APPEAL.
      </h1>
      <p class="hero-subtitle">Locally Owned • Satisfaction Guaranteed</p>
      <div class="cta-container">
        <NuxtLink to="/makeover" class="cta-button">
          Makeover My Mailbox for $129
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
// Hero section component
</script>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80');
  background-size: cover;
  background-position: center;
  background-color: #333; /* Fallback if image is not available */
  z-index: 1;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
  max-width: 1000px;
  padding: 0 2rem;
}

.hero-title {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-transform: uppercase;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 3rem;
  font-weight: 400;
}

.cta-container {
  margin-top: 2rem;
}

.cta-button {
  display: inline-block;
  background-color: #f8d24a;
  color: #333;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #e9c43a;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
}
</style>

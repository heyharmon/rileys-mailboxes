<template>
  <section class="cta-section">
    <div class="cta-overlay"></div>
    <div class="container">
      <div class="cta-content">
        <h2 class="cta-title">
          READY FOR A CURB-<br />
          APPEAL UPGRADE?
        </h2>
        <p class="cta-subtitle">LET'S REFRESH YOUR MAILBOX</p>
        <div class="cta-button-container">
          <a href="/quote" class="cta-button">Get My Free Quote</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Call to action section component
</script>

<style scoped>
.cta-section {
  position: relative;
  padding: 6rem 0;
  background-image: url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
}

.cta-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(194, 97, 87, 0.85); /* Reddish overlay */
  z-index: 1;
}

.container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  z-index: 2;
}

.cta-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.cta-title {
  font-size: 3.5rem;
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: -0.5px;
}

.cta-subtitle {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 3rem;
  letter-spacing: 1px;
}

.cta-button-container {
  margin-top: 1rem;
}

.cta-button {
  display: inline-block;
  background-color: white;
  color: #333;
  padding: 0.8rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 0;
  transition: background-color 0.3s, transform 0.3s;
}

.cta-button:hover {
  background-color: #f0f0f0;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .cta-title {
    font-size: 2.5rem;
  }
  
  .cta-subtitle {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
}
</style>

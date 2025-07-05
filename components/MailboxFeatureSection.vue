<template>
  <section class="feature-section">
    <div class="container">
      <div class="feature-content">
        <div class="feature-text">
          <h2 class="feature-title">
            AFFORDABLE<br />
            MAILBOX<br />
            MAKEOVERS.
          </h2>
          <p class="feature-description">
            What started as a weekend project that sparked a
            business. We are reviving Centerville's streets one
            mailbox at a time.
          </p>
          <a href="/samples" class="feature-button">See a Sample</a>
        </div>
        <div class="feature-image">
          <img src="https://images.unsplash.com/photo-1597774293578-9f6b376f5b8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="White mailbox on wooden post" class="feature-img" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Feature section component
</script>

<style scoped>
.feature-section {
  padding: 5rem 0;
  background-color: #f0ece2; /* Beige color to match the image */
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.feature-content {
  display: flex;
  align-items: center;
  gap: 6rem;
  justify-content: space-between;
}

.feature-text {
  flex: 0 0 45%;
  padding-left: 2rem;
}

.feature-title {
  font-size: 2.8rem;
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #222;
  text-transform: uppercase;
  letter-spacing: -0.5px;
}

.feature-description {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #333;
  max-width: 90%;
}

.feature-image {
  flex: 0 0 45%;
  height: 100%;
}

.feature-img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 0;
  box-shadow: none;
}

.feature-button {
  display: inline-block;
  background-color: #b45b55;
  color: white;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 0;
  transition: background-color 0.3s;
}

.feature-button:hover {
  background-color: #9a4e48;
}

@media (max-width: 992px) {
  .feature-content {
    flex-direction: column;
    gap: 3rem;
  }
  
  .feature-text {
    flex: 0 0 100%;
    padding-left: 0;
  }
  
  .feature-image {
    flex: 0 0 100%;
  }
  
  .feature-title {
    font-size: 2.5rem;
  }
  
  .feature-description {
    max-width: 100%;
  }
}
</style>

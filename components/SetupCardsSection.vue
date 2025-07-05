<template>
  <section class="setup-cards-section">
    <div class="container">
      <h2 class="section-title">CHOOSE YOUR SETUP</h2>
      <div class="cards-grid">
        <div class="card">
          <div class="card-image">
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Mountain sunset" class="card-img" />
          </div>
          <div class="card-content">
            <h3 class="card-title">MAILBOX INSTALL</h3>
            <p class="card-price">$129</p>
            <p class="card-description">
              Receive expert tips for getting started, a
              checklist for your first year of business,
              and helpful follow-up links.
            </p>
          </div>
        </div>
        
        <div class="card">
          <div class="card-image">
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Mountain with star" class="card-img" />
          </div>
          <div class="card-content">
            <h3 class="card-title">HOUSE NUMBERS</h3>
            <p class="card-price">$49</p>
            <p class="card-description">
              Monthly access to our growing library of
              online classes, training courses, special
              events, and 1-on-1 coaching sessions.
            </p>
          </div>
        </div>
        
        <div class="card">
          <div class="card-image">
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Sunset landscape" class="card-img" />
          </div>
          <div class="card-content">
            <h3 class="card-title">SOLAR LIGHT</h3>
            <p class="card-price">$19</p>
            <p class="card-description">
              Annual access to our growing library of
              online classes, training courses, special
              events, and 1-on-1 coaching sessions.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Setup cards section component
</script>

<style scoped>
.setup-cards-section {
  padding: 4rem 0;
  background-color: #f0ece2;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 900;
  text-align: center;
  margin-bottom: 3rem;
  color: #222;
  text-transform: uppercase;
  letter-spacing: -0.5px;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.card-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-content {
  padding: 1.5rem;
}

.card-title {
  font-size: 1.3rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  color: #222;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.card-price {
  font-size: 1.2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
}

.card-description {
  font-size: 0.9rem;
  line-height: 1.5;
  color: #666;
  margin: 0;
}

@media (max-width: 992px) {
  .cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .cards-grid {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 2rem;
  }
}
</style>
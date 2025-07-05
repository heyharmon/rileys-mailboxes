<template>
  <section class="how-it-works-section">
    <div class="container">
      <h2 class="section-title">HOW IT WORKS</h2>
      
      <div class="steps-grid">
        <div class="step">
          <h3 class="step-title">SEND A SNAPSHOT</h3>
          <p class="step-description">
            Upload your current mailbox or pick a style you love.
          </p>
        </div>
        
        <div class="step">
          <h3 class="step-title">SCHEDULE & SAVE</h3>
          <p class="step-description">
            Choose standard or <em>flex time</em> for an extra discount.
          </p>
        </div>
        
        <div class="step">
          <h3 class="step-title">INSTALL DAY</h3>
          <p class="step-description">
            We install, clean up and wave goodbye.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// How It Works section component
</script>

<style scoped>
.how-it-works-section {
  padding: 5rem 0;
  background-color: #8a9788;
  color: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
}

.section-title {
  font-size: 2.8rem;
  font-weight: 900;
  margin-bottom: 4rem;
  text-transform: uppercase;
  letter-spacing: -0.5px;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.step-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.step-description {
  font-size: 1rem;
  line-height: 1.6;
  max-width: 80%;
}

.step-description em {
  font-style: italic;
}

@media (max-width: 992px) {
  .steps-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  
  .step-description {
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .steps-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .section-title {
    font-size: 2.2rem;
    margin-bottom: 3rem;
  }
}
</style>

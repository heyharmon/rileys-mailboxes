<template>
  <div class="bg-[#fcf7e8]">
    <TheHeader />
    
    <Hero 
      title="BOOK YOUR APPOINTMENT"
      description="We'll show you samples and discuss your mailbox options."
      background-image="/images/homepage/green-house.png"
      height="h-[40vh]"
      padding-top="pt-22"
    />

    <!-- Booking Form Section -->
    <section class="py-15 bg-[#fcf7e8]">
      <div class="max-w-4xl mx-auto px-8">
        <!-- Multi-step Form -->
        <div class="bg-white p-8 rounded-3xl shadow-lg">
          <!-- Progress Bar -->
          <div class="mb-8">
            <div class="flex justify-between items-center mb-4">
              <span class="text-sm font-semibold text-gray-600 uppercase tracking-wide">Step {{ currentStep }}</span>
              <span class="text-sm font-semibold text-gray-600">{{ Math.round((currentStep / 5) * 100) }}% Complete</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="bg-[#e9ca5d] h-2 rounded-full transition-all duration-300" :style="{ width: (currentStep / 5) * 100 + '%' }"></div>
            </div>
          </div>

          <form @submit.prevent="handleSubmit" action="https://usebasin.com/f/93c6f60709a0" method="POST" enctype="multipart/form-data" id="form">
            
            <!-- Step 1: Name -->
            <div v-if="currentStep === 1" class="text-center">
              <h3 class="text-2xl font-bold text-gray-800 mb-6">What's your name?</h3>
              <div class="max-w-md mx-auto">
                <input 
                  ref="nameInput"
                  type="text" 
                  v-model="formData.name" 
                  name="name"
                  placeholder="Enter your full name"
                  class="w-full px-6 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e9ca5d] focus:border-transparent text-center" 
                  required
                  @keyup.enter="nextStep"
                >
              </div>
            </div>

            <!-- Step 2: Phone -->
            <div v-if="currentStep === 2" class="text-center">
              <h3 class="text-2xl font-bold text-gray-800 mb-6">What's your phone number?</h3>
              <div class="max-w-md mx-auto">
                <input 
                  ref="phoneInput"
                  type="tel" 
                  v-model="formData.phone" 
                  name="phone"
                  placeholder="(555) 123-4567"
                  class="w-full px-6 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e9ca5d] focus:border-transparent text-center" 
                  required
                  @keyup.enter="nextStep"
                >
              </div>
            </div>

            <!-- Step 3: Address -->
            <div v-if="currentStep === 3" class="text-center">
              <h3 class="text-2xl font-bold text-gray-800 mb-6">What's your address?</h3>
              <div class="max-w-md mx-auto">
                <input 
                  ref="addressInput"
                  type="text" 
                  v-model="formData.address" 
                  name="address"
                  placeholder="123 Main Street, City, State"
                  class="w-full px-6 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e9ca5d] focus:border-transparent text-center" 
                  required
                  @keyup.enter="nextStep"
                >
              </div>
            </div>

            <!-- Step 4: Best Day -->
            <div v-if="currentStep === 4" class="text-center">
              <h3 class="text-2xl font-bold text-gray-800 mb-6">What's your preferred day?</h3>
              <div class="max-w-md mx-auto">
                <select 
                  ref="daySelect"
                  v-model="formData.bestDay" 
                  name="bestDay"
                  class="w-full px-6 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e9ca5d] focus:border-transparent text-center" 
                  required
                >
                  <option value="">Select a day</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                </select>
              </div>
            </div>

            <!-- Step 5: Best Time -->
            <div v-if="currentStep === 5" class="text-center">
              <h3 class="text-2xl font-bold text-gray-800 mb-6">What's your preferred time?</h3>
              <div class="max-w-md mx-auto">
                <select 
                  ref="timeSelect"
                  v-model="formData.bestTime" 
                  name="bestTime"
                  class="w-full px-6 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e9ca5d] focus:border-transparent text-center" 
                  required
                >
                  <option value="">Select a time</option>
                  <option value="Morning (8AM - 12PM)">Morning (8AM - 12PM)</option>
                  <option value="Afternoon (12PM - 5PM)">Afternoon (12PM - 5PM)</option>
                  <option value="Evening (5PM - 8PM)">Evening (5PM - 8PM)</option>
                </select>
              </div>
            </div>

            <!-- Navigation Buttons -->
            <div class="flex justify-between items-center mt-12">
              <button 
                type="button" 
                @click="prevStep" 
                v-if="currentStep > 1"
                class="px-8 py-3 text-lg font-semibold text-gray-600 border border-gray-300 rounded transition-all duration-300 hover:bg-gray-50"
              >
                Back
              </button>
              <div v-else></div>

              <button 
                type="button" 
                @click="nextStep" 
                v-if="currentStep < 5 && isCurrentStepValid"
                class="px-8 py-3 text-lg font-semibold bg-[#e9ca5d] text-gray-800 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                Next
              </button>

              <button 
                type="submit" 
                v-if="currentStep === 5 && isCurrentStepValid"
                class="px-8 py-3 text-lg font-semibold bg-[#e9ca5d] text-gray-800 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                Book Appointment
              </button>
            </div>
          </form>
        </div>

        <!-- Summary Card (shown on final step) -->
        <!-- <div v-if="currentStep === 5" class="mt-8 p-6 rounded-2xl">
          <h4 class="text-lg font-bold text-gray-800 mb-4 text-center">Appointment Summary</h4>
          <div class="space-y-2 text-center">
            <p><span class="font-semibold">Name:</span> {{ formData.name }}</p>
            <p><span class="font-semibold">Phone:</span> {{ formData.phone }}</p>
            <p><span class="font-semibold">Address:</span> {{ formData.address }}</p>
            <p><span class="font-semibold">Preferred Day:</span> {{ formData.bestDay }}</p>
            <p><span class="font-semibold">Preferred Time:</span> {{ formData.bestTime }}</p>
          </div>
        </div> -->
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-black leading-tight mb-12 text-gray-800 uppercase tracking-tight">
          WHAT TO EXPECT
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="p-6">
            <div class="w-16 h-16 bg-[#e9ca5d] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3">Free Consultation</h3>
            <p class="text-gray-600">We'll assess your current mailbox and discuss your vision for the perfect replacement.</p>
          </div>
          <div class="p-6">
            <div class="w-16 h-16 bg-[#e9ca5d] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3">View Samples</h3>
            <p class="text-gray-600">See and touch our high-quality materials and browse our portfolio of completed projects.</p>
          </div>
          <div class="p-6">
            <div class="w-16 h-16 bg-[#e9ca5d] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3">Custom Quote</h3>
            <p class="text-gray-600">Receive a detailed, no-obligation quote tailored to your specific needs and preferences.</p>
          </div>
        </div>
      </div>
    </section>
    
    <TheFooter />
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick } from 'vue'

const currentStep = ref(1)
const formData = ref({
  name: '',
  phone: '',
  address: '',
  bestDay: '',
  bestTime: ''
})

// Template refs for form inputs
const nameInput = ref(null)
const phoneInput = ref(null)
const addressInput = ref(null)
const daySelect = ref(null)
const timeSelect = ref(null)

const isCurrentStepValid = computed(() => {
  switch (currentStep.value) {
    case 1:
      return formData.value.name.trim() !== ''
    case 2:
      return formData.value.phone.trim() !== ''
    case 3:
      return formData.value.address.trim() !== ''
    case 4:
      return formData.value.bestDay !== ''
    case 5:
      return formData.value.bestTime !== ''
    default:
      return false
  }
})

// Auto-focus input when step changes
watch(currentStep, async (newStep) => {
  await nextTick()
  switch (newStep) {
    case 1:
      nameInput.value?.focus()
      break
    case 2:
      phoneInput.value?.focus()
      break
    case 3:
      addressInput.value?.focus()
      break
    case 4:
      daySelect.value?.focus()
      break
    case 5:
      timeSelect.value?.focus()
      break
  }
}, { immediate: true })

const nextStep = () => {
  if (isCurrentStepValid.value && currentStep.value < 5) {
    currentStep.value++
  }
}

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

const handleSubmit = async (event) => {
  // Always prevent default form submission
  event.preventDefault()
  
  // Only submit on step 5 with valid data
  if (currentStep.value === 5 && isCurrentStepValid.value) {
    try {
      // Create FormData object with all form fields
      const formDataToSubmit = new FormData()
      formDataToSubmit.append('name', formData.value.name)
      formDataToSubmit.append('phone', formData.value.phone)
      formDataToSubmit.append('address', formData.value.address)
      formDataToSubmit.append('bestDay', formData.value.bestDay)
      formDataToSubmit.append('bestTime', formData.value.bestTime)
      
      // Submit to Basin using fetch
      const response = await $fetch('https://usebasin.com/f/93c6f60709a0', {
        method: 'POST',
        body: formDataToSubmit
      })
      
      // Redirect or show success message
      console.log('Form submitted successfully:', response)
      // You could redirect to a thank you page here
      // await navigateTo('/thank-you')
      
    } catch (error) {
      console.error('Form submission error:', error)
      // Handle error - maybe show an error message to user
    }
  }
  
  return false
}
</script>

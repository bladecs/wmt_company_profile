<script setup>
import { ref, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import router from './router'
import slider1 from './assets/img/slider-1.png'
import slider2 from './assets/img/slider-2.png'
import slider3 from './assets/img/slider-3.png'
import slider4 from './assets/img/slider-4.png'

const slides = [slider1, slider2, slider3, slider4]

const currentIndex = ref(0)
const totalSlides = 4
const menuOpen = ref(false)
const isLoading = ref(false)

// State untuk dropdown
const companyDropdownOpen = ref(false)
const servicesDropdownOpen = ref(false)

// Router Guards
router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    isLoading.value = true
  } else {
    isLoading.value = false
  }
  next()
})

router.afterEach(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 300)
})

// Slider Controls
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % totalSlides
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + totalSlides) % totalSlides
}

// Dropdown Controls
const openCompanyDropdown = () => {
  companyDropdownOpen.value = true
  servicesDropdownOpen.value = false
}

const closeCompanyDropdown = () => {
  companyDropdownOpen.value = false
}

const openServiceDropdown = () => {
  servicesDropdownOpen.value = true
  companyDropdownOpen.value = false
}

const closeServiceDropdown = () => {
  servicesDropdownOpen.value = false
}

onMounted(() => {
  setInterval(nextSlide, 5000)
})
</script>

<template>
  <div class="flex flex-col w-full h-fit">
    <!-- Navbar -->
    <nav class="w-full bg-white flex items-center justify-between px-6 lg:px-10 py-4 shadow-md relative">
      <!-- Logo -->
      <div class="flex items-center gap-3">
        <img src="./assets/img/Logo_wmt.png" alt="logo-wmt" class="h-10 sm:h-12 md:h-14" />
        <h1 class="font-bold text-base sm:text-lg md:text-xl title-text whitespace-nowrap">
          WAFIQ MITRA TEKNIK
        </h1>
      </div>

      <!-- Menu desktop -->
      <ul class="hidden lg:flex gap-4 xl:gap-6">
        <li
          class="activate flex py-2 px-3 rounded-full items-center justify-center gap-1 text-sm xl:text-base font-bold">
          <router-link to="/" @click="startLoading" class="flex items-center gap-1"><span
              class="material-symbols-outlined icon-filled">home_app_logo</span>Home</router-link>
        </li>

        <!-- Company Dropdown -->
        <li class="relative rounded-full" @mouseenter="openCompanyDropdown" @mouseleave="closeCompanyDropdown">
          <div
            class="flex py-2 px-3 rounded-full items-center justify-center gap-1 text-sm xl:text-base font-bold cursor-pointer">
            <span class="material-symbols-outlined icon-filled">apartment</span>Company
          </div>

          <!-- Dropdown Menu -->
          <transition name="dropdown">
            <div v-if="companyDropdownOpen"
              class="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-200">
              <router-link to="/about-us" @click="startLoading"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">About
                Us</router-link>
              <router-link to="/history" @click="startLoading"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">History</router-link>
              <router-link to="/certificate" @click="startLoading"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Certificates</router-link>
              <router-link to="/customer" @click="startLoading"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Customer</router-link>
            </div>
          </transition>
        </li>

        <!-- Services Dropdown -->
        <li class="relative rounded-full" @mouseenter="openServiceDropdown" @mouseleave="closeServiceDropdown">
          <div
            class="flex py-2 px-3 rounded-full items-center justify-center gap-1 text-sm xl:text-base font-bold cursor-pointer">
            <span class="material-symbols-outlined icon-filled">apps</span>Services
          </div>

          <!-- Dropdown Menu -->
          <transition name="dropdown">
            <div v-if="servicesDropdownOpen"
              class="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-200">
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">All
                Services</a>
              <div class="border-t border-gray-100 my-1"></div>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Precision
                Part</a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Plastic
                Injection</a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Mold
                & Dies</a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Turbine
                Part</a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Medical
                Part</a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Rubber</a>
            </div>
          </transition>
        </li>

        <li class="flex py-2 px-3 rounded-full items-center justify-center gap-1 text-sm xl:text-base font-bold">
          <span class="material-symbols-outlined icon-filled">breaking_news</span>News & Activity
        </li>
      </ul>

      <!-- Hamburger -->
      <button @click="menuOpen = !menuOpen" class="lg:hidden text-3xl text-[var(--blue)]">
        <span class="material-symbols-outlined">
          {{ menuOpen ? 'close' : 'menu' }}
        </span>
      </button>
    </nav>

    <!-- Menu Mobile -->
    <transition name="fade">
      <div v-if="menuOpen" class="flex flex-col bg-white shadow-md w-full lg:hidden z-50 px-6 py-4 space-y-3">
        <a class="font-bold text-[var(--blue)] flex items-center gap-2"><span
            class="material-symbols-outlined">home_app_logo</span>Home</a>

        <!-- Company Mobile Dropdown -->
        <div class="flex flex-col">
          <div class="font-bold text-[var(--blue)] flex items-center justify-between gap-2"
            @click="companyDropdownOpen = !companyDropdownOpen">
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined">apartment</span>Company
            </div>
            <span class="material-symbols-outlined text-sm">
              {{ companyDropdownOpen ? 'expand_less' : 'expand_more' }}
            </span>
          </div>
          <transition name="mobile-dropdown">
            <div v-if="companyDropdownOpen" class="pl-6 mt-2 space-y-2">
              <router-link to="/about-us" @click="startLoading" class="block text-[var(--blue)]">About Us</router-link>
              <router-link to="/history" @click="startLoading" class="block text-[var(--blue)]">History</router-link>
              <router-link to="/certificate" @click="startLoading"
                class="block text-[var(--blue)]">Certificates</router-link>
              <router-link to="/customer" @click="startLoading" class="block text-[var(--blue)]">Customer</router-link>
            </div>
          </transition>
        </div>

        <!-- Services Mobile Dropdown -->
        <div class="flex flex-col">
          <div class="font-bold text-[var(--blue)] flex items-center justify-between gap-2"
            @click="servicesDropdownOpen = !servicesDropdownOpen">
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined">apps</span>Services
            </div>
            <span class="material-symbols-outlined text-sm">
              {{ servicesDropdownOpen ? 'expand_less' : 'expand_more' }}
            </span>
          </div>
          <transition name="mobile-dropdown">
            <div v-if="servicesDropdownOpen" class="pl-6 mt-2 space-y-2">
              <a href="#" class="block text-[var(--blue)]">All Services</a>
              <a href="#" class="block text-[var(--blue)]">Precision Part</a>
              <a href="#" class="block text-[var(--blue)]">Plastic Injection</a>
              <a href="#" class="block text-[var(--blue)]">Mold & Dies</a>
              <a href="#" class="block text-[var(--blue)]">Turbine Part</a>
              <a href="#" class="block text-[var(--blue)]">Medical Part</a>
              <a href="#" class="block text-[var(--blue)]">Rubber</a>
            </div>
          </transition>
        </div>

        <a class="font-bold text-[var(--blue)] flex items-center gap-2"><span
            class="material-symbols-outlined">breaking_news</span>News & Activity</a>
      </div>
    </transition>

    <!-- Slider -->
    <div class="slider relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[90vh] overflow-hidden">
      <div class="img-content flex transition-transform duration-700 ease-in-out"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div class="relative min-w-full h-full" v-for="(img, index) in slides" :key="index">
          <img class="w-full h-full object-cover" :src="img" :alt="`slider-${index + 1}`" />
          <div class="absolute inset-0 bg-black/40"></div>
        </div>
      </div>

      <!-- Overlay Content -->
      <div class="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white z-10 px-4">
        <div class="content flex flex-row items-center justify-between w-full px-4 md:px-10">
          <!-- Prev -->
          <button @click="prevSlide"
            class="bg-gray-400/40 hidden md:flex justify-center items-center hover:bg-black/60 p-2 md:p-3 rounded-full transition">
            <span class="material-symbols-outlined text-2xl md:text-3xl">chevron_left</span>
          </button>

          <!-- Text -->
          <div class="text-content text-center flex flex-col justify-center items-center">
            <h1 class="xl:text-9xl sm:text-5xl md:text-6xl font-bold mb-2">
              WAFIQ MITRA TEKNIK
            </h1>
            <p class="text-xs sm:text-sm md:text-base max-w-xl">
              A trusted partner for CNC machining services and high-quality plastic products,
              with a strong commitment to on-time delivery
            </p>
            <div class="link-group flex flex-row flex-wrap justify-center gap-3 mt-5">
              <a class="link-button font-bold px-4 py-2 sm:px-5 sm:py-2 w-32 sm:w-36 rounded-full text-center"
                href="#">Contact Us</a>
              <a class="link-button font-bold px-4 py-2 sm:px-5 sm:py-2 w-32 sm:w-36 rounded-full text-center"
                href="#">About Us</a>
            </div>
          </div>

          <!-- Next -->
          <button @click="nextSlide"
            class="bg-gray-400/40 hidden md:flex justify-center items-center hover:bg-black/60 p-2 md:p-3 rounded-full transition">
            <span class="material-symbols-outlined text-2xl md:text-3xl">chevron_right</span>
          </button>
        </div>

        <!-- Indicator -->
        <div class="bg-gray-400/30 absolute bottom-3 sm:bottom-5 px-3 py-2 rounded-full flex justify-center gap-2">
          <span v-for="(n, index) in totalSlides" :key="index" class="w-2 h-2 sm:w-3 sm:h-3 rounded-full"
            :class="currentIndex === index ? 'bg-white' : 'bg-white/50'"></span>
        </div>
      </div>
    </div>
  </div>

  <!-- Loading Component -->
  <transition name="fade">
    <div v-if="isLoading" class="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div class="loading-container text-center">
        <!-- Logo -->
        <img src="./assets/img/Logo_wmt.png" alt="logo-wmt" class="h-20 mx-auto mb-4" />

        <!-- Loading Spinner -->
        <div
          class="loading-spinner w-16 h-16 border-4 border-[var(--blue)] border-t-transparent rounded-full animate-spin mx-auto mb-4">
        </div>

        <!-- Loading Text -->
        <p class="text-[var(--blue)] font-bold text-lg">Loading...</p>
        <p class="text-gray-600 text-sm mt-2">Please wait while we prepare your content</p>
      </div>
    </div>
  </transition>

  <!-- Router View dengan Loading Handler -->
  <RouterView v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" @vue:mounted="stopLoading" @vue:error="stopLoading" />
    </transition>
  </RouterView>

  <footer class="w-full h-120 bg-[var(--footer-dark)] flex flex-col mt-60">
    <div class="svgGroupFooter w-full h-full relative">
      <img src="./assets/svg/ft1.svg" alt="" class="absolute left-0 bottom-0 z-70">
      <img src="./assets/svg/ft2.svg" alt="" class="absolute left-5 bottom-0 z-40">
      <img src="./assets/svg/ft3.svg" alt="" class="absolute left-80 bottom-0 z-50">
      <img src="./assets/svg/ft4.svg" alt="" class="absolute left-150 bottom-0 z-70">
      <img src="./assets/svg/ft5.svg" alt="" class="absolute right-60 bottom-0">
      <img src="./assets/svg/ft6.svg" alt="" class="absolute right-20 bottom-0 z-40">
      <img src="./assets/svg/ft7.svg" alt="" class="absolute right-0 bottom-0 z-70">
    </div>
    <div class="footer-content flex flex-row items-center justify-between gap-15 p-20">
      <div class="summary flex flex-col items-start w-1/3 gap-4">
        <div class="header flex flex-row items-center gap-5">
          <img src="./assets/img/Logo_wmt.png" alt="" class="w-30 h-auto">
          <h1 class="text-white font-bold text-3xl">WAFIQ MITRA TEKNIK</h1>
        </div>
        <div class="text-content">
          <p class="text-white text-sm text-justify w-115">
            With over 20 years of expertise in CNC machining, molds & dies, and plastic manufacturing, PT
            Wafiq
            Mitra Teknik has grown into a trusted partner for industries seeking precision, innovation, and
            reliability.
            Our modern facilities and skilled team enable us to deliver complex, high-quality solutions
            across
            sectors such as automotive, consumer goods, and industrial components.
          </p>
        </div>
        <a href="#" class="flex flex-row justify-center items-center w-80 h-12 p-5 rounded-xl bg-(--green) text-white">
          <img src="./assets/icons/whatsapp.png" alt="" class="w-5 h-5 mr-2">
          Direct Message US
        </a>
      </div>
      <div class="footer-menu flex flex-row gap-15">
        <div class="group-footer flex flex-col gap-5">
          <div class="flex flex-col items-start gap-3">
            <h1 class="text-white font-bold flex justify-center items-center gap-2"><span
                class="material-symbols-outlined">apartment</span>Company</h1>
            <ul>
              <li><a href="#" class="text-white text-start">About Us</a></li>
              <li><a href="#" class="text-white text-start">History</a></li>
              <li><a href="#" class="text-white text-start">Certificates</a></li>
              <li><a href="#" class="text-white text-start">Customer</a></li>
            </ul>
          </div>
          <div class="group-footer flex flex-col items-start gap-3">
            <h1 class="text-white font-bold flex justify-center items-center gap-2">
              <span class="material-symbols-outlined">license
              </span>Certificates
            </h1>
            <ul>
              <li><a href="#" class="text-white text-start">ISO 9001 : 2015 Quality Management</a></li>
              <li><a href="#" class="text-white text-start">ISO 14001: 2015 Enviromental</a></li>
              <li><a href="#" class="text-white text-start">ISO 45001 : 2015 K3</a></li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col items-start gap-3">
          <h1 class="text-white font-bold flex justify-center items-center gap-2">
            <span class="material-symbols-outlined">apps</span>Services
          </h1>
          <ul>
            <li><a href="#" class="text-white text-start">Precision Part</a></li>
            <li><a href="#" class="text-white text-start">Plastic Injection</a></li>
            <li><a href="#" class="text-white text-start">Mold & Dies</a></li>
            <li><a href="#" class="text-white text-start">Medical Part</a></li>
            <li><a href="#" class="text-white text-start">Turbine Part</a></li>
            <li><a href="#" class="text-white text-start">Rubber</a></li>
          </ul>
        </div>
        <div class="flex flex-col gap-3">
          <h1 class="text-white font-bold">Contact Infomation</h1>
          <ul class="flex flex-col gap-3">
            <li class="flex flex-col items-start gap-3">
              <div class="header flex flex-row items-start justify-center gap-2">
                <span class="material-symbols-outlined text-white">distance</span>
                <h2 class="text-white">Location</h2>
              </div>
              <a href="#"
                class="flex flex-row justify-center items-center w-80 h-12 p-5 rounded-xl bg-(--green) text-white">
                <img src="./assets/icons/maps.svg" alt="" class="w-5 h-5 mr-2">
                Our Location
              </a>
            </li>
            <li class="flex flex-col items-start gap-3">
              <div class="header flex flex-row items-start justify-center gap-2">
                <span class="material-symbols-outlined text-white">call</span>
                <h2 class="text-white">Phone</h2>
              </div>
              <h2 class="text-white ps-7">+62 812 207 030</h2>
            </li>
            <li class="flex flex-col items-start gap-3">
              <div class="header flex flex-row items-start justify-center gap-2">
                <span class="material-symbols-outlined text-white">fax</span>
                <h2 class="text-white">Fax</h2>
              </div>
              <h2 class="text-white ps-7">+62 22 7333079</h2>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.title-text {
  color: var(--blue);
}

li {
  color: var(--blue);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

li:hover,
li.activate {
  background: var(--dark-blue);
  color: var(--white);
}

.link-button {
  border: 2px solid var(--blue);
  position: relative;
  overflow: hidden;
}

.link-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 0%;
  height: 100%;
  background-color: var(--blue);
  z-index: -1;
  transition: width 0.4s ease-in-out;
}

.link-button:hover::before {
  width: 100%;
}

.link-button:hover {
  color: white;
}

/* Loading Styles */
.loading-spinner {
  border-top-color: transparent;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

/* Transition Effects */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Dropdown Transitions */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.mobile-dropdown-enter-active,
.mobile-dropdown-leave-active {
  transition: all 0.3s ease;
}

.mobile-dropdown-enter-from,
.mobile-dropdown-leave-to {
  opacity: 0;
  max-height: 0;
}

.mobile-dropdown-enter-to,
.mobile-dropdown-leave-from {
  opacity: 1;
  max-height: 500px;
}
</style>
<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import { RouterView, useRoute, useRouter } from 'vue-router'
import router from './router'
import slider1 from './assets/img/slider-1.png'
import slider2 from './assets/img/slider-2.png'
import slider3 from './assets/img/slider-3.png'
import slider4 from './assets/img/slider-4.png'

const slides = [slider1, slider2, slider3, slider4]
const route = useRoute()
const routerInstance = useRouter()

const currentIndex = ref(0)
const totalSlides = 4
const menuOpen = ref(false)
const isLoading = ref(false)
const isNavbarVisible = ref(true)
const lastScrollY = ref(0)
const mousePosition = ref({ x: 0, y: 0 })
const progress = ref(0)
const loadingText = ref('Loading')

// State untuk dropdown
const companyDropdownOpen = ref(false)
const servicesDropdownOpen = ref(false)

// Computed untuk active route
const activeRoute = computed(() => route.path)

// Computed untuk menentukan menu aktif
const isCompanyActive = computed(() => {
  return activeRoute.value.startsWith('/about-us') || 
         activeRoute.value.startsWith('/history') ||
         activeRoute.value.startsWith('/certificate') ||
         activeRoute.value.startsWith('/customer') ||
         activeRoute.value === '/company'
})

const isServicesActive = computed(() => {
  return activeRoute.value.startsWith('/services') ||
         activeRoute.value === '/precision-part' ||
         activeRoute.value === '/plastic-injection' ||
         activeRoute.value === '/mold-dies' ||
         activeRoute.value === '/turbine-part' ||
         activeRoute.value === '/medical-part' ||
         activeRoute.value === '/rubber'
})

// Loading animation texts
const loadingTexts = ['Loading', 'Preparing', 'Almost Ready', 'Welcome']
let loadingTextIndex = 0
let loadingInterval

// Mouse move effect
const handleMouseMove = (event) => {
    mousePosition.value = {
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100
    }
}

// Scroll handler untuk navbar
const handleScroll = () => {
  const currentScrollY = window.scrollY
  
  if (currentScrollY > lastScrollY.value && currentScrollY > 100) {
    // Scroll ke bawah - sembunyikan navbar
    isNavbarVisible.value = false
  } else {
    // Scroll ke atas - tampilkan navbar
    isNavbarVisible.value = true
  }
  
  lastScrollY.value = currentScrollY
}

// Enhanced loading simulation
const simulateLoading = () => {
  progress.value = 0
  loadingTextIndex = 0
  loadingText.value = loadingTexts[0]
  
  clearInterval(loadingInterval)
  
  loadingInterval = setInterval(() => {
    progress.value += Math.random() * 15
    if (progress.value >= 100) {
      progress.value = 100
      clearInterval(loadingInterval)
      
      // Cycle through loading texts
      const textInterval = setInterval(() => {
        loadingTextIndex++
        if (loadingTextIndex < loadingTexts.length) {
          loadingText.value = loadingTexts[loadingTextIndex]
        } else {
          clearInterval(textInterval)
          setTimeout(() => {
            isLoading.value = false
          }, 500)
        }
      }, 300)
    }
  }, 200)
}

// Router Guards dengan loading yang lebih smooth
router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    isLoading.value = true
    simulateLoading()
  }
  next()
})

router.afterEach(() => {
  // Loading akan dihandle oleh simulateLoading
})

// Watch route changes untuk additional effects
watch(() => route.path, (newPath, oldPath) => {
  if (newPath !== oldPath) {
    // Reset scroll position saat pindah route
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
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

// Toggle mobile dropdowns
const toggleCompanyDropdown = () => {
  companyDropdownOpen.value = !companyDropdownOpen.value
  if (companyDropdownOpen.value) servicesDropdownOpen.value = false
}

const toggleServiceDropdown = () => {
  servicesDropdownOpen.value = !servicesDropdownOpen.value
  if (servicesDropdownOpen.value) companyDropdownOpen.value = false
}

// Close mobile menu when clicking outside
const closeMobileMenu = () => {
  menuOpen.value = false
  companyDropdownOpen.value = false
  servicesDropdownOpen.value = false
}

// Close mobile menu when route changes
const handleRouteChange = () => {
  closeMobileMenu()
}

onMounted(() => {
  setInterval(nextSlide, 5000)
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('mousemove', handleMouseMove)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('mousemove', handleMouseMove)
  clearInterval(loadingInterval)
})
</script>

<template>
  <div class="flex flex-col w-full h-fit" @mousemove="handleMouseMove">
    <!-- Loading Screen -->
    <transition name="loading-fade">
      <div v-if="isLoading" class="loading-screen">
        <!-- Simple Background -->
        <div class="loading-background">
          <div class="background-shape shape-1"></div>
          <div class="background-shape shape-2"></div>
        </div>
        
        <!-- Loading Content -->
        <div class="loading-content">
          <!-- Logo -->
          <div class="logo-container">
            <img src="./assets/img/Logo_wmt.png" alt="WMT Logo" class="loading-logo" />
            <div class="logo-pulse"></div>
          </div>
          
          <!-- Loading Text -->
          <div class="loading-text-container">
            <h2 class="loading-title">{{ loadingText }}</h2>
            <p class="loading-subtitle">Wafiq Mitra Teknik</p>
          </div>
          
          <!-- Progress Bar -->
          <div class="progress-container">
            <div class="progress-bar">
              <div 
                class="progress-fill" 
                :style="{ width: progress + '%' }"
              ></div>
            </div>
            <div class="progress-text">{{ Math.round(progress) }}%</div>
          </div>
        </div>
      </div>
    </transition>

    <nav 
      class="fixed-nav"
      :class="isNavbarVisible ? 'top-5' : '-top-28'"
    >
      <div class="nav-content">
        <!-- Logo -->
        <div class="nav-logo">
          <img src="./assets/img/Logo_wmt.png" alt="WMT Logo" class="logo-image" />
          <div class="logo-text-group">
            <span class="logo-text">WAFIQ MITRA TEKNIK</span>
          </div>
        </div>
        
        <!-- Menu Desktop dengan Dropdown -->
        <div class="nav-links">
          <!-- Home -->
          <div class="nav-item">
            <router-link to="/" 
              class="nav-link flex items-center gap-2 transition-all duration-300 group"
              :class="activeRoute === '/' ? 'nav-link-active' : ''">
              <span class="material-symbols-outlined text-lg transition-colors duration-300 group-hover:text-white text-white" 
                    :class="activeRoute === '/' ? 'text-white' : ''">home_app_logo</span>
              <span class="transition-colors duration-300 group-hover:text-white text-white"
                    :class="activeRoute === '/' ? 'text-white' : ''">Home</span>
            </router-link>
            
            <!-- Active indicator -->
            <div v-if="activeRoute === '/'" class="nav-indicator"></div>
          </div>

          <!-- Company Dropdown -->
          <div class="nav-item relative" @mouseenter="openCompanyDropdown" @mouseleave="closeCompanyDropdown">
            <div
              class="nav-link flex items-center gap-2 cursor-pointer transition-all duration-300 group"
              :class="isCompanyActive || companyDropdownOpen ? 'nav-link-active' : ''">
              <span class="material-symbols-outlined text-lg transition-colors duration-300 group-hover:text-white text-white"
                    :class="isCompanyActive ? 'text-white' : ''">apartment</span>
              <span class="transition-colors duration-300 group-hover:text-white text-white"
                    :class="isCompanyActive ? 'text-white' : ''">Company</span>
              <span class="material-symbols-outlined text-sm transition-all duration-300 group-hover:text-white text-white"
                    :class="[companyDropdownOpen ? 'rotate-180' : '', isCompanyActive ? 'text-white' : '']">
                expand_more
              </span>
            </div>

            <!-- Active indicator -->
            <div v-if="isCompanyActive" class="nav-indicator"></div>

            <!-- Dropdown Menu -->
            <transition name="dropdown">
              <div v-if="companyDropdownOpen"
                class="dropdown-menu">
                <router-link to="/about-us"
                  class="dropdown-item flex items-center gap-3 transition-all duration-200 group"
                  :class="activeRoute === '/about-us' ? 'dropdown-item-active' : ''"
                  @click="closeCompanyDropdown">
                  <span class="material-symbols-outlined text-base transition-colors duration-300"
                        :class="activeRoute === '/about-us' ? 'text-blue-600' : 'group-hover:text-blue-600'">info</span>
                  <span class="transition-colors duration-300"
                        :class="activeRoute === '/about-us' ? 'text-blue-600 font-medium' : 'group-hover:text-blue-600'">About Us</span>
                </router-link>
                <router-link to="/history"
                  class="dropdown-item flex items-center gap-3 transition-all duration-200 group"
                  :class="activeRoute === '/history' ? 'dropdown-item-active' : ''"
                  @click="closeCompanyDropdown">
                  <span class="material-symbols-outlined text-base transition-colors duration-300"
                        :class="activeRoute === '/history' ? 'text-blue-600' : 'group-hover:text-blue-600'">history</span>
                  <span class="transition-colors duration-300"
                        :class="activeRoute === '/history' ? 'text-blue-600 font-medium' : 'group-hover:text-blue-600'">History</span>
                </router-link>
                <router-link to="/certificate"
                  class="dropdown-item flex items-center gap-3 transition-all duration-200 group"
                  :class="activeRoute === '/certificate' ? 'dropdown-item-active' : ''"
                  @click="closeCompanyDropdown">
                  <span class="material-symbols-outlined text-base transition-colors duration-300"
                        :class="activeRoute === '/certificate' ? 'text-blue-600' : 'group-hover:text-blue-600'">verified</span>
                  <span class="transition-colors duration-300"
                        :class="activeRoute === '/certificate' ? 'text-blue-600 font-medium' : 'group-hover:text-blue-600'">Certificates</span>
                </router-link>
                <router-link to="/customer"
                  class="dropdown-item flex items-center gap-3 transition-all duration-200 group"
                  :class="activeRoute === '/customer' ? 'dropdown-item-active' : ''"
                  @click="closeCompanyDropdown">
                  <span class="material-symbols-outlined text-base transition-colors duration-300"
                        :class="activeRoute === '/customer' ? 'text-blue-600' : 'group-hover:text-blue-600'">groups</span>
                  <span class="transition-colors duration-300"
                        :class="activeRoute === '/customer' ? 'text-blue-600 font-medium' : 'group-hover:text-blue-600'">Customer</span>
                </router-link>
              </div>
            </transition>
          </div>

          <!-- Services Dropdown -->
          <div class="nav-item relative" @mouseenter="openServiceDropdown" @mouseleave="closeServiceDropdown">
            <div
              class="nav-link flex items-center gap-2 cursor-pointer transition-all duration-300 group"
              :class="isServicesActive || servicesDropdownOpen ? 'nav-link-active' : ''">
              <span class="text-white material-symbols-outlined text-lg transition-colors duration-300 group-hover:text-white"
                    :class="isServicesActive ? 'text-white' : ''">apps</span>
              <span class="text-white transition-colors duration-300 group-hover:text-white"
                    :class="isServicesActive ? 'text-white' : ''">Services</span>
              <span class="material-symbols-outlined text-white text-sm transition-all duration-300 group-hover:text-white"
                    :class="[servicesDropdownOpen ? 'rotate-180' : '', isServicesActive ? 'text-white' : '']">
                expand_more
              </span>
            </div>

            <!-- Active indicator -->
            <div v-if="isServicesActive" class="nav-indicator"></div>

            <!-- Dropdown Menu -->
            <transition name="dropdown">
              <div v-if="servicesDropdownOpen"
                class="dropdown-menu services-dropdown">
                <router-link to="/services"
                  class="dropdown-item flex items-center gap-3 transition-all duration-200 group"
                  :class="activeRoute === '/services' ? 'dropdown-item-active' : ''"
                  @click="closeServiceDropdown">
                  <span class="material-symbols-outlined text-base transition-colors duration-300"
                        :class="activeRoute === '/services' ? 'text-blue-600' : 'group-hover:text-blue-600'">all_inclusive</span>
                  <span class="transition-colors duration-300"
                        :class="activeRoute === '/services' ? 'text-blue-600 font-medium' : 'group-hover:text-blue-600'">All Services</span>
                </router-link>
                <div class="dropdown-divider"></div>
                <router-link to="/precision-part"
                  class="dropdown-item flex items-center gap-3 transition-all duration-200 group"
                  :class="activeRoute === '/precision-part' ? 'dropdown-item-active' : ''"
                  @click="closeServiceDropdown">
                  <span class="material-symbols-outlined text-base transition-colors duration-300"
                        :class="activeRoute === '/precision-part' ? 'text-blue-600' : 'group-hover:text-blue-600'">precision_manufacturing</span>
                  <span class="transition-colors duration-300"
                        :class="activeRoute === '/precision-part' ? 'text-blue-600 font-medium' : 'group-hover:text-blue-600'">Precision Part</span>
                </router-link>
                <router-link to="/plastic-injection"
                  class="dropdown-item flex items-center gap-3 transition-all duration-200 group"
                  :class="activeRoute === '/plastic-injection' ? 'dropdown-item-active' : ''"
                  @click="closeServiceDropdown">
                  <span class="material-symbols-outlined text-base transition-colors duration-300"
                        :class="activeRoute === '/plastic-injection' ? 'text-blue-600' : 'group-hover:text-blue-600'">inventory_2</span>
                  <span class="transition-colors duration-300"
                        :class="activeRoute === '/plastic-injection' ? 'text-blue-600 font-medium' : 'group-hover:text-blue-600'">Plastic Injection</span>
                </router-link>
                <router-link to="/mold-dies"
                  class="dropdown-item flex items-center gap-3 transition-all duration-200 group"
                  :class="activeRoute === '/mold-dies' ? 'dropdown-item-active' : ''"
                  @click="closeServiceDropdown">
                  <span class="material-symbols-outlined text-base transition-colors duration-300"
                        :class="activeRoute === '/mold-dies' ? 'text-blue-600' : 'group-hover:text-blue-600'">construction</span>
                  <span class="transition-colors duration-300"
                        :class="activeRoute === '/mold-dies' ? 'text-blue-600 font-medium' : 'group-hover:text-blue-600'">Mold & Dies</span>
                </router-link>
                <router-link to="/turbine-part"
                  class="dropdown-item flex items-center gap-3 transition-all duration-200 group"
                  :class="activeRoute === '/turbine-part' ? 'dropdown-item-active' : ''"
                  @click="closeServiceDropdown">
                  <span class="material-symbols-outlined text-base transition-colors duration-300"
                        :class="activeRoute === '/turbine-part' ? 'text-blue-600' : 'group-hover:text-blue-600'">rocket_launch</span>
                  <span class="transition-colors duration-300"
                        :class="activeRoute === '/turbine-part' ? 'text-blue-600 font-medium' : 'group-hover:text-blue-600'">Turbine Part</span>
                </router-link>
                <router-link to="/medical-part"
                  class="dropdown-item flex items-center gap-3 transition-all duration-200 group"
                  :class="activeRoute === '/medical-part' ? 'dropdown-item-active' : ''"
                  @click="closeServiceDropdown">
                  <span class="material-symbols-outlined text-base transition-colors duration-300"
                        :class="activeRoute === '/medical-part' ? 'text-blue-600' : 'group-hover:text-blue-600'">medical_services</span>
                  <span class="transition-colors duration-300"
                        :class="activeRoute === '/medical-part' ? 'text-blue-600 font-medium' : 'group-hover:text-blue-600'">Medical Part</span>
                </router-link>
                <router-link to="/rubber"
                  class="dropdown-item flex items-center gap-3 transition-all duration-200 group"
                  :class="activeRoute === '/rubber' ? 'dropdown-item-active' : ''"
                  @click="closeServiceDropdown">
                  <span class="material-symbols-outlined text-base transition-colors duration-300"
                        :class="activeRoute === '/rubber' ? 'text-blue-600' : 'group-hover:text-blue-600'">water_drop</span>
                  <span class="transition-colors duration-300"
                        :class="activeRoute === '/rubber' ? 'text-blue-600 font-medium' : 'group-hover:text-blue-600'">Rubber</span>
                </router-link>
              </div>
            </transition>
          </div>

          <!-- News -->
          <div class="nav-item">
            <router-link to="/news" 
              class="nav-link flex items-center gap-2 transition-all duration-300 group"
              :class="activeRoute.startsWith('/news') ? 'nav-link-active' : ''">
              <span class="material-symbols-outlined text-lg transition-colors duration-300 group-hover:text-white text-white"
                    :class="activeRoute.startsWith('/news') ? 'text-white' : ''">breaking_news</span>
              <span class="transition-colors duration-300 group-hover:text-white text-white"
                    :class="activeRoute.startsWith('/news') ? 'text-white' : ''">News & Activity</span>
            </router-link>
            
            <!-- Active indicator -->
            <div v-if="activeRoute.startsWith('/news')" class="nav-indicator"></div>
          </div>
        </div>

        <!-- Hamburger Mobile -->
        <button @click="menuOpen = !menuOpen" class="mobile-menu-btn">
          <span class="material-symbols-outlined">
            {{ menuOpen ? 'close' : 'menu' }}
          </span>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <transition name="slide-fade">
      <div v-if="menuOpen" class="mobile-menu">
        <div class="mobile-menu-content">
          <!-- Home -->
          <router-link to="/" 
            class="mobile-nav-link flex items-center gap-4 transition-all duration-300 group"
            :class="activeRoute === '/' ? 'mobile-nav-link-active' : ''"
            @click="handleRouteChange">
            <span class="material-symbols-outlined text-xl transition-colors duration-300 group-hover:text-white"
                  :class="activeRoute === '/' ? 'text-white' : ''">home_app_logo</span>
            <span class="font-medium transition-colors duration-300 group-hover:text-white"
                  :class="activeRoute === '/' ? 'text-white' : ''">Home</span>
          </router-link>

          <!-- Company Mobile Dropdown -->
          <div class="mobile-dropdown-section">
            <div class="mobile-nav-link flex items-center justify-between gap-4 transition-all duration-300 group"
              @click="toggleCompanyDropdown"
              :class="isCompanyActive || companyDropdownOpen ? 'mobile-nav-link-active' : ''">
              <div class="flex items-center gap-4">
                <span class="material-symbols-outlined text-xl transition-colors duration-300 group-hover:text-white"
                      :class="isCompanyActive ? 'text-white' : ''">apartment</span>
                <span class="font-medium transition-colors duration-300 group-hover:text-white"
                      :class="isCompanyActive ? 'text-white' : ''">Company</span>
              </div>
              <span class="material-symbols-outlined text-sm transition-all duration-300 group-hover:text-white"
                    :class="[companyDropdownOpen ? 'rotate-180' : '', isCompanyActive ? 'text-white' : '']">
                expand_more
              </span>
            </div>
            <transition name="mobile-dropdown">
              <div v-if="companyDropdownOpen" class="mobile-dropdown-content">
                <router-link to="/about-us" 
                  class="mobile-dropdown-item flex items-center gap-4 transition-all duration-300 group"
                  :class="activeRoute === '/about-us' ? 'mobile-dropdown-item-active' : ''"
                  @click="handleRouteChange">
                  <span class="material-symbols-outlined text-lg transition-colors duration-300"
                        :class="activeRoute === '/about-us' ? 'text-blue-600' : 'group-hover:text-blue-600'">info</span>
                  <span class="transition-colors duration-300"
                        :class="activeRoute === '/about-us' ? 'text-blue-600 font-medium' : 'group-hover:text-blue-600'">About Us</span>
                </router-link>
                <router-link to="/history" 
                  class="mobile-dropdown-item flex items-center gap-4 transition-all duration-300 group"
                  :class="activeRoute === '/history' ? 'mobile-dropdown-item-active' : ''"
                  @click="handleRouteChange">
                  <span class="material-symbols-outlined text-lg transition-colors duration-300"
                        :class="activeRoute === '/history' ? 'text-blue-600' : 'group-hover:text-blue-600'">history</span>
                  <span class="transition-colors duration-300"
                        :class="activeRoute === '/history' ? 'text-blue-600 font-medium' : 'group-hover:text-blue-600'">History</span>
                </router-link>
                <router-link to="/certificate" 
                  class="mobile-dropdown-item flex items-center gap-4 transition-all duration-300 group"
                  :class="activeRoute === '/certificate' ? 'mobile-dropdown-item-active' : ''"
                  @click="handleRouteChange">
                  <span class="material-symbols-outlined text-lg transition-colors duration-300"
                        :class="activeRoute === '/certificate' ? 'text-blue-600' : 'group-hover:text-blue-600'">verified</span>
                  <span class="transition-colors duration-300"
                        :class="activeRoute === '/certificate' ? 'text-blue-600 font-medium' : 'group-hover:text-blue-600'">Certificates</span>
                </router-link>
                <router-link to="/customer" 
                  class="mobile-dropdown-item flex items-center gap-4 transition-all duration-300 group"
                  :class="activeRoute === '/customer' ? 'mobile-dropdown-item-active' : ''"
                  @click="handleRouteChange">
                  <span class="material-symbols-outlined text-lg transition-colors duration-300"
                        :class="activeRoute === '/customer' ? 'text-blue-600' : 'group-hover:text-blue-600'">groups</span>
                  <span class="transition-colors duration-300"
                        :class="activeRoute === '/customer' ? 'text-blue-600 font-medium' : 'group-hover:text-blue-600'">Customer</span>
                </router-link>
              </div>
            </transition>
          </div>

          <!-- Services Mobile Dropdown -->
          <div class="mobile-dropdown-section">
            <div class="mobile-nav-link flex items-center justify-between gap-4 transition-all duration-300 group"
              @click="toggleServiceDropdown"
              :class="isServicesActive || servicesDropdownOpen ? 'mobile-nav-link-active' : ''">
              <div class="flex items-center gap-4">
                <span class="material-symbols-outlined text-xl transition-colors duration-300 group-hover:text-white"
                      :class="isServicesActive ? 'text-white' : ''">apps</span>
                <span class="font-medium transition-colors duration-300 group-hover:text-white"
                      :class="isServicesActive ? 'text-white' : ''">Services</span>
              </div>
              <span class="material-symbols-outlined text-sm transition-all duration-300 group-hover:text-white"
                    :class="[servicesDropdownOpen ? 'rotate-180' : '', isServicesActive ? 'text-white' : '']">
                expand_more
              </span>
            </div>
            <transition name="mobile-dropdown">
              <div v-if="servicesDropdownOpen" class="mobile-dropdown-content">
                <router-link to="/services"
                  class="mobile-dropdown-item flex items-center gap-4 transition-all duration-300 group"
                  :class="activeRoute === '/services' ? 'mobile-dropdown-item-active' : ''"
                  @click="handleRouteChange">
                  <span class="material-symbols-outlined text-lg transition-colors duration-300"
                        :class="activeRoute === '/services' ? 'text-blue-600' : 'group-hover:text-blue-600'">all_inclusive</span>
                  <span class="transition-colors duration-300"
                        :class="activeRoute === '/services' ? 'text-blue-600 font-medium' : 'group-hover:text-blue-600'">All Services</span>
                </router-link>
                <router-link to="/precision-part"
                  class="mobile-dropdown-item flex items-center gap-4 transition-all duration-300 group"
                  :class="activeRoute === '/precision-part' ? 'mobile-dropdown-item-active' : ''"
                  @click="handleRouteChange">
                  <span class="material-symbols-outlined text-lg transition-colors duration-300"
                        :class="activeRoute === '/precision-part' ? 'text-blue-600' : 'group-hover:text-blue-600'">precision_manufacturing</span>
                  <span class="transition-colors duration-300"
                        :class="activeRoute === '/precision-part' ? 'text-blue-600 font-medium' : 'group-hover:text-blue-600'">Precision Part</span>
                </router-link>
                <router-link to="/plastic-injection"
                  class="mobile-dropdown-item flex items-center gap-4 transition-all duration-300 group"
                  :class="activeRoute === '/plastic-injection' ? 'mobile-dropdown-item-active' : ''"
                  @click="handleRouteChange">
                  <span class="material-symbols-outlined text-lg transition-colors duration-300"
                        :class="activeRoute === '/plastic-injection' ? 'text-blue-600' : 'group-hover:text-blue-600'">inventory_2</span>
                  <span class="transition-colors duration-300"
                        :class="activeRoute === '/plastic-injection' ? 'text-blue-600 font-medium' : 'group-hover:text-blue-600'">Plastic Injection</span>
                </router-link>
                <router-link to="/mold-dies"
                  class="mobile-dropdown-item flex items-center gap-4 transition-all duration-300 group"
                  :class="activeRoute === '/mold-dies' ? 'mobile-dropdown-item-active' : ''"
                  @click="handleRouteChange">
                  <span class="material-symbols-outlined text-lg transition-colors duration-300"
                        :class="activeRoute === '/mold-dies' ? 'text-blue-600' : 'group-hover:text-blue-600'">construction</span>
                  <span class="transition-colors duration-300"
                        :class="activeRoute === '/mold-dies' ? 'text-blue-600 font-medium' : 'group-hover:text-blue-600'">Mold & Dies</span>
                </router-link>
                <router-link to="/turbine-part"
                  class="mobile-dropdown-item flex items-center gap-4 transition-all duration-300 group"
                  :class="activeRoute === '/turbine-part' ? 'mobile-dropdown-item-active' : ''"
                  @click="handleRouteChange">
                  <span class="material-symbols-outlined text-lg transition-colors duration-300"
                        :class="activeRoute === '/turbine-part' ? 'text-blue-600' : 'group-hover:text-blue-600'">rocket_launch</span>
                  <span class="transition-colors duration-300"
                        :class="activeRoute === '/turbine-part' ? 'text-blue-600 font-medium' : 'group-hover:text-blue-600'">Turbine Part</span>
                </router-link>
                <router-link to="/medical-part"
                  class="mobile-dropdown-item flex items-center gap-4 transition-all duration-300 group"
                  :class="activeRoute === '/medical-part' ? 'mobile-dropdown-item-active' : ''"
                  @click="handleRouteChange">
                  <span class="material-symbols-outlined text-lg transition-colors duration-300"
                        :class="activeRoute === '/medical-part' ? 'text-blue-600' : 'group-hover:text-blue-600'">medical_services</span>
                  <span class="transition-colors duration-300"
                        :class="activeRoute === '/medical-part' ? 'text-blue-600 font-medium' : 'group-hover:text-blue-600'">Medical Part</span>
                </router-link>
                <router-link to="/rubber"
                  class="mobile-dropdown-item flex items-center gap-4 transition-all duration-300 group"
                  :class="activeRoute === '/rubber' ? 'mobile-dropdown-item-active' : ''"
                  @click="handleRouteChange">
                  <span class="material-symbols-outlined text-lg transition-colors duration-300"
                        :class="activeRoute === '/rubber' ? 'text-blue-600' : 'group-hover:text-blue-600'">water_drop</span>
                  <span class="transition-colors duration-300"
                        :class="activeRoute === '/rubber' ? 'text-blue-600 font-medium' : 'group-hover:text-blue-600'">Rubber</span>
                </router-link>
              </div>
            </transition>
          </div>

          <!-- News -->
          <router-link to="/news"
            class="mobile-nav-link flex items-center gap-4 transition-all duration-300 group"
            :class="activeRoute.startsWith('/news') ? 'mobile-nav-link-active' : ''"
            @click="handleRouteChange">
            <span class="material-symbols-outlined text-xl transition-colors duration-300 group-hover:text-white"
                  :class="activeRoute.startsWith('/news') ? 'text-white' : ''">breaking_news</span>
            <span class="font-medium transition-colors duration-300 group-hover:text-white"
                  :class="activeRoute.startsWith('/news') ? 'text-white' : ''">News & Activity</span>
          </router-link>
        </div>
      </div>
    </transition>

    <!-- Main Content -->
    <main>
      <RouterView v-slot="{ Component }">
        <transition name="page-transition" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>

    <!-- Footer -->
    <footer class="w-full bg-[var(--footer-dark)]">
      <div class="max-w-7xl mx-auto px-6 py-12">
        <!-- Footer Top -->
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          <!-- Company Info -->
          <div class="lg:col-span-2">
            <div class="flex items-center gap-4 mb-6">
              <img src="./assets/img/Logo_wmt.png" alt="Wafiq Mitra Teknik Logo" class="h-16">
              <h2 class="text-white text-2xl font-bold">WAFIQ MITRA TEKNIK</h2>
            </div>
            <p class="text-gray-300 text-sm leading-relaxed mb-6 max-w-lg">
              With over 20 years of expertise in CNC machining, molds & dies, and plastic manufacturing, 
              PT Wafiq Mitra Teknik has grown into a trusted partner for industries seeking precision, 
              innovation, and reliability.
            </p>
            <a href="#" class="inline-flex items-center gap-2 bg-[var(--green)] text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-all duration-300">
              <img src="./assets/icons/whatsapp.png" alt="WhatsApp" class="w-5 h-5">
              Direct Message Us
            </a>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="text-white text-lg font-bold mb-4 flex items-center gap-2">
              <span class="material-symbols-outlined text-xl">apartment</span>
              Company
            </h3>
            <ul class="space-y-3">
              <li><router-link to="/about-us" class="text-gray-300 hover:text-white transition-colors duration-200">About Us</router-link></li>
              <li><router-link to="/history" class="text-gray-300 hover:text-white transition-colors duration-200">History</router-link></li>
              <li><router-link to="/certificate" class="text-gray-300 hover:text-white transition-colors duration-200">Certificates</router-link></li>
              <li><router-link to="/customer" class="text-gray-300 hover:text-white transition-colors duration-200">Customer</router-link></li>
            </ul>
          </div>

          <!-- Services -->
          <div>
            <h3 class="text-white text-lg font-bold mb-4 flex items-center gap-2">
              <span class="material-symbols-outlined text-xl">apps</span>
              Services
            </h3>
            <ul class="space-y-3">
              <li><router-link to="/precision-part" class="text-gray-300 hover:text-white transition-colors duration-200">Precision Part</router-link></li>
              <li><router-link to="/plastic-injection" class="text-gray-300 hover:text-white transition-colors duration-200">Plastic Injection</router-link></li>
              <li><router-link to="/mold-dies" class="text-gray-300 hover:text-white transition-colors duration-200">Mold & Dies</router-link></li>
              <li><router-link to="/medical-part" class="text-gray-300 hover:text-white transition-colors duration-200">Medical Part</router-link></li>
              <li><router-link to="/turbine-part" class="text-gray-300 hover:text-white transition-colors duration-200">Turbine Part</router-link></li>
              <li><router-link to="/rubber" class="text-gray-300 hover:text-white transition-colors duration-200">Rubber</router-link></li>
            </ul>
          </div>
        </div>

        <!-- Footer Middle -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <!-- Certificates -->
          <div>
            <h3 class="text-white text-lg font-bold mb-4 flex items-center gap-2">
              <span class="material-symbols-outlined text-xl">license</span>
              Certificates
            </h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-300 hover:text-white transition-colors duration-200 text-sm">ISO 9001:2015 Quality Management</a></li>
              <li><a href="#" class="text-gray-300 hover:text-white transition-colors duration-200 text-sm">ISO 14001:2015 Environmental</a></li>
              <li><a href="#" class="text-gray-300 hover:text-white transition-colors duration-200 text-sm">ISO 45001:2015 K3</a></li>
            </ul>
          </div>

          <!-- Contact Information -->
          <div>
            <h3 class="text-white text-lg font-bold mb-4">Contact Information</h3>
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <span class="material-symbols-outlined text-white mt-1">distance</span>
                <div>
                  <p class="text-white font-medium mb-2">Location</p>
                  <a href="#" class="inline-flex items-center gap-2 bg-[var(--green)] text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600 transition-all duration-300">
                    <img src="./assets/icons/maps.svg" alt="Maps" class="w-4 h-4">
                    Our Location
                  </a>
                </div>
              </div>
              
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-white">call</span>
                <div>
                  <p class="text-white font-medium">Phone</p>
                  <p class="text-gray-300">+62 812 207 030</p>
                </div>
              </div>
              
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-white">fax</span>
                <div>
                  <p class="text-white font-medium">Fax</p>
                  <p class="text-gray-300">+62 22 7333079</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer Bottom -->
        <div class="border-t border-gray-700 pt-8">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <p class="text-gray-400 text-sm mb-4 md:mb-0">
              © 2023 Wafiq Mitra Teknik. All rights reserved.
            </p>
            <div class="flex space-x-6">
              <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
                <span class="material-symbols-outlined">public</span>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
                <span class="material-symbols-outlined">share</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Modern Background */
.modern-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -2;
}

.floating-shapes {
    position: absolute;
    width: 100%;
    height: 100%;
}

.shape {
    position: absolute;
    border-radius: 50%;
    filter: blur(40px);
    animation: orb-float 8s ease-in-out infinite;
    opacity: 0.3;
    transition: transform 0.1s linear;
}

.shape-1 {
    width: 400px;
    height: 400px;
    top: 10%;
    left: 5%;
    background: linear-gradient(45deg, #00d4ff, #0099ff);
    animation-delay: 0s;
}

.shape-2 {
    width: 300px;
    height: 300px;
    top: 60%;
    right: 10%;
    background: linear-gradient(45deg, #0099ff, #0044ff);
    animation-delay: 2s;
}

.shape-3 {
    width: 200px;
    height: 200px;
    bottom: 20%;
    left: 15%;
    background: linear-gradient(45deg, #0044ff, #9900ff);
    animation-delay: 4s;
}

.grid-pattern {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: 
        linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    background-size: 60px 60px;
    mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
}

@keyframes orb-float {
    0%, 100% {
        transform: translateY(0) rotate(0deg) scale(1);
    }
    33% {
        transform: translateY(-30px) rotate(120deg) scale(1.1);
    }
    66% {
        transform: translateY(15px) rotate(240deg) scale(0.9);
    }
}

/* Simplified Loading Screen Styles */
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  overflow: hidden;
}

.loading-background {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.background-shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.1;
}

.shape-1 {
  width: 300px;
  height: 300px;
  background: linear-gradient(45deg, #00d4ff, #0099ff);
  top: 20%;
  left: 10%;
  animation: float-simple 6s ease-in-out infinite;
}

.shape-2 {
  width: 400px;
  height: 400px;
  background: linear-gradient(45deg, #0099ff, #0044ff);
  bottom: 20%;
  right: 10%;
  animation: float-simple 8s ease-in-out infinite reverse;
}

@keyframes float-simple {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-20px) scale(1.05);
  }
}

.loading-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
}

.logo-container {
  position: relative;
  margin-bottom: 2rem;
  display: inline-block;
}

.loading-logo {
  width: 80px;
  height: 80px;
  filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.3));
  animation: logo-pulse 2s ease-in-out infinite;
}

.logo-pulse {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes logo-pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.3;
    transform: translate(-50%, -50%) scale(0.8);
  }
  50% {
    opacity: 0.6;
    transform: translate(-50%, -50%) scale(1.2);
  }
}

.loading-text-container {
  margin-bottom: 2rem;
}

.loading-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(45deg, #fff, #a0d2ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: text-shimmer 2s ease-in-out infinite alternate;
}

.loading-subtitle {
  font-size: 1.2rem;
  opacity: 0.8;
  font-weight: 300;
}

@keyframes text-shimmer {
  from {
    opacity: 0.8;
  }
  to {
    opacity: 1;
  }
}

.progress-container {
  width: 300px;
  margin: 0 auto;
}

.progress-bar {
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #00d4ff, #0099ff);
  border-radius: 3px;
  transition: width 0.3s ease;
  position: relative;
  overflow: hidden;
}

.progress-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

.progress-text {
  font-size: 0.9rem;
  opacity: 0.8;
  text-align: center;
}

/* Loading Transition */
.loading-fade-enter-active,
.loading-fade-leave-active {
  transition: all 0.8s ease;
}

.loading-fade-enter-from {
  opacity: 0;
  transform: scale(1.1);
}

.loading-fade-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

/* Enhanced Page Transition */
.page-transition-enter-active {
  transition: all 0.6s ease-out;
}

.page-transition-leave-active {
  transition: all 0.4s ease-in;
}

.page-transition-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.98);
}

.page-transition-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(1.02);
}

.page-transition-enter-to,
.page-transition-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}

/* Modern Navbar */
.fixed-nav {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50px;
    padding: 8px 24px;
    z-index: 1000;
    transition: all 0.3s ease;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    width: 90%;
    max-width: 1200px;
}

.fixed-nav:hover {
    border-color: rgba(255, 255, 255, 0.3);
}

.nav-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
}

.nav-logo {
    display: flex;
    align-items: center;
    gap: 12px;
}

.logo-image {
    height: 35px;
    width: auto;
    transition: all 0.3s ease;
}

.logo-image:hover {
    transform: scale(1.05);
}

.logo-text-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.logo-text {
    font-weight: bold;
    color: var(--blue);
    font-size: 1.1rem;
    line-height: 1;
}

.nav-links {
    display: flex;
    gap: 4px;
    align-items: center;
}

.nav-item {
    position: relative;
}

.nav-link {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    border-radius: 25px;
    color: var(--blue);
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 0.3s ease;
    text-decoration: none;
    border: 1px solid transparent;
}

.nav-link:hover {
    background: var(--dark-blue);
    border-color: var(--dark-blue);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(var(--blue-rgb), 0.2);
}

.nav-link-active {
    background: var(--dark-blue);
    color: white;
    border-color: var(--dark-blue);
    box-shadow: 0 4px 12px rgba(var(--blue-rgb), 0.2);
}

.nav-indicator {
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 4px;
    background: var(--blue);
    border-radius: 50%;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0%, 100% {
        opacity: 1;
        transform: translateX(-50%) scale(1);
    }
    50% {
        opacity: 0.7;
        transform: translateX(-50%) scale(1.2);
    }
}

/* Dropdown Styles */
.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 8px;
    width: 220px;
    background: white;
    border-radius: 16px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 8px;
    z-index: 1000;
}

.services-dropdown {
    width: 240px;
}

.dropdown-item {
    padding: 10px 12px;
    border-radius: 10px;
    color: #4b5563;
    font-size: 0.875rem;
    transition: all 0.2s ease;
}

.dropdown-item:hover {
    background: rgba(59, 130, 246, 0.08);
    padding-left: 16px;
    color: #2563eb;
}

.dropdown-item-active {
    background: rgba(59, 130, 246, 0.1);
    color: #2563eb;
    font-weight: 500;
}

.dropdown-divider {
    height: 1px;
    background: rgba(0, 0, 0, 0.1);
    margin: 4px 0;
}

/* Mobile Menu */
.mobile-menu-btn {
    display: none;
    background: none;
    border: none;
    color: var(--blue);
    font-size: 1.5rem;
    cursor: pointer;
    padding: 8px;
    border-radius: 8px;
    transition: all 0.3s ease;
}

.mobile-menu-btn:hover {
    background: rgba(37, 99, 235, 0.1);
}

.mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(20px);
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
}

.mobile-menu-content {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 90%;
    max-width: 400px;
}

.mobile-nav-link {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px 20px;
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(37, 99, 235, 0.1);
    border-radius: 16px;
    color: var(--blue);
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.3s ease;
    cursor: pointer;
}

.mobile-nav-link:hover,
.mobile-nav-link-active {
    background: var(--dark-blue);
    color: white;
    transform: translateX(8px);
}

.mobile-dropdown-section {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.mobile-dropdown-content {
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.mobile-dropdown-item {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 12px 16px;
    background: rgba(255, 255, 255, 0.6);
    border: 1px solid rgba(37, 99, 235, 0.05);
    border-radius: 12px;
    color: var(--blue);
    font-size: 0.9rem;
    transition: all 0.3s ease;
    cursor: pointer;
}

.mobile-dropdown-item:hover,
.mobile-dropdown-item-active {
    background: rgba(37, 99, 235, 0.1);
    color: #2563eb;
    transform: translateX(4px);
}

/* Transition Effects */
.dropdown-enter-active,
.dropdown-leave-active {
    transition: all 0.3s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
    opacity: 0;
    transform: translateY(-8px);
}

.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.3s ease-in;
}

.slide-fade-enter-from {
    opacity: 0;
    transform: translateY(-10px);
}

.slide-fade-leave-to {
    opacity: 0;
    transform: translateY(10px);
}

.mobile-dropdown-enter-active,
.mobile-dropdown-leave-active {
    transition: all 0.3s ease;
    max-height: 500px;
    overflow: hidden;
}

.mobile-dropdown-enter-from,
.mobile-dropdown-leave-to {
    opacity: 0;
    max-height: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
    .fixed-nav {
        top: 10px;
        padding: 6px 16px;
        width: 95%;
    }
    
    .nav-content {
        gap: 16px;
    }
    
    .nav-links {
        display: none;
    }
    
    .mobile-menu-btn {
        display: block;
    }

    .logo-text {
        font-size: 1rem;
    }

    .logo-image {
        height: 30px;
    }

    /* Loading screen mobile adjustments */
    .loading-title {
        font-size: 2rem;
    }

    .progress-container {
        width: 250px;
    }

    .loading-logo {
        width: 60px;
        height: 60px;
    }
}

/* Define CSS variables for colors */
:root {
  --blue: #2563eb;
  --blue-rgb: 37, 99, 235;
  --dark-blue: #1d4ed8;
  --white: #ffffff;
  --footer-dark: #1e293b;
  --green: #10b981;
}
</style>
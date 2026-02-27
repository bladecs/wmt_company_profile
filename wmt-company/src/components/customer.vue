<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'

const customers = ref([
    { id: 1, name: 'PT. MEITOKU', type: 'Manufacturing', location: 'Jakarta', icon: 'precision_manufacturing' },
    { id: 2, name: 'PT. MENARA TERUS MAKMUR', type: 'Construction', location: 'Bandung', icon: 'construction' },
    { id: 3, name: 'PT. KINGDUAN', type: 'Manufacturing', location: 'Surabaya', icon: 'factory' },
    { id: 4, name: 'PT. PAKOAKUINA', type: 'Industrial', location: 'Bekasi', icon: 'domain' },
    { id: 5, name: 'PT. INTI PINDAD MITRA SEJATI', type: 'Defense', location: 'Bandung', icon: 'security' },
    { id: 6, name: 'PT. BINA USAHA MANDIRI MIZUSAWA', type: 'Manufacturing', location: 'Cikarang', icon: 'engineering' },
    { id: 7, name: 'PT. KOMATSU INDONESIA TBK.', type: 'Heavy Equipment', location: 'Jakarta', icon: 'build' },
    { id: 8, name: 'PT. WIKA – NGK INSULATOR', type: 'Construction', location: 'Tangerang', icon: 'apartment' },
    { id: 9, name: 'PT. WIKA INTRADE', type: 'Trading', location: 'Jakarta', icon: 'store' },
    { id: 10, name: 'POLMAN BANDUNG – PMS', type: 'Education', location: 'Bandung', icon: 'school' },
    { id: 11, name: 'SAGA MULTI INDUSTRI', type: 'Manufacturing', location: 'Karawang', icon: 'precision_manufacturing' },
    { id: 12, name: 'PT. ASIAN ISUZU CASTING CENTER', type: 'Automotive', location: 'Cibitung', icon: 'directions_car' },
    { id: 13, name: 'PT. AGRONESIA INKABA', type: 'Agriculture', location: 'Bogor', icon: 'agriculture' },
    { id: 14, name: 'PT. PASCAL COMPONENTS INTRANUSA', type: 'Electronics', location: 'Tangerang', icon: 'memory' },
    { id: 15, name: 'PT. MAKMUR ABADI VALVE', type: 'Industrial', location: 'Surabaya', icon: 'settings' },
    { id: 16, name: 'PT. GOODRICH PINDAD AERONAUTICAL SYSTEM INDONESIA', type: 'Aerospace', location: 'Bandung', icon: 'flight' },
    { id: 17, name: 'PT. NUSA TOYOTETSU ENGINEERING', type: 'Automotive', location: 'Karawang', icon: 'electric_car' },
    { id: 18, name: 'PT. INKOASKU', type: 'Manufacturing', location: 'Cikarang', icon: 'manufacturing' },
    { id: 19, name: 'PT. TJ FORGE INDONESIA', type: 'Forging', location: 'Bekasi', icon: 'hardware' },
    { id: 20, name: 'PT. FLOWSERVE', type: 'Industrial', location: 'Jakarta', icon: 'plumbing' },
    { id: 21, name: 'PT. FREYSSINET TOTAL TECHNOLOGY', type: 'Construction', location: 'Tangerang', icon: 'engineering' }
])

const categories = ref([
    { 
        id: 'all', 
        name: 'All Partners', 
        icon: 'apps', 
        description: 'Explore our complete portfolio of trusted partners across all industries' 
    },
    { 
        id: 'Manufacturing', 
        name: 'Manufacturing', 
        icon: 'factory', 
        description: 'Leading manufacturing companies driving industrial growth and innovation' 
    },
    { 
        id: 'Construction', 
        name: 'Construction', 
        icon: 'construction', 
        description: 'Building the future with innovative construction solutions' 
    },
    { 
        id: 'Industrial', 
        name: 'Industrial', 
        icon: 'domain', 
        description: 'Industrial equipment manufacturers and service providers' 
    },
    { 
        id: 'Automotive', 
        name: 'Automotive', 
        icon: 'directions_car', 
        description: 'Automotive industry leaders shaping transportation future' 
    },
    { 
        id: 'Specialized', 
        name: 'Specialized', 
        icon: 'engineering', 
        description: 'Specialized sectors including defense and advanced technology' 
    }
])

const activeCategory = ref('all')
const mainSwiper = ref(null)
const currentCategoryIndex = ref(0)

const getCustomersByCategory = (categoryId) => {
    if (categoryId === 'all') {
        return customers.value
    }
    
    if (categoryId === 'Specialized') {
        const specializedTypes = ['Defense', 'Heavy Equipment', 'Aerospace', 'Forging', 'Electronics', 'Trading', 'Education', 'Agriculture']
        return customers.value.filter(customer => specializedTypes.includes(customer.type))
    }
    
    return customers.value.filter(customer => customer.type === categoryId)
}

const getTypeColor = (type) => {
    const colorMap = {
        'Manufacturing': 'bg-blue-900/30 text-blue-300 border-blue-700/50',
        'Construction': 'bg-orange-900/30 text-orange-300 border-orange-700/50',
        'Industrial': 'bg-gray-700/30 text-gray-300 border-gray-600/50',
        'Defense': 'bg-red-900/30 text-red-300 border-red-700/50',
        'Heavy Equipment': 'bg-green-900/30 text-green-300 border-green-700/50',
        'Trading': 'bg-purple-900/30 text-purple-300 border-purple-700/50',
        'Education': 'bg-teal-900/30 text-teal-300 border-teal-700/50',
        'Automotive': 'bg-yellow-900/30 text-yellow-300 border-yellow-700/50',
        'Agriculture': 'bg-lime-900/30 text-lime-300 border-lime-700/50',
        'Electronics': 'bg-violet-900/30 text-violet-300 border-violet-700/50',
        'Aerospace': 'bg-sky-900/30 text-sky-300 border-sky-700/50',
        'Forging': 'bg-rose-900/30 text-rose-300 border-rose-700/50'
    }
    return colorMap[type] || 'bg-gray-700/30 text-gray-300 border-gray-600/50'
}

const getIconColor = (type) => {
    const colorMap = {
        'Manufacturing': 'text-blue-400',
        'Construction': 'text-orange-400',
        'Industrial': 'text-gray-400',
        'Defense': 'text-red-400',
        'Heavy Equipment': 'text-green-400',
        'Trading': 'text-purple-400',
        'Education': 'text-teal-400',
        'Automotive': 'text-yellow-400',
        'Agriculture': 'text-lime-400',
        'Electronics': 'text-violet-400',
        'Aerospace': 'text-sky-400',
        'Forging': 'text-rose-400'
    }
    return colorMap[type] || 'text-gray-400'
}

const setActiveCategory = (categoryId) => {
    activeCategory.value = categoryId
    const categoryIndex = categories.value.findIndex(cat => cat.id === categoryId)
    if (mainSwiper.value && categoryIndex !== -1) {
        mainSwiper.value.slideTo(categoryIndex)
        currentCategoryIndex.value = categoryIndex
    }
}

const getCurrentCategoryName = () => {
    return categories.value[currentCategoryIndex.value]?.name || ''
}

const getCurrentCategoryIndex = () => {
    return currentCategoryIndex.value
}

const onMainSwiper = (swiper) => {
    mainSwiper.value = swiper
}

const modules = [Navigation, FreeMode]
</script>

<template>
    <div class="customers-portfolio">
        <!-- Background Grid -->
        <div class="background-grid"></div>
        
        <!-- Background Elements -->
        <div class="background-elements">
            <div class="floating-shape shape-1"></div>
            <div class="floating-shape shape-2"></div>
            <div class="floating-shape shape-3"></div>
        </div>

        <!-- Header Section -->
        <div class="header-section">
            <div class="header-content">
                <h3 class="badge">
                    <span class="material-symbols-outlined badge-icon">
                        verified
                    </span>
                    Our Valued Customers
                </h3>
                <h1 class="title-main">Trusted Partners</h1>
                <h1 class="title-sub">Across Indonesia</h1>
                <p class="description">We are proud to serve leading companies across various industries throughout Indonesia.</p>
                
                <!-- Stats -->
                <div class="stats-container">
                    <div class="stat-item">
                        <div class="stat-number">{{ customers.length }}+</div>
                        <div class="stat-label">Companies</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">{{ categories.length }}</div>
                        <div class="stat-label">Industries</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">15+</div>
                        <div class="stat-label">Cities</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Main Content -->
        <div class="main-content">
            <!-- Category Navigation -->
            <div class="category-navigation">
                <div class="navigation-container">
                    <button 
                        v-for="category in categories" 
                        :key="category.id"
                        :class="['category-tab', { 'active': activeCategory === category.id }]"
                        @click="setActiveCategory(category.id)"
                    >
                        <div class="tab-content">
                            <span class="material-symbols-outlined category-icon">
                                {{ category.icon }}
                            </span>
                            <div class="tab-text">
                                <span class="category-name">{{ category.name }}</span>
                                <span class="customer-count">{{ getCustomersByCategory(category.id).length }}</span>
                            </div>
                        </div>
                        <div class="active-indicator"></div>
                    </button>
                </div>
            </div>

            <!-- Swiper Container -->
            <div class="swiper-section">
                <Swiper
                    :modules="modules"
                    :slidesPerView="1"
                    :spaceBetween="0"
                    :speed="600"
                    :allowTouchMove="false"
                    :navigation="{
                        nextEl: '.main-next-btn',
                        prevEl: '.main-prev-btn',
                    }"
                    @swiper="onMainSwiper"
                    @slideChange="(swiper) => {
                        currentCategoryIndex = swiper.activeIndex
                        if (categories[swiper.activeIndex]) {
                            activeCategory = categories[swiper.activeIndex].id
                        }
                    }"
                    class="main-swiper"
                >
                    <SwiperSlide v-for="category in categories" :key="category.id">
                        <div class="category-section">
                            <!-- Category Header -->
                            <div class="category-header">
                                <div class="category-title">
                                    <div class="title-icon-wrapper">
                                        <span class="material-symbols-outlined">
                                            {{ category.icon }}
                                        </span>
                                    </div>
                                    <div class="title-content">
                                        <h2>{{ category.name }}</h2>
                                        <p class="category-description">{{ category.description }}</p>
                                    </div>
                                </div>
                                <div class="navigation-hint">
                                    <span class="material-symbols-outlined">
                                        swipe
                                    </span>
                                    <span>Drag to explore companies</span>
                                </div>
                            </div>

                            <!-- Customers Swiper -->
                            <div class="customers-container">
                                <Swiper
                                    :modules="[FreeMode]"
                                    :slidesPerView="Math.min(getCustomersByCategory(category.id).length, 3)"
                                    :spaceBetween="25"
                                    :speed="400"
                                    :freeMode="{
                                        enabled: true,
                                        momentum: true,
                                        momentumBounce: false,
                                        sticky: false
                                    }"
                                    :breakpoints="{
                                        320: {
                                            slidesPerView: 1.05,
                                            spaceBetween: 12,
                                            freeMode: {
                                                enabled: true,
                                                momentum: true
                                            }
                                        },
                                        768: {
                                            slidesPerView: Math.min(getCustomersByCategory(category.id).length, 1.6),
                                            spaceBetween: 20
                                        },
                                        1024: {
                                            slidesPerView: Math.min(getCustomersByCategory(category.id).length, 3),
                                            spaceBetween: 25
                                        }
                                    }"
                                    class="customer-swiper"
                                >
                                    <SwiperSlide 
                                        v-for="customer in getCustomersByCategory(category.id)" 
                                        :key="customer.id"
                                        class="customer-slide"
                                    >
                                        <div class="customer-card">
                                            <div class="card-header">
                                                <div class="icon-container" :class="getTypeColor(customer.type)">
                                                    <span class="material-symbols-outlined" :class="getIconColor(customer.type)">
                                                        {{ customer.icon }}
                                                    </span>
                                                </div>
                                                <div class="company-badges">
                                                    <div class="type-badge" :class="getTypeColor(customer.type)">
                                                        {{ customer.type }}
                                                    </div>
                                                    <div class="location-badge">
                                                        <span class="material-symbols-outlined">
                                                            location_on
                                                        </span>
                                                        {{ customer.location }}
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="card-content">
                                                <h3 class="customer-name">
                                                    {{ customer.name }}
                                                </h3>
                                                <p class="company-description">
                                                    Leading {{ customer.type.toLowerCase() }} company based in {{ customer.location }}
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <!-- Main Swiper Navigation -->
                <div class="main-navigation">
                    <button class="main-nav-btn main-prev-btn">
                        <span class="material-symbols-outlined">
                            arrow_back_ios
                        </span>
                        Previous Industry
                    </button>
                    <div class="navigation-info">
                        <span class="current-category">{{ getCurrentCategoryName() }}</span>
                        <span class="navigation-counter">
                            {{ getCurrentCategoryIndex() + 1 }} / {{ categories.length }}
                        </span>
                    </div>
                    <button class="main-nav-btn main-next-btn">
                        Next Industry
                        <span class="material-symbols-outlined">
                            arrow_forward_ios
                        </span>
                    </button>
                </div>
            </div>
        </div>

        <!-- Footer Note -->
        <div class="footer-note">
            <span class="material-symbols-outlined footer-icon">
                groups
            </span>
            <p>And many more trusted partners across various industries</p>
        </div>
    </div>
</template>

<style scoped>
.customers-portfolio {
    padding: 8rem 2rem;
    position: relative;
    overflow: hidden;
    background: linear-gradient(135deg, #002B3B 0%, #00131A 100%);
    min-height: 100vh;
}

/* Background Grid */
.background-grid {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
        linear-gradient(rgba(2, 179, 247, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(2, 179, 247, 0.1) 1px, transparent 1px);
    background-size: 50px 50px;
    opacity: 0.3;
    pointer-events: none;
    z-index: 0;
}

/* Background Elements */
.background-elements {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
}

.floating-shape {
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(circle, #02B3F7 0%, transparent 70%);
    opacity: 0.03;
    animation: float 8s ease-in-out infinite;
}

.shape-1 {
    width: 400px;
    height: 400px;
    top: 10%;
    left: 5%;
    animation-delay: 0s;
}

.shape-2 {
    width: 300px;
    height: 300px;
    top: 60%;
    right: 10%;
    animation-delay: 2s;
}

.shape-3 {
    width: 200px;
    height: 200px;
    bottom: 20%;
    left: 20%;
    animation-delay: 4s;
}

@keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
}

/* Header Styles */
.header-section {
    text-align: center;
    margin-bottom: 3rem;
    position: relative;
    z-index: 1;
}

.header-content {
    max-width: 800px;
    margin: 0 auto;
}

.badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background: rgba(2, 179, 247, 0.15);
    color: #02B3F7;
    font-weight: bold;
    border-radius: 50px;
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
    border: 1px solid rgba(2, 179, 247, 0.3);
    backdrop-filter: blur(10px);
}

.badge-icon {
    font-size: 1.1rem;
}

.title-main {
    font-size: 2.5rem;
    font-weight: 800;
    color: white;
    margin-bottom: 0.5rem;
}

.title-sub {
    font-size: 2.5rem;
    font-weight: 800;
    color: #02B3F7;
    margin-bottom: 1.5rem;
}

.description {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.8);
    max-width: 500px;
    margin: 0 auto;
    line-height: 1.6;
    margin-bottom: 3rem;
}

/* Stats */
.stats-container {
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin-top: 2rem;
}

.stat-item {
    text-align: center;
}

.stat-number {
    font-size: 2.5rem;
    font-weight: 800;
    background: linear-gradient(135deg, #02B3F7 0%, #00D4FF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
}

.stat-label {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
    margin-top: 0.5rem;
    font-weight: 500;
}

/* Main Content */
.main-content {
    position: relative;
    z-index: 1;
}

/* Category Navigation */
.category-navigation {
    margin-bottom: 3rem;
}

.navigation-container {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
}

.category-tab {
    position: relative;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 1.25rem 1.5rem;
    color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
    transition: all 0.3s ease;
    min-width: 160px;
    backdrop-filter: blur(10px);
}

.category-tab:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(2, 179, 247, 0.3);
    color: white;
    transform: translateY(-2px);
}

.category-tab.active {
    background: rgba(2, 179, 247, 0.15);
    border-color: #02B3F7;
    color: white;
    box-shadow: 0 8px 25px rgba(2, 179, 247, 0.2);
}

.tab-content {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.category-icon {
    font-size: 1.5rem;
    color: #02B3F7;
}

.tab-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
}

.category-name {
    font-size: 1rem;
    font-weight: 600;
}

.customer-count {
    background: rgba(255, 255, 255, 0.1);
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
}

.active-indicator {
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 3px;
    background: linear-gradient(90deg, #02B3F7, #00D4FF);
    border-radius: 2px;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.category-tab.active .active-indicator {
    opacity: 1;
}

/* Swiper Section */
.swiper-section {
    max-width: 1400px;
    margin: 0 auto;
}

.main-swiper {
    border-radius: 24px;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.category-section {
    padding: 3rem;
    min-height: 600px;
}

/* Category Header */
.category-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 3rem;
    gap: 2rem;
}

.category-title {
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
    flex: 1;
}

.title-icon-wrapper {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #02B3F7 0%, #00D4FF 100%);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.title-icon-wrapper .material-symbols-outlined {
    font-size: 2.5rem;
    color: white;
}

.title-content h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: white;
    margin-bottom: 0.5rem;
}

.category-description {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    margin: 0;
}

.navigation-hint {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.25rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    font-weight: 500;
}

/* Customers Container */
.customers-container {
    position: relative;
}

.customer-swiper {
    padding: 1rem 0;
    margin: 0;
    cursor: grab;
}

.customer-swiper:active {
    cursor: grabbing;
}

.customer-slide {
    height: auto;
    padding: 0.5rem;
}

.customer-card {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 1.25rem;
    padding: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.customer-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #02B3F7, #00D4FF);
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

.customer-card:hover::before {
    transform: scaleX(1);
}

.customer-card:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(2, 179, 247, 0.4);
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(2, 179, 247, 0.15);
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1.5rem;
}

.icon-container {
    width: 70px;
    height: 70px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid;
    backdrop-filter: blur(5px);
}

.icon-container .material-symbols-outlined {
    font-size: 2.2rem;
    font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
}

.company-badges {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-end;
}

.type-badge {
    padding: 0.5rem 1rem;
    border-radius: 50px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border: 1px solid;
}

.location-badge {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.4rem 0.8rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50px;
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.8);
}

.card-content {
    flex: 1;
    margin-bottom: 1.5rem;
}

.customer-name {
    font-size: 1.3rem;
    font-weight: 600;
    color: white;
    line-height: 1.3;
    margin-bottom: 0.75rem;
}

.company-description {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    line-height: 1.5;
    margin: 0;
}

.card-footer {
    display: flex;
    gap: 0.75rem;
}

.action-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 12px;
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    flex: 1;
}

.view-btn {
    background: rgba(255, 255, 255, 0.1);
    color: white;
}

.view-btn:hover {
    background: rgba(255, 255, 255, 0.2);
}

/* Main Navigation */
.main-navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
    padding: 0 1rem;
    gap: 1rem;
}

.main-nav-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 1.5rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 600;
    flex-shrink: 0;
    backdrop-filter: blur(10px);
}

.main-nav-btn:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(2, 179, 247, 0.3);
    transform: translateY(-2px);
}

.navigation-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
    flex: 1;
}

.current-category {
    font-size: 1.1rem;
    font-weight: 600;
    color: white;
}

.navigation-counter {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
}

/* Footer Note */
.footer-note {
    text-align: center;
    padding: 4rem 0 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    margin-top: 4rem;
    position: relative;
    z-index: 1;
}

.footer-icon {
    font-size: 3rem;
    color: #02B3F7;
    opacity: 0.7;
    font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 48;
}

.footer-note p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1rem;
    font-style: italic;
    margin: 0;
}

/* Material Symbols Outlined Style */
.material-symbols-outlined {
    font-family: 'Material Symbols Outlined';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
}

/* Responsive Design */
@media (max-width: 1024px) {
    .category-header {
        flex-direction: column;
        gap: 1.5rem;
    }
    
    .category-title {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
    }
    
    .title-icon-wrapper {
        align-self: center;
    }
}

@media (max-width: 768px) {
    .customers-portfolio {
        padding: 2rem 1rem;
    }

    .category-navigation {
        margin-bottom: 2rem;
    }

    .navigation-container {
        flex-wrap: nowrap;
        justify-content: flex-start;
        overflow-x: auto;
        padding-bottom: 0.5rem;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: thin;
    }

    .category-tab {
        min-width: 140px;
        padding: 0.85rem 0.9rem;
    }

    .tab-content {
        gap: 0.5rem;
    }

    .category-name {
        font-size: 0.9rem;
    }

    .title-main,
    .title-sub {
        font-size: 2rem;
    }

    .stats-container {
        gap: 2rem;
    }

    .category-section {
        padding: 2rem;
    }

    .title-content h2 {
        font-size: 2rem;
    }

    .navigation-hint {
        align-self: center;
    }

    .main-navigation {
        flex-direction: column;
        gap: 1rem;
    }

    .main-nav-btn {
        width: 100%;
        justify-content: center;
    }

    .navigation-info {
        order: -1;
    }

    .customer-card {
        padding: 1.5rem;
    }

    .icon-container {
        width: 50px;
        height: 50px;
    }

    .icon-container .material-symbols-outlined {
        font-size: 1.75rem;
    }
}

@media (max-width: 480px) {
    .header-section {
        margin-bottom: 2rem;
    }

    .title-main,
    .title-sub {
        font-size: 1.8rem;
    }

    .description {
        font-size: 1rem;
    }

    .navigation-container {
        flex-direction: row;
        align-items: stretch;
    }

    .category-tab {
        width: auto;
        max-width: none;
        min-width: 140px;
    }

    .customer-count {
        display: none;
    }

    .category-icon {
        font-size: 1.2rem;
    }

    .customer-swiper {
        padding: 0.5rem 0;
    }

    .customer-slide {
        padding: 0.25rem;
    }

    .company-badges {
        gap: 0.4rem;
    }

    .category-section {
        padding: 1.5rem;
    }

    .customer-card {
        padding: 1.25rem;
    }

    .customer-name {
        font-size: 1.05rem;
    }

    .card-header {
        flex-direction: column;
        gap: 0.75rem;
        align-items: flex-start;
    }

    .company-badges {
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
    }

    .footer-icon {
        font-size: 2.5rem;
    }
}
</style>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref({})
const activeTab = ref('about')
const mousePosition = ref({ x: 0, y: 0 })
const scrollProgress = ref(0)
const currentSection = ref('hero')

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
}

const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            isVisible.value[entry.target.className] = true
            entry.target.classList.add('intersecting')
            
            // Update current section for navigation
            const sectionId = entry.target.id || entry.target.closest('section')?.id
            if (sectionId) {
                currentSection.value = sectionId
            }
        }
    })
}

// Mouse move effect
const handleMouseMove = (event) => {
    mousePosition.value = {
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100
    }
}

// Scroll progress
const handleScroll = () => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const progress = (scrollTop / docHeight) * 100
    scrollProgress.value = progress
}

// Smooth scroll to section
const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }
}

// Scroll to next section
const scrollToNextSection = () => {
    const sections = ['hero', 'about', 'vision', 'products', 'culture', 'technology']
    const currentIndex = sections.indexOf(currentSection.value)
    const nextIndex = (currentIndex + 1) % sections.length
    scrollToSection(sections[nextIndex])
}

onMounted(() => {
    const observer = new IntersectionObserver(observerCallback, observerOptions)

    document.querySelectorAll('.animate-section').forEach(section => {
        observer.observe(section)
    })

    document.querySelectorAll('.animate-card').forEach(card => {
        observer.observe(card)
    })

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)
    
    // Initialize current section
    const heroSection = document.getElementById('hero')
    if (heroSection) {
        currentSection.value = 'hero'
    }
})

onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
    <div class="flex flex-col items-center justify-center w-full h-fit overflow-hidden" @mousemove="handleMouseMove">
        <!-- Main Gradient Background -->
        <div class="main-gradient-bg"></div>
        
        <!-- Animated Background Elements -->
        <div class="animated-background">
            <div class="grid-pattern"></div>
            <div class="particles-container">
                <div v-for="i in 25" :key="i" class="particle" :style="{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 6}s`,
                    animationDuration: `${4 + Math.random() * 5}s`
                }"></div>
            </div>
        </div>

        <!-- Scroll Progress Bar -->
        <div class="scroll-progress">
            <div class="progress-bar" :style="{ width: `${scrollProgress}%` }"></div>
        </div>

        <!-- Fixed Scroll Button -->
        <button 
            @click="scrollToNextSection"
            class="fixed-scroll-btn"
            :class="{ 'rotate-180': currentSection === 'technology' }"
        >
            <span class="material-symbols-outlined">expand_more</span>
        </button>

        <!-- Hero Section -->
        <section id="hero"
            class="relative w-full min-h-screen flex items-center justify-center p-8 lg:p-20 animate-section overflow-hidden">
            <div class="hero-glow"></div>
            
            <div
                class="content flex flex-col items-center justify-center w-full max-w-7xl h-fit gap-12 lg:gap-16 relative z-10">
                <!-- Animated Title -->
                <div class="text-center animate-section">
                    <div class="title-wrapper">
                        <div class="pre-title">WELCOME TO</div>
                        <h1 class="font-black text-white text-5xl lg:text-7xl xl:text-8xl leading-tight mb-4 tracking-tight">
                            WAFIQ MITRA
                            <span
                                class="font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
                                TEKNIK
                            </span>
                        </h1>
                        <div class="title-underline">
                            <div class="line"></div>
                            <div class="dot"></div>
                            <div class="line"></div>
                        </div>
                    </div>
                    <p class="text-xl lg:text-2xl text-gray-300 font-light mt-8 max-w-3xl mx-auto leading-relaxed">
                        Precision Manufacturing & Engineering Excellence Since 2003
                    </p>
                </div>

                <!-- Quick Stats -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl animate-card">
                    <div class="stat-item group" v-for="stat in [
                        { icon: 'workspace_premium', number: '3', label: 'ISO Certifications' },
                        { icon: 'factory', number: '2,400 m²', label: 'Factory Area' },
                        { icon: 'precision_manufacturing', number: '1,500 m²', label: 'Production Facility' },
                        { icon: 'location_on', number: 'Bandung', label: 'West Java, Indonesia' }
                    ]" :key="stat.icon">
                        <div class="stat-icon group-hover:scale-110">
                            <span class="material-symbols-outlined">{{ stat.icon }}</span>
                        </div>
                        <div class="stat-content">
                            <div class="number">{{ stat.number }}</div>
                            <div class="label">{{ stat.label }}</div>
                        </div>
                        <div class="stat-hover-effect"></div>
                    </div>
                </div>

                <!-- CTA Buttons -->
                <div class="animate-card mt-8 flex gap-4 flex-wrap justify-center">
                    <button @click="scrollToSection('about')" class="cta-button primary group">
                        <span>Explore Our Excellence</span>
                        <span class="material-symbols-outlined group-hover:translate-x-1">arrow_forward</span>
                    </button>
                    <button @click="scrollToSection('products')" class="cta-button secondary group">
                        <span>View Products</span>
                        <span class="material-symbols-outlined group-hover:scale-110">inventory_2</span>
                    </button>
                </div>
            </div>

            <!-- Scroll Indicator -->
            <div class="scroll-indicator">
                <div class="scroll-line"></div>
                <span class="scroll-text">Scroll to Explore</span>
            </div>
        </section>

        <!-- About Us Section -->
        <section id="about"
            class="relative w-full min-h-screen flex items-center justify-center p-8 lg:p-20 animate-section overflow-hidden">
            <div class="section-glow"></div>
            
            <div class="content flex flex-col items-center justify-center w-full max-w-7xl h-fit gap-16 lg:gap-20">
                <!-- Section Header -->
                <div class="text-center animate-card max-w-4xl">
                    <div class="section-label">ABOUT US</div>
                    <h2 class="text-4xl lg:text-6xl font-bold text-white mt-4 mb-6">
                        Certified <span class="text-gradient">Manufacturing</span> Excellence
                    </h2>
                    <p class="text-xl text-gray-300 max-w-2xl mx-auto">
                        Two decades of excellence in precision engineering and manufacturing solutions
                    </p>
                </div>

                <!-- Content Grid -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full items-center">
                    <!-- Text Content -->
                    <div class="animate-card">
                        <div
                            class="modern-card rounded-3xl p-8 lg:p-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl hover:from-white/15 hover:to-white/10 transition-all duration-500 group">
                            <div class="card-header flex items-center gap-4 mb-6">
                                <div class="icon-wrapper bg-cyan-500/20 rounded-2xl p-4 shadow-lg group-hover:bg-cyan-500/30">
                                    <span class="material-symbols-outlined text-cyan-400 text-2xl">verified</span>
                                </div>
                                <div>
                                    <h3 class="text-2xl lg:text-3xl font-bold text-white">Quality Certified</h3>
                                    <p class="text-cyan-400 text-sm mt-1">ISO 9001:2015 • ISO 14001:2015 • ISO 45001:2015</p>
                                </div>
                            </div>
                            <div class="space-y-6">
                                <p class="text-lg lg:text-xl text-gray-300 leading-relaxed">
                                    PT Wafiq Mitra Teknik (WMT) is a certified manufacturing company specializing in
                                    high-precision molds, dies, and plastic products. With international certifications,
                                    we ensure every process meets global standards of excellence.
                                </p>
                                <div class="grid grid-cols-2 gap-4 mt-6">
                                    <div class="feature-tag">
                                        <span class="material-symbols-outlined text-cyan-400 text-sm">check</span>
                                        Precision Engineering
                                    </div>
                                    <div class="feature-tag">
                                        <span class="material-symbols-outlined text-cyan-400 text-sm">check</span>
                                        Quality Assurance
                                    </div>
                                    <div class="feature-tag">
                                        <span class="material-symbols-outlined text-cyan-400 text-sm">check</span>
                                        Advanced Technology
                                    </div>
                                    <div class="feature-tag">
                                        <span class="material-symbols-outlined text-cyan-400 text-sm">check</span>
                                        Professional Team
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Image Content -->
                    <div class="animate-card">
                        <div class="modern-image-container rounded-3xl overflow-hidden shadow-2xl group hover:shadow-cyan-500/20">
                            <div class="image-wrapper relative">
                                <img src="../assets/img/slider-1.png" alt="WMT Factory"
                                    class="w-full h-96 lg:h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-700">
                                <div class="image-overlay">
                                    <div class="overlay-content">
                                        <div class="overlay-icon">
                                            <span class="material-symbols-outlined text-white text-4xl">manufacturing</span>
                                        </div>
                                        <h4 class="text-white text-2xl font-bold mt-4">Advanced Production Facility</h4>
                                        <p class="text-gray-300 mt-2">2,400 m² manufacturing space with state-of-the-art equipment</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Vision & Mission Section -->
        <section id="vision"
            class="relative w-full min-h-screen flex items-center justify-center p-8 lg:p-20 animate-section">
            <div class="section-glow vision-glow"></div>
            
            <div class="content flex flex-col items-center justify-center w-full max-w-7xl h-fit gap-16 lg:gap-20">
                <div class="text-center animate-card max-w-4xl">
                    <div class="section-label">VISION & MISSION</div>
                    <h2 class="text-4xl lg:text-6xl font-bold text-white mt-4 mb-6">
                        Leading with <span class="text-gradient">Purpose</span>
                    </h2>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full">
                    <!-- Vision Card -->
                    <div class="animate-card">
                        <div
                            class="vision-card rounded-3xl p-8 lg:p-10 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:from-blue-500/15 hover:to-purple-500/15 transition-all duration-500 h-full group">
                            <div class="card-header flex items-center gap-4 mb-6">
                                <div class="icon-wrapper bg-blue-500/20 rounded-2xl p-4 group-hover:bg-blue-500/30">
                                    <span
                                        class="material-symbols-outlined text-blue-400 text-2xl">visibility</span>
                                </div>
                                <h3 class="text-2xl lg:text-3xl font-bold text-white">Our Vision</h3>
                            </div>
                            <p class="text-lg lg:text-xl text-gray-300 leading-relaxed">
                                To become a leading technology-based manufacturing company with rapid growth and 
                                strong market presence in both domestic and international markets, recognized for 
                                innovation, quality, and reliability.
                            </p>
                        </div>
                    </div>

                    <!-- Mission Card -->
                    <div class="animate-card">
                        <div
                            class="mission-card rounded-3xl p-8 lg:p-10 bg-gradient-to-br from-green-500/10 to-cyan-500/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:from-green-500/15 hover:to-cyan-500/15 transition-all duration-500 h-full group">
                            <div class="card-header flex items-center gap-4 mb-6">
                                <div class="icon-wrapper bg-green-500/20 rounded-2xl p-4 group-hover:bg-green-500/30">
                                    <span class="material-symbols-outlined text-green-400 text-2xl">flag</span>
                                </div>
                                <h3 class="text-2xl lg:text-3xl font-bold text-white">Our Mission</h3>
                            </div>
                            <div class="space-y-4">
                                <div v-for="(mission, index) in [
                                    { icon: 'schedule', text: 'Delivering high-quality products with on-time delivery' },
                                    { icon: 'precision_manufacturing', text: 'Mastering advanced technology and manufacturing knowledge' },
                                    { icon: 'school', text: 'Continuously developing our human resources' },
                                    { icon: 'trending_up', text: 'Staying competitive in the global manufacturing industry' }
                                ]" :key="index" 
                                class="mission-item flex items-start gap-4 group cursor-pointer p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
                                    <span class="material-symbols-outlined text-green-400 mt-1 group-hover:scale-110 transition-transform">{{ mission.icon }}</span>
                                    <p class="text-lg text-gray-300 group-hover:text-white transition-colors flex-1">{{ mission.text }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Products Section -->
        <section id="products"
            class="relative w-full min-h-screen flex items-center justify-center p-8 lg:p-20 animate-section">
            <div class="section-glow products-glow"></div>
            
            <div class="content flex flex-col items-center justify-center w-full max-w-7xl h-fit gap-16 lg:gap-20">
                <div class="text-center animate-card max-w-4xl">
                    <div class="section-label">OUR PRODUCTS</div>
                    <h2 class="text-4xl lg:text-6xl font-bold text-white mt-4 mb-6">
                        Precision <span class="text-gradient">Engineering</span> Solutions
                    </h2>
                    <p class="text-xl text-gray-300 max-w-2xl mx-auto">
                        High-quality manufacturing solutions for automotive, industrial, and consumer applications
                    </p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full items-center">
                    <!-- Product Content -->
                    <div class="animate-card">
                        <div
                            class="modern-card rounded-3xl p-8 lg:p-10 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:from-cyan-500/15 hover:to-blue-500/15 transition-all duration-500 group">
                            <div class="card-header flex items-center gap-4 mb-6">
                                <div class="icon-wrapper bg-cyan-500/20 rounded-2xl p-4 shadow-lg group-hover:bg-cyan-500/30">
                                    <span
                                        class="material-symbols-outlined text-cyan-400 text-2xl">inventory_2</span>
                                </div>
                                <h3 class="text-2xl lg:text-3xl font-bold text-white">Our Products</h3>
                            </div>
                            <div class="space-y-6">
                                <p class="text-lg lg:text-xl text-gray-300 leading-relaxed">
                                    We specialize in high-precision manufacturing of molds, dies, and plastic components
                                    for various industries including automotive, consumer goods, and industrial equipment.
                                </p>
                                <div class="product-highlights">
                                    <h4 class="text-white text-lg font-semibold mb-4">Core Competencies:</h4>
                                    <div class="grid grid-cols-1 gap-3">
                                        <div class="highlight-item flex items-center gap-3">
                                            <div class="highlight-dot bg-cyan-400"></div>
                                            <span class="text-gray-300">Precision Molds & Dies</span>
                                        </div>
                                        <div class="highlight-item flex items-center gap-3">
                                            <div class="highlight-dot bg-blue-400"></div>
                                            <span class="text-gray-300">Plastic Injection Components</span>
                                        </div>
                                        <div class="highlight-item flex items-center gap-3">
                                            <div class="highlight-dot bg-purple-400"></div>
                                            <span class="text-gray-300">CNC Machined Parts</span>
                                        </div>
                                        <div class="highlight-item flex items-center gap-3">
                                            <div class="highlight-dot bg-green-400"></div>
                                            <span class="text-gray-300">Custom Engineering Solutions</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Product Gallery -->
                    <div class="animate-card">
                        <div class="product-gallery grid grid-cols-2 gap-6">
                            <div v-for="(img, index) in [
                                '../assets/img/slider-3.png',
                                '../assets/img/slider-4.png', 
                                '../assets/img/precision-part.png',
                                '../assets/img/image.png'
                            ]" :key="index" 
                            :class="['gallery-item rounded-2xl overflow-hidden shadow-lg group cursor-pointer relative', 
                                    index % 2 === 1 ? 'transform translate-y-6' : 'transform -translate-y-6']">
                                <img :src="img" :alt="`Product ${index + 1}`"
                                    class="w-full h-48 lg:h-56 object-cover transform group-hover:scale-110 transition-transform duration-500">
                                <div class="gallery-overlay">
                                    <div class="overlay-content text-center">
                                        <span class="material-symbols-outlined text-white text-2xl mb-2">zoom_in</span>
                                        <p class="text-white text-sm font-medium">View Details</p>
                                    </div>
                                </div>
                                <div class="gallery-badge">
                                    Product {{ index + 1 }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Company Culture Section -->
        <section id="culture"
            class="relative w-full min-h-screen flex items-center justify-center p-8 lg:p-20 animate-section">
            <div class="section-glow culture-glow"></div>
            
            <div class="content flex flex-col items-center justify-center w-full max-w-7xl h-fit gap-16 lg:gap-20">
                <div class="text-center animate-card max-w-4xl">
                    <div class="section-label">COMPANY CULTURE</div>
                    <h2 class="text-4xl lg:text-6xl font-bold text-white mt-4 mb-6">
                        Investing in <span class="text-gradient">People</span>
                    </h2>
                    <p class="text-xl text-gray-300 max-w-2xl mx-auto">
                        Our greatest asset is our team - professional, skilled, and committed to excellence
                    </p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full items-center">
                    <!-- Image Content -->
                    <div class="animate-card">
                        <div class="modern-image-container rounded-3xl overflow-hidden shadow-2xl group hover:shadow-pink-500/20">
                            <div class="image-wrapper relative">
                                <img src="../assets/img/image.png" alt="Team Culture"
                                    class="w-full h-96 lg:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700">
                                <div class="image-overlay">
                                    <div class="overlay-content">
                                        <div class="overlay-icon">
                                            <span class="material-symbols-outlined text-white text-4xl">diversity_3</span>
                                        </div>
                                        <h4 class="text-white text-2xl font-bold mt-4">Professional Team</h4>
                                        <p class="text-gray-300 mt-2">Skilled engineers and technicians</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Text Content -->
                    <div class="animate-card">
                        <div class="modern-card rounded-3xl p-8 lg:p-10 bg-gradient-to-br from-pink-500/10 to-rose-500/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:from-pink-500/15 hover:to-rose-500/15 transition-all duration-500 group">
                            <div class="card-header flex items-center gap-4 mb-6">
                                <div class="icon-wrapper bg-pink-500/20 rounded-2xl p-4 group-hover:bg-pink-500/30">
                                    <span class="material-symbols-outlined text-pink-400 text-2xl">groups</span>
                                </div>
                                <h3 class="text-2xl lg:text-3xl font-bold text-white">Our Culture</h3>
                            </div>
                            <div class="space-y-6">
                                <p class="text-lg lg:text-xl text-gray-300 leading-relaxed">
                                    As part of our mission to enhance human resource development, we invest heavily in our
                                    people. Our engineers, technicians, and specialists are continuously trained to sharpen
                                    both technical and management skills.
                                </p>
                                <div class="culture-stats grid grid-cols-2 gap-4">
                                    <div class="culture-stat text-center">
                                        <div class="stat-number text-2xl font-bold text-white">50+</div>
                                        <div class="stat-label text-gray-400 text-sm">Skilled Employees</div>
                                    </div>
                                    <div class="culture-stat text-center">
                                        <div class="stat-number text-2xl font-bold text-white">20+</div>
                                        <div class="stat-label text-gray-400 text-sm">Years Experience</div>
                                    </div>
                                    <div class="culture-stat text-center">
                                        <div class="stat-number text-2xl font-bold text-white">100%</div>
                                        <div class="stat-label text-gray-400 text-sm">Quality Focus</div>
                                    </div>
                                    <div class="culture-stat text-center">
                                        <div class="stat-number text-2xl font-bold text-white">24/7</div>
                                        <div class="stat-label text-gray-400 text-sm">Support</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Technology Section -->
        <section id="technology"
            class="relative w-full min-h-screen flex items-center justify-center p-8 lg:p-20 animate-section">
            <div class="section-glow technology-glow"></div>
            
            <div class="content flex flex-col items-center justify-center w-full max-w-7xl h-fit gap-16 lg:gap-20">
                <div class="text-center animate-card max-w-4xl">
                    <div class="section-label">TECHNOLOGY</div>
                    <h2 class="text-4xl lg:text-6xl font-bold text-white mt-4 mb-6">
                        Advanced <span class="text-gradient">Technology</span>
                    </h2>
                    <p class="text-xl text-gray-300 max-w-2xl mx-auto">
                        State-of-the-art equipment and cutting-edge manufacturing technology
                    </p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full items-center">
                    <!-- Text Content -->
                    <div class="animate-card">
                        <div
                            class="modern-card rounded-3xl p-8 lg:p-10 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:from-blue-500/15 hover:to-indigo-500/15 transition-all duration-500 group">
                            <div class="card-header flex items-center gap-4 mb-6">
                                <div class="icon-wrapper bg-blue-500/20 rounded-2xl p-4 shadow-lg group-hover:bg-blue-500/30">
                                    <span class="material-symbols-outlined text-blue-400 text-2xl">smart_toy</span>
                                </div>
                                <h3 class="text-2xl lg:text-3xl font-bold text-white">Our Technology</h3>
                            </div>
                            <div class="space-y-6">
                                <p class="text-lg lg:text-xl text-gray-300 leading-relaxed">
                                    Aligned with our mission to master advanced technology and develop manufacturing
                                    knowledge, our facilities are equipped with state-of-the-art machines and tools.
                                </p>
                                <p class="text-lg lg:text-xl text-gray-300 leading-relaxed">
                                    By continuously upgrading our production equipment and adopting modern CAD/CAM
                                    systems, we ensure precision, efficiency, and innovation in every project.
                                </p>
                                <div class="tech-features-list">
                                    <div class="tech-feature flex items-center gap-3 py-2">
                                        <span class="material-symbols-outlined text-blue-400 text-sm">check_circle</span>
                                        <span class="text-gray-300">3-axis & 5-axis CNC milling machines</span>
                                    </div>
                                    <div class="tech-feature flex items-center gap-3 py-2">
                                        <span class="material-symbols-outlined text-blue-400 text-sm">check_circle</span>
                                        <span class="text-gray-300">CNC turning centers</span>
                                    </div>
                                    <div class="tech-feature flex items-center gap-3 py-2">
                                        <span class="material-symbols-outlined text-blue-400 text-sm">check_circle</span>
                                        <span class="text-gray-300">CMM & 3D scanning technology</span>
                                    </div>
                                    <div class="tech-feature flex items-center gap-3 py-2">
                                        <span class="material-symbols-outlined text-blue-400 text-sm">check_circle</span>
                                        <span class="text-gray-300">Modern CAD/CAM systems</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Technology Features -->
                    <div class="animate-card">
                        <div class="tech-features-grid grid grid-cols-2 gap-6">
                            <div v-for="feature in [
                                { icon: 'precision_manufacturing', title: 'CNC Machining', desc: '3-axis & 5-axis precision', color: 'cyan' },
                                { icon: 'scanner', title: '3D Scanning', desc: 'High-resolution metrology', color: 'blue' },
                                { icon: 'design_services', title: 'CAD/CAM', desc: 'Advanced design systems', color: 'purple' },
                                { icon: 'build', title: 'CMM', desc: 'Quality measurement', color: 'green' }
                            ]" :key="feature.icon"
                            class="tech-feature-item rounded-2xl p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 shadow-lg text-center group hover:from-white/15 hover:to-white/10 transition-all duration-300 cursor-pointer hover:transform hover:-translate-y-2">
                                <div class="feature-icon-wrapper mb-4">
                                    <div :class="`feature-icon bg-${feature.color}-500/20 rounded-xl p-4 inline-block group-hover:bg-${feature.color}-500/30 group-hover:scale-110 transition-all duration-300`">
                                        <span :class="`material-symbols-outlined text-${feature.color}-400 text-2xl`">{{ feature.icon }}</span>
                                    </div>
                                </div>
                                <h4 class="text-lg font-bold text-white mb-2">{{ feature.title }}</h4>
                                <p class="text-sm text-gray-300">{{ feature.desc }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
/* Main Gradient Background */
.main-gradient-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        135deg,
        #0f172a 0%,
        #1e293b 25%,
        #334155 50%,
        #475569 75%,
        #64748b 100%
    );
    z-index: -2;
}

/* Animated Background */
.animated-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
}

.floating-orbs {
    position: absolute;
    width: 100%;
    height: 100%;
}

.orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(40px);
    animation: orb-float 8s ease-in-out infinite;
    opacity: 0.3;
    transition: transform 0.1s linear;
}

.orb-1 {
    width: 400px;
    height: 400px;
    top: 10%;
    left: 5%;
    background: linear-gradient(45deg, #00d4ff, #0099ff);
    animation-delay: 0s;
}

.orb-2 {
    width: 300px;
    height: 300px;
    top: 60%;
    right: 10%;
    background: linear-gradient(45deg, #0099ff, #0044ff);
    animation-delay: 2s;
}

.orb-3 {
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

.particles-container {
    position: absolute;
    width: 100%;
    height: 100%;
}

.particle {
    position: absolute;
    width: 3px;
    height: 3px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    animation: particle-float 8s infinite ease-in-out;
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

@keyframes particle-float {
    0%, 100% {
        transform: translateY(0) translateX(0);
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    90% {
        opacity: 0.5;
    }
    100% {
        transform: translateY(-150px) translateX(30px);
    }
}

/* Section Glow Effects */
.hero-glow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
        radial-gradient(circle at 20% 80%, rgba(0, 212, 255, 0.15) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%);
    z-index: -1;
}

.section-glow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
        radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
        radial-gradient(circle at 90% 80%, rgba(255, 255, 255, 0.03) 0%, transparent 50%);
    z-index: -1;
}

.vision-glow {
    background: 
        radial-gradient(circle at 30% 70%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 70% 30%, rgba(139, 92, 246, 0.08) 0%, transparent 50%);
}

.products-glow {
    background: 
        radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 50%);
}

.culture-glow {
    background: 
        radial-gradient(circle at 25% 25%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 75% 75%, rgba(244, 114, 182, 0.08) 0%, transparent 50%);
}

.technology-glow {
    background: 
        radial-gradient(circle at 40% 60%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 60% 40%, rgba(100, 116, 139, 0.08) 0%, transparent 50%);
}

/* Scroll Progress */
.scroll-progress {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: rgba(255, 255, 255, 0.1);
    z-index: 1000;
}

.progress-bar {
    height: 100%;
    background: linear-gradient(90deg, #00d4ff, #0099ff, #0044ff);
    transition: width 0.1s ease;
    box-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
}

/* Fixed Navigation */
.fixed-nav {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50px;
    padding: 12px 24px;
    z-index: 1000;
    transition: all 0.3s ease;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.fixed-nav:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
}

.nav-content {
    display: flex;
    align-items: center;
    gap: 32px;
}

.nav-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.logo-text {
    font-weight: bold;
    color: white;
    font-size: 1.3rem;
    line-height: 1;
}

.logo-subtitle {
    font-size: 0.7rem;
    color: rgba(255, 255, 255, 0.7);
    margin-top: 2px;
}

.nav-links {
    display: flex;
    gap: 8px;
}

.nav-link {
    display: flex;
    align-items: center;
    gap: 8px;
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    font-weight: 500;
    padding: 8px 16px;
    border-radius: 25px;
    transition: all 0.3s ease;
    cursor: pointer;
    text-decoration: none;
}

.nav-link:hover,
.nav-link.active {
    color: white;
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
}

.nav-icon {
    display: flex;
    align-items: center;
}

.nav-text {
    white-space: nowrap;
}

/* Fixed Scroll Button */
.fixed-scroll-btn {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #00d4ff, #0099ff);
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    cursor: pointer;
    z-index: 1000;
    transition: all 0.3s ease;
    box-shadow: 0 8px 25px rgba(0, 212, 255, 0.3);
}

.fixed-scroll-btn:hover {
    transform: scale(1.1);
    box-shadow: 0 12px 35px rgba(0, 212, 255, 0.4);
}

/* Modern Animations */
.animate-section {
    opacity: 0;
    transform: translateY(80px);
    transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.animate-section.intersecting {
    opacity: 1;
    transform: translateY(0);
}

.animate-card {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.animate-card.intersecting {
    opacity: 1;
    transform: translateY(0);
}

/* Title Styles */
.pre-title {
    color: #00d4ff;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-size: 0.875rem;
    margin-bottom: 16px;
    display: block;
}

.title-wrapper {
    position: relative;
    display: inline-block;
}

.title-underline {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-top: 16px;
}

.title-underline .line {
    width: 80px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #00d4ff, transparent);
}

.title-underline .dot {
    width: 8px;
    height: 8px;
    background: #00d4ff;
    border-radius: 50%;
    animation: pulse 2s infinite;
}

.animate-gradient {
    background-size: 200% 200%;
    animation: gradient-shift 3s ease infinite;
}

.text-gradient {
    background: linear-gradient(135deg, #00d4ff, #0099ff, #0044ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

@keyframes gradient-shift {
    0%, 100% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
}

@keyframes pulse {
    0%, 100% {
        opacity: 1;
        transform: scale(1);
    }
    50% {
        opacity: 0.7;
        transform: scale(1.2);
    }
}

/* Scroll Indicator */
.scroll-indicator {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    color: rgba(255, 255, 255, 0.7);
}

.scroll-line {
    width: 2px;
    height: 40px;
    background: linear-gradient(to bottom, #00d4ff, transparent);
    animation: scroll-line 2s infinite;
}

.scroll-text {
    font-size: 0.875rem;
    letter-spacing: 2px;
}

@keyframes scroll-line {
    0%, 100% {
        transform: translateY(0);
        opacity: 1;
    }
    50% {
        transform: translateY(10px);
        opacity: 0.5;
    }
}

/* Section Label */
.section-label {
    display: inline-block;
    color: #00d4ff;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-size: 0.875rem;
    margin-bottom: 8px;
}

/* CTA Buttons */
.cta-button {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 16px 32px;
    border: none;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
}

.cta-button.primary {
    background: linear-gradient(135deg, #00d4ff, #0099ff);
    color: white;
    box-shadow: 0 8px 25px rgba(0, 212, 255, 0.3);
}

.cta-button.primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(0, 212, 255, 0.4);
    gap: 16px;
}

.cta-button.secondary {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
}

.cta-button.secondary:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-3px);
    border-color: rgba(255, 255, 255, 0.3);
}

/* Stat Items */
.stat-item {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 24px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.stat-item:hover {
    transform: translateY(-8px);
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.stat-hover-effect {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.6s ease;
}

.stat-item:hover .stat-hover-effect {
    left: 100%;
}

.stat-icon {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    color: #00d4ff;
    transition: all 0.3s ease;
}

.stat-content .number {
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
}

.stat-content .label {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 500;
}

/* Modern Cards */
.modern-card {
    position: relative;
    overflow: hidden;
    transition: all 0.5s ease;
}

.modern-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.6s ease;
}

.modern-card:hover::before {
    left: 100%;
}

/* Feature Tags */
.feature-tag {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Product Highlights */
.highlight-item {
    padding: 8px 0;
}

.highlight-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex-shrink: 0;
}

/* Culture Stats */
.culture-stat {
    padding: 16px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Image Container */
.modern-image-container {
    position: relative;
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
}

.modern-image-container:hover {
    border-color: rgba(255, 255, 255, 0.4);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.image-wrapper {
    position: relative;
    overflow: hidden;
    border-radius: 24px;
}

.image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent 40%, rgba(0, 0, 0, 0.8));
    display: flex;
    align-items: flex-end;
    padding: 30px;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.image-wrapper:hover .image-overlay {
    opacity: 1;
}

.overlay-content {
    transform: translateY(20px);
    transition: transform 0.3s ease;
}

.image-wrapper:hover .overlay-content {
    transform: translateY(0);
}

.overlay-icon {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    backdrop-filter: blur(10px);
}

/* Product Gallery */
.product-gallery {
    perspective: 1000px;
}

.gallery-item {
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
}

.gallery-item::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, rgba(0, 212, 255, 0.3), rgba(147, 51, 234, 0.3));
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
}

.gallery-item:hover::before {
    opacity: 1;
}

.gallery-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.7);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 2;
}

.gallery-item:hover .gallery-overlay {
    opacity: 1;
}

.gallery-badge {
    position: absolute;
    top: 12px;
    right: 12px;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 4px 8px;
    border-radius: 6px;
    font-size: 0.75rem;
    font-weight: 500;
    z-index: 3;
}

/* Tech Features */
.tech-features-grid {
    perspective: 1000px;
}

.tech-feature-item {
    transition: all 0.3s ease;
    cursor: pointer;
}

.tech-feature-item:hover {
    transform: translateY(-8px) rotateX(5deg);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

/* Mission Items */
.mission-item {
    transition: all 0.3s ease;
}

.mission-item:hover {
    transform: translateX(8px);
}

/* Card Header */
.card-header {
    border-bottom: 2px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 1rem;
}

.icon-wrapper {
    transition: all 0.3s ease;
}

.modern-card:hover .icon-wrapper {
    transform: scale(1.1);
}

/* Responsive Design */
@media (max-width: 768px) {
    .fixed-nav {
        top: 10px;
        padding: 8px 16px;
        width: 90%;
    }
    
    .nav-content {
        gap: 16px;
        justify-content: space-between;
    }
    
    .nav-links {
        gap: 4px;
    }
    
    .nav-link {
        padding: 6px 8px;
        font-size: 0.8rem;
    }

    .nav-text {
        display: none;
    }

    .title-underline .line {
        width: 40px;
    }

    .stat-item {
        flex-direction: column;
        text-align: center;
        gap: 12px;
        padding: 20px;
    }

    .product-gallery {
        grid-template-columns: 1fr;
        gap: 1rem;
    }

    .gallery-item {
        margin-top: 0 !important;
        transform: none !important;
    }

    .tech-features-grid {
        grid-template-columns: 1fr;
    }
    
    .fixed-scroll-btn {
        width: 50px;
        height: 50px;
        bottom: 20px;
        right: 20px;
    }

    .cta-button {
        padding: 12px 24px;
        font-size: 1rem;
    }
}

/* Additional Interactive Elements */
.intersecting .modern-card {
    animation: cardGlow 2s ease-in-out;
}

@keyframes cardGlow {
    0% {
        box-shadow: 0 0 0 0 rgba(0, 212, 255, 0.4);
    }
    70% {
        box-shadow: 0 0 0 10px rgba(0, 212, 255, 0);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(0, 212, 255, 0);
    }
}
</style>
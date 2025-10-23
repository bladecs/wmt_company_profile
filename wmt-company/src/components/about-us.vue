<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref({})
const activeTab = ref('about')

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
        }
    })
}

onMounted(() => {
    const observer = new IntersectionObserver(observerCallback, observerOptions)

    document.querySelectorAll('.animate-section').forEach(section => {
        observer.observe(section)
    })

    document.querySelectorAll('.animate-card').forEach(card => {
        observer.observe(card)
    })
})
</script>

<template>
    <div class="flex flex-col items-center justify-center w-full h-fit overflow-hidden">
        <!-- Modern Background -->
        <div class="modern-background">
            <div class="floating-shapes">
                <div class="shape shape-1"></div>
                <div class="shape shape-2"></div>
                <div class="shape shape-3"></div>
            </div>
            <div class="grid-lines"></div>
        </div>

        <!-- Hero Section -->
        <section
            class="relative w-full min-h-screen flex items-center justify-center p-8 lg:p-20 bg-gradient-to-br from-white to-blue-50">
            <div
                class="content flex flex-col items-center justify-center w-full max-w-7xl h-fit gap-12 lg:gap-16 relative z-10">
                <!-- Animated Title -->
                <div class="text-center animate-section">
                    <div class="title-wrapper">
                        <h1 class="font-black text-[var(--dark-blue)] text-5xl lg:text-7xl leading-tight mb-4">
                            WAFIQ MITRA
                            <span
                                class="font-black text-[var(--blue)] bg-gradient-to-r from-[var(--blue)] to-blue-600 bg-clip-text text-transparent">
                                TEKNIK
                            </span>
                        </h1>
                        <div class="title-underline">
                            <div class="line"></div>
                            <div class="dot"></div>
                            <div class="line"></div>
                        </div>
                    </div>
                    <p class="text-xl lg:text-2xl text-[var(--dark-blue)] font-light mt-8 max-w-3xl mx-auto">
                        Precision Manufacturing & Engineering Excellence
                    </p>
                </div>

                <!-- Quick Stats -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl animate-card">
                    <div class="stat-item">
                        <div class="stat-icon">
                            <span class="material-symbols-outlined">workspace_premium</span>
                        </div>
                        <div class="stat-content">
                            <div class="number">3</div>
                            <div class="label">ISO Certifications</div>
                        </div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-icon">
                            <span class="material-symbols-outlined">factory</span>
                        </div>
                        <div class="stat-content">
                            <div class="number">2,400 m²</div>
                            <div class="label">Factory Area</div>
                        </div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-icon">
                            <span class="material-symbols-outlined">precision_manufacturing</span>
                        </div>
                        <div class="stat-content">
                            <div class="number">1,500 m²</div>
                            <div class="label">Production Facility</div>
                        </div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-icon">
                            <span class="material-symbols-outlined">location_on</span>
                        </div>
                        <div class="stat-content">
                            <div class="number">Bandung</div>
                            <div class="label">West Java, Indonesia</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- About Us Section -->
        <section
            class="relative w-full min-h-screen flex items-center justify-center p-8 lg:p-20 bg-white animate-section">
            <div class="content flex flex-col items-center justify-center w-full max-w-7xl h-fit gap-16 lg:gap-20">
                <!-- Section Header -->
                <div class="text-center animate-card max-w-4xl">
                    <div class="section-label">ABOUT US</div>
                    <h2 class="text-4xl lg:text-6xl font-bold text-[var(--dark-blue)] mt-4 mb-6">
                        Certified <span class="text-[var(--blue)]">Manufacturing</span> Excellence
                    </h2>
                </div>

                <!-- Content Grid -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full items-center">
                    <!-- Text Content -->
                    <div class="animate-card">
                        <div
                            class="modern-card rounded-3xl p-8 lg:p-10 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 shadow-2xl">
                            <div class="card-header flex items-center gap-4 mb-6">
                                <div class="icon-wrapper bg-white rounded-2xl p-4 shadow-lg">
                                    <span class="material-symbols-outlined text-[var(--blue)] text-2xl">verified</span>
                                </div>
                                <h3 class="text-2xl lg:text-3xl font-bold text-[var(--dark-blue)]">Quality Certified
                                </h3>
                            </div>
                            <div class="space-y-6">
                                <p class="text-lg lg:text-xl text-[var(--dark-blue)] leading-relaxed">
                                    PT Wafiq Mitra Teknik (WMT) is a certified manufacturing company specializing in
                                    high-precision molds, dies, and plastic products. With ISO 9001:2015 (Quality
                                    Management), ISO 14001:2015 (Environmental Management), and ISO 45001:2015
                                    (Occupational Health & Safety) certifications, we ensure every process meets
                                    international standards of excellence.
                                </p>
                                <p class="text-lg lg:text-xl text-[var(--dark-blue)] leading-relaxed">
                                    Our strengths lie in precision, innovation, and customer-focused services. We
                                    deliver reliable solutions with on-time performance, backed by a professional team
                                    and advanced production facilities. From automotive to industrial components, our
                                    services are tailored to meet diverse and demanding client requirements.
                                </p>
                                <p class="text-lg lg:text-xl text-[var(--dark-blue)] leading-relaxed">
                                    Strategically located in Bandung, West Java, Indonesia, WMT operates on a 2,400 m²
                                    factory site with 1,500 m² of production facilities, enabling us to serve both
                                    domestic and international clients efficiently.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Image Content -->
                    <div class="animate-card">
                        <div class="modern-image-container rounded-3xl overflow-hidden shadow-2xl">
                            <div class="image-wrapper relative">
                                <img src="../assets/img/slider-1.png" alt="WMT Factory"
                                    class="w-full h-96 lg:h-[500px] object-cover transform hover:scale-105 transition-transform duration-700">
                                <div class="image-overlay">
                                    <div class="overlay-content">
                                        <span
                                            class="material-symbols-outlined text-white text-4xl mb-4">manufacturing</span>
                                        <h4 class="text-white text-2xl font-bold">Advanced Production Facility</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Vision & Mission Section -->
        <section
            class="relative w-full min-h-screen flex items-center justify-center p-8 lg:p-20 bg-gradient-to-br from-gray-50 to-blue-50 animate-section">
            <div class="content flex flex-col items-center justify-center w-full max-w-7xl h-fit gap-16 lg:gap-20">
                <div class="text-center animate-card max-w-4xl">
                    <div class="section-label">VISION & MISSION</div>
                    <h2 class="text-4xl lg:text-6xl font-bold text-[var(--dark-blue)] mt-4 mb-6">
                        Leading with <span class="text-[var(--blue)]">Purpose</span>
                    </h2>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full">
                    <!-- Vision Card -->
                    <div class="animate-card">
                        <div
                            class="vision-card rounded-3xl p-8 lg:p-10 bg-white border border-blue-100 shadow-2xl h-full">
                            <div class="card-header flex items-center gap-4 mb-6">
                                <div class="icon-wrapper bg-blue-50 rounded-2xl p-4">
                                    <span
                                        class="material-symbols-outlined text-[var(--blue)] text-2xl">visibility</span>
                                </div>
                                <h3 class="text-2xl lg:text-3xl font-bold text-[var(--dark-blue)]">Our Vision</h3>
                            </div>
                            <p class="text-lg lg:text-xl text-[var(--dark-blue)] leading-relaxed">
                                PT Wafiq Mitra Teknik aims to be a leading technology-based manufacturing company with
                                rapid growth and strong market presence.
                            </p>
                        </div>
                    </div>

                    <!-- Mission Card -->
                    <div class="animate-card">
                        <div
                            class="mission-card rounded-3xl p-8 lg:p-10 bg-white border border-blue-100 shadow-2xl h-full">
                            <div class="card-header flex items-center gap-4 mb-6">
                                <div class="icon-wrapper bg-blue-50 rounded-2xl p-4">
                                    <span class="material-symbols-outlined text-[var(--blue)] text-2xl">flag</span>
                                </div>
                                <h3 class="text-2xl lg:text-3xl font-bold text-[var(--dark-blue)]">Our Mission</h3>
                            </div>
                            <div class="space-y-4">
                                <div class="mission-item flex items-start gap-3">
                                    <span class="material-symbols-outlined text-[var(--blue)] mt-1">check_circle</span>
                                    <p class="text-lg text-[var(--dark-blue)]">Delivering high-quality products with
                                        on-time delivery</p>
                                </div>
                                <div class="mission-item flex items-start gap-3">
                                    <span class="material-symbols-outlined text-[var(--blue)] mt-1">check_circle</span>
                                    <p class="text-lg text-[var(--dark-blue)]">Mastering advanced technology</p>
                                </div>
                                <div class="mission-item flex items-start gap-3">
                                    <span class="material-symbols-outlined text-[var(--blue)] mt-1">check_circle</span>
                                    <p class="text-lg text-[var(--dark-blue)]">Continuously developing our human
                                        resources</p>
                                </div>
                                <div class="mission-item flex items-start gap-3">
                                    <span class="material-symbols-outlined text-[var(--blue)] mt-1">check_circle</span>
                                    <p class="text-lg text-[var(--dark-blue)]">Staying competitive in the global
                                        manufacturing industry</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Products Section -->
        <section
            class="relative w-full min-h-screen flex items-center justify-center p-8 lg:p-20 bg-white animate-section">
            <div class="content flex flex-col items-center justify-center w-full max-w-7xl h-fit gap-16 lg:gap-20">
                <div class="text-center animate-card max-w-4xl">
                    <div class="section-label">OUR PRODUCTS</div>
                    <h2 class="text-4xl lg:text-6xl font-bold text-[var(--dark-blue)] mt-4 mb-6">
                        Precision <span class="text-[var(--blue)]">Engineering</span> Solutions
                    </h2>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full items-center">
                    <!-- Product Content -->
                    <div class="animate-card">
                        <div
                            class="modern-card rounded-3xl p-8 lg:p-10 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 shadow-2xl">
                            <div class="card-header flex items-center gap-4 mb-6">
                                <div class="icon-wrapper bg-white rounded-2xl p-4 shadow-lg">
                                    <span
                                        class="material-symbols-outlined text-[var(--blue)] text-2xl">inventory_2</span>
                                </div>
                                <h3 class="text-2xl lg:text-3xl font-bold text-[var(--dark-blue)]">Our Products</h3>
                            </div>
                            <p class="text-lg lg:text-xl text-[var(--dark-blue)] leading-relaxed">
                                PT Wafiq Mitra Teknik aims to be a leading technology-based manufacturing company with
                                rapid growth and strong market presence. We are committed to delivering high-quality
                                products with on-time delivery, mastering advanced technology, and continuously
                                developing our human resources to stay competitive in the global manufacturing industry.
                            </p>
                        </div>
                    </div>

                    <!-- Product Gallery -->
                    <div class="animate-card">
                        <div class="product-gallery grid grid-cols-2 gap-4">
                            <div class="gallery-item rounded-2xl overflow-hidden shadow-lg">
                                <img src="../assets/img/slider-3.png" alt="Product 1"
                                    class="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-500">
                            </div>
                            <div class="gallery-item rounded-2xl overflow-hidden shadow-lg mt-8">
                                <img src="../assets/img/slider-4.png" alt="Product 2"
                                    class="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-500">
                            </div>
                            <div class="gallery-item rounded-2xl overflow-hidden shadow-lg">
                                <img src="../assets/img/precision-part.png" alt="Product 3"
                                    class="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-500">
                            </div>
                            <div class="gallery-item rounded-2xl overflow-hidden shadow-lg mt-8">
                                <img src="../assets/img/image.png" alt="Product 4"
                                    class="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-500">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Company Culture Section -->
        <section
            class="relative w-full min-h-screen flex items-center justify-center p-8 lg:p-20 bg-gradient-to-br from-gray-50 to-blue-50 animate-section">
            <div class="content flex flex-col items-center justify-center w-full max-w-7xl h-fit gap-16 lg:gap-20">
                <div class="text-center animate-card max-w-4xl">
                    <div class="section-label">COMPANY CULTURE</div>
                    <h2 class="text-4xl lg:text-6xl font-bold text-[var(--dark-blue)] mt-4 mb-6">
                        Investing in <span class="text-[var(--blue)]">People</span>
                    </h2>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full items-center">
                    <!-- Image Content -->
                    <div class="animate-card">
                        <div class="modern-image-container rounded-3xl overflow-hidden shadow-2xl">
                            <div class="image-wrapper relative">
                                <img src="../assets/img/image.png" alt="Team Culture"
                                    class="w-full h-96 lg:h-[500px] object-cover transform hover:scale-105 transition-transform duration-700">
                                <div class="image-overlay">
                                    <div class="overlay-content">
                                        <span
                                            class="material-symbols-outlined text-white text-4xl mb-4">diversity_3</span>
                                        <h4 class="text-white text-2xl font-bold">Professional Team</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Text Content -->
                    <div class="animate-card">
                        <div class="modern-card rounded-3xl p-8 lg:p-10 bg-white border border-blue-100 shadow-2xl">
                            <div class="card-header flex items-center gap-4 mb-6">
                                <div class="icon-wrapper bg-blue-50 rounded-2xl p-4">
                                    <span class="material-symbols-outlined text-[var(--blue)] text-2xl">groups</span>
                                </div>
                                <h3 class="text-2xl lg:text-3xl font-bold text-[var(--dark-blue)]">Our Company</h3>
                            </div>
                            <p class="text-lg lg:text-xl text-[var(--dark-blue)] leading-relaxed">
                                As part of our mission to enhance human resource development, we invest heavily in our
                                people. Our engineers, technicians, and specialists are continuously trained to sharpen
                                both technical and management skills. This commitment creates a professional and
                                adaptive workforce capable of tackling increasingly complex manufacturing challenges.
                                With collaboration, integrity, and innovation as our core values, our employees are the
                                driving force behind every success at PT Wafiq Mitra Teknik.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Technology Section -->
        <section
            class="relative w-full min-h-screen flex items-center justify-center p-8 lg:p-20 bg-white animate-section">
            <div class="content flex flex-col items-center justify-center w-full max-w-7xl h-fit gap-16 lg:gap-20">
                <div class="text-center animate-card max-w-4xl">
                    <div class="section-label">TECHNOLOGY</div>
                    <h2 class="text-4xl lg:text-6xl font-bold text-[var(--dark-blue)] mt-4 mb-6">
                        Advanced <span class="text-[var(--blue)]">Technology</span>
                    </h2>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full items-center">
                    <!-- Text Content -->
                    <div class="animate-card">
                        <div
                            class="modern-card rounded-3xl p-8 lg:p-10 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 shadow-2xl">
                            <div class="card-header flex items-center gap-4 mb-6">
                                <div class="icon-wrapper bg-white rounded-2xl p-4 shadow-lg">
                                    <span class="material-symbols-outlined text-[var(--blue)] text-2xl">smart_toy</span>
                                </div>
                                <h3 class="text-2xl lg:text-3xl font-bold text-[var(--dark-blue)]">Our Technology</h3>
                            </div>
                            <div class="space-y-6">
                                <p class="text-lg lg:text-xl text-[var(--dark-blue)] leading-relaxed">
                                    Aligned with our mission to master advanced technology and develop manufacturing
                                    knowledge, our facilities are equipped with state-of-the-art machines and tools.
                                    These include 3-axis and 5-axis CNC milling machines, CNC turning, CMM, and 3D
                                    scanning technology.
                                </p>
                                <p class="text-lg lg:text-xl text-[var(--dark-blue)] leading-relaxed">
                                    By continuously upgrading our production equipment and adopting modern CAD/CAM
                                    systems, we ensure precision, efficiency, and innovation in every project. This
                                    technological strength allows us to deliver world-class solutions and maintain
                                    competitiveness in the global market.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Technology Features -->
                    <div class="animate-card">
                        <div class="tech-features grid grid-cols-2 gap-6">
                            <div
                                class="feature-item rounded-2xl p-6 bg-white border border-blue-100 shadow-lg text-center">
                                <div class="feature-icon bg-blue-50 rounded-xl p-4 inline-block mb-4">
                                    <span
                                        class="material-symbols-outlined text-[var(--blue)] text-2xl">precision_manufacturing</span>
                                </div>
                                <h4 class="text-lg font-bold text-[var(--dark-blue)] mb-2">CNC Machining</h4>
                                <p class="text-sm text-[var(--dark-blue)]">3-axis & 5-axis precision</p>
                            </div>
                            <div
                                class="feature-item rounded-2xl p-6 bg-white border border-blue-100 shadow-lg text-center">
                                <div class="feature-icon bg-blue-50 rounded-xl p-4 inline-block mb-4">
                                    <span class="material-symbols-outlined text-[var(--blue)] text-2xl">scanner</span>
                                </div>
                                <h4 class="text-lg font-bold text-[var(--dark-blue)] mb-2">3D Scanning</h4>
                                <p class="text-sm text-[var(--dark-blue)]">High-resolution metrology</p>
                            </div>
                            <div
                                class="feature-item rounded-2xl p-6 bg-white border border-blue-100 shadow-lg text-center">
                                <div class="feature-icon bg-blue-50 rounded-xl p-4 inline-block mb-4">
                                    <span
                                        class="material-symbols-outlined text-[var(--blue)] text-2xl">design_services</span>
                                </div>
                                <h4 class="text-lg font-bold text-[var(--dark-blue)] mb-2">CAD/CAM</h4>
                                <p class="text-sm text-[var(--dark-blue)]">Advanced design systems</p>
                            </div>
                            <div
                                class="feature-item rounded-2xl p-6 bg-white border border-blue-100 shadow-lg text-center">
                                <div class="feature-icon bg-blue-50 rounded-xl p-4 inline-block mb-4">
                                    <span class="material-symbols-outlined text-[var(--blue)] text-2xl">build</span>
                                </div>
                                <h4 class="text-lg font-bold text-[var(--dark-blue)] mb-2">CMM</h4>
                                <p class="text-sm text-[var(--dark-blue)]">Quality measurement</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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
    z-index: 0;
}

.floating-shapes {
    position: absolute;
    width: 100%;
    height: 100%;
}

.shape {
    position: absolute;
    border-radius: 50%;
    background: linear-gradient(45deg, var(--blue), transparent);
    animation: float 6s ease-in-out infinite;
    opacity: 0.1;
}

.shape-1 {
    width: 200px;
    height: 200px;
    top: 10%;
    left: 5%;
    animation-delay: 0s;
}

.shape-2 {
    width: 150px;
    height: 150px;
    top: 60%;
    right: 10%;
    animation-delay: 2s;
}

.shape-3 {
    width: 100px;
    height: 100px;
    bottom: 20%;
    left: 15%;
    animation-delay: 4s;
}

.grid-lines {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image:
        linear-gradient(rgba(2, 179, 247, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(2, 179, 247, 0.03) 1px, transparent 1px);
    background-size: 50px 50px;
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0) rotate(0deg);
    }

    50% {
        transform: translateY(-20px) rotate(180deg);
    }
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
    background: linear-gradient(90deg, transparent, var(--blue), transparent);
}

.title-underline .dot {
    width: 8px;
    height: 8px;
    background: var(--blue);
    border-radius: 50%;
    animation: pulse 2s infinite;
}

@keyframes pulse {

    0%,
    100% {
        opacity: 1;
        transform: scale(1);
    }

    50% {
        opacity: 0.7;
        transform: scale(1.2);
    }
}

/* Section Label */
.section-label {
    display: inline-block;
    color: var(--blue);
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-size: 0.875rem;
    margin-bottom: 8px;
}

/* Stat Items */
.stat-item {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(2, 179, 247, 0.1);
    border-radius: 16px;
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
}

.stat-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(2, 179, 247, 0.15);
    border-color: rgba(2, 179, 247, 0.3);
}

.stat-icon {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(2, 179, 247, 0.1);
    border-radius: 12px;
    color: var(--blue);
}

.stat-content .number {
    font-size: 1.25rem;
    font-weight: bold;
    color: var(--dark-blue);
}

.stat-content .label {
    font-size: 0.875rem;
    color: var(--gray-dark);
    font-weight: 500;
}

/* Modern Cards */
.modern-card {
    position: relative;
    overflow: hidden;
}

.modern-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.6s ease;
}

.modern-card:hover::before {
    left: 100%;
}

/* Image Container */
.modern-image-container {
    position: relative;
    border: 1px solid rgba(2, 179, 247, 0.1);
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
    background: linear-gradient(to bottom, transparent 40%, rgba(0, 43, 59, 0.8));
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

/* Product Gallery */
.product-gallery {
    perspective: 1000px;
}

.gallery-item {
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border-radius: 16px;
    overflow: hidden;
    position: relative;
}

.gallery-item::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1));
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
}

.gallery-item:hover::before {
    opacity: 1;
}

/* Tech Features */
.tech-features {
    perspective: 1000px;
}

.feature-item {
    transition: all 0.3s ease;
    cursor: pointer;
}

.feature-item:hover {
    transform: translateY(-8px) rotateX(5deg);
    box-shadow: 0 20px 40px rgba(2, 179, 247, 0.15);
}

.feature-icon {
    transition: all 0.3s ease;
}

.feature-item:hover .feature-icon {
    background: linear-gradient(45deg, var(--blue), rgba(2, 179, 247, 0.2));
    transform: scale(1.1);
}

/* Mission Items */
.mission-item {
    transition: all 0.3s ease;
    padding: 8px 0;
}

.mission-item:hover {
    transform: translateX(8px);
}

/* Card Header */
.card-header {
    border-bottom: 2px solid rgba(2, 179, 247, 0.1);
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
    .title-underline .line {
        width: 40px;
    }

    .stat-item {
        flex-direction: column;
        text-align: center;
        gap: 12px;
    }

    .product-gallery {
        grid-template-columns: 1fr;
        gap: 1rem;
    }

    .gallery-item {
        margin-top: 0 !important;
    }

    .tech-features {
        grid-template-columns: 1fr;
    }
}
</style>
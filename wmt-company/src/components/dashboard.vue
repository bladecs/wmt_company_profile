<script setup>
import { ref, onMounted } from 'vue'
import slider1 from '../assets/img/slider-1.png'
import slider2 from '../assets/img/slider-2.png'
import slider3 from '../assets/img/slider-3.png'
import slider4 from '../assets/img/slider-4.png'

// Import gambar untuk reveal boxes
import techImage1 from '../assets/img/image.png'
import techImage2 from '../assets/img/slider-1.png'
import techImage3 from '../assets/img/slider-2.png'
import techImage4 from '../assets/img/slider-3.png'
import techImage5 from '../assets/img/slider-4.png'

const slides = [slider1, slider2, slider3, slider4]

// Array untuk gambar teknologi
const techImages = [techImage1, techImage2, techImage3, techImage4, techImage5]

// Data untuk setiap content column
const techContents = [
    {
        title: "Milling 5 AXIS",
        description: "Advanced 5-Axis CNC machining delivers unmatched precision and flexibility, enabling complex parts to be produced in a single setup",
        imageIndex: 0
    },
    {
        title: "CNC Turning",
        description: "High-precision turning operations for cylindrical parts with superior surface finish and dimensional accuracy",
        imageIndex: 1
    },
    {
        title: "EDM Machining",
        description: "Electrical Discharge Machining for complex geometries and hard materials that are difficult to machine conventionally",
        imageIndex: 2
    },
    {
        title: "Quality Inspection",
        description: "Comprehensive metrology and quality control using advanced CMM and measurement equipment",
        imageIndex: 3
    },
    {
        title: "Surface Treatment",
        description: "Various surface finishing processes including anodizing, plating, and coating for enhanced durability",
        imageIndex: 4
    }
]

const currentIndex = ref(0)
const totalSlides = 4
const menuOpen = ref(false)

// State untuk dropdown
const companyDropdownOpen = ref(false)
const servicesDropdownOpen = ref(false)

const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % totalSlides
}

const prevSlide = () => {
    currentIndex.value = (currentIndex.value - 1 + totalSlides) % totalSlides
}

// Function untuk mendapatkan background image URL
const getTechBackground = (imageIndex) => {
    return `url('${techImages[imageIndex]}')`
}

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

    // Observer untuk svgGroup
    const svgGroup = document.getElementById('svgGroup')
    const items = svgGroup.querySelectorAll('.fade-item')

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                items.forEach(item => item.classList.add('visible'))
            } else {
                items.forEach(item => item.classList.remove('visible'))
            }
        })
    }, {
        threshold: 0.2
    })

    observer.observe(svgGroup)

    // Observer untuk svgGroup-Tech
    const svgGroupTech = document.getElementById('svgGroup-Tech')
    const itemsTech = svgGroupTech.querySelectorAll('.fade-item')

    const observerTech = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                itemsTech.forEach(item => item.classList.add('visible'))
            } else {
                itemsTech.forEach(item => item.classList.remove('visible'))
            }
        })
    }, {
        threshold: 0.2
    })

    observerTech.observe(svgGroupTech)

    // Observer untuk svgGroup-Footer
    const svgGroupFooter = document.getElementById('svgGroup-Footer')
    const footerItems = svgGroupFooter.querySelectorAll('.fade-item')

    const footerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                footerItems.forEach(item => item.classList.add('visible'))
            } else {
                footerItems.forEach(item => item.classList.remove('visible'))
            }
        })
    }, {
        threshold: 0.2
    })

    footerObserver.observe(svgGroupFooter)
})
</script>

<template>
    <div class="w-full h-fit flex flex-col">
        <!-- Content -->
        <section id="about-us"
            class="w-full min-h-screen flex flex-col xl:flex-row items-center xl:items-center justify-center xl:justify-between gap-12 px-6 md:px-12 xl:px-24 py-16 bg-white">
            <!-- LEFT CONTENT -->
            <div class="content-text flex-1 max-w-xl flex flex-col gap-6">
                <h3
                    class="p-3 bg-[var(--blue-transparent)] w-fit text-[var(--blue)] font-bold rounded-full text-sm md:text-base">
                    About Our Company
                </h3>

                <div class="flex flex-col gap-2">
                    <h1 class="font-bold text-[var(--dark-blue)] text-3xl md:text-4xl xl:text-5xl">Shaping Precision
                    </h1>
                    <h1 class="font-bold text-[var(--blue)] text-3xl md:text-4xl xl:text-5xl">Delivering Quality</h1>
                </div>

                <p class="text-[var(--gray-dark)] text-justify leading-relaxed text-sm md:text-base">
                    With over 20 years of expertise in CNC machining, molds & dies, and plastic manufacturing, PT Wafiq
                    Mitra Teknik has grown into a trusted partner for industries seeking precision, innovation, and
                    reliability. Our modern facilities and skilled team enable us to deliver complex, high-quality
                    solutions
                    across sectors such as automotive, consumer goods, and industrial components.
                </p>

                <div class="flex flex-row justify-between items-center mt-4">
                    <div>
                        <h1 class="text-[var(--dark-blue)] font-bold text-xl md:text-2xl">ISO 9001</h1>
                        <p class="text-[var(--gray-dark)] text-sm md:text-base">Certified Quality Management</p>
                    </div>
                    <div>
                        <h1 class="text-[var(--dark-blue)] font-bold text-xl md:text-2xl">24/7</h1>
                        <p class="text-[var(--gray-dark)] text-sm md:text-base">Customer Support</p>
                    </div>
                </div>
            </div>

            <!-- RIGHT CARDS -->
            <div class="content-card flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
                <div
                    class="card p-6 rounded-2xl bg-white shadow-md border border-[var(--blue-transparent)] flex flex-col items-center text-center gap-2 hover:shadow-lg transition">
                    <span
                        class="material-symbols-outlined text-[var(--deep-blue)] bg-[var(--blue-transparent)] p-3 rounded-full">shield</span>
                    <h1 class="text-[var(--blue)] text-lg font-bold">Quality Assurance</h1>
                    <p class="text-sm text-[var(--gray-dark)]">ISO certified processes ensuring the highest standards in
                        every product we deliver.</p>
                </div>

                <div
                    class="card p-6 rounded-2xl bg-white shadow-md border border-[var(--blue-transparent)] flex flex-col items-center text-center gap-2 hover:shadow-lg transition">
                    <span
                        class="material-symbols-outlined text-[var(--deep-blue)] bg-[var(--blue-transparent)] p-3 rounded-full">workspace_premium</span>
                    <h1 class="text-[var(--blue)] text-lg font-bold">Industry Excellence</h1>
                    <p class="text-sm text-[var(--gray-dark)]">Delivering top-tier solutions backed by decades of
                        experience.</p>
                </div>

                <div
                    class="card p-6 rounded-2xl bg-white shadow-md border border-[var(--blue-transparent)] flex flex-col items-center text-center gap-2 hover:shadow-lg transition">
                    <span
                        class="material-symbols-outlined text-[var(--deep-blue)] bg-[var(--blue-transparent)] p-3 rounded-full">group</span>
                    <h1 class="text-[var(--blue)] text-lg font-bold">Expert Team</h1>
                    <p class="text-sm text-[var(--gray-dark)]">Our skilled professionals ensure precision and quality in
                        every project.</p>
                </div>

                <div
                    class="card p-6 rounded-2xl bg-white shadow-md border border-[var(--blue-transparent)] flex flex-col items-center text-center gap-2 hover:shadow-lg transition">
                    <span
                        class="material-symbols-outlined text-[var(--deep-blue)] bg-[var(--blue-transparent)] p-3 rounded-full">target</span>
                    <h1 class="text-[var(--blue)] text-lg font-bold">Precision Focus</h1>
                    <p class="text-sm text-[var(--gray-dark)]">Dedicated to achieving accuracy in every manufacturing
                        step.</p>
                </div>
            </div>
        </section>
        <section id="service" class="relative w-full h-fit flex flex-col overflow-hidden px-15 py-15">
            <div id="svgGroup" class="fade-group">
                <img class="fade-item rec-1 absolute z-10 top-0 left-0" src="../assets/svg/rec_1.svg" alt="">
                <img class="fade-item rec-2 absolute z-0 top-0 left-0" src="../assets/svg/rec_2.svg" alt="">
                <img class="fade-item rec-3 absolute z-10 top-0 right-0" src="../assets/svg/rec_3.svg" alt="">
                <img class="fade-item rec-4 absolute z-0 top-0 right-0" src="../assets/svg/rec_4.svg" alt="">
            </div>
            <div class="content flex flex-col items-center justify-center z-20">
                <div class="text-group flex flex-col items-center jusstify-center gap-5 ">
                    <h3
                        class="p-3 bg-[var(--blue-transparent)] w-fit text-[var(--blue)] font-bold rounded-full text-sm md:text-base">
                        About Our Services
                    </h3>

                    <div class="flex flex-col gap-2 items-center justify-center">
                        <h1 class="font-bold text-[var(--dark-blue)] text-3xl md:text-4xl xl:text-5xl">Comprehensive
                            Manufacturing
                        </h1>
                        <h1 class="font-bold text-[var(--blue)] text-3xl md:text-4xl xl:text-5xl">Solution
                        </h1>
                        <p class="text-lg text-[var(--gray-dark)] w-200 text-center">From precision machining to
                            specialized manufacturing, we offer a complete range of services to meet your most demanding
                            requirements</p>
                    </div>
                </div>
                <div
                    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:w-300 gap-6 p-10 w-full justify-items-center">
                    <!-- Precision Part -->
                    <div
                        class="card relative w-full max-w-sm h-130 flex flex-col p-10 items-start justify-between bg-[var(--dark-blue)] rounded-2xl">
                        <div class="text-group flex flex-col gap-1">
                            <span
                                class="material-symbols-outlined text-[var(--deep-blue)] p-5 bg-[var(--white)] icon-service w-fit rounded-2xl">architecture</span>
                            <h1 class="text-2xl font-bold text-[var(--white)] mt-4">Precision Part</h1>
                            <p class="text-[var(--white)] text-sm">High-precision machining and manufacturing of complex
                                components with
                                tight tolerances</p>
                            <ul class="list-disc list-inside marker:text-[var(--blue)]">
                                <li class="list-card">CNC Machining</li>
                                <li class="list-card">Quality Control</li>
                                <li class="list-card">Custom Solutions</li>
                            </ul>
                        </div>
                        <a href="#"
                            class="w-1/2 z-20 text-center px-3 py-5 rounded-2xl font-bold text-xl text-[var(--dark-blue)] bg-[var(--white)]">Detail</a>
                        <img src="../assets/svg/rec_5.svg" alt="rec-5" class="z-0 absolute -bottom-1.5 -right-2.5">
                    </div>

                    <!-- Plastic Injection -->
                    <div
                        class="card relative w-full max-w-sm h-130 flex flex-col p-10 items-start justify-between bg-[var(--dark-blue)] rounded-2xl">
                        <div class="text-group flex flex-col gap-1">
                            <span
                                class="material-symbols-outlined text-[var(--deep-blue)] p-5 bg-[var(--white)] icon-service w-fit rounded-2xl">polymer</span>
                            <h1 class="text-2xl font-bold text-[var(--white)] mt-4">Plastic Injection</h1>
                            <p class="text-[var(--white)] text-sm">High-quality plastic injection molding for durable
                                and
                                precision-engineered parts</p>
                            <ul class="list-disc list-inside marker:text-[var(--blue)]">
                                <li class="list-card">Custom Mold Design</li>
                                <li class="list-card">Mass Production</li>
                                <li class="list-card">Surface Finishing</li>
                            </ul>
                        </div>
                        <a href="#"
                            class="w-1/2 z-20 text-center px-3 py-5 rounded-2xl font-bold text-xl text-[var(--dark-blue)] bg-[var(--white)]">Detail</a>
                        <img src="../assets/svg/rec_5.svg" alt="rec-5" class="z-0 absolute -bottom-1.5 -right-2.5">
                    </div>

                    <!-- Mold & Dies -->
                    <div
                        class="card relative w-full max-w-sm h-130 flex flex-col p-10 items-start justify-between bg-[var(--dark-blue)] rounded-2xl">
                        <div class="text-group flex flex-col gap-1">
                            <span
                                class="material-symbols-outlined text-[var(--deep-blue)] p-5 bg-[var(--white)] icon-service w-fit rounded-2xl">extension</span>
                            <h1 class="text-2xl font-bold text-[var(--white)] mt-4">Mold & Dies</h1>
                            <p class="text-[var(--white)] text-sm">Design and fabrication of high-precision molds and
                                dies for industrial
                                applications</p>
                            <ul class="list-disc list-inside marker:text-[var(--blue)]">
                                <li class="list-card">Tool Design</li>
                                <li class="list-card">Die Manufacturing</li>
                                <li class="list-card">Maintenance & Repair</li>
                            </ul>
                        </div>
                        <a href="#"
                            class="w-1/2 z-20 text-center px-3 py-5 rounded-2xl font-bold text-xl text-[var(--dark-blue)] bg-[var(--white)]">Detail</a>
                        <img src="../assets/svg/rec_5.svg" alt="rec-5" class="z-0 absolute -bottom-1.5 -right-2.5">
                    </div>

                    <!-- Medical Part -->
                    <div
                        class="card relative w-full max-w-sm h-130 flex flex-col p-10 items-start justify-between bg-[var(--dark-blue)] rounded-2xl">
                        <div class="text-group flex flex-col gap-1">
                            <span
                                class="material-symbols-outlined text-[var(--deep-blue)] p-5 bg-[var(--white)] icon-service w-fit rounded-2xl">ecg_heart</span>
                            <h1 class="text-2xl font-bold text-[var(--white)] mt-4">Medical Part</h1>
                            <p class="text-[var(--white)] text-sm">Manufacturing of precision components for medical and
                                healthcare
                                equipment</p>
                            <ul class="list-disc list-inside marker:text-[var(--blue)]">
                                <li class="list-card">Biocompatible Materials</li>
                                <li class="list-card">Cleanroom Production</li>
                                <li class="list-card">Regulatory Compliance</li>
                            </ul>
                        </div>
                        <a href="#"
                            class="w-1/2 z-20 text-center px-3 py-5 rounded-2xl font-bold text-xl text-[var(--dark-blue)] bg-[var(--white)]">Detail</a>
                        <img src="../assets/svg/rec_5.svg" alt="rec-5" class="z-0 absolute -bottom-1.5 -right-2.5">
                    </div>

                    <!-- Turbine Part -->
                    <div
                        class="card relative w-full max-w-sm h-130 flex flex-col p-10 items-start justify-between bg-[var(--dark-blue)] rounded-2xl">
                        <div class="text-group flex flex-col gap-1">
                            <span
                                class="material-symbols-outlined text-[var(--deep-blue)] p-5 bg-[var(--white)] icon-service w-fit rounded-2xl">mode_fan</span>
                            <h1 class="text-2xl font-bold text-[var(--white)] mt-4">Turbine Part</h1>
                            <p class="text-[var(--white)] text-sm">Precision manufacturing of turbine components for
                                energy and aerospace
                                industries</p>
                            <ul class="list-disc list-inside marker:text-[var(--blue)]">
                                <li class="list-card">High-Temperature Alloys</li>
                                <li class="list-card">Aerodynamic Design</li>
                                <li class="list-card">Performance Testing</li>
                            </ul>
                        </div>
                        <a href="#"
                            class="w-1/2 z-20 text-center px-3 py-5 rounded-2xl font-bold text-xl text-[var(--dark-blue)] bg-[var(--white)]">Detail</a>
                        <img src="../assets/svg/rec_5.svg" alt="rec-5" class="z-0 absolute -bottom-1.5 -right-2.5">
                    </div>

                    <!-- Rubber Part -->
                    <div
                        class="card relative w-full max-w-sm h-130 flex flex-col p-10 items-start justify-between bg-[var(--dark-blue)] rounded-2xl">
                        <div class="text-group flex flex-col gap-1">
                            <span
                                class="material-symbols-outlined text-[var(--deep-blue)] p-5 bg-[var(--white)] icon-service w-fit rounded-2xl">eraser_size_3</span>
                            <h1 class="text-2xl font-bold text-[var(--white)] mt-4">Rubber Part</h1>
                            <p class="text-[var(--white)] text-sm">Custom rubber parts for automotive, industrial, and
                                consumer
                                applications</p>
                            <ul class="list-disc list-inside marker:text-[var(--blue)]">
                                <li class="list-card">Molded Rubber Components</li>
                                <li class="list-card">Durability Testing</li>
                                <li class="list-card">Material Optimization</li>
                            </ul>
                        </div>
                        <a href="#"
                            class="w-1/2 z-20 text-center px-3 py-5 rounded-2xl font-bold text-xl text-[var(--dark-blue)] bg-[var(--white)]">Detail</a>
                        <img src="../assets/svg/rec_5.svg" alt="rec-5" class="z-0 absolute -bottom-1.5 -right-2.5">
                    </div>
                </div>
            </div>
            <div id="svgGroup-Footer" class="fade-group">
                <img class="fade-item fade-from-bottom rec-6 absolute z-10 bottom-0 left-0"
                    src="../assets/svg/rec_6.svg" alt="">
                <img class="fade-item fade-from-bottom rec-7 absolute z-0 bottom-0 left-0" src="../assets/svg/rec_7.svg"
                    alt="">
                <img class="fade-item fade-from-bottom rec-8 absolute z-10 bottom-0 right-0"
                    src="../assets/svg/rec_8.svg" alt="">
                <img class="fade-item fade-from-bottom rec-9 absolute z-0 bottom-0 right-0"
                    src="../assets/svg/rec_9.svg" alt="">
            </div>
        </section>
        <section id="technology" class="relative w-full h-720 flex flex-col overflow-hidden px-15 py-30">
            <div id="svgGroup-Tech" class="fade-group">
                <img class="fade-item rec-10 absolute z-10 top-0 left-0" src="../assets/svg/rec_10.svg" alt="">
                <img class="fade-item rec-11 absolute z-0 top-0 left-0" src="../assets/svg/rec_11.svg" alt="">
                <img class="fade-item rec-12 absolute z-10 top-0 right-0" src="../assets/svg/rec_12.svg" alt="">
                <img class="fade-item rec-13 absolute z-0 top-0 right-0" src="../assets/svg/rec_13.svg" alt="">
            </div>
            <div class="content flex flex-col w-full h-full items-center justify-center">
                <div v-for="(tech, index) in techContents" :key="index"
                    class="conten-col flex flex-row items-center justify-between gap-25 w-fit h-1/5">

                    <template v-if="index % 2 === 0">
                        <!-- Gambar di kiri -->
                        <div class="relative w-full h-full flex flex-row gap-5 justify-between items-center">
                            <div class="reveal-box box1">
                                <div class="reveal-inner"
                                    :style="{ backgroundImage: getTechBackground(tech.imageIndex) }"></div>
                            </div>
                            <div class="reveal-box box2">
                                <div class="reveal-inner"
                                    :style="{ backgroundImage: getTechBackground(tech.imageIndex) }"></div>
                            </div>
                            <div class="reveal-box box3">
                                <div class="reveal-inner"
                                    :style="{ backgroundImage: getTechBackground(tech.imageIndex) }"></div>
                            </div>
                        </div>
                        <div class="text-group">
                            <h1 class="decoration-solid text-3xl font-bold text-[var(--dark-blue)] w-100">{{ tech.title
                            }}</h1>
                            <p class="text-[var(--gray)] w-90 text-justify">{{ tech.description }}</p>
                        </div>
                    </template>

                    <template v-else>
                        <!-- Teks di kiri -->
                        <div class="text-group">
                            <h1 class="decoration-solid text-3xl font-bold text-[var(--dark-blue)] w-100">{{ tech.title
                            }}</h1>
                            <p class="text-[var(--gray)] w-90 text-justify">{{ tech.description }}</p>
                        </div>
                        <!-- Gambar di kanan -->
                        <div class="relative w-full h-full flex flex-row gap-5 justify-between items-center">
                            <div class="reveal-box-right box1-right">
                                <div class="reveal-inner-right"
                                    :style="{ backgroundImage: getTechBackground(tech.imageIndex) }"></div>
                            </div>
                            <div class="reveal-box-right box2-right">
                                <div class="reveal-inner-right"
                                    :style="{ backgroundImage: getTechBackground(tech.imageIndex) }"></div>
                            </div>
                            <div class="reveal-box-right box3-right">
                                <div class="reveal-inner-right"
                                    :style="{ backgroundImage: getTechBackground(tech.imageIndex) }"></div>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
            <div id="svgGroup-Footer-Tech" class="fade-group">
                <img class="fade-item fade-from-bottom rec-6 absolute z-10 bottom-0 left-0"
                    src="../assets/svg/rec_6.svg" alt="">
                <img class="fade-item fade-from-bottom rec-7 absolute z-0 bottom-0 left-0" src="../assets/svg/rec_7.svg"
                    alt="">
                <img class="fade-item fade-from-bottom rec-8 absolute z-10 bottom-0 right-0"
                    src="../assets/svg/rec_8.svg" alt="">
                <img class="fade-item fade-from-bottom rec-9 absolute z-0 bottom-0 right-0"
                    src="../assets/svg/rec_9.svg" alt="">
            </div>
        </section>
    </div>
</template>

<style scoped>
/* Fade animation */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.card {
    cursor: pointer;
    box-shadow: 0 0 10px var(--blue);
    transition: all 0.3s ease-in-out;
}

.icon-card {
    font-size: 2rem;
}

.icon-service {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.25);
    font-size: 3rem;
}

.card:hover {
    transform: scale(1.05);
}

.fade-item {
    opacity: 0;
    transform: translateY(-40px);
    transition: all 0.8s ease-out;
}

.fade-item.visible {
    opacity: 1;
    transform: translateY(0);
}

.fade-from-bottom {
    transform: translateY(40px);
}

.fade-from-bottom.visible {
    transform: translateY(0);
}

.rec-1.visible {
    transition-delay: 0s;
}

.rec-3.visible {
    transition-delay: 0s;
}

.rec-2.visible {
    transition-delay: 0.3s;
}

.rec-4.visible {
    transition-delay: 0.3s;
}

.reveal-box {
    position: relative;
    width: 200px;
    height: 320px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

.box1 {
    cursor: pointer;
    top: -100px;
    transition: all 0.3s ease-in-out;
}

.box2 {
    cursor: pointer;
    top: -50px;
    transition: all 0.3s ease-in-out;
}

.box3 {
    cursor: pointer;
    top: 10px;
    transition: all 0.3s ease-in-out;
}

.box1:hover,
.box2:hover,
.box3:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.6);
    transform: scale(1.05);
}

.reveal-inner {
    position: absolute;
    top: -60px;
    width: 900px;
    height: 520px;
    background-size: cover;
    background-position: center;
    opacity: 1;
    pointer-events: none;
}

.box1 .reveal-inner {
    top: 0;
    left: 0;
}

.box2 .reveal-inner {
    left: -240px;
}

.box3 .reveal-inner {
    top: -125px;
    left: -480px;
}

.reveal-box::before {
    content: '';
    position: absolute;
    inset: 0;
    border: 2px solid rgba(255, 255, 255, 0.1);
    pointer-events: none;
}

.reveal-box-right {
    position: relative;
    width: 200px;
    height: 320px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

.box1-right {
    cursor: pointer;
    top: 10px;
    transition: all 0.3s ease-in-out;
}

.box2-right {
    cursor: pointer;
    top: -50px;
    transition: all 0.3s ease-in-out;
}

.box3-right {
    cursor: pointer;
    top: -100px;
    transition: all 0.3s ease-in-out;
}

.box1-right:hover,
.box2-right:hover,
.box3-right:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.6);
    transform: scale(1.05);
}

.reveal-inner-right {
    position: absolute;
    top: -60px;
    width: 900px;
    height: 520px;
    background-size: cover;
    background-position: center;
    opacity: 1;
    pointer-events: none;
}

.box1-right .reveal-inner-right {
    top: -110px;
    left: 0;
}

.box2-right .reveal-inner-right {
    left: -240px;
}

.box3-right .reveal-inner-right {
    top: -10px;
    left: -480px;
}

.reveal-box-right::before {
    content: '';
    position: absolute;
    inset: 0;
    border: 2px solid rgba(255, 255, 255, 0.1);
    pointer-events: none;
}

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
    max-height: 300px;
    overflow: hidden;
}

.mobile-dropdown-enter-from,
.mobile-dropdown-leave-to {
    opacity: 0;
    max-height: 0;
}
.list-card {
  color: var(--white);
}
</style>
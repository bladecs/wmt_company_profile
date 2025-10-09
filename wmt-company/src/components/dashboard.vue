<script setup>
import { ref, onMounted } from 'vue'
import slider1 from '../assets/img/slider-1.png'
import slider2 from '../assets/img/slider-2.png'
import slider3 from '../assets/img/slider-3.png'
import slider4 from '../assets/img/slider-4.png'

const slides = [slider1, slider2, slider3, slider4]

const currentIndex = ref(0)
const totalSlides = 4
const menuOpen = ref(false)

const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % totalSlides
}

const prevSlide = () => {
    currentIndex.value = (currentIndex.value - 1 + totalSlides) % totalSlides
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
    <div class="w-full h-full flex flex-col">
        <!-- Navbar -->
        <nav class="w-full bg-white flex items-center justify-between px-6 lg:px-10 py-4 shadow-md">
            <!-- Logo -->
            <div class="flex items-center gap-3">
                <img src="../assets/img/Logo_wmt.png" alt="logo-wmt" class="h-10 sm:h-12 md:h-14" />
                <h1 class="font-bold text-base sm:text-lg md:text-xl title-text whitespace-nowrap">
                    WAFIQ MITRA TEKNIK
                </h1>
            </div>

            <!-- Menu desktop -->
            <ul class="hidden lg:flex gap-4 xl:gap-6">
                <li
                    class="activate flex py-2 px-3 rounded-full items-center justify-center gap-1 text-sm xl:text-base font-bold">
                    <span class="material-symbols-outlined icon-outline">home_app_logo</span>Home
                </li>
                <li
                    class="flex py-2 px-3 rounded-full items-center justify-center gap-1 text-sm xl:text-base font-bold">
                    <span class="material-symbols-outlined icon-filled">apartment</span>Company
                </li>
                <li
                    class="flex py-2 px-3 rounded-full items-center justify-center gap-1 text-sm xl:text-base font-bold">
                    <span class="material-symbols-outlined icon-filled">apps</span>Services
                </li>
                <li
                    class="flex py-2 px-3 rounded-full items-center justify-center gap-1 text-sm xl:text-base font-bold">
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
                <a class="font-bold text-[var(--blue)] flex items-center gap-2"><span
                        class="material-symbols-outlined">apartment</span>Company</a>
                <a class="font-bold text-[var(--blue)] flex items-center gap-2"><span
                        class="material-symbols-outlined">apps</span>Services</a>
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
                <div
                    class="bg-gray-400/30 absolute bottom-3 sm:bottom-5 px-3 py-2 rounded-full flex justify-center gap-2">
                    <span v-for="(n, index) in totalSlides" :key="index" class="w-2 h-2 sm:w-3 sm:h-3 rounded-full"
                        :class="currentIndex === index ? 'bg-white' : 'bg-white/50'"></span>
                </div>
            </div>
        </div>

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
        <section id="service" class="relative w-full h-fit flex flex-col overflow-hidden px-15">
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
        <section id="technology">

        </section>
    </div>
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

.list-card {
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
</style>

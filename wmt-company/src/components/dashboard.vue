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
        <section id="about-us" class="w-full h-full flex flex-row p-15 gap-12">
            <div class="content-text flex-1 flex flex-col gap-5">
                <h3 class="p-3 bg-[var(--blue-transparent)] w-fit text-[var(--blue)] font-bold rounded-full">About Our
                    Company</h3>
                <h1 class="font-bold text-[var(--dark-blue)] xl:text-5xl md:text-3xl sm:text-xl">Shaping Precision</h1>
                <h1 class="font-bold text-[var(--blue)] xl:text-5xl md:text-3xl sm:text-xl">Delivering Quality</h1>
                <p class="text-justify text-[var(--gray-dark)] w-150">
                    With over 20 years of expertise in CNC machining, molds & dies, and plastic manufacturing, PT Wafiq
                    Mitra Teknik has grown into a trusted partner for industries seeking precision, innovation, and
                    reliability.
                    Our modern facilities and skilled team enable us to deliver complex, high-quality solutions across
                    sectors such as automotive, consumer goods, and industrial components.
                </p>
                <div class="add-on w-150 flex flex-row justify-between items-center">
                    <div class="sertif flex flex-col">
                        <h1 class="text-[var(--dark-blue)] font-bold text-2xl">ISO 9001</h1>
                        <p class="text-[var(--gray-dark)] ">Certified Qualitiy Management</p>
                    </div>
                    <div class="cs flex flex-col">
                        <h1 class="text-[var(--dark-blue)] font-bold text-2xl">24/7</h1>
                        <p class="text-[var(--gray-dark)] ">Customer Support</p>
                    </div>
                </div>
            </div>
            <div class="content-card flex-1 flex flex-wrap justify-center items-center gap-6 flex-row ">
                <div class="card w-56 h-1/2 rounded-xl bg-white flex flex-col justify-center items-center">
                    <span class="material-symbols-outlined icon-filled bg-(--blue-transparent) p-4 rounded-xl text-[var(--deep-blue)] icon-card">shield</span>
                    <h1 class="text-[var(--blue)] text-lg font-bold">Quality Assurance</h1>
                    <p>ISO certified processes ensuring the highest standards in every product we deliver.</p>
                </div>
                <div class="card w-56 h-1/2 rounded-xl bg-white flex flex-col justify-center items-center">
                    <span class="material-symbols-outlined icon-filled bg-(--blue-transparent) p-4 rounded-xl text-[var(--deep-blue)] icon-card">workspace_premium</span>
                    <h1 class="text-[var(--blue)] text-lg font-bold">Industriy Excellence</h1>
                    <p>ISO certified processes ensuring the highest standards in every product we deliver.</p>
                </div>
                <div class="card w-56 h-1/2 rounded-xl bg-white flex flex-col justify-center items-center">
                    <span class="material-symbols-outlined icon-filled bg-(--blue-transparent) p-4 rounded-xl text-[var(--deep-blue)] icon-card">group</span>
                    <h1 class="text-[var(--blue)] text-lg font-bold">Expert Team</h1>
                    <p>ISO certified processes ensuring the highest standards in every product we deliver.</p>
                </div>
                <div class="card w-56 h-1/2 rounded-xl bg-white flex flex-col justify-center items-center">
                    <span class="material-symbols-outlined icon-filled bg-(--blue-transparent) p-4 rounded-xl text-[var(--deep-blue)] icon-card">target</span>
                    <h1 class="text-[var(--blue)] text-lg font-bold">Precision Focus</h1>
                    <p>ISO certified processes ensuring the highest standards in every product we deliver.</p>
                </div>
            </div>
        </section>
        <section id="service">

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

.card{
    box-shadow: 0 0 10px var(--blue);
}

.icon-card{
    font-size: 2rem;
}
</style>

<script setup>
import { ref, onMounted } from 'vue'

</script>

<template>
    <div class="w-full h-fit flex flex-col">
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
            
        </section>
        <div class="svgGroupFooter w-full h-full relative">
            <img src="../assets/svg/ft1.svg" alt="" class="absolute left-0 bottom-0 z-70">
            <img src="../assets/svg/ft2.svg" alt="" class="absolute left-5 bottom-0 z-40">
            <img src="../assets/svg/ft3.svg" alt="" class="absolute left-80 bottom-0 z-50">
            <img src="../assets/svg/ft4.svg" alt="" class="absolute left-150 bottom-0 z-70">
            <img src="../assets/svg/ft5.svg" alt="" class="absolute right-60 bottom-0">
            <img src="../assets/svg/ft6.svg" alt="" class="absolute right-20 bottom-0 z-40">
            <img src="../assets/svg/ft7.svg" alt="" class="absolute right-0 bottom-0 z-70">
        </div>
        <footer class="w-full h-120 bg-[var(--footer-dark)] flex flex-row items-center justify-between gap-15 p-20">
            <div class="summary flex flex-col items-start w-1/3 gap-4">
                <div class="header flex flex-row items-center gap-5">
                    <img src="../assets/img/Logo_wmt.png" alt="" class="w-30 h-auto">
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
                <a href="#"
                    class="flex flex-row justify-center items-center w-80 h-12 p-5 rounded-xl bg-(--green) text-white">
                    <img src="../assets/icons/whatsapp.png" alt="" class="w-5 h-5 mr-2">
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
                                <img src="../assets/icons/maps.svg" alt="" class="w-5 h-5 mr-2">
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
        </footer>
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
</style>

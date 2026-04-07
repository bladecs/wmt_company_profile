<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCards, Mousewheel, Autoplay, Navigation, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-cards'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

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
const aboutGallery = [
    { image: slider1, alt: 'WMT facility exterior' },
    { image: slider2, alt: 'WMT production environment' },
    { image: slider3, alt: 'WMT manufacturing operations' }
]
const partnerLogos = [
    'PT. MEITOKU',
    'PT. MENARA TERUS MAKMUR',
    'PT. KINGDUAN',
    'PT. PAKOAKUINA',
    'PT. INTI PINDAD MITRA SEJATI',
    'PT. KOMATSU INDONESIA TBK.',
    'PT. WIKA NGK INSULATOR',
    'PT. WIKA INTRADE',
    'POLMAN BANDUNG PMS',
    'PT. ASIAN ISUZU CASTING CENTER',
    'PT. AGRONESIA INKABA',
    'PT. MAKMUR ABADI VALVE',
    'PT. GOODRICH PINDAD AERONAUTICAL SYSTEM INDONESIA',
    'PT. NUSA TOYOTETSU ENGINEERING',
    'PT. INKOASKU',
    'PT. TJ FORGE INDONESIA',
    'PT. FLOWSERVE'
]

// Array untuk gambar teknologi
const techImages = [techImage1, techImage2, techImage3, techImage4, techImage5]

// Data untuk setiap content column
const techContents = [
    {
        title: "Milling 5 AXIS",
        description: "Advanced 5-Axis CNC machining delivers unmatched precision and flexibility, enabling complex parts to be produced in a single setup",
        imageIndex: 0,
        features: ["Simultaneous 5-axis machining", "Complex geometry capabilities", "Reduced setup time", "Superior surface finish"],
        icon: "precision_manufacturing"
    },
    {
        title: "CNC Turning",
        description: "High-precision turning operations for cylindrical parts with superior surface finish and dimensional accuracy",
        imageIndex: 1,
        features: ["Live tooling capabilities", "Automatic bar feeding", "Multi-axis turning", "In-process gauging"],
        icon: "settings"
    },
    {
        title: "EDM Machining",
        description: "Electrical Discharge Machining for complex geometries and hard materials that are difficult to machine conventionally",
        imageIndex: 2,
        features: ["Wire EDM precision cutting", "Sinker EDM for complex cavities", "Hard material processing", "Mirror surface finish"],
        icon: "flash_on"
    },
    {
        title: "Quality Inspection",
        description: "Comprehensive metrology and quality control using advanced CMM and measurement equipment",
        imageIndex: 3,
        features: ["3D CMM scanning", "Optical measurement systems", "Surface roughness analysis", "Statistical process control"],
        icon: "search"
    },
    {
        title: "Surface Treatment",
        description: "Various surface finishing processes including anodizing, plating, and coating for enhanced durability",
        imageIndex: 4,
        features: ["Hard anodizing", "Electroless nickel plating", "PVD coating", "Passivation treatments"],
        icon: "layers"
    }
]

const currentIndex = ref(0)
const totalSlides = 4
const menuOpen = ref(false)

// State untuk dropdown
const companyDropdownOpen = ref(false)
const servicesDropdownOpen = ref(false)

// State untuk technology swiper
const techSwiper = ref(null)
const activeTechIndex = ref(0)
const activeAboutPhoto = ref(1)

// State untuk scroll button
const currentSection = ref('about-us')
const showScrollButton = ref(true)
const isMobile = ref(false)

// Swiper modules
const modules = [EffectCards, Mousewheel, Autoplay, Navigation, Pagination]

// Data untuk services cards
const serviceCards = [
    {
        title: "CNC Machine",
        description: "Our machine lineup supports precision manufacturing from complex CNC work to inspection-ready production support.",
        icon: "precision_manufacturing",
        features: ["2, 3, 4, 5 Axis", "Manual Machine", "3D Printing", "Wirecut", "EDM", "Welding", "Laser Cutting", "3D Scanning", "CMM"],
        height: "h-130"
    },
    {
        title: "Reverse Engineering",
        description: "Accurate digital reconstruction for part redevelopment, redesign, and manufacturing preparation.",
        icon: "engineering",
        features: ["3D Scanning", "Modeling"],
        height: "h-130"
    },
    {
        title: "Inspection",
        description: "Dimensional and technical verification to maintain precision, reliability, and product confidence.",
        icon: "fact_check",
        features: ["Measurement", "NDT"],
        height: "h-130"
    },
    {
        title: "Special Treatment",
        description: "Added finishing and material treatment services for performance, durability, and final-use requirements.",
        icon: "science",
        features: ["Anodize", "Coating", "Hardening", "Nitriding"],
        height: "h-130"
    }
]

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

// Function untuk mengatur active technology index
const onTechSwiper = (swiper) => {
    techSwiper.value = swiper
}

const onTechSlideChange = (swiper) => {
    activeTechIndex.value = swiper.activeIndex
}

const setActiveAboutPhoto = (index) => {
    activeAboutPhoto.value = index
}

const resetActiveAboutPhoto = () => {
    activeAboutPhoto.value = 1
}

// Function untuk smooth scroll ke section
const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        currentSection.value = sectionId
    }
}

// Function untuk scroll ke next section
const scrollToNextSection = () => {
    const sections = ['about-us', 'service', 'technology']
    const currentIndex = sections.indexOf(currentSection.value)
    const nextIndex = (currentIndex + 1) % sections.length
    scrollToSection(sections[nextIndex])
}

// Function untuk detect current section saat scroll
const handleScroll = () => {
    const sections = ['about-us', 'service', 'technology']
    const scrollPosition = window.scrollY + 100

    for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && scrollPosition >= section.offsetTop) {
            currentSection.value = sections[i]
            break
        }
    }
}


const handleResize = () => {
    isMobile.value = window.innerWidth < 768
}

// Swiper configuration untuk services
const swiperOptions = {
    modules: [EffectCards, Mousewheel, Autoplay],
    effect: 'cards',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 0,
    loop: true,
    mousewheel: {
        forceToAxis: true,
        sensitivity: 1,
        releaseOnEdges: true,
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    cardsEffect: {
        slideShadows: false,
        rotate: true,
        perSlideOffset: 18,
        perSlideRotate: 5,
    },
    breakpoints: {
        320: {
            cardsEffect: {
                perSlideOffset: 10,
                perSlideRotate: 3,
            }
        },
        768: {
            cardsEffect: {
                perSlideOffset: 15,
                perSlideRotate: 4,
            }
        },
        1024: {
            cardsEffect: {
                perSlideOffset: 18,
                perSlideRotate: 5,
            }
        }
    }
}

// Swiper configuration untuk technology - DIPERBAIKI
const techSwiperOptions = {
    modules: [Navigation, Pagination, Mousewheel, Autoplay],
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 800,
    mousewheel: {
        forceToAxis: true,
        sensitivity: 1,
        releaseOnEdges: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.tech-swiper-pagination',
        clickable: true,
        dynamicBullets: false,
    },
    navigation: {
        nextEl: '.tech-swiper-button-next',
        prevEl: '.tech-swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        1024: {
            slidesPerView: 1,
            spaceBetween: 0,
        }
    },
    on: {
        slideChange: onTechSlideChange
    }
}

onMounted(() => {
    setInterval(nextSlide, 5000)
    handleResize()
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    // Set initial section
    const aboutSection = document.getElementById('about-us')
    if (aboutSection) {
        currentSection.value = 'about-us'
    }
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('resize', handleResize)
})
</script>

<template>
    <div class="w-full h-fit flex flex-col">
        <!-- Slider -->
        <div class="slider relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[100vh] overflow-hidden">
            <div class="img-content flex h-full transition-transform duration-700 ease-in-out"
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
                        class="slider-button bg-white/20 hidden md:flex justify-center items-center hover:bg-white/30 p-2 md:p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110">
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
                        <!-- <div class="link-group flex flex-row flex-wrap justify-center gap-3 mt-5">
                            <a class="link-button font-bold px-4 py-2 sm:px-5 sm:py-2 w-32 sm:w-36 rounded-full text-center transition-all duration-300 hover:scale-105"
                                href="#">Contact Us</a>
                            <a class="link-button font-bold px-4 py-2 sm:px-5 sm:py-2 w-32 sm:w-36 rounded-full text-center transition-all duration-300 hover:scale-105"
                                href="#">About Us</a>
                        </div> -->
                    </div>

                    <!-- Next -->
                    <button @click="nextSlide"
                        class="slider-button bg-white/20 hidden md:flex justify-center items-center hover:bg-white/30 p-2 md:p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110">
                        <span class="material-symbols-outlined text-2xl md:text-3xl">chevron_right</span>
                    </button>
                </div>

                <!-- Indicator -->
                <div
                    class="bg-white/20 absolute bottom-3 sm:bottom-5 px-3 py-2 rounded-full flex justify-center gap-2 backdrop-blur-sm">
                    <span v-for="(n, index) in totalSlides" :key="index"
                        class="w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300"
                        :class="currentIndex === index ? 'bg-white scale-125' : 'bg-white/50'"></span>
                </div>
            </div>
        </div>
        <!-- Fixed Scroll Button -->
        <button @click="scrollToNextSection"
            class="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[var(--blue)] hover:bg-[var(--deep-blue)] rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group scroll-button"
            :class="{
                'rotate-180': currentSection === 'technology'
            }">
            <span class="material-symbols-outlined text-white transition-transform duration-300 group-hover:scale-110">
                expand_more
            </span>
        </button>

        <!-- Content -->
        <section id="about-us"
            class="w-full h-fit flex flex-col xl:flex-row items-center xl:items-center justify-center xl:justify-between gap-12 px-6 md:px-12 xl:px-24 py-20 bg-[var(--dark-blue)]">
            <!-- LEFT CONTENT -->
            <div class="content-text flex-1 max-w-xl flex flex-col gap-6">
                <h3
                    class="p-3 bg-[var(--blue-transparent)] w-fit text-[var(--blue)] font-bold rounded-full text-sm md:text-base">
                    About Our Company
                </h3>

                <div class="flex flex-col gap-2">
                    <h1 class="font-bold text-[var(--white)] text-3xl md:text-4xl xl:text-5xl">Shaping Precision
                    </h1>
                    <h1 class="font-bold text-[var(--blue)] text-3xl md:text-4xl xl:text-5xl">Delivering Quality</h1>
                </div>

                <p class="text-[var(--white)] text-justify leading-relaxed text-sm md:text-base">
                    With over 20 years of expertise in CNC machining, molds & dies, and plastic manufacturing, PT Wafiq
                    Mitra Teknik has grown into a trusted partner for industries seeking precision, innovation, and
                    reliability. Our modern facilities and skilled team enable us to deliver complex, high-quality
                    solutions
                    across sectors such as automotive, consumer goods, and industrial components.
                </p>

                <div class="flex flex-row justify-between items-center mt-4">
                    <div>
                        <h1 class="text-[var(--blue)] font-bold text-xl md:text-2xl">ISO 9001</h1>
                        <p class="text-[var(--white)] text-sm md:text-base">Certified Quality Management</p>
                    </div>
                    <div>
                        <h1 class="text-[var(--blue)] font-bold text-xl md:text-2xl">24/7</h1>
                        <p class="text-[var(--white)] text-sm md:text-base">Customer Support</p>
                    </div>
                </div>
            </div>

            <!-- RIGHT PHOTO COLLAGE -->
            <div class="content-card flex-1 w-full max-w-2xl">
                <div class="about-photo-panel" @mouseleave="resetActiveAboutPhoto">
                    <div class="about-photo-glow about-photo-glow-left"></div>
                    <div class="about-photo-glow about-photo-glow-right"></div>
                    <div class="about-photo-stage">
                        <button
                            v-for="(photo, index) in aboutGallery"
                            :key="photo.alt"
                            type="button"
                            class="about-photo-card"
                            :class="{
                                'is-active': activeAboutPhoto === index,
                                'is-left': activeAboutPhoto !== index && index < activeAboutPhoto,
                                'is-right': activeAboutPhoto !== index && index > activeAboutPhoto
                            }"
                            @mouseenter="setActiveAboutPhoto(index)"
                        >
                            <img :src="photo.image" :alt="photo.alt" class="about-photo-image">
                            <div class="about-photo-overlay"></div>
                        </button>
                    </div>
                    <div class="about-photo-caption">
                        <p class="about-photo-caption-text">
                            <span class="material-symbols-outlined">touch_app</span>
                            Hover to explore our gallery
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION SERVICE DENGAN SWIPER YANG DIPERBAIKI -->
        <section id="service"
            class="relative w-full min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-[var(--dark-blue)] to-[var(--footer-dark)] overflow-hidden">
            <div class="content flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-6">
                <div class="text-group flex flex-col items-center justify-center gap-5 mb-16 text-center">
                    <h3
                        class="p-3 bg-[var(--blue-transparent)] w-fit text-[var(--blue)] font-bold rounded-full text-sm md:text-base">
                        About Our Services
                    </h3>

                    <div class="flex flex-col gap-4 items-center justify-center">
                        <h1 class="font-bold text-[var(--white)] text-4xl md:text-5xl xl:text-6xl leading-tight">
                            Comprehensive Manufacturing</h1>
                        <h1 class="font-bold text-[var(--blue)] text-4xl md:text-5xl xl:text-6xl leading-tight">
                            Solutions</h1>
                        <p class="text-base md:text-xl text-[var(--white)] max-w-4xl leading-relaxed">From precision machining to
                            specialized manufacturing, we offer a complete range of services to meet your most demanding
                            requirements</p>
                    </div>
                </div>

                <!-- Swiper Container yang diperbaiki -->
                    <div class="w-full max-w-6xl h-120 md:h-140 relative flex justify-center items-center overflow-visible px-2 sm:px-0">
                    <div
                        class="swiper-container-wrapper w-full h-full flex justify-center items-center overflow-visible">
                        <Swiper v-bind="swiperOptions" class="services-swiper h-full mx-auto">
                            <SwiperSlide v-for="(service, index) in serviceCards" :key="index"
                                class="flex items-center justify-center overflow-visible">
                                <div
                                    :class="['service-card relative w-full max-w-[20rem] md:max-w-[24rem] flex flex-col p-6 md:p-8 items-start justify-between bg-[var(--dark-blue)] rounded-3xl border-2 border-[var(--blue-transparent)] backdrop-blur-sm transition-all duration-500 transform', service.height]">
                                    <div class="text-group flex flex-col gap-4 z-20 w-full">
                                        <div class="flex items-center gap-4">
                                            <span
                                                class="material-symbols-outlined text-[var(--deep-blue)] p-4 bg-[var(--white)] icon-service w-fit rounded-2xl shadow-lg">
                                                {{ service.icon }}
                                            </span>
                                            <h1 class="text-2xl md:text-3xl font-bold text-[var(--white)]">{{
                                                service.title }}</h1>
                                        </div>
                                        <p class="text-[var(--white)] text-base leading-relaxed">{{ service.description
                                            }}</p>
                                        <ul class="list-none space-y-2">
                                            <li v-for="(feature, featureIndex) in service.features" :key="featureIndex"
                                                class="list-card text-sm md:text-base flex items-center gap-3">
                                                <div class="w-2 h-2 bg-[var(--blue)] rounded-full"></div>
                                                {{ feature }}
                                            </li>
                                        </ul>
                                    </div>
                                    <img src="../assets/svg/rec_5.svg" alt="rec-5"
                                        class="z-0 absolute -bottom-2 -right-2 w-40 md:w-48 opacity-80">
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>

                <!-- Instruction text -->
                <div class="mt-12 text-center">
                    <p
                        class="text-[var(--white)] text-lg opacity-70 flex items-center justify-center gap-2 instruction-pulse">
                        <span class="material-symbols-outlined text-sm">swipe</span>
                        Drag to explore our services
                    </p>
                </div>
            </div>
        </section>

        <!-- SECTION TECHNOLOGY DENGAN SWIPER YANG BISA DIGESER -->
        <section id="technology"
            class="relative w-full min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-[var(--footer-dark)] to-[var(--black-blue)] overflow-hidden">
            <!-- Background Elements -->
            <div class="absolute inset-0 overflow-hidden z-0">
                <div class="floating-shape shape-1"></div>
                <div class="floating-shape shape-2"></div>
                <div class="floating-shape shape-3"></div>
                <div class="floating-shape shape-4"></div>
            </div>

            <div
                class="content flex flex-col w-full h-full items-center justify-center gap-12 md:gap-16 relative z-10 max-w-7xl mx-auto px-6">
                <!-- Header Section -->
                <div class="text-center max-w-4xl mx-auto">
                    <h3
                        class="p-3 bg-[var(--blue-transparent)] w-fit mx-auto text-[var(--blue)] font-bold rounded-full text-sm md:text-base mb-6">
                        Trusted Partners
                    </h3>
                    <h1 class="font-bold text-[var(--white)] text-3xl md:text-4xl xl:text-5xl mb-4">
                        Companies That
                    </h1>
                    <h1 class="font-bold text-[var(--blue)] text-3xl md:text-4xl xl:text-5xl mb-6">
                        Work With Us
                    </h1>
                    <p class="text-[var(--white)] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        Trusted by leading companies across manufacturing, industrial, automotive, aerospace, and construction sectors.
                    </p>
                </div>

                <div class="w-full max-w-6xl relative partner-marquee-shell">
                    <div class="partner-marquee-row">
                        <div class="partner-marquee-track">
                            <div v-for="(partner, index) in [...partnerLogos, ...partnerLogos]" :key="`row1-${index}`" class="partner-wordmark">
                                {{ partner }}
                            </div>
                        </div>
                    </div>
                    <div class="partner-marquee-row reverse">
                        <div class="partner-marquee-track">
                            <div v-for="(partner, index) in [...partnerLogos, ...partnerLogos]" :key="`row2-${index}`" class="partner-wordmark subtle">
                                {{ partner }}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="text-center mt-4 md:mt-6">
                    <p class="text-[var(--white)] text-base md:text-lg opacity-70">
                        Growing together with trusted industrial partners across Indonesia.
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>

.img-content {
    will-change: transform;
}

.slider img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
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
    transition: all 0.3s ease-in-out;
}

.icon-card {
    font-size: 2rem;
}

.icon-service {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.25);
    font-size: 2.5rem;
}

.card:hover {
    box-shadow: 0 0 20px var(--blue);
    transform: translateY(-5px);
}

/* Fixed Scroll Button */
.scroll-button {
    animation: float 3s ease-in-out infinite;
    border: 2px solid rgba(255, 255, 255, 0.2);
}

.scroll-button:hover {
    animation: none;
    transform: scale(1.1);
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-5px);
    }
}

/* Technology Section Styles */
#technology {
    background: linear-gradient(135deg, var(--footer-dark) 0%, var(--black-blue) 50%, var(--dark-blue) 100%);
    position: relative;
    overflow: hidden;
}

.partner-marquee-shell {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    overflow: hidden;
    mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
    -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
}

.partner-marquee-row {
    overflow: hidden;
    border-radius: 9999px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(12px);
    padding: 1rem 0;
}

.partner-marquee-track {
    display: flex;
    width: max-content;
    gap: 1rem;
    animation: partnerMarquee 42s linear infinite;
}

.partner-marquee-row.reverse .partner-marquee-track {
    animation-direction: reverse;
    animation-duration: 48s;
}

.partner-wordmark {
    flex-shrink: 0;
    padding: 1rem 1.4rem;
    border-radius: 9999px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    background: rgba(255, 255, 255, 0.08);
    color: rgba(255, 255, 255, 0.92);
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    white-space: nowrap;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.partner-wordmark.subtle {
    color: rgba(255, 255, 255, 0.78);
    background: rgba(255, 255, 255, 0.05);
}

@keyframes partnerMarquee {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(calc(-50% - 0.5rem));
    }
}

/* Floating Background Shapes */
.floating-shape {
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(circle, var(--blue-transparent) 0%, transparent 70%);
    animation: shapeFloat 15s infinite ease-in-out;
    z-index: 0;
}

.shape-1 {
    width: 300px;
    height: 300px;
    top: 10%;
    left: 5%;
    animation-delay: 0s;
}

.shape-2 {
    width: 200px;
    height: 200px;
    top: 60%;
    right: 10%;
    animation-delay: 5s;
}

.shape-3 {
    width: 150px;
    height: 150px;
    bottom: 20%;
    left: 15%;
    animation-delay: 10s;
}

.shape-4 {
    width: 250px;
    height: 250px;
    top: 30%;
    right: 20%;
    animation-delay: 7s;
}

@keyframes shapeFloat {

    0%,
    100% {
        transform: translateY(0) rotate(0deg);
        opacity: 0.3;
    }

    33% {
        transform: translateY(-20px) rotate(120deg);
        opacity: 0.5;
    }

    66% {
        transform: translateY(10px) rotate(240deg);
        opacity: 0.4;
    }
}

/* Tech Swiper Styles */
.tech-swiper {
    width: 100%;
    height: 100%;
    border-radius: 24px;
    overflow: hidden;
}

.tech-slide-content {
    padding: 20px;
}

.text-content {
    transition: all 0.4s ease-in-out;
    position: relative;
    overflow: hidden;
}

.text-content::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--blue), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
}

.tech-swiper-button-prev:hover,
.tech-swiper-button-next:hover {
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
}

/* Improved Reveal Box Styles */
.reveal-box {
    position: relative;
    width: 160px;
    height: 280px;
    overflow: hidden;
    border-radius: 16px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
    transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transform-style: preserve-3d;
    border: 1px solid rgba(255, 255, 255, 0.15);
}

.reveal-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, transparent 50%);
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: 2;
}

.box1 {
    cursor: pointer;
    top: -40px;
    z-index: 3;
    transform: rotateY(-8deg) translateZ(20px);
}

.box2 {
    cursor: pointer;
    top: -20px;
    z-index: 2;
    transform: rotateY(0deg) translateZ(10px);
}

.box3 {
    cursor: pointer;
    top: 0px;
    z-index: 1;
    transform: rotateY(8deg) translateZ(0px);
}

.reveal-box.active {
    box-shadow: 0 25px 50px rgba(59, 130, 246, 0.4);
}

.reveal-box:hover {
    box-shadow: 0 30px 60px rgba(59, 130, 246, 0.6);
    transform: scale(1.12) translateZ(30px);
    z-index: 10;
}

.reveal-box:hover .reveal-overlay {
    opacity: 1;
}

.reveal-inner {
    position: absolute;
    top: -60px;
    width: 800px;
    height: 480px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 1;
    pointer-events: none;
    transition: transform 0.6s ease;
}

.box1 .reveal-inner {
    top: 0;
    left: 0;
}

.box2 .reveal-inner {
    left: -220px;
}

.box3 .reveal-inner {
    top: -120px;
    left: -440px;
}

.reveal-box:hover .reveal-inner {
    transform: scale(1.08);
}

.reveal-box::before {
    content: '';
    position: absolute;
    inset: 0;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    pointer-events: none;
    z-index: 1;
    transition: all 0.4s ease;
}

.reveal-box:hover::before {
    border-color: rgba(59, 130, 246, 0.6);
    box-shadow: 0 0 30px rgba(59, 130, 246, 0.4);
}

.tech-glow {
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.6s ease;
    pointer-events: none;
    z-index: 0;
}

.image-section:hover .tech-glow {
    opacity: 1;
}

/* Features Grid */
.features-grid {
    position: relative;
}

.feature-item {
    cursor: default;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
}

.feature-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    border-color: rgba(59, 130, 246, 0.3);
}


.tech-swiper-pagination-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
}

.tech-swiper-pagination {
    width: 100% !important;
    left: 0 !important;
    transform: none !important;
    text-align: center;
}

:deep(.tech-swiper-pagination.swiper-pagination-horizontal) {
    left: 0 !important;
    width: 100% !important;
}

:deep(.tech-swiper-pagination .swiper-pagination-bullets),
:deep(.tech-swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets) {
    width: 100% !important;
    width: max-content !important;
    left: 50% !important;
    transform: translateX(-50%);
}

/* Swiper Pagination Customization */
:deep(.swiper-pagination-bullet) {
    width: 10px;
    height: 10px;
    background: var(--blue-transparent);
    opacity: 0.7;
    transition: all 0.3s ease;
}

:deep(.swiper-pagination-bullet-active) {
    background: var(--blue);
    opacity: 1;
    transform: scale(1.2);
}

:deep(.swiper-pagination-bullet:hover) {
    opacity: 1;
    transform: scale(1.1);
}

/* Responsive adjustments */
@media (max-width: 1024px) {
    .tech-swiper-button-prev {
        left: 0.5rem !important;
    }

    .tech-swiper-button-next {
        right: 0.5rem !important;
    }
}

@media (max-width: 768px) {
    .tech-swiper {
        min-height: 560px;
    }

    .text-section {
        width: 100%;
        max-width: 100%;
    }

    .tech-slide-content {
        flex-direction: column;
        gap: 2rem;
        padding: 10px;
    }

    .reveal-box {
        width: 110px;
        height: 200px;
    }

    .box1 {
        top: -30px;
    }

    .box2 {
        top: -15px;
    }

    .box3 {
        top: 0px;
    }

    .reveal-inner {
        width: 600px;
        height: 360px;
    }

    .text-content {
        padding: 1.5rem;
    }

    .features-grid {
        grid-template-columns: 1fr;
    }


    .floating-shape {
        display: none;
    }

    .scroll-button {
        bottom: 4rem;
        right: 1rem;
        width: 3rem;
        height: 3rem;
    }
}

@media (max-width: 480px) {
    .service-card {
        max-width: 16.5rem;
    }

    .h-120,
    .h-130,
    .h-140 {
        height: auto;
        min-height: 26rem;
    }

    .reveal-box {
        width: 90px;
        height: 160px;
    }

    .box1,
    .box2,
    .box3 {
        top: 0 !important;
    }

    .tech-swiper-button-prev,
    .tech-swiper-button-next {
        width: 2.5rem;
        height: 2.5rem;
    }
}

/* Service Section Styles */
.list-card {
    color: var(--white);
}

.services-swiper {
    width: 100%;
    height: 100%;
    padding: 40px 0;
    perspective: 1200px;
    overflow: visible !important;
}

.swiper-container-wrapper {
    overflow: visible !important;
}

:deep(.swiper-wrapper) {
    align-items: center;
    overflow: visible !important;
}

:deep(.swiper-slide) {
    transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    filter: blur(12px) brightness(0.7);
    opacity: 0.4;
    transform: scale(0.75) translateZ(-100px);
    transform-style: preserve-3d;
    overflow: visible !important;
}

:deep(.swiper-slide-active) {
    filter: blur(0) brightness(1);
    opacity: 1;
    transform: scale(1) translateZ(0);
    z-index: 20;
}

:deep(.swiper-slide-prev) {
    filter: blur(6px) brightness(0.8);
    opacity: 0.7;
    transform: scale(0.85) translateX(80px) translateZ(-50px) rotateY(-15deg);
}

:deep(.swiper-slide-next) {
    filter: blur(6px) brightness(0.8);
    opacity: 0.7;
    transform: scale(0.85) translateX(-80px) translateZ(-50px) rotateY(15deg);
}

.service-card {
    height: 520px;
    min-height: 520px;
    width: 100%;
    box-shadow:
        0 10px 40px rgba(0, 0, 0, 0.3),
        0 0 0 1px rgba(59, 130, 246, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
    background: linear-gradient(135deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.9));
    backdrop-filter: blur(10px);
    transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    overflow: hidden !important;
}

/* Efek glow pada card aktif */
:deep(.swiper-slide-active) .service-card {
    box-shadow:
        0 0 0 1px rgba(59, 130, 246, 0.3),
        0 25px 50px -12px rgba(59, 130, 246, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
    animation: cardGlow 3s ease-in-out infinite alternate;
}

@keyframes cardGlow {
    0% {
        box-shadow:
            0 0 0 1px rgba(59, 130, 246, 0.3),
            0 25px 50px -12px rgba(59, 130, 246, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
    }

    100% {
        box-shadow:
            0 0 0 1px rgba(59, 130, 246, 0.4),
            0 25px 60px -8px rgba(59, 130, 246, 0.6),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
    }
}

.service-card:hover {
    transform: translateY(-8px) scale(1.02);
}

.h-120 {
    height: 30rem;
}

.h-130 {
    height: 32.5rem;
}

.h-140 {
    height: 35rem;
}

@media (max-width: 768px) {
    .service-card {
        width: 100%;
        max-width: 18.5rem;
        min-height: 28rem;
        height: auto;
    }

    .h-120 {
        height: 28rem;
    }

    .h-130 {
        height: 30rem;
    }

    .h-140 {
        height: 32rem;
    }
}

:deep(.services-swiper)::-webkit-scrollbar {
    display: none;
}

@media (max-width: 768px) {
    .services-swiper {
        padding: 20px 0;
        perspective: 800px;
    }

    :deep(.swiper-slide) {
        transform: scale(0.7) translateZ(-80px);
    }

    :deep(.swiper-slide-active) {
        transform: scale(0.85) translateZ(0);
    }

    :deep(.swiper-slide-prev) {
        transform: scale(0.75) translateX(60px) translateZ(-40px) rotateY(-10deg);
    }

    :deep(.swiper-slide-next) {
        transform: scale(0.75) translateX(-60px) translateZ(-40px) rotateY(10deg);
    }
}

@keyframes pulse {

    0%,
    100% {
        opacity: 0.7;
        transform: translateY(0);
    }

    50% {
        opacity: 1;
        transform: translateY(-3px);
    }
}

.instruction-pulse {
    animation: pulse 2s ease-in-out infinite;
}

.services-swiper::before {
    content: '';
    position: absolute;
    top: 20%;
    left: 10%;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
    border-radius: 50%;
    animation: float 6s ease-in-out infinite;
    z-index: -1;
}

.services-swiper::after {
    content: '';
    position: absolute;
    bottom: 20%;
    right: 10%;
    width: 150px;
    height: 150px;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%);
    border-radius: 50%;
    animation: float 8s ease-in-out infinite reverse;
    z-index: -1;
}

#service {
    overflow: hidden !important;
}

.swiper-container-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: visible !important;
}

:deep(.swiper) {
    overflow: visible !important;
}

:deep(.swiper-slide) {
    display: flex;
    justify-content: center;
    align-items: center;
}

.service-card {
    margin: 0 auto;
    overflow: hidden !important;
}

.text-group {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.text-group p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.text-group ul {
    max-height: 120px;
    overflow-y: auto;
}

.text-group ul::-webkit-scrollbar {
    width: 4px;
}

.text-group ul::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 2px;
}

.text-group ul::-webkit-scrollbar-thumb {
    background: var(--blue);
    border-radius: 2px;
}

.about-photo-panel {
    position: relative;
    min-height: 420px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.about-photo-glow {
    position: absolute;
    border-radius: 9999px;
    filter: blur(42px);
    opacity: 0.45;
    pointer-events: none;
}

.about-photo-glow-left {
    width: 170px;
    height: 170px;
    left: 8%;
    top: 14%;
    background: rgba(255, 255, 255, 0.12);
}

.about-photo-glow-right {
    width: 190px;
    height: 190px;
    right: 6%;
    bottom: 8%;
    background: rgba(2, 179, 247, 0.14);
}

.about-photo-stage {
    position: relative;
    width: min(100%, 520px);
    height: 360px;
    flex-shrink: 0;
}

.about-photo-card {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 220px;
    height: 270px;
    border: none;
    padding: 0;
    border-radius: 28px;
    overflow: hidden;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 22px 45px rgba(0, 0, 0, 0.28);
    transition:
        transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
        box-shadow 0.45s ease,
        filter 0.35s ease;
}

.about-photo-card.is-left {
    transform: translate(-68%, -52%) rotate(-10deg) scale(0.92);
    z-index: 1;
}

.about-photo-card.is-right {
    transform: translate(-32%, -48%) rotate(10deg) scale(0.92);
    z-index: 1;
}

.about-photo-card.is-active {
    transform: translate(-50%, -50%) rotate(0deg) scale(1.22);
    z-index: 3;
    box-shadow: 0 34px 72px rgba(0, 0, 0, 0.42);
    filter: saturate(1.08);
}

.about-photo-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.about-photo-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 19, 26, 0.28), rgba(0, 19, 26, 0.02) 45%);
}

.about-photo-caption {
    position: relative;
    z-index: 4;
    margin-top: 1.4rem;
    text-align: center;
    width: 100%;
}

.about-photo-caption-text {
    color: rgba(255, 255, 255, 0.72);
    font-size: 1rem;
    line-height: 1.4;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.55rem;
    font-weight: 600;
}

.about-photo-caption-text .material-symbols-outlined {
    font-size: 1.05rem;
}

@media (max-width: 768px) {
    .about-photo-panel {
        min-height: 360px;
    }

    .about-photo-stage {
        height: 300px;
    }

    .about-photo-card {
        width: 170px;
        height: 220px;
        border-radius: 24px;
    }

    .about-photo-card.is-left {
        transform: translate(-72%, -52%) rotate(-9deg) scale(0.92);
    }

    .about-photo-card.is-right {
        transform: translate(-28%, -48%) rotate(9deg) scale(0.92);
    }

    .about-photo-card.is-active {
        transform: translate(-50%, -50%) rotate(0deg) scale(1.16);
    }
}
</style>

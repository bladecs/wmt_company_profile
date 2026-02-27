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

// State untuk scroll button
const currentSection = ref('about-us')
const showScrollButton = ref(true)
const isMobile = ref(false)

// Swiper modules
const modules = [EffectCards, Mousewheel, Autoplay, Navigation, Pagination]

// Data untuk services cards
const serviceCards = [
    {
        title: "Precision Part",
        description: "High-precision machining and manufacturing of complex components with tight tolerances",
        icon: "architecture",
        features: ["CNC Machining", "Quality Control", "Custom Solutions"],
        height: "h-130"
    },
    {
        title: "Plastic Injection",
        description: "High-quality plastic injection molding for durable and precision-engineered parts",
        icon: "polymer",
        features: ["Custom Mold Design", "Mass Production", "Surface Finishing"],
        height: "h-130"
    },
    {
        title: "Mold & Dies",
        description: "Design and fabrication of high-precision molds and dies for industrial applications",
        icon: "extension",
        features: ["Tool Design", "Die Manufacturing", "Maintenance & Repair"],
        height: "h-130"
    },
    {
        title: "Medical Part",
        description: "Manufacturing of precision components for medical and healthcare equipment",
        icon: "ecg_heart",
        features: ["Biocompatible Materials", "Cleanroom Production", "Regulatory Compliance"],
        height: "h-130"
    },
    {
        title: "Turbine Part",
        description: "Precision manufacturing of turbine components for energy and aerospace industries",
        icon: "mode_fan",
        features: ["High-Temperature Alloys", "Aerodynamic Design", "Performance Testing"],
        height: "h-130"
    },
    {
        title: "Rubber Part",
        description: "Custom rubber parts for automotive, industrial, and consumer applications",
        icon: "eraser_size_3",
        features: ["Molded Rubber Components", "Durability Testing", "Material Optimization"],
        height: "h-130"
    },
    {
        title: "Specialized Manufacturing",
        description: "Tailored manufacturing solutions for unique and complex requirements across various industries",
        icon: "precision_manufacturing",
        features: ["Prototype Development", "Small Batch Production", "Technical Consultation"],
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

            <!-- RIGHT CARDS -->
            <div class="content-card flex-1 grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-2xl">
                <div
                    class="card py-10 px-6 md:px-8 rounded-2xl bg-white shadow-md border border-[var(--blue-transparent)] flex flex-col items-center text-center gap-2 hover:shadow-lg transition">
                    <span
                        class="material-symbols-outlined text-[var(--deep-blue)] bg-[var(--blue-transparent)] p-3 rounded-full">shield</span>
                    <h1 class="text-[var(--blue)] text-lg font-bold">Quality Assurance</h1>
                    <p class="text-sm text-[var(--gray-dark)]">ISO certified processes ensuring the highest standards in
                        every product we deliver.</p>
                </div>

                <div
                    class="card py-10 px-6 md:px-8 rounded-2xl bg-white shadow-md border border-[var(--blue-transparent)] flex flex-col items-center text-center gap-2 hover:shadow-lg transition">
                    <span
                        class="material-symbols-outlined text-[var(--deep-blue)] bg-[var(--blue-transparent)] p-3 rounded-full">workspace_premium</span>
                    <h1 class="text-[var(--blue)] text-lg font-bold">Industry Excellence</h1>
                    <p class="text-sm text-[var(--gray-dark)]">Delivering top-tier solutions backed by decades of
                        experience.</p>
                </div>

                <div
                    class="card py-10 px-6 md:px-8 rounded-2xl bg-white shadow-md border border-[var(--blue-transparent)] flex flex-col items-center text-center gap-2 hover:shadow-lg transition">
                    <span
                        class="material-symbols-outlined text-[var(--deep-blue)] bg-[var(--blue-transparent)] p-3 rounded-full">group</span>
                    <h1 class="text-[var(--blue)] text-lg font-bold">Expert Team</h1>
                    <p class="text-sm text-[var(--gray-dark)]">Our skilled professionals ensure precision and quality in
                        every project.</p>
                </div>

                <div
                    class="card py-10 px-6 md:px-8 rounded-2xl bg-white shadow-md border border-[var(--blue-transparent)] flex flex-col items-center text-center gap-2 hover:shadow-lg transition">
                    <span
                        class="material-symbols-outlined text-[var(--deep-blue)] bg-[var(--blue-transparent)] p-3 rounded-full">target</span>
                    <h1 class="text-[var(--blue)] text-lg font-bold">Precision Focus</h1>
                    <p class="text-sm text-[var(--gray-dark)]">Dedicated to achieving accuracy in every manufacturing
                        step.</p>
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
                        Advanced Technology
                    </h3>
                    <h1 class="font-bold text-[var(--white)] text-3xl md:text-4xl xl:text-5xl mb-4">
                        Cutting-Edge Manufacturing
                    </h1>
                    <h1 class="font-bold text-[var(--blue)] text-3xl md:text-4xl xl:text-5xl mb-6">
                        Technologies
                    </h1>
                    <p class="text-[var(--white)] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        Discover our advanced manufacturing technologies that deliver precision, quality, and innovation
                    </p>
                </div>

                <!-- Technology Swiper Container -->
                <div class="w-full max-w-6xl relative">
                    <!-- Navigation Buttons - POSISI DIPERBAIKI -->
                    <div
                        class="tech-swiper-button-prev absolute left-1 md:left-2 lg:-left-6 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer bg-[var(--blue-transparent)] hover:bg-[var(--blue)] rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-[var(--blue)] shadow-xl hover:shadow-2xl">
                        <span
                            class="material-symbols-outlined text-[var(--white)] text-lg md:text-xl">chevron_left</span>
                    </div>

                    <div
                        class="tech-swiper-button-next absolute right-1 md:right-2 lg:-right-6 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer bg-[var(--blue-transparent)] hover:bg-[var(--blue)] rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-[var(--blue)] shadow-xl hover:shadow-2xl">
                        <span
                            class="material-symbols-outlined text-[var(--white)] text-lg md:text-xl">chevron_right</span>
                    </div>

                    <!-- Swiper Container -->
                    <div class="w-full h-[560px] md:h-[700px] px-2 sm:px-6 md:px-12">
                        <Swiper v-bind="techSwiperOptions" @swiper="onTechSwiper" class="tech-swiper h-full">
                            <SwiperSlide v-for="(tech, index) in techContents" :key="index"
                                class="flex items-center justify-center">
                                <div
                                    class="tech-slide-content w-full h-full flex flex-col md:flex-row items-center md:items-stretch justify-center md:justify-between gap-8 md:gap-12 p-4 md:p-6">
                                    <!-- Image Section -->
                                    <div
                                        v-if="!isMobile" class="image-section flex-1 justify-center md:justify-start order-2 md:order-1">
                                        <div
                                            class="relative w-full max-w-lg h-80 md:h-96 flex flex-row gap-4 md:gap-6 justify-center items-center">
                                            <div class="reveal-box box1" :class="{ 'active': activeTechIndex === index }">
                                                <div class="reveal-inner"
                                                    :style="{ backgroundImage: getTechBackground(tech.imageIndex) }">
                                                </div>
                                                <div class="reveal-overlay"></div>
                                            </div>
                                            <div class="reveal-box box2" :class="{ 'active': activeTechIndex === index }">
                                                <div class="reveal-inner"
                                                    :style="{ backgroundImage: getTechBackground(tech.imageIndex) }">
                                                </div>
                                                <div class="reveal-overlay"></div>
                                            </div>
                                            <div class="reveal-box box3" :class="{ 'active': activeTechIndex === index }">
                                                <div class="reveal-inner"
                                                    :style="{ backgroundImage: getTechBackground(tech.imageIndex) }">
                                                </div>
                                                <div class="reveal-overlay"></div>
                                            </div>
                                            <div class="tech-glow"></div>
                                        </div>
                                    </div>

                                    <!-- Text Content Section -->
                                    <div class="text-section flex-1 w-full max-w-xl md:max-w-none lg:max-w-xl order-1 md:order-2">
                                        <div
                                            class="text-content bg-gradient-to-br from-[var(--dark-blue)] to-[var(--black-blue)] bg-opacity-80 p-6 md:p-8 rounded-3xl border border-[var(--blue-transparent)] backdrop-blur-lg shadow-2xl">
                                            <div class="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                                                <span
                                                    class="material-symbols-outlined text-[var(--blue)] text-2xl md:text-4xl bg-[var(--blue-transparent)] p-2 md:p-3 rounded-2xl">
                                                    {{ tech.icon }}
                                                </span>
                                                <h1 class="text-2xl md:text-4xl font-bold text-[var(--blue)]">{{
                                                    tech.title }}</h1>
                                            </div>

                                            <p
                                                class="text-[var(--white)] text-base md:text-xl leading-relaxed mb-6 md:mb-8">
                                                {{ tech.description }}
                                            </p>

                                            <div class="features-grid grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                                                <div v-for="(feature, featureIndex) in tech.features"
                                                    :key="featureIndex"
                                                    class="feature-item flex items-center gap-2 md:gap-3 p-3 md:p-4 rounded-xl bg-[var(--blue-transparent)] bg-opacity-30 transition-all duration-300 hover:bg-opacity-50 border border-[var(--blue-transparent)]">
                                                    <div
                                                        class="w-2 h-2 md:w-3 md:h-3 bg-[var(--blue)] rounded-full flex-shrink-0">
                                                    </div>
                                                    <span class="text-[var(--white)] text-sm md:text-base">{{ feature
                                                        }}</span>
                                                </div>
                                            </div>

                                            <div
                                                class="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-[var(--blue-transparent)]">
                                                <div class="flex items-center justify-between">
                                                    <span class="text-[var(--blue)] text-xs md:text-sm font-semibold">
                                                        Technology {{ index + 1 }}/{{ techContents.length }}
                                                    </span>
                                                    <div class="flex gap-1 md:gap-2">
                                                        <div v-for="i in techContents.length" :key="i"
                                                            :class="['w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-300', i - 1 === activeTechIndex ? 'bg-[var(--blue)]' : 'bg-[var(--blue-transparent)]']">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    <!-- Pagination -->
                    <div class="tech-swiper-pagination-wrapper mt-6 md:mt-8">
                        <div class="tech-swiper-pagination"></div>
                    </div>
                </div>

                <!-- Instruction Text -->
                <div class="text-center mt-6 md:mt-8">
                    <p
                        class="text-[var(--white)] text-base md:text-lg opacity-70 flex items-center justify-center gap-2 md:gap-3 instruction-pulse">
                        <span class="material-symbols-outlined text-sm">swipe</span>
                        Swipe or use navigation to explore technologies
                        <span class="material-symbols-outlined text-sm">touch_app</span>
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
</style>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import img1 from '../assets/img/slider-2.png'
import img2 from '../assets/img/slider-1.png'
import img3 from '../assets/img/slider-3.png'
import img4 from '../assets/img/3d-scanner.webp'

// Data untuk timeline items
const timelineItems = ref([
    {
        year: '2012',
        title: 'Transformation Toward Professionalism',
        description: 'As industrial demands increased, Wafiq officially transformed into a limited liability company (PT). The company expanded its services into precision machining, plastic injection, and engineering design, supported by CAD/CAM technology.',
        image: img1,
        side: 'left'
    },
    {
        year: '2015',
        title: 'Expansion and Innovation',
        description: 'Wafiq continued to grow by investing in advanced manufacturing technologies and expanding its client base internationally. The company established partnerships with several global corporations.',
        image: img2,
        side: 'right'
    },
    {
        year: '2018',
        title: 'Digital Transformation',
        description: 'Embracing Industry 4.0, Wafiq integrated IoT and automation into its manufacturing processes. This digital transformation enhanced production efficiency and quality control.',
        image: img3,
        side: 'left'
    },
    {
        year: '2022',
        title: 'Sustainable Manufacturing Initiative',
        description: 'Committed to environmental responsibility, Wafiq launched its sustainable manufacturing initiative. The company implemented eco-friendly practices and invested in green technologies.',
        image: img4,
        side: 'right'
    }
])

// Reactive data untuk animasi
const animatedItems = ref([])

// Function untuk handle scroll animation
const handleScroll = () => {
    const items = document.querySelectorAll('.timeline-item')
    items.forEach((item, index) => {
        const rect = item.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom >= 0

        if (isVisible && !animatedItems.value.includes(index)) {
            animatedItems.value.push(index)
        }
    })
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll()
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
    <div class="flex justify-center items-center flex-col py-16 md:py-24 px-4 modern-timeline">
        <h3
            class="p-3 bg-[var(--blue-transparent)] w-fit text-white font-bold rounded-full text-sm md:text-base mb-5">
            About Our History
        </h3>
        <h1 class="text-white text-center font-bold text-3xl md:text-5xl mb-2">A Legacy of Precision</h1>
        <h1 class="text-[var(--white)] text-center font-bold text-3xl md:text-5xl mb-2">A Future of Innovation</h1>
        <p class="text-white/80 w-full max-w-3xl text-center px-2">Evolving from precision machining to global innovation, our
            journey reflects
            continuous growth, technology adoption, and excellence.</p>

        <div class="relative w-full flex flex-col justify-center items-center py-14 md:py-20">
            <div class="timeline-line">
                <div class="line"></div>
                <div class="dots-container">
                    <div v-for="(item, index) in timelineItems" :key="'dot-' + index" class="dot-wrapper"
                        :class="`dot-${index}`">
                        <div class="dot-item" :class="{ 'dot-animated': animatedItems.includes(index) }">
                            <div class="inner-dot"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="timeline-items">
                <div v-for="(item, index) in timelineItems" :key="'item-' + index" class="timeline-item" :class="[
                    item.side,
                    `item-${index}`,
                    { 'animated': animatedItems.includes(index) }
                ]">
                    <div v-if="item.side === 'left'" class="item-content left-content">
                        <div class="image-section">
                            <div class="image-container">
                                <img :src="item.image" :alt="item.title" class="timeline-image">
                            </div>
                        </div>
                        <div class="text-section">
                            <div class="text-content text-end">
                                <div class="year-badge">{{ item.year }}</div>
                                <h3 class="title">{{ item.title }}</h3>
                                <p class="description">{{ item.description }}</p>
                            </div>
                        </div>
                    </div>
                    <div v-else class="item-content right-content">
                        <div class="text-section">
                            <div class="text-content text-start">
                                <div class="year-badge">{{ item.year }}</div>
                                <h3 class="title">{{ item.title }}</h3>
                                <p class="description">{{ item.description }}</p>
                            </div>
                        </div>

                        <div class="image-section">
                            <div class="image-container">
                                <img :src="item.image" :alt="item.title" class="timeline-image">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.modern-timeline {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    position: relative;
    overflow: hidden;
}

.modern-timeline::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
        radial-gradient(circle at 20% 30%, rgba(30, 58, 138, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 80% 70%, rgba(37, 99, 235, 0.2) 0%, transparent 50%);
    z-index: 0;
}

.timeline-container {
    padding: 4rem 2rem;
    min-height: 100vh;
}

.timeline-title {
    text-align: center;
    font-size: 3rem;
    font-weight: 800;
    color: white;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.timeline-subtitle {
    text-align: center;
    font-size: 1.2rem;
    color: #93c5fd;
    margin-bottom: 4rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.timeline-line {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 85%;
    background: linear-gradient(to bottom, #3b82f6, #60a5fa, #3b82f6);
    z-index: 1;
    border-radius: 2px;
}

.line {
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #3b82f6, #60a5fa, #3b82f6);
    border-radius: 2px;
}

.dots-container {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 100%;
    z-index: 2;
}

.dot-wrapper {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.dot-0 {
    top: 1%;
}

.dot-1 {
    top: 28%;
}

.dot-2 {
    top: 55%;
}

.dot-3 {
    top: 82%;
}

.dot-item {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(135deg, #3b82f6, #60a5fa);
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    opacity: 0;
    transform: scale(0.8);
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.5);
    border: 2px solid rgba(255, 255, 255, 0.2);
}

.dot-item.dot-animated {
    opacity: 1;
    transform: scale(1);
    animation: pulse 2s infinite;
}

.inner-dot {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: white;
    transition: all 0.3s ease;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

.dot-item:hover .inner-dot {
    transform: scale(1.2);
    background: #e2e8f0;
}

.timeline-items {
    position: relative;
    z-index: 3;
}

.timeline-item {
    margin-bottom: 180px;
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.8s ease;
    min-height: 300px;
}

.timeline-item.animated {
    opacity: 1;
    transform: translateY(0);
}

.item-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
    height: 100%;
}

.left-content {
    flex-direction: row;
}

.left-content .image-section {
    flex: 0 0 45%;
    display: flex;
    justify-content: flex-start;
}

.left-content .text-section {
    flex: 0 0 45%;
    display: flex;
    justify-content: flex-end;
}

.right-content {
    flex-direction: row;
}

.right-content .text-section {
    flex: 0 0 45%;
    display: flex;
    justify-content: flex-start;
}

.right-content .image-section {
    flex: 0 0 45%;
    display: flex;
    justify-content: flex-end;
}

.image-container {
    width: 100%;
    max-width: 500px;
    position: relative;
}

.image-container::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: -10px;
    bottom: -10px;
    background: linear-gradient(135deg, #3b82f6, #60a5fa);
    border-radius: 1.5rem;
    z-index: -1;
    opacity: 0.7;
    transition: all 0.3s ease;
}

.timeline-image {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 1.5rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
    position: relative;
    z-index: 1;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.timeline-image:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
}

.text-content {
    width: 100%;
    max-width: 500px;
    background: rgba(30, 41, 59, 0.7);
    backdrop-filter: blur(10px);
    border-radius: 1.5rem;
    padding: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
}

.text-content:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
    border-color: rgba(59, 130, 246, 0.3);
}

.text-end {
    text-align: right;
}

.text-start {
    text-align: left;
}

.year-badge {
    display: inline-block;
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
    background: linear-gradient(135deg, #3b82f6, #60a5fa);
    padding: 0.5rem 1.2rem;
    border-radius: 2rem;
    margin-bottom: 1.2rem;
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
    position: relative;
}

.text-end .year-badge::after {
    content: '';
    position: absolute;
    bottom: -8px;
    right: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #3b82f6, #60a5fa);
    border-radius: 2px;
}

.text-start .year-badge::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #60a5fa, #3b82f6);
    border-radius: 2px;
}

.title {
    font-size: 1.6rem;
    font-weight: bold;
    color: white;
    margin-bottom: 1.2rem;
    line-height: 1.3;
}

.description {
    line-height: 1.7;
    color: #cbd5e1;
    font-size: 1.1rem;
    text-align: justify;
}

.text-end .description {
    text-align: justify;
    direction: ltr;
}

.text-start .description {
    text-align: justify;
    direction: ltr;
}

/* Animations */
@keyframes pulse {
    0% {
        box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.6);
    }

    70% {
        box-shadow: 0 0 0 15px rgba(59, 130, 246, 0);
    }

    100% {
        box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
    }
}

/* Responsive Design */
@media (max-width: 1200px) {
    .timeline-wrapper {
        max-width: 1100px;
    }

    .item-content {
        gap: 3rem;
    }

    .left-content .image-section,
    .left-content .text-section,
    .right-content .text-section,
    .right-content .image-section {
        flex: 0 0 48%;
    }
}

@media (max-width: 1024px) {
    .timeline-wrapper {
        max-width: 900px;
    }

    .item-content {
        gap: 2rem;
    }

    .timeline-image {
        height: 220px;
    }
}

/* Tablet */
@media (max-width: 768px) {
    .timeline-image {
        display: block;
    }

    .timeline-line,
    .dots-container {
        display: none;
    }

    .timeline-item {
        margin-bottom: 56px;
        padding: 0;
        min-height: auto;
    }

    .item-content {
        flex-direction: column;
        gap: 1.25rem;
    }

    .left-content .image-section,
    .left-content .text-section,
    .right-content .text-section,
    .right-content .image-section {
        flex: 0 0 100%;
        justify-content: center !important;
    }

    .text-content {
        text-align: center !important;
        padding: 1.25rem;
    }

    .text-end .year-badge::after,
    .text-start .year-badge::after {
        left: 50%;
        transform: translateX(-50%);
        right: auto;
    }

    .timeline-title {
        font-size: 2.5rem;
    }

    .title {
        font-size: 1.25rem;
    }

    .description {
        text-align: center !important;
        font-size: 0.95rem;
    }
}

/* Mobile Small */
@media (max-width: 480px) {
    .timeline-item {
        padding: 0 !important;
        margin-bottom: 44px;
    }

    .timeline-image {
        height: 200px;
    }

    .year-badge {
        font-size: 1rem;
    }

    .title {
        font-size: 1.4rem;
    }
    
    .text-content {
        padding: 1.5rem;
    }
}
</style>

<script setup>
import { computed, ref } from 'vue'
import machineImg1 from '../../assets/img/slider-1.png'
import machineImg2 from '../../assets/img/slider-2.png'
import machineImg3 from '../../assets/img/slider-3.png'

const machineCapabilities = [
  {
    title: 'Multi-Axis CNC',
    icon: 'precision_manufacturing',
    description: 'Multi-axis machining support for high-precision parts and complex geometry production.',
    features: ['2 Axis', '3 Axis', '4 Axis', '5 Axis'],
    images: [machineImg1, machineImg2, machineImg3]
  },
  {
    title: 'Manual Machine',
    icon: 'build',
    description: 'Conventional machining support for flexible workshop operations and finishing processes.',
    features: ['Turning', 'Milling', 'Drilling', 'Fitting'],
    images: [machineImg2, machineImg3, machineImg1]
  },
  {
    title: '3D Printing',
    icon: 'layers',
    description: 'Rapid prototyping capability for development validation and design iteration needs.',
    features: ['Prototype Model', 'Quick Sample', 'Visual Validation', 'Design Support'],
    images: [machineImg3, machineImg1, machineImg2]
  },
  {
    title: 'Wirecut',
    icon: 'timeline',
    description: 'Precision contour cutting for tooling, dies, and detailed industrial components.',
    features: ['Fine Profile Cut', 'Tooling Support', 'Accurate Shape', 'Stable Precision'],
    images: [machineImg1, machineImg3, machineImg2]
  },
  {
    title: 'EDM',
    icon: 'flash_on',
    description: 'Electrical discharge machining for intricate details and hard-to-machine materials.',
    features: ['Complex Detail', 'Hard Material', 'Tooling Process', 'Controlled Accuracy'],
    images: [machineImg2, machineImg1, machineImg3]
  },
  {
    title: 'Welding',
    icon: 'construction',
    description: 'Fabrication and joining support for assemblies and structural manufacturing needs.',
    features: ['Assembly Work', 'Fabrication Support', 'Structural Join', 'Workshop Process'],
    images: [machineImg3, machineImg2, machineImg1]
  },
  {
    title: 'Laser Cutting',
    icon: 'cut',
    description: 'Efficient cutting capability for sheet material and precision fabrication requirements.',
    features: ['Sheet Cutting', 'Fast Process', 'Clean Edge', 'Production Support'],
    images: [machineImg1, machineImg2, machineImg3]
  },
  {
    title: '3D Scanning',
    icon: 'scanner',
    description: 'Digital capture support for reverse engineering, validation, and dimensional review.',
    features: ['Surface Capture', 'Digital Model', 'Data Validation', 'Engineering Input'],
    images: [machineImg2, machineImg3, machineImg1]
  },
  {
    title: 'CMM',
    icon: 'fact_check',
    description: 'Coordinate measurement capability for dimensional inspection and quality verification.',
    features: ['Dimensional Check', 'Quality Report', 'Tolerance Review', 'Final Validation'],
    images: [machineImg3, machineImg1, machineImg2]
  }
]

const activeMachineIndex = ref(0)
const currentMachine = computed(() => machineCapabilities[activeMachineIndex.value])

const nextMachine = () => {
  activeMachineIndex.value = (activeMachineIndex.value + 1) % machineCapabilities.length
}

const prevMachine = () => {
  activeMachineIndex.value = (activeMachineIndex.value - 1 + machineCapabilities.length) % machineCapabilities.length
}
</script>

<template>
  <div class="min-h-screen cnc-page">
    <section class="relative w-full min-h-screen flex items-center justify-center py-20 overflow-hidden">
      <div class="absolute inset-0 overflow-hidden z-0">
        <div class="floating-shape shape-1"></div>
        <div class="floating-shape shape-2"></div>
        <div class="floating-shape shape-3"></div>
        <div class="floating-shape shape-4"></div>
      </div>

      <div class="content flex flex-col w-full h-full items-center justify-center gap-12 md:gap-16 relative z-10 max-w-7xl mx-auto px-6 pt-16 md:pt-20">
        <div class="text-center max-w-4xl mx-auto">
          <h3 class="p-3 bg-cyan-500/15 w-fit mx-auto text-cyan-400 font-bold rounded-full text-sm md:text-base mb-6">
            Our Machine
          </h3>
          <h1 class="font-bold text-white text-3xl md:text-4xl xl:text-5xl mb-4">
            CNC Machine
          </h1>
          <h1 class="font-bold text-cyan-400 text-3xl md:text-4xl xl:text-5xl mb-6">
            Capabilities
          </h1>
          <p class="text-white text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-85">
            Integrated machining, fabrication, scanning, and metrology support for diverse industrial applications.
          </p>
        </div>

        <div class="w-full max-w-6xl relative">
          <button
            @click="prevMachine"
            class="tech-nav-button left-0 md:-left-4 lg:-left-12"
            aria-label="Previous machine"
          >
            <span class="material-symbols-outlined text-white text-lg md:text-xl">chevron_left</span>
          </button>

          <button
            @click="nextMachine"
            class="tech-nav-button right-0 md:-right-4 lg:-right-12"
            aria-label="Next machine"
          >
            <span class="material-symbols-outlined text-white text-lg md:text-xl">chevron_right</span>
          </button>

          <div class="cnc-layout w-full flex flex-col md:flex-row items-center md:items-stretch justify-center md:justify-between gap-8 md:gap-12 p-4 md:p-6">
            <div class="image-section flex-1 justify-center md:justify-start order-2 md:order-1">
              <div class="relative w-full max-w-lg h-80 md:h-96 flex flex-row gap-4 md:gap-6 justify-center items-center">
                <div class="reveal-box box1">
                  <img :src="currentMachine.images[0]" :alt="`${currentMachine.title} image 1`" class="reveal-photo">
                  <div class="reveal-overlay"></div>
                </div>
                <div class="reveal-box box2">
                  <img :src="currentMachine.images[1]" :alt="`${currentMachine.title} image 2`" class="reveal-photo">
                  <div class="reveal-overlay"></div>
                </div>
                <div class="reveal-box box3">
                  <img :src="currentMachine.images[2]" :alt="`${currentMachine.title} image 3`" class="reveal-photo">
                  <div class="reveal-overlay"></div>
                </div>
                <div class="tech-glow"></div>
              </div>
            </div>

            <div class="text-section flex-1 w-full max-w-xl md:max-w-none lg:max-w-xl order-1 md:order-2">
              <div class="text-content p-6 md:p-8 rounded-3xl border border-cyan-500/25 backdrop-blur-lg shadow-2xl">
                <div class="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <span class="material-symbols-outlined text-cyan-400 text-2xl md:text-4xl bg-cyan-500/15 p-2 md:p-3 rounded-2xl">
                    {{ currentMachine.icon }}
                  </span>
                  <h1 class="text-2xl md:text-4xl font-bold text-cyan-400">{{ currentMachine.title }}</h1>
                </div>

                <p class="text-white text-base md:text-xl leading-relaxed mb-6 md:mb-8 opacity-90">
                  {{ currentMachine.description }}
                </p>

                <div class="features-grid grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <div
                    v-for="feature in currentMachine.features"
                    :key="feature"
                    class="feature-item flex items-center gap-2 md:gap-3 p-3 md:p-4 rounded-xl bg-cyan-500/10 transition-all duration-300 hover:bg-cyan-500/15 border border-cyan-500/15"
                  >
                    <div class="w-2 h-2 md:w-3 md:h-3 bg-cyan-400 rounded-full flex-shrink-0"></div>
                    <span class="text-white text-sm md:text-base">{{ feature }}</span>
                  </div>
                </div>

                <div class="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-cyan-500/20">
                  <div class="flex items-center justify-between">
                    <span class="text-cyan-400 text-xs md:text-sm font-semibold">
                      CNC Machine {{ activeMachineIndex + 1 }}/{{ machineCapabilities.length }}
                    </span>
                    <div class="flex gap-1 md:gap-2">
                      <div
                        v-for="(item, index) in machineCapabilities"
                        :key="item.title"
                        :class="[
                          'w-2 h-2 rounded-full transition-all duration-300',
                          index === activeMachineIndex ? 'bg-cyan-400' : 'bg-cyan-500/25'
                        ]"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-2">
          <p class="text-white text-base md:text-lg opacity-70 flex items-center justify-center gap-2 md:gap-3">
            <span class="material-symbols-outlined text-sm">precision_manufacturing</span>
            Explore our integrated machine capabilities
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.cnc-page {
  background: linear-gradient(135deg, #00131a 0%, #001c26 45%, #002b3b 100%);
  position: relative;
  overflow: hidden;
}

.floating-shape {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(2, 179, 247, 0.16) 0%, transparent 70%);
  animation: shapeFloat 15s infinite ease-in-out;
  z-index: 0;
}

.shape-1 {
  width: 300px;
  height: 300px;
  top: 10%;
  left: 5%;
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
  top: 28%;
  right: 20%;
  animation-delay: 7s;
}

@keyframes shapeFloat {
  0%, 100% {
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

.text-content {
  background: linear-gradient(to bottom right, rgba(0, 43, 59, 0.9), rgba(0, 19, 26, 0.92));
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
  background: linear-gradient(90deg, transparent, #02b3f7, transparent);
}

.tech-nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  cursor: pointer;
  background: rgba(2, 179, 247, 0.14);
  border: 1px solid rgba(2, 179, 247, 0.45);
  border-radius: 9999px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);
}

.tech-nav-button:hover {
  transform: translateY(-50%) scale(1.08);
  background: rgba(2, 179, 247, 0.22);
  box-shadow: 0 8px 25px rgba(2, 179, 247, 0.26);
}

.reveal-box {
  position: relative;
  width: 160px;
  height: 280px;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.box1 {
  top: -40px;
  z-index: 3;
  transform: rotateY(-8deg) translateZ(20px);
}

.box2 {
  top: -20px;
  z-index: 2;
  transform: rotateY(0deg) translateZ(10px);
}

.box3 {
  top: 0;
  z-index: 1;
  transform: rotateY(8deg) translateZ(0px);
}

.reveal-box:hover {
  box-shadow: 0 30px 60px rgba(2, 179, 247, 0.35);
  transform: scale(1.12) translateZ(30px);
  z-index: 10;
}

.reveal-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.reveal-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(2, 179, 247, 0.18) 0%, transparent 55%);
  opacity: 0;
  transition: opacity 0.35s ease;
}

.reveal-box:hover .reveal-overlay {
  opacity: 1;
}

.tech-glow {
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(2, 179, 247, 0.14) 0%, transparent 70%);
  pointer-events: none;
  z-index: -1;
}

@media (max-width: 768px) {
  .tech-nav-button {
    width: 40px;
    height: 40px;
    top: auto;
    bottom: -24px;
    transform: none;
  }

  .tech-nav-button:hover {
    transform: scale(1.05);
  }

  .reveal-box {
    width: 110px;
    height: 220px;
  }

  .box1 {
    top: -20px;
  }

  .box2 {
    top: -10px;
  }

  .box3 {
    top: 0;
  }
}
</style>

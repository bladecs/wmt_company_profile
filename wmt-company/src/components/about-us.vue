<script setup>
import { ref, onMounted } from 'vue'

</script>

<template>
    <div class="flex flex-col items-center justify-center w-full h-fit">
        <section class="relative w-full h-full flex items-center justify-center p-20">
            <div class="svgGroup">
                <img src="../assets/svg/rec_14.svg" alt="" class="absolute top-0 left-0 z-70">
                <img src="../assets/svg/rec_15.svg" alt="" class="absolute top-0 left-0 z-40">
            </div>
            <div class="content flex flex-col items-center justify-center w-full h-fit gap-10">
                <h1 class="font-bold text-[var(--dark-blue)] text-6xl">WAFIQ MITRA <span
                        class="font-bold text-[var(--blue)] text-6xl">TEKNIK</span></h1>
                <div class="text-content flex flex-row items-center justify-center gap-20 w-full h-fit">
                    <p class="w-1/2 text-justify text-[var(--dark-blue) font-bold text-xl">PT Wafiq Mitra Teknik (WMT)
                        is a
                        certified manufacturing company specializing in high-precision
                        molds, dies, and plastic products. With ISO 9001:2015 (Quality Management), ISO 14001:2015
                        (Environmental Management), and ISO 45001:2015 (Occupational Health & Safety) certifications, we
                        ensure every process meets international standards of excellence.
                        <br><br>
                        Our strengths lie in precision, innovation, and customer-focused services. We deliver reliable
                        solutions with on-time performance, backed by a professional team and advanced production
                        facilities. From automotive to industrial components, our services are tailored to meet diverse
                        and demanding client requirements.
                        <br><br>
                        Strategically located in Bandung, West Java, Indonesia, WMT operates on a 2,400 m² factory site
                        with 1,500 m² of production facilities, enabling us to serve both domestic and international
                        clients efficiently.
                    </p>
                    <img src="../assets/img/slider-1.png" alt=""
                        class="w-110 min-h-120 object-cover img-about-us overflow-hidden">
                </div>
            </div>
            <div class="svgGroup-Footer">
                <img src="../assets/svg/rec_16.svg" alt="" class="absolute bottom-0 right-0 z-70">
                <img src="../assets/svg/rec_17.svg" alt="" class="absolute bottom-0 right-0 z-40">
            </div>
        </section>
        <section class="relative w-full h-200 flex items-center justify-center p-20">
            <div class="svgGroup">
                <img src="../assets/svg/rec_18.svg" alt="" class="absolute top-0 right-0 z-70">
                <img src="../assets/svg/rec_19.svg" alt="" class="absolute top-0 right-0 z-40">
            </div>
            <div class="content flex flex-col items-center justify-center w-full h-fit gap-40">
                <div class="header-text">
                    <h1 class="text-6xl text-center font-bold text-[var(--dark-blue)]">Leading with</h1>
                    <h1 class="text-6xl text-center font-bold text-[var(--blue)]">Technology and Quality</h1>
                </div>
                <div class="text-content flex flex-row gap-10">
                    <div class="relative w-full h-full flex flex-row gap-5 justify-between items-center">
                        <div class="reveal-box box1">
                            <div class="reveal-inner bg-[url(/src/assets/img/image.png)]">
                            </div>
                        </div>
                        <div class="reveal-box box2">
                            <div class="reveal-inner bg-[url(/src/assets/img/image.png)]">
                            </div>
                        </div>
                        <div class="reveal-box box3">
                            <div class="reveal-inner bg-[url(/src/assets/img/image.png)]">
                            </div>
                        </div>
                    </div>
                    <div class="description flex flex-col items-end justify-start gap-5 ">
                        <h1 class="text-[var(--blue)] bg-(--blue-transparent) font-bold rounded-full p-3">About Our
                            Vision & Mission</h1>
                        <p class="font-bold text-end w-160 ps-10 text-xl">
                            PT Wafiq Mitra Teknik aims to be a leading technology-based manufacturing company with rapid
                            growth and strong market presence. We are committed to delivering high-quality products with
                            on-time delivery, mastering advanced technology, and continuously developing our human
                            resources to stay competitive in the global manufacturing industry.
                        </p>
                    </div>
                </div>
            </div>
            <div class="svgGroup-Footer">
                <img src="../assets/svg/rec_18.svg" alt=""
                    class="absolute bottom-0 left-0 z-70 origin-center rotate-180">
                <img src="../assets/svg/rec_19.svg" alt=""
                    class="absolute bottom-0 left-0 z-40 origin-center rotate-180">
            </div>
        </section>
        <section class="relative w-full h-200 flex items-center justify-center p-20">
            <div class="svgGroup">
                <img src="../assets/svg/rec_18.svg" alt=""
                    class="absolute top-0 left-0 z-70 origin-center rotate-y-180">
                <img src="../assets/svg/rec_19.svg" alt=""
                    class="absolute top-0 left-0 z-40 origin-center rotate-y-180">
            </div>
            <div class="content flex flex-col items-center justify-center w-full h-fit gap-40">
                <div class="header-text">
                    <h1 class="text-6xl text-center font-bold text-[var(--dark-blue)]">Delivering Accuracy,</h1>
                    <h1 class="text-6xl text-center font-bold text-[var(--blue)]">Quality, and Reliability</h1>
                </div>
                <div class="text-content flex flex-row gap-10">
                    <div class="description flex flex-col items-start justify-start gap-5 ">
                        <h1 class="text-[var(--blue)] bg-(--blue-transparent) font-bold rounded-full p-3">About Our
                            Product</h1>
                        <p class="font-bold text-justify w-160 pe-10 text-xl">
                            PT Wafiq Mitra Teknik aims to be a leading technology-based manufacturing company with rapid
                            growth and strong market presence. We are committed to delivering high-quality products with
                            on-time delivery, mastering advanced technology, and continuously developing our human
                            resources to stay competitive in the global manufacturing industry.
                        </p>
                    </div>
                    <div class="relative w-full h-full flex flex-row gap-5 justify-between items-center">
                        <div class="reveal-box-right box1-right bg-[url(/src/assets/img/slider-3.png)] bg-cover bg-center">
                        </div>
                        <div class="reveal-box-right box2-right bg-[url(/src/assets/img/slider-4.png)] bg-cover bg-center">
                        </div>
                        <div class="reveal-box-right box3-right bg-[url(/src/assets/img/precision-part.png)] bg-cover bg-center">
                        </div>
                    </div>
                </div>
            </div>
            <div class="svgGroup-Footer">
                <img src="../assets/svg/rec_18.svg" alt=""
                    class="absolute bottom-0 right-0 z-70 origin-center rotate-180 rotate-y-180">
                <img src="../assets/svg/rec_19.svg" alt=""
                    class="absolute bottom-0 right-0 z-40 origin-center rotate-180 rotate-y-180">
            </div>
        </section>
        <section class="relative w-full h-200 flex items-center justify-center p-20">
            <div class="svgGroup">
                <img src="../assets/svg/rec_18.svg" alt="" class="absolute top-0 right-0 z-70">
                <img src="../assets/svg/rec_19.svg" alt="" class="absolute top-0 right-0 z-40">
            </div>
            <div class="content flex flex-col items-center justify-center w-full h-fit gap-15">
                <div class="header-text flex flex-col items-center justify-center gap-3">
                    <h1 class="text-6xl text-center font-bold text-[var(--dark-blue)]">Empowering People</h1>
                    <h1 class="text-6xl text-center font-bold text-[var(--blue)]">Building Excellence</h1>
                </div>
                <div class="text-content flex items-center justify-center gap-3">
                    <div class="description flex flex-col items-center justify-start gap-5 ">
                        <h1 class="text-[var(--blue)] bg-(--blue-transparent) font-bold rounded-full p-3">About Our
                            Company</h1>
                        <p class="font-bold text-center w-250 ps-10 text-xl">
                            As part of our mission to enhance human resource development, we invest heavily in our
                            people. Our engineers, technicians, and specialists are continuously trained to sharpen both
                            technical and management skills. This commitment creates a professional and adaptive
                            workforce capable of tackling increasingly complex manufacturing challenges. With
                            collaboration, integrity, and innovation as our core values, our employees are the driving
                            force behind every success at PT Wafiq Mitra Teknik.
                        </p>
                    </div>
                </div>
            </div>
            <div class="svgGroup-Footer">
                <img src="../assets/svg/rec_18.svg" alt=""
                    class="absolute bottom-0 left-0 z-70 origin-center rotate-180">
                <img src="../assets/svg/rec_19.svg" alt=""
                    class="absolute bottom-0 left-0 z-40 origin-center rotate-180">
            </div>
        </section>
        <section class="relative w-full h-200 flex items-center justify-center p-20 mb-20">
            <div class="svgGroup">
                <img src="../assets/svg/rec_18.svg" alt=""
                    class="absolute top-0 left-0 z-70 origin-center rotate-y-180">
                <img src="../assets/svg/rec_19.svg" alt=""
                    class="absolute top-0 left-0 z-40 origin-center rotate-y-180">
            </div>
            <div class="content flex flex-col items-center justify-center w-full h-fit gap-40">
                <div class="header-text">
                    <h1 class="text-6xl text-center font-bold text-[var(--dark-blue)]">Delivering Accuracy,</h1>
                    <h1 class="text-6xl text-center font-bold text-[var(--blue)]">Quality, and Reliability</h1>
                </div>
                <div class="text-content flex flex-row gap-10">
                    <div class="description flex flex-col items-start justify-start gap-5 ">
                        <h1 class="text-[var(--blue)] bg-(--blue-transparent) font-bold rounded-full p-3">About Our
                            Product</h1>
                        <p class="font-bold text-justify w-160 pe-10 text-xl">
                            Aligned with our mission to master advanced technology and develop manufacturing knowledge,
                            our facilities are equipped with state-of-the-art machines and tools. These include 3-axis
                            and 5-axis CNC milling machines, CNC turning, CMM, and 3D scanning technology.
                            <br><br>
                            By continuously upgrading our production equipment and adopting modern CAD/CAM systems, we
                            ensure precision, efficiency, and innovation in every project. This technological strength
                            allows us to deliver world-class solutions and maintain competitiveness in the global
                            market.
                        </p>
                    </div>
                    <div class="relative w-full h-full flex flex-row gap-5 justify-between items-center">
                        <div class="reveal-box-right bg-[url(/src/assets/img/3d-scanner.webp)] bg-cover bg-center box1-right">
                        </div>
                        <div class="reveal-box-right bg-[url(/src/assets/img/slider-1.png)] bg-cover bg-center box2-right">
                        </div>
                        <div class="reveal-box-right bg-[url(/src/assets/img/slider-3.png)] bg-cover bg-center box3-right">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.img-about-us {
    clip-path: polygon(5% 0, 100% 0, 95% 100%, 0 100%);
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

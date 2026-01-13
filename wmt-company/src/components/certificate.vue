<script setup>
import { ref } from 'vue'
import iso9001 from '../assets/img/iso9001.jpg'
import iso14001 from '../assets/img/iso14001.jpg'
import iso45001 from '../assets/img/iso45001.jpg'
import iso9001_modal from '../assets/img/9001_modal.png'
import iso14001_modal from '../assets/img/14001_modal.png'
import iso45001_modal from '../assets/img/45001_modal.png'

const certificates = ref([
    {
        id: 1,
        code: 'ISO 9001',
        title: 'Quality Management System',
        description: 'ISO 9001 adalah standar internasional untuk sistem manajemen mutu (Quality Management System/QMS). Sertifikasi ini menunjukkan komitmen kami dalam menyediakan produk dan layanan yang secara konsisten memenuhi persyaratan pelanggan dan peraturan yang berlaku, serta meningkatkan kepuasan pelanggan melalui penerapan sistem yang efektif.',
        image: iso9001,
        imageModal: iso9001_modal,
        features: [
            'Peningkatan kepuasan pelanggan',
            'Proses yang terdokumentasi dan terkendali',
            'Perbaikan berkelanjutan',
            'Pengambilan keputusan berbasis data'
        ]
    },
    {
        id: 2,
        code: 'ISO 14001',
        title: 'Environmental Management System',
        description: 'ISO 14001 adalah standar internasional untuk sistem manajemen lingkungan (Environmental Management System/EMS). Sertifikasi ini mencerminkan komitmen kami dalam mengelola dampak lingkungan dari operasional perusahaan, mematuhi peraturan lingkungan, dan secara berkelanjutan meningkatkan kinerja lingkungan melalui pendekatan sistematis.',
        image: iso14001,
        imageModal: iso14001_modal,
        features: [
            'Pengelolaan dampak lingkungan',
            'Kepatuhan regulasi lingkungan',
            'Efisiensi penggunaan sumber daya',
            'Tanggung jawab lingkungan berkelanjutan'
        ]
    },
    {
        id: 3,
        code: 'ISO 45001',
        title: 'Occupational Health & Safety Management',
        description: 'ISO 45001 adalah standar internasional untuk sistem manajemen keselamatan dan kesehatan kerja (Occupational Health and Safety Management System/OHSMS). Sertifikasi ini menunjukkan dedikasi kami dalam menyediakan tempat kerja yang aman dan sehat bagi karyawan, mencegah cedera dan penyakit terkait pekerjaan, serta secara proaktif meningkatkan kinerja K3.',
        image: iso45001,
        imageModal: iso45001_modal,
        features: [
            'Lingkungan kerja yang aman dan sehat',
            'Pencegahan cedera dan penyakit kerja',
            'Kepatuhan standar keselamatan',
            'Partisipasi dan konsultasi pekerja'
        ]
    }
])

const activeCertificate = ref(null)

const showDetails = (certificate) => {
    activeCertificate.value = certificate
}

const closeDetails = () => {
    activeCertificate.value = null
}
</script>

<template>
    <div class="certificates-page py-10">
        <div class="certificates-container">
            <!-- Background Elements -->
            <div class="background-elements">
                <div class="bg-circle bg-circle-1"></div>
                <div class="bg-circle bg-circle-2"></div>
                <div class="bg-circle bg-circle-3"></div>
                <div class="bg-grid"></div>
            </div>

            <!-- Header Section -->
            <div class="header-section">
                <h3 class="badge">
                    Our Certifications
                </h3>
                <h1 class="title-main">Internationally Recognized</h1>
                <h1 class="title-sub">Quality Standards</h1>
                <p class="description">Our commitment to excellence is validated by internationally recognized
                    certifications that demonstrate our adherence to the highest standards of quality, environmental
                    responsibility, and workplace safety.</p>
            </div>

            <!-- Certificates Grid -->
            <div class="certificates-grid">
                <div v-for="certificate in certificates" :key="certificate.id" class="certificate-card"
                    :class="`card-${certificate.id}`" @click="showDetails(certificate)">
                    <div class="card-header">
                        <div class="certificate-badge">
                            {{ certificate.code }}
                        </div>
                        <div class="card-icon">
                            <div class="icon-circle">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z"
                                        fill="currentColor" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div class="card-image">
                        <img :src="certificate.image" :alt="certificate.title" class="certificate-img">
                        <div class="image-overlay"></div>
                    </div>

                    <div class="card-content">
                        <h3 class="card-title">{{ certificate.title }}</h3>
                        <p class="card-description">{{ certificate.description.substring(0, 120) }}...</p>

                        <div class="features-list">
                            <div v-for="(feature, index) in certificate.features.slice(0, 2)" :key="index"
                                class="feature-item">
                                <span class="feature-dot"></span>
                                <span class="feature-text">{{ feature }}</span>
                            </div>
                        </div>
                    </div>

                    <div class="card-footer">
                        <button class="view-details-btn">
                            View Details
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Certificate Details Modal -->
            <div v-if="activeCertificate" class="modal-overlay" @click="closeDetails">
                <div class="modal-content" @click.stop>
                    <button class="close-btn" @click="closeDetails">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </button>

                    <div class="modal-header">
                        <div class="modal-badge">
                            {{ activeCertificate.code }}
                        </div>
                        <h2 class="modal-title">{{ activeCertificate.title }}</h2>
                    </div>

                    <div class="modal-body">
                        <div class="modal-image">
                            <img :src="activeCertificate.imageModal" :alt="activeCertificate.title" class="modal-img">
                        </div>

                        <div class="modal-details">
                            <p class="modal-description">{{ activeCertificate.description }}</p>

                            <div class="modal-features">
                                <h4>Key Features:</h4>
                                <div class="features-grid">
                                    <div v-for="(feature, index) in activeCertificate.features" :key="index"
                                        class="modal-feature-item">
                                        <div class="feature-icon">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z"
                                                    fill="currentColor" />
                                            </svg>
                                        </div>
                                        <span>{{ feature }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
:root {
  --dark-blue: #002B3B;
  --footer-dark: #00131A;
  --blue: #02B3F7;
  --deep-blue: #00648B;
  --gray: #6B7280;
}

.certificates-page {
    min-height: 100vh;
    background: linear-gradient(135deg, var(--footer-dark) 0%, var(--dark-blue) 50%, var(--deep-blue) 100%);
}

.certificates-container {
    padding: 4rem 2rem;
    max-width: 1400px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    min-height: 100vh;
}

/* Background Elements */
.background-elements {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    overflow: hidden;
}

.bg-circle {
    position: absolute;
    border-radius: 50%;
    background: rgba(2, 179, 247, 0.1);
    filter: blur(40px);
}

.bg-circle-1 {
    width: 300px;
    height: 300px;
    top: -100px;
    right: -100px;
}

.bg-circle-2 {
    width: 400px;
    height: 400px;
    bottom: -150px;
    left: -150px;
    background: rgba(0, 100, 139, 0.1);
}

.bg-circle-3 {
    width: 250px;
    height: 250px;
    top: 50%;
    left: 10%;
    background: rgba(0, 43, 59, 0.2);
}

.bg-grid {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
        linear-gradient(rgba(2, 179, 247, 0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(2, 179, 247, 0.05) 1px, transparent 1px);
    background-size: 50px 50px;
    mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
}

/* Header Styles */
.header-section {
    text-align: center;
    margin-bottom: 4rem;
    position: relative;
    z-index: 1;
}

.badge {
    display: inline-block;
    padding: 0.5rem 1.5rem;
    background: rgba(2, 179, 247, 0.15);
    color: var(--blue);
    font-weight: bold;
    border-radius: 50px;
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(2, 179, 247, 0.2);
}

.title-main {
    font-size: 3rem;
    font-weight: 800;
    color: white;
    margin-bottom: 0.5rem;
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.title-sub {
    font-size: 3rem;
    font-weight: 800;
    color: var(--blue);
    margin-bottom: 1.5rem;
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.description {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.8);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
}

/* Certificates Grid */
.certificates-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
    position: relative;
    z-index: 1;
}

.certificate-card {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 1.5rem;
    padding: 2rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    cursor: pointer;
    border: 1px solid rgba(2, 179, 247, 0.2);
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(10px);
}

.certificate-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--blue), var(--deep-blue));
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

.certificate-card:hover::before {
    transform: scaleX(1);
}

.certificate-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(2, 179, 247, 0.4);
}

.card-1::before {
    background: linear-gradient(90deg, #10B981, #059669);
}

.card-2::before {
    background: linear-gradient(90deg, var(--blue), var(--deep-blue));
}

.card-3::before {
    background: linear-gradient(90deg, #F59E0B, #D97706);
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1.5rem;
}

.certificate-badge {
    background: linear-gradient(135deg, var(--blue), var(--deep-blue));
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 50px;
    font-weight: bold;
    font-size: 0.9rem;
    box-shadow: 0 4px 12px rgba(2, 179, 247, 0.3);
}

.card-2 .certificate-badge {
    background: linear-gradient(135deg, #10B981, #059669);
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}

.card-1 .certificate-badge {
    background: linear-gradient(135deg, var(--blue), var(--deep-blue));
    box-shadow: 0 4px 12px rgba(2, 179, 247, 0.3);
}

.card-3 .certificate-badge {
    background: linear-gradient(135deg, #F59E0B, #D97706);
    box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
}

.card-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(2, 179, 247, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--blue);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(2, 179, 247, 0.2);
}

.card-2 .card-icon {
    background: rgba(16, 185, 129, 0.15);
    color: #10B981;
    border: 1px solid rgba(16, 185, 129, 0.2);
}

.card-1 .card-icon {
    background: rgba(2, 179, 247, 0.15);
    color: var(--blue);
    border: 1px solid rgba(2, 179, 247, 0.2);
}

.card-3 .card-icon {
    background: rgba(245, 158, 11, 0.15);
    color: #F59E0B;
    border: 1px solid rgba(245, 158, 11, 0.2);
}

.card-image {
    position: relative;
    border-radius: 1rem;
    overflow: hidden;
    margin-bottom: 1.5rem;
    height: 200px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.certificate-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.certificate-card:hover .certificate-img {
    transform: scale(1.05);
}

.image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.3) 100%);
}

.card-content {
    margin-bottom: 1.5rem;
}

.card-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    margin-bottom: 1rem;
    line-height: 1.3;
}

.card-description {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    margin-bottom: 1.5rem;
    font-size: 0.95rem;
}

.features-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.feature-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.feature-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--blue);
    flex-shrink: 0;
    box-shadow: 0 0 8px var(--blue);
}

.card-2 .feature-dot {
    background: #10B981;
    box-shadow: 0 0 8px #10B981;
}

.card-1 .feature-dot {
    background: var(--blue);
    box-shadow: 0 0 8px var(--blue);
}

.card-3 .feature-dot {
    background: #F59E0B;
    box-shadow: 0 0 8px #F59E0B;
}

.feature-text {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.4;
}

.card-footer {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 1.5rem;
}

.view-details-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: transparent;
    border: none;
    color: var(--blue);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 0.5rem 0;
}

.card-1 .view-details-btn {
    color: var(--blue);
}

.card-2 .view-details-btn {
    color: #10B981;
}

.card-3 .view-details-btn {
    color: #F59E0B;
}

.view-details-btn:hover {
    gap: 0.75rem;
    text-shadow: 0 0 8px currentColor;
}

/* Modal Styles - Diperbaiki agar tidak ada scroll */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 2rem;
    backdrop-filter: blur(5px);
}

.modal-content {
    background: linear-gradient(135deg, var(--dark-blue) 0%, var(--footer-dark) 100%);
    border-radius: 1.5rem;
    padding: 2.5rem;
    max-width: 1000px;
    width: 95%;
    max-height: 85vh;
    position: relative;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(2, 179, 247, 0.2);
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.close-btn {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: white;
    transition: all 0.3s ease;
    backdrop-filter: blur(5px);
    z-index: 10;
}

.close-btn:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: rotate(90deg);
}

.modal-header {
    margin-bottom: 1.5rem;
    padding-right: 3rem;
}

.modal-badge {
    display: inline-block;
    background: linear-gradient(135deg, var(--blue), var(--deep-blue));
    color: white;
    padding: 0.5rem 1.5rem;
    border-radius: 50px;
    font-weight: bold;
    margin-bottom: 1rem;
    font-size: 1rem;
    box-shadow: 0 4px 12px rgba(2, 179, 247, 0.3);
}

.modal-title {
    font-size: 2rem;
    font-weight: 800;
    color: white;
    line-height: 1.2;
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.modal-body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: start;
    flex: 1;
    overflow: hidden;
}

.modal-image {
    border-radius: 1rem;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    height: 100%;
    display: flex;
    align-items: center;
}

.modal-img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
}

.modal-details {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    height: 100%;
    overflow: hidden;
}

.modal-description {
    font-size: 1rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.9);
    margin: 0;
}

.modal-features {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.modal-features h4 {
    font-size: 1.2rem;
    font-weight: 700;
    color: white;
    margin-bottom: 1rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.features-grid {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    overflow-y: auto;
    padding-right: 0.5rem;
    flex: 1;
}

/* Scrollbar styling untuk features grid */
.features-grid::-webkit-scrollbar {
    width: 4px;
}

.features-grid::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 2px;
}

.features-grid::-webkit-scrollbar-thumb {
    background: var(--blue);
    border-radius: 2px;
}

.modal-feature-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 0.75rem;
    border-left: 4px solid var(--blue);
    backdrop-filter: blur(5px);
    transition: all 0.3s ease;
    flex-shrink: 0;
}

.modal-feature-item:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(5px);
}

.feature-icon {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--blue);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 4px 8px rgba(2, 179, 247, 0.3);
}

.modal-feature-item span {
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.4;
    font-size: 0.9rem;
}

/* Responsive Design */
@media (max-width: 1024px) {
    .certificates-grid {
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    }

    .modal-body {
        gap: 1.5rem;
    }
    
    .modal-title {
        font-size: 1.8rem;
    }
}

@media (max-width: 768px) {
    .certificates-page {
        min-height: auto;
    }
    
    .certificates-container {
        padding: 2rem 1rem;
        min-height: auto;
    }

    .title-main,
    .title-sub {
        font-size: 2.2rem;
    }

    .certificates-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    .certificate-card {
        padding: 1.5rem;
    }

    .modal-overlay {
        padding: 1rem;
    }
    
    .modal-content {
        padding: 1.5rem;
        width: 95%;
        max-height: 90vh;
    }

    .modal-body {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    .modal-title {
        font-size: 1.6rem;
    }
    
    .modal-description {
        font-size: 0.95rem;
    }
}

@media (max-width: 480px) {
    .header-section {
        margin-bottom: 2rem;
    }

    .title-main,
    .title-sub {
        font-size: 1.8rem;
    }

    .description {
        font-size: 1rem;
    }

    .certificate-card {
        padding: 1.25rem;
    }

    .card-image {
        height: 160px;
    }

    .modal-content {
        padding: 1.25rem;
    }

    .modal-title {
        font-size: 1.4rem;
    }
    
    .modal-header {
        padding-right: 2rem;
    }
    
    .modal-feature-item span {
        font-size: 0.85rem;
    }
}

/* Untuk layar yang sangat kecil */
@media (max-width: 360px) {
    .certificates-grid {
        grid-template-columns: 1fr;
    }
    
    .modal-content {
        padding: 1rem;
    }
    
    .modal-title {
        font-size: 1.3rem;
    }
    
    .modal-description {
        font-size: 0.9rem;
    }
}
</style>
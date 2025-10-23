<script setup>
import { ref } from 'vue'
import iso9001 from '../assets/img/iso9001.jpg'
import iso14001 from '../assets/img/iso14001.jpg'
import iso45001 from '../assets/img/iso45001.jpg'

const certificates = ref([
    {
        id: 1,
        code: 'ISO 9001',
        title: 'Quality Management System',
        description: 'ISO 9001 adalah standar internasional untuk sistem manajemen mutu (Quality Management System/QMS). Sertifikasi ini menunjukkan komitmen kami dalam menyediakan produk dan layanan yang secara konsisten memenuhi persyaratan pelanggan dan peraturan yang berlaku, serta meningkatkan kepuasan pelanggan melalui penerapan sistem yang efektif.',
        image: iso9001,
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
    <div class="certificates-container">
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
                        <img :src="activeCertificate.image" :alt="activeCertificate.title" class="modal-img">
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
</template>

<style scoped>
.certificates-container {
    padding: 4rem 2rem;
    max-width: 1400px;
    margin: 0 auto;
}

/* Header Styles */
.header-section {
    text-align: center;
    margin-bottom: 4rem;
}

.badge {
    display: inline-block;
    padding: 0.5rem 1.5rem;
    background-color: rgba(59, 130, 246, 0.1);
    color: var(--blue);
    font-weight: bold;
    border-radius: 50px;
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
}

.title-main {
    font-size: 3rem;
    font-weight: 800;
    color: var(--blue);
    margin-bottom: 0.5rem;
    background: linear-gradient(135deg, var(--blue) 0%, var(--dark-blue) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.title-sub {
    font-size: 3rem;
    font-weight: 800;
    color: var(--dark-blue);
    margin-bottom: 1.5rem;
}

.description {
    font-size: 1.2rem;
    color: var(--gray);
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
}

.certificate-card {
    background: white;
    border-radius: 1.5rem;
    padding: 2rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    cursor: pointer;
    border: 1px solid rgba(59, 130, 246, 0.1);
    position: relative;
    overflow: hidden;
}

.certificate-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--blue), var(--dark-blue));
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

.certificate-card:hover::before {
    transform: scaleX(1);
}

.certificate-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.card-1::before {
    background: linear-gradient(90deg, #10B981, #059669);
}

.card-2::before {
    background: linear-gradient(90deg, #3B82F6, #1D4ED8);
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
    background: linear-gradient(135deg, var(--blue), var(--dark-blue));
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 50px;
    font-weight: bold;
    font-size: 0.9rem;
}

.card-1 .certificate-badge {
    background: linear-gradient(135deg, #10B981, #059669);
}

.card-2 .certificate-badge {
    background: linear-gradient(135deg, #3B82F6, #1D4ED8);
}

.card-3 .certificate-badge {
    background: linear-gradient(135deg, #F59E0B, #D97706);
}

.card-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(59, 130, 246, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--blue);
}

.card-1 .card-icon {
    background: rgba(16, 185, 129, 0.1);
    color: #10B981;
}

.card-2 .card-icon {
    background: rgba(59, 130, 246, 0.1);
    color: #3B82F6;
}

.card-3 .card-icon {
    background: rgba(245, 158, 11, 0.1);
    color: #F59E0B;
}

.card-image {
    position: relative;
    border-radius: 1rem;
    overflow: hidden;
    margin-bottom: 1.5rem;
    height: 200px;
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
    background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.1) 100%);
}

.card-content {
    margin-bottom: 1.5rem;
}

.card-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--dark-blue);
    margin-bottom: 1rem;
    line-height: 1.3;
}

.card-description {
    color: var(--gray);
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
}

.card-1 .feature-dot {
    background: #10B981;
}

.card-2 .feature-dot {
    background: #3B82F6;
}

.card-3 .feature-dot {
    background: #F59E0B;
}

.feature-text {
    font-size: 0.9rem;
    color: var(--gray);
    line-height: 1.4;
}

.card-footer {
    border-top: 1px solid rgba(0, 0, 0, 0.08);
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
    color: #10B981;
}

.card-2 .view-details-btn {
    color: #3B82F6;
}

.card-3 .view-details-btn {
    color: #F59E0B;
}

.view-details-btn:hover {
    gap: 0.75rem;
}

/* Modal Styles */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 2rem;
    backdrop-filter: blur(5px);
}

.modal-content {
    background: white;
    border-radius: 1.5rem;
    padding: 2.5rem;
    max-width: 900px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
}

.close-btn {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    background: rgba(0, 0, 0, 0.05);
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: var(--gray);
    transition: all 0.3s ease;
}

.close-btn:hover {
    background: rgba(0, 0, 0, 0.1);
    color: var(--dark-blue);
}

.modal-header {
    margin-bottom: 2rem;
    padding-right: 3rem;
}

.modal-badge {
    display: inline-block;
    background: linear-gradient(135deg, var(--blue), var(--dark-blue));
    color: white;
    padding: 0.5rem 1.5rem;
    border-radius: 50px;
    font-weight: bold;
    margin-bottom: 1rem;
    font-size: 1rem;
}

.modal-title {
    font-size: 2.2rem;
    font-weight: 800;
    color: var(--dark-blue);
    line-height: 1.2;
}

.modal-body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
    align-items: start;
}

.modal-image {
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.modal-img {
    width: 100%;
    height: auto;
    display: block;
}

.modal-details {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.modal-description {
    font-size: 1.1rem;
    line-height: 1.7;
    color: var(--gray);
}

.modal-features h4 {
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--dark-blue);
    margin-bottom: 1.5rem;
}

.features-grid {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.modal-feature-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: rgba(59, 130, 246, 0.05);
    border-radius: 0.75rem;
    border-left: 4px solid var(--blue);
}

.feature-icon {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: var(--blue);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.modal-feature-item span {
    color: var(--gray);
    line-height: 1.5;
}

/* Responsive Design */
@media (max-width: 1024px) {
    .certificates-grid {
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    }

    .modal-body {
        gap: 2rem;
    }
}

@media (max-width: 768px) {
    .certificates-container {
        padding: 2rem 1rem;
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

    .modal-content {
        padding: 1.5rem;
        margin: 1rem;
    }

    .modal-body {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    .modal-title {
        font-size: 1.8rem;
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
        font-size: 1.5rem;
    }
}
</style>
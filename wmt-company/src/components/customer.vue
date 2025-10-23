<script setup>
import { ref } from 'vue'

const customers = ref([
    { id: 1, name: 'PT. MEITOKU', type: 'Manufacturing', location: 'Jakarta', icon: 'precision_manufacturing' },
    { id: 2, name: 'PT. MENARA TERUS MAKMUR', type: 'Construction', location: 'Bandung', icon: 'construction' },
    { id: 3, name: 'PT. KINGDUAN', type: 'Manufacturing', location: 'Surabaya', icon: 'factory' },
    { id: 4, name: 'PT. PAKOAKUINA', type: 'Industrial', location: 'Bekasi', icon: 'source_environment' },
    { id: 5, name: 'PT. INTI PINDAD MITRA SEJATI', type: 'Defense', location: 'Bandung', icon: 'security' },
    { id: 6, name: 'PT. BINA USAHA MANDIRI MIZUSAWA', type: 'Manufacturing', location: 'Cikarang', icon: 'engineering' },
    { id: 7, name: 'PT. KOMATSU INDONESIA TBK.', type: 'Heavy Equipment', location: 'Jakarta', icon: 'build' },
    { id: 8, name: 'PT. WIKA – NGK INSULATOR', type: 'Construction', location: 'Tangerang', icon: 'apartment' },
    { id: 9, name: 'PT. WIKA INTRADE', type: 'Trading', location: 'Jakarta', icon: 'store' },
    { id: 10, name: 'POLMAN BANDUNG – PMS', type: 'Education', location: 'Bandung', icon: 'school' },
    { id: 11, name: 'SAGA MULTI INDUSTRI', type: 'Manufacturing', location: 'Karawang', icon: 'precision_manufacturing' },
    { id: 12, name: 'PT. ASIAN ISUZU CASTING CENTER', type: 'Automotive', location: 'Cibitung', icon: 'directions_car' },
    { id: 13, name: 'PT. AGRONESIA INKABA', type: 'Agriculture', location: 'Bogor', icon: 'agriculture' },
    { id: 14, name: 'PT. PASCAL COMPONENTS INTRANUSA', type: 'Electronics', location: 'Tangerang', icon: 'memory' },
    { id: 15, name: 'PT. MAKMUR ABADI VALVE', type: 'Industrial', location: 'Surabaya', icon: 'settings' },
    { id: 16, name: 'PT. GOODRICH PINDAD AERONAUTICAL SYSTEM INDONESIA', type: 'Aerospace', location: 'Bandung', icon: 'flight' },
    { id: 17, name: 'PT. NUSA TOYOTETSU ENGINEERING', type: 'Automotive', location: 'Karawang', icon: 'electric_car' },
    { id: 18, name: 'PT. INKOASKU', type: 'Manufacturing', location: 'Cikarang', icon: 'manufacturing' },
    { id: 19, name: 'PT. TJ FORGE INDONESIA', type: 'Forging', location: 'Bekasi', icon: 'hardware' },
    { id: 20, name: 'PT. FLOWSERVE', type: 'Industrial', location: 'Jakarta', icon: 'plumbing' },
    { id: 21, name: 'PT. FREYSSINET TOTAL TECHNOLOGY', type: 'Construction', location: 'Tangerang', icon: 'engineering' }
])

const getTypeColor = (type) => {
    const colorMap = {
        'Manufacturing': 'bg-blue-50 text-blue-700 border-blue-200',
        'Construction': 'bg-orange-50 text-orange-700 border-orange-200',
        'Industrial': 'bg-gray-50 text-gray-700 border-gray-200',
        'Defense': 'bg-red-50 text-red-700 border-red-200',
        'Heavy Equipment': 'bg-green-50 text-green-700 border-green-200',
        'Trading': 'bg-purple-50 text-purple-700 border-purple-200',
        'Education': 'bg-teal-50 text-teal-700 border-teal-200',
        'Automotive': 'bg-yellow-50 text-yellow-700 border-yellow-200',
        'Agriculture': 'bg-lime-50 text-lime-700 border-lime-200',
        'Electronics': 'bg-violet-50 text-violet-700 border-violet-200',
        'Aerospace': 'bg-sky-50 text-sky-700 border-sky-200',
        'Forging': 'bg-rose-50 text-rose-700 border-rose-200'
    }
    return colorMap[type] || 'bg-gray-50 text-gray-700 border-gray-200'
}

const getIconColor = (type) => {
    const colorMap = {
        'Manufacturing': 'text-blue-600',
        'Construction': 'text-orange-600',
        'Industrial': 'text-gray-600',
        'Defense': 'text-red-600',
        'Heavy Equipment': 'text-green-600',
        'Trading': 'text-purple-600',
        'Education': 'text-teal-600',
        'Automotive': 'text-yellow-600',
        'Agriculture': 'text-lime-600',
        'Electronics': 'text-violet-600',
        'Aerospace': 'text-sky-600',
        'Forging': 'text-rose-600'
    }
    return colorMap[type] || 'text-gray-600'
}
</script>

<template>
    <div class="customers-icons-container">
        <!-- Header Section -->
        <div class="header-section">
            <h3 class="badge">
                Our Valued Customers
            </h3>
            <h1 class="title-main">Trusted Partners</h1>
            <h1 class="title-sub">Across Indonesia</h1>
            <p class="description">We are proud to serve leading companies across various industries throughout
                Indonesia.</p>
        </div>

        <!-- Customers Grid -->
        <div class="customers-icons-grid">
            <div v-for="customer in customers" :key="customer.id" class="customer-icon-card">
                <div class="card-header">
                    <div class="icon-container" :class="getTypeColor(customer.type)">
                        <span class="material-symbols-outlined" :class="getIconColor(customer.type)">
                            {{ customer.icon }}
                        </span>
                    </div>
                    <div class="type-badge" :class="getTypeColor(customer.type)">
                        {{ customer.type }}
                    </div>
                </div>

                <div class="card-content">
                    <h3 class="customer-name">
                        {{ customer.name }}
                    </h3>

                    <div class="customer-location">
                        <span class="material-symbols-outlined location-icon">
                            location_on
                        </span>
                        <span>{{ customer.location }}</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer Note -->
        <div class="footer-note">
            <span class="material-symbols-outlined footer-icon">
                groups
            </span>
            <p>And many more trusted partners across various industries</p>
        </div>
    </div>
</template>

<style scoped>
.customers-icons-container {
    padding: 4rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

/* Header Styles */
.header-section {
    text-align: center;
    margin-bottom: 3rem;
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
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--blue);
    margin-bottom: 0.5rem;
}

.title-sub {
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--dark-blue);
    margin-bottom: 1.5rem;
}

.description {
    font-size: 1.1rem;
    color: var(--gray);
    max-width: 500px;
    margin: 0 auto;
    line-height: 1.6;
}

/* Customers Grid */
.customers-icons-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 1.5rem;
    margin-bottom: 3rem;
}

.customer-icon-card {
    background: white;
    border-radius: 1.25rem;
    padding: 1.75rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    border: 1px solid rgba(59, 130, 246, 0.1);
    position: relative;
    overflow: hidden;
}

.customer-icon-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--blue), var(--dark-blue));
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

.customer-icon-card:hover::before {
    transform: scaleX(1);
}

.customer-icon-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1.25rem;
}

.icon-container {
    width: 60px;
    height: 60px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid;
}

.icon-container .material-symbols-outlined {
    font-size: 2rem;
    font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
}

.type-badge {
    padding: 0.4rem 0.9rem;
    border-radius: 50px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border: 1px solid;
}

.card-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.customer-name {
    font-size: 1.15rem;
    font-weight: 600;
    color: var(--dark-blue);
    line-height: 1.4;
    margin: 0;
    min-height: 2.8rem;
    display: flex;
    align-items: center;
}

.customer-location {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--gray);
    font-size: 0.9rem;
    padding-top: 0.5rem;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
}

.location-icon {
    font-size: 1.1rem;
    color: #6B7280;
    font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 20;
}

/* Footer Note */
.footer-note {
    text-align: center;
    padding: 3rem 0 1rem;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
}

.footer-icon {
    font-size: 2.5rem;
    color: var(--blue);
    opacity: 0.7;
    font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 48;
}

.footer-note p {
    color: var(--gray);
    font-size: 1rem;
    font-style: italic;
    margin: 0;
}

/* Material Symbols Outlined Style */
.material-symbols-outlined {
    font-family: 'Material Symbols Outlined';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
}

/* Responsive Design */
@media (max-width: 1024px) {
    .customers-icons-grid {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
}

@media (max-width: 768px) {
    .customers-icons-container {
        padding: 2rem 1rem;
    }

    .title-main,
    .title-sub {
        font-size: 2rem;
    }

    .customers-icons-grid {
        grid-template-columns: 1fr;
        gap: 1.25rem;
    }

    .customer-icon-card {
        padding: 1.5rem;
    }

    .icon-container {
        width: 50px;
        height: 50px;
    }

    .icon-container .material-symbols-outlined {
        font-size: 1.75rem;
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

    .customer-icon-card {
        padding: 1.25rem;
    }

    .customer-name {
        font-size: 1.05rem;
        min-height: 2.6rem;
    }

    .card-header {
        flex-direction: column;
        gap: 0.75rem;
        align-items: flex-start;
    }

    .type-badge {
        align-self: flex-start;
    }

    .footer-icon {
        font-size: 2rem;
    }
}
</style>
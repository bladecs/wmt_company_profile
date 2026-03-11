<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
    <!-- Hero Section -->
    <section class="relative py-20 md:py-32 overflow-hidden">
      <!-- Background with Pure CSS Gradients -->
      <div class="absolute inset-0">
        <!-- Base Gradient - Purple/Orange for Innovation/Creativity -->
        <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900"></div>
        
        <!-- Innovation Waves -->
        <div class="absolute inset-0 opacity-10">
          <div class="absolute top-1/3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent transform -rotate-3"></div>
          <div class="absolute top-2/3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent transform rotate-3"></div>
          <div class="absolute left-1/3 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-orange-400 to-transparent transform -rotate-45"></div>
          <div class="absolute right-1/3 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-purple-400 to-transparent transform rotate-45"></div>
        </div>
        
        <!-- Innovation Glow -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <!-- Corner Innovation Dots -->
        <div class="absolute top-1/4 left-1/4 w-3 h-3 bg-orange-400/30 rounded-full animate-pulse"></div>
        <div class="absolute top-1/4 right-1/4 w-3 h-3 bg-purple-400/30 rounded-full animate-pulse"></div>
        <div class="absolute bottom-1/4 left-1/4 w-3 h-3 bg-purple-400/30 rounded-full animate-pulse"></div>
        <div class="absolute bottom-1/4 right-1/4 w-3 h-3 bg-orange-400/30 rounded-full animate-pulse"></div>
      </div>
      
      <!-- Content -->
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <!-- Innovation Badge -->
          <div class="inline-flex items-center gap-3 mb-8 bg-gradient-to-r from-purple-900/40 to-orange-900/40 backdrop-blur-md px-6 py-3 rounded-full border border-purple-700/30 shadow-xl">
            <div class="w-8 h-8 bg-gradient-to-br from-purple-500 to-orange-400 rounded-full flex items-center justify-center">
              <span class="material-symbols-outlined text-white text-sm">rocket_launch</span>
            </div>
            <span class="text-purple-200 font-semibold tracking-wider text-sm">ACCELERATE INNOVATION</span>
          </div>
          
          <!-- Main Headline -->
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            <span class="bg-gradient-to-r from-purple-400 via-orange-300 to-yellow-400 bg-clip-text text-transparent">
              Akselerasi Inovasi
            </span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-light tracking-wide">
            Dari Konsep Menjadi Realitas
          </p>
          
          <!-- Description Card -->
          <div class="max-w-3xl mx-auto backdrop-blur-sm bg-gradient-to-b from-white/5 to-white/3 p-8 rounded-2xl border border-white/10 shadow-2xl">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 mt-1">
                <div class="w-10 h-10 bg-gradient-to-br from-purple-600 to-orange-500 rounded-lg flex items-center justify-center">
                  <span class="material-symbols-outlined text-white">model_training</span>
                </div>
              </div>
              <p class="text-lg text-gray-200 leading-relaxed">
                Sebelum melangkah ke tahap produksi massal, validasi desain adalah langkah krusial. Kami menyediakan layanan pembuatan prototype presisi untuk membantu Anda menguji fungsi, estetika, dan keterbuatan (manufacturability) produk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Journey -->
    <section class="py-16 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 mb-4">
            <div class="w-2 h-8 bg-gradient-to-b from-purple-500 to-orange-400 rounded-full"></div>
            <span class="text-purple-400 font-semibold tracking-wider uppercase text-sm">JOURNEY TO PRODUCTION</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            <span class="bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
              Perjalanan Pengembangan Produk
            </span>
          </h2>
          <p class="text-lg text-gray-400 max-w-3xl mx-auto">
            Transformasi ide menjadi produk fungsional melalui tahapan yang terstruktur
          </p>
        </div>

        <!-- Journey Steps -->
        <div class="relative mb-16">
          <!-- Connecting Line -->
          <div class="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500/20 via-orange-500/40 to-yellow-500/20 hidden md:block"></div>
          
          <div class="grid md:grid-cols-4 gap-8 relative">
            <!-- Step 1 -->
            <div class="text-center">
              <div class="relative mb-8">
                <!-- Step Number -->
                <div class="w-20 h-20 mx-auto bg-gradient-to-br from-purple-600 to-purple-500 rounded-full flex items-center justify-center mb-4 shadow-xl">
                  <span class="material-symbols-outlined text-white text-3xl">lightbulb</span>
                </div>
                <!-- Connecting Dot -->
                <div class="absolute top-1/2 -right-4 w-8 h-8 bg-gradient-to-br from-purple-500 to-orange-400 rounded-full border-4 border-gray-900 hidden md:block"></div>
              </div>
              <h3 class="text-xl font-bold text-white mb-3">Konsep</h3>
              <p class="text-gray-300">Ide dan konsep awal produk</p>
              <div class="mt-4 text-xs text-purple-300">Step 1</div>
            </div>

            <!-- Step 2 -->
            <div class="text-center">
              <div class="relative mb-8">
                <!-- Step Number -->
                <div class="w-20 h-20 mx-auto bg-gradient-to-br from-orange-600 to-orange-500 rounded-full flex items-center justify-center mb-4 shadow-xl">
                  <span class="material-symbols-outlined text-white text-3xl">draw</span>
                </div>
                <!-- Connecting Dots -->
                <div class="absolute top-1/2 -left-4 w-8 h-8 bg-gradient-to-br from-purple-500 to-orange-400 rounded-full border-4 border-gray-900 hidden md:block"></div>
                <div class="absolute top-1/2 -right-4 w-8 h-8 bg-gradient-to-br from-orange-500 to-yellow-400 rounded-full border-4 border-gray-900 hidden md:block"></div>
              </div>
              <h3 class="text-xl font-bold text-white mb-3">Desain</h3>
              <p class="text-gray-300">3D modeling dan engineering</p>
              <div class="mt-4 text-xs text-orange-300">Step 2</div>
            </div>

            <!-- Step 3 -->
            <div class="text-center">
              <div class="relative mb-8">
                <!-- Step Number -->
                <div class="w-20 h-20 mx-auto bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center mb-4 shadow-xl">
                  <span class="material-symbols-outlined text-white text-3xl">build</span>
                </div>
                <!-- Connecting Dots -->
                <div class="absolute top-1/2 -left-4 w-8 h-8 bg-gradient-to-br from-orange-500 to-yellow-400 rounded-full border-4 border-gray-900 hidden md:block"></div>
                <div class="absolute top-1/2 -right-4 w-8 h-8 bg-gradient-to-br from-yellow-500 to-green-400 rounded-full border-4 border-gray-900 hidden md:block"></div>
              </div>
              <h3 class="text-xl font-bold text-white mb-3">Prototype</h3>
              <p class="text-gray-300">Pembuatan dan pengujian fisik</p>
              <div class="mt-4 text-xs text-yellow-300">Step 3</div>
            </div>

            <!-- Step 4 -->
            <div class="text-center">
              <div class="relative mb-8">
                <!-- Step Number -->
                <div class="w-20 h-20 mx-auto bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center mb-4 shadow-xl">
                  <span class="material-symbols-outlined text-white text-3xl">factory</span>
                </div>
                <!-- Connecting Dot -->
                <div class="absolute top-1/2 -left-4 w-8 h-8 bg-gradient-to-br from-yellow-500 to-green-400 rounded-full border-4 border-gray-900 hidden md:block"></div>
              </div>
              <h3 class="text-xl font-bold text-white mb-3">Produksi</h3>
              <p class="text-gray-300">Mass production siap skala</p>
              <div class="mt-4 text-xs text-green-300">Step 4</div>
            </div>
          </div>
        </div>

        <!-- Visual Process -->
        <div class="backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/3 rounded-2xl border border-white/10 p-8 shadow-2xl">
          <h3 class="text-2xl font-bold text-white mb-8 text-center">Fase Prototyping</h3>
          <div class="grid md:grid-cols-3 gap-8">
            <!-- Concept -->
            <div class="text-center">
              <div class="mb-6">
                <div class="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span class="material-symbols-outlined text-white text-3xl">lightbulb</span>
                </div>
                <h4 class="text-lg font-bold text-white mb-2">Konsep Digital</h4>
                <p class="text-gray-400 text-sm">CAD Model & Simulation</p>
              </div>
              <div class="h-32 rounded-xl bg-gradient-to-br from-purple-900/30 to-purple-800/30 border border-purple-500/20 flex items-center justify-center">
                <div class="w-20 h-20 bg-gradient-to-br from-purple-600/40 to-purple-500/40 rounded-lg transform rotate-12">
                  <div class="absolute inset-2 bg-gradient-to-br from-purple-700/60 to-purple-600/60 rounded-md"></div>
                </div>
              </div>
            </div>

            <!-- Prototype -->
            <div class="text-center">
              <div class="mb-6">
                <div class="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span class="material-symbols-outlined text-white text-3xl">build</span>
                </div>
                <h4 class="text-lg font-bold text-white mb-2">Fisik Prototype</h4>
                <p class="text-gray-400 text-sm">Functional Testing Model</p>
              </div>
              <div class="h-32 rounded-xl bg-gradient-to-br from-orange-900/30 to-orange-800/30 border border-orange-500/20 flex items-center justify-center">
                <div class="relative">
                  <div class="w-24 h-16 bg-gradient-to-br from-orange-600/40 to-orange-500/40 rounded-lg">
                    <div class="absolute inset-3 bg-gradient-to-br from-orange-700/60 to-orange-600/60 rounded-sm"></div>
                    <div class="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-400 rounded-full"></div>
                    <div class="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Production -->
            <div class="text-center">
              <div class="mb-6">
                <div class="w-16 h-16 bg-gradient-to-br from-green-600 to-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span class="material-symbols-outlined text-white text-3xl">inventory_2</span>
                </div>
                <h4 class="text-lg font-bold text-white mb-2">Produksi Massal</h4>
                <p class="text-gray-400 text-sm">Optimized for Manufacturing</p>
              </div>
              <div class="h-32 rounded-xl bg-gradient-to-br from-green-900/30 to-green-800/30 border border-green-500/20 flex items-center justify-center">
                <div class="flex gap-2">
                  <div class="w-12 h-12 bg-gradient-to-br from-green-600/40 to-green-500/40 rounded-lg"></div>
                  <div class="w-12 h-12 bg-gradient-to-br from-green-600/40 to-green-500/40 rounded-lg"></div>
                  <div class="w-12 h-12 bg-gradient-to-br from-green-600/40 to-green-500/40 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-16 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 mb-4">
            <div class="w-2 h-8 bg-gradient-to-b from-purple-500 to-orange-400 rounded-full"></div>
            <span class="text-purple-400 font-semibold tracking-wider uppercase text-sm">LAYANAN KAMI</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            <span class="bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
              Solusi Prototype Development
            </span>
          </h2>
          <p class="text-lg text-gray-400 max-w-3xl mx-auto">
            Layanan lengkap dari pembuatan model hingga konsultasi produksi massal
          </p>
        </div>

        <!-- Services Grid -->
        <div class="grid md:grid-cols-2 gap-8 mb-16">
          <!-- Service 1: Precision Model Making -->
          <div class="group relative backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/3 rounded-2xl border border-white/10 overflow-hidden hover:border-purple-500/30 transition-all duration-500">
            <!-- Background Glow -->
            <div class="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-pink-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div class="relative p-8">
              <!-- Header -->
              <div class="flex items-center gap-4 mb-8">
                <div class="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span class="material-symbols-outlined text-white text-3xl">precision_manufacturing</span>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-white">Pembuatan Model Presisi</h3>
                  <div class="flex items-center gap-2 mt-2">
                    <span class="text-sm font-medium bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent px-3 py-1 rounded-full border border-purple-500/30 backdrop-blur-sm">High Accuracy Prototyping</span>
                  </div>
                </div>
              </div>
              
              <!-- Description -->
              <p class="text-gray-300 mb-8 leading-relaxed">
                Memproduksi model awal (part) dengan tingkat kepresisian tinggi menggunakan material yang sesuai dengan kebutuhan pengujian fungsional dan estetika.
              </p>
              
              <!-- Features -->
              <div class="space-y-4 mb-8">
                <div class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-green-400 mt-1">check_circle</span>
                  <div>
                    <h4 class="font-semibold text-white mb-1">Material Selection</h4>
                    <p class="text-gray-400 text-sm">Pemilihan material sesuai aplikasi: plastic, metal, composite</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-green-400 mt-1">check_circle</span>
                  <div>
                    <h4 class="font-semibold text-white mb-1">Precision Machining</h4>
                    <p class="text-gray-400 text-sm">CNC milling, turning, EDM untuk akurasi tinggi</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-green-400 mt-1">check_circle</span>
                  <div>
                    <h4 class="font-semibold text-white mb-1">Surface Finishing</h4>
                    <p class="text-gray-400 text-sm">Painting, plating, anodizing untuk estetika</p>
                  </div>
                </div>
              </div>
              
              <!-- Material Options -->
              <div class="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl p-6 border border-purple-500/20">
                <h4 class="font-bold text-white mb-4 flex items-center gap-3">
                  <span class="material-symbols-outlined text-pink-400">layers</span>
                  Material Options
                </h4>
                <div class="grid grid-cols-2 gap-3">
                  <div class="text-center p-3 bg-gradient-to-b from-white/5 to-transparent rounded-lg">
                    <div class="text-sm font-bold text-purple-300 mb-1">Aluminum</div>
                    <div class="text-xs text-gray-400">Lightweight & Durable</div>
                  </div>
                  <div class="text-center p-3 bg-gradient-to-b from-white/5 to-transparent rounded-lg">
                    <div class="text-sm font-bold text-purple-300 mb-1">ABS Plastic</div>
                    <div class="text-xs text-gray-400">Impact Resistant</div>
                  </div>
                  <div class="text-center p-3 bg-gradient-to-b from-white/5 to-transparent rounded-lg">
                    <div class="text-sm font-bold text-purple-300 mb-1">Stainless Steel</div>
                    <div class="text-xs text-gray-400">Corrosion Resistant</div>
                  </div>
                  <div class="text-center p-3 bg-gradient-to-b from-white/5 to-transparent rounded-lg">
                    <div class="text-sm font-bold text-purple-300 mb-1">Engineering Grade</div>
                    <div class="text-xs text-gray-400">Special Alloys</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Service 2: Design Consultation -->
          <div class="group relative backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/3 rounded-2xl border border-white/10 overflow-hidden hover:border-orange-500/30 transition-all duration-500">
            <!-- Background Glow -->
            <div class="absolute inset-0 bg-gradient-to-r from-orange-900/20 via-transparent to-yellow-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div class="relative p-8">
              <!-- Header -->
              <div class="flex items-center gap-4 mb-8">
                <div class="w-16 h-16 bg-gradient-to-br from-orange-600 to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span class="material-symbols-outlined text-white text-3xl">design_services</span>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-white">Konsultasi Desain & Pengembangan</h3>
                  <div class="flex items-center gap-2 mt-2">
                    <span class="text-sm font-medium bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent px-3 py-1 rounded-full border border-orange-500/30 backdrop-blur-sm">Design for Manufacturing</span>
                  </div>
                </div>
              </div>
              
              <!-- Description -->
              <p class="text-gray-300 mb-8 leading-relaxed">
                Didukung oleh keahlian dalam desain produk, kami memberikan masukan teknis untuk mengoptimalkan desain agar efisien saat diproduksi massal (Design for Manufacturing/Assembly).
              </p>
              
              <!-- Expertise Areas -->
              <div class="space-y-4 mb-8">
                <div class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-green-400 mt-1">check_circle</span>
                  <div>
                    <h4 class="font-semibold text-white mb-1">DFM Analysis</h4>
                    <p class="text-gray-400 text-sm">Optimisasi desain untuk efisiensi manufaktur</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-green-400 mt-1">check_circle</span>
                  <div>
                    <h4 class="font-semibold text-white mb-1">DFA Review</h4>
                    <p class="text-gray-400 text-sm">Design for Assembly simplification</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-green-400 mt-1">check_circle</span>
                  <div>
                    <h4 class="font-semibold text-white mb-1">Cost Optimization</h4>
                    <p class="text-gray-400 text-sm">Reduksi biaya produksi tanpa mengorbankan kualitas</p>
                  </div>
                </div>
              </div>
              
              <!-- Consultation Process -->
              <div class="bg-gradient-to-br from-orange-900/30 to-yellow-900/30 rounded-xl p-6 border border-orange-500/20">
                <h4 class="font-bold text-white mb-4 flex items-center gap-3">
                  <span class="material-symbols-outlined text-yellow-400">tips_and_updates</span>
                  Proses Konsultasi
                </h4>
                <div class="space-y-4">
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 bg-gradient-to-br from-orange-600 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span class="material-symbols-outlined text-white text-sm">1</span>
                    </div>
                    <span class="text-sm text-gray-300">Initial Design Review & Analysis</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 bg-gradient-to-br from-orange-600 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span class="material-symbols-outlined text-white text-sm">2</span>
                    </div>
                    <span class="text-sm text-gray-300">Manufacturing Feasibility Study</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 bg-gradient-to-br from-orange-600 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span class="material-symbols-outlined text-white text-sm">3</span>
                    </div>
                    <span class="text-sm text-gray-300">Optimization Recommendations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Testing & Validation -->
        <div class="backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/3 rounded-2xl border border-white/10 p-8 shadow-2xl mb-16">
          <h3 class="text-2xl font-bold text-white mb-8 text-center">Validasi & Pengujian Prototype</h3>
          <div class="grid md:grid-cols-3 gap-6">
            <div class="text-center p-6 bg-gradient-to-br from-white/5 to-white/3 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300">
              <div class="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span class="material-symbols-outlined text-white">fit_screen</span>
              </div>
              <h4 class="text-lg font-bold text-white mb-2">Dimensional Validation</h4>
              <p class="text-gray-400 text-sm">CMM measurement untuk verifikasi spesifikasi</p>
            </div>
            
            <div class="text-center p-6 bg-gradient-to-br from-white/5 to-white/3 rounded-xl border border-white/10 hover:border-orange-500/30 transition-all duration-300">
              <div class="w-12 h-12 bg-gradient-to-br from-orange-600 to-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span class="material-symbols-outlined text-white">science</span>
              </div>
              <h4 class="text-lg font-bold text-white mb-2">Functional Testing</h4>
              <p class="text-gray-400 text-sm">Pengujian fungsi dan performa produk</p>
            </div>
            
            <div class="text-center p-6 bg-gradient-to-br from-white/5 to-white/3 rounded-xl border border-white/10 hover:border-green-500/30 transition-all duration-300">
              <div class="w-12 h-12 bg-gradient-to-br from-green-600 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span class="material-symbols-outlined text-white">stress_management</span>
              </div>
              <h4 class="text-lg font-bold text-white mb-2">Stress Analysis</h4>
              <p class="text-gray-400 text-sm">Load testing dan endurance evaluation</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="py-16 bg-gradient-to-b from-gray-900 to-gray-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-12">
          <div class="inline-flex items-center gap-2 mb-4">
            <div class="w-2 h-8 bg-gradient-to-b from-purple-500 to-orange-400 rounded-full"></div>
            <span class="text-purple-400 font-semibold tracking-wider uppercase text-sm">MANFAAT PROTOTYPING</span>
          </div>
          <h2 class="text-3xl font-bold text-white mb-4">
            <span class="bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
              Keuntungan Pengembangan Prototipe
            </span>
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <!-- Cost Benefits -->
          <div class="backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/3 rounded-2xl p-8 border border-white/10">
            <h3 class="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span class="material-symbols-outlined text-green-400">savings</span>
              Penghematan Biaya
            </h3>
            <div class="space-y-4">
              <div class="flex items-center justify-between p-4 bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-lg">
                <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-green-400">trending_down</span>
                  <div>
                    <div class="font-semibold text-white">Reduced Tooling Cost</div>
                    <div class="text-sm text-gray-400">Optimisasi sebelum investasi mold</div>
                  </div>
                </div>
                <span class="text-lg font-bold text-green-300">↓ 40%</span>
              </div>
              
              <div class="flex items-center justify-between p-4 bg-gradient-to-br from-emerald-900/20 to-teal-900/20 rounded-lg">
                <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-emerald-400">speed</span>
                  <div>
                    <div class="font-semibold text-white">Faster Time-to-Market</div>
                    <div class="text-sm text-gray-400">Akselerasi pengembangan produk</div>
                  </div>
                </div>
                <span class="text-lg font-bold text-emerald-300">↑ 60%</span>
              </div>
              
              <div class="flex items-center justify-between p-4 bg-gradient-to-br from-teal-900/20 to-cyan-900/20 rounded-lg">
                <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-teal-400">verified</span>
                  <div>
                    <div class="font-semibold text-white">Risk Mitigation</div>
                    <div class="text-sm text-gray-400">Deteksi masalah sebelum produksi</div>
                  </div>
                </div>
                <span class="text-lg font-bold text-teal-300">↓ 80%</span>
              </div>
            </div>
          </div>

          <!-- Quality Benefits -->
          <div class="backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/3 rounded-2xl p-8 border border-white/10">
            <h3 class="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span class="material-symbols-outlined text-purple-400">workspace_premium</span>
              Peningkatan Kualitas
            </h3>
            <div class="space-y-4">
              <div class="flex items-center gap-3 p-4 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg">
                <span class="material-symbols-outlined text-purple-400">check_circle</span>
                <div>
                  <div class="font-semibold text-white">Design Validation</div>
                  <div class="text-sm text-gray-400">Konfirmasi fungsi sebelum mass production</div>
                </div>
              </div>
              
              <div class="flex items-center gap-3 p-4 bg-gradient-to-br from-pink-900/20 to-rose-900/20 rounded-lg">
                <span class="material-symbols-outlined text-pink-400">check_circle</span>
                <div>
                  <div class="font-semibold text-white">User Experience Testing</div>
                  <div class="text-sm text-gray-400">Evaluasi ergonomi dan usability</div>
                </div>
              </div>
              
              <div class="flex items-center gap-3 p-4 bg-gradient-to-br from-rose-900/20 to-red-900/20 rounded-lg">
                <span class="material-symbols-outlined text-rose-400">check_circle</span>
                <div>
                  <div class="font-semibold text-white">Manufacturability Confirmation</div>
                  <div class="text-sm text-gray-400">Jaminan produksi feasible dan efisien</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline Section -->
    <section class="py-16 bg-gradient-to-b from-gray-950 to-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/3 rounded-2xl border border-white/10 p-8 shadow-2xl">
          <h3 class="text-2xl font-bold text-white mb-8 text-center">Timeline Pengembangan Prototipe</h3>
          
          <div class="relative">
            <!-- Timeline Line -->
            <div class="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-orange-500 to-yellow-500"></div>
            
            <!-- Timeline Items -->
            <div class="space-y-12 pl-8 md:pl-16">
              <!-- Week 1 -->
              <div class="relative">
                <div class="absolute -left-9 md:-left-12 top-0 w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-500 rounded-full border-4 border-gray-900"></div>
                <div class="backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/3 rounded-xl border border-white/10 p-6">
                  <div class="flex justify-between items-start mb-2">
                    <h4 class="text-lg font-bold text-white">Week 1: Design Analysis</h4>
                    <span class="text-sm text-purple-300 bg-purple-900/30 px-3 py-1 rounded-full">5-7 Days</span>
                  </div>
                  <p class="text-gray-400">Review design, DFM analysis, material selection</p>
                </div>
              </div>

              <!-- Week 2-3 -->
              <div class="relative">
                <div class="absolute -left-9 md:-left-12 top-0 w-8 h-8 bg-gradient-to-br from-orange-600 to-orange-500 rounded-full border-4 border-gray-900"></div>
                <div class="backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/3 rounded-xl border border-white/10 p-6">
                  <div class="flex justify-between items-start mb-2">
                    <h4 class="text-lg font-bold text-white">Week 2-3: Prototype Fabrication</h4>
                    <span class="text-sm text-orange-300 bg-orange-900/30 px-3 py-1 rounded-full">10-14 Days</span>
                  </div>
                  <p class="text-gray-400">CNC machining, assembly, surface finishing</p>
                </div>
              </div>

              <!-- Week 4 -->
              <div class="relative">
                <div class="absolute -left-9 md:-left-12 top-0 w-8 h-8 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-full border-4 border-gray-900"></div>
                <div class="backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/3 rounded-xl border border-white/10 p-6">
                  <div class="flex justify-between items-start mb-2">
                    <h4 class="text-lg font-bold text-white">Week 4: Testing & Validation</h4>
                    <span class="text-sm text-yellow-300 bg-yellow-900/30 px-3 py-1 rounded-full">5-7 Days</span>
                  </div>
                  <p class="text-gray-400">Functional testing, dimensional validation, reporting</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="mt-8 text-center text-gray-400 text-sm">
            *Timeline dapat bervariasi tergantung kompleksitas desain
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative py-20 overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0 bg-gradient-to-r from-purple-900/40 via-gray-900 to-orange-900/40">
        <div class="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-orange-400/10 to-yellow-500/10 animate-gradient-x"></div>
      </div>
      
      <!-- Floating Elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-500/5 to-transparent rounded-full blur-3xl"></div>
        <div class="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tr from-orange-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <!-- Content -->
      <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <!-- Heading -->
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
            Siap <span class="bg-gradient-to-r from-purple-400 to-orange-300 bg-clip-text text-transparent">Wujudkan Ide</span> Anda?
          </h2>
          
          <!-- Subtitle -->
          <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Konsultasikan konsep produk Anda dan dapatkan prototype fungsional untuk validasi sebelum produksi massal.
          </p>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <!-- Primary CTA -->
            <router-link 
              to="/contact" 
              class="group relative bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl hover:shadow-purple-500/25 hover:scale-105 overflow-hidden"
            >
              <!-- Hover Effect -->
              <div class="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-white/10 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <!-- Content -->
              <span class="material-symbols-outlined relative">upload_file</span>
              <span class="relative">Upload Desain & Konsultasi</span>
            </router-link>
            
            <!-- Secondary CTA -->
            <a 
              href="tel:+62812207030" 
              class="group relative bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 border-2 border-white/30 hover:border-white flex items-center justify-center gap-3 hover:scale-105 backdrop-blur-sm"
            >
              <span class="material-symbols-outlined">call</span>
              <span>+62 812 207 030</span>
              
              <!-- Animated Underline -->
              <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-orange-300 group-hover:w-full transition-all duration-300"></div>
            </a>
          </div>
          
          <!-- Support Text -->
          <p class="mt-8 text-gray-400 text-sm">
            Free initial consultation untuk evaluasi feasibility dan estimasi timeline
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
</script>

<style scoped>
/* Custom Animations */
@keyframes gradient-x {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-x 3s ease infinite;
}

/* Innovation Wave Animation */
@keyframes wave-move {
  0% {
    transform: translateX(-100%) rotate(-3deg);
  }
  100% {
    transform: translateX(100%) rotate(-3deg);
  }
}

.wave-animation {
  animation: wave-move 20s linear infinite;
}

/* Prototype Build Animation */
@keyframes build-pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
}

.build-pulse {
  animation: build-pulse 2s ease-in-out infinite;
}

/* Idea Glow Animation */
@keyframes idea-glow {
  0%, 100% {
    box-shadow: 0 0 10px rgba(168, 85, 247, 0.3);
  }
  50% {
    box-shadow: 0 0 20px rgba(168, 85, 247, 0.6);
  }
}

.idea-glow {
  animation: idea-glow 2s ease-in-out infinite;
}

/* Progress Bar Animation */
@keyframes progress-fill {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

.progress-fill {
  animation: progress-fill 2s ease-out forwards;
}

/* Material Switch Animation */
@keyframes material-switch {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

.material-switch {
  animation: material-switch 3s ease-in-out infinite;
}
</style>
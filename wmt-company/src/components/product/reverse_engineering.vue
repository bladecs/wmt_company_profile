<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
    <!-- Hero Section -->
    <section class="relative py-20 md:py-32 overflow-hidden">
      <!-- Background with Pure CSS Gradients -->
      <div class="absolute inset-0">
        <!-- Base Gradient - Blue/Teal for Technology/Engineering -->
        <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-teal-950 to-gray-900"></div>
        
        <!-- Animated Central Glow -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        
        <!-- Circuit-like Lines -->
        <div class="absolute inset-0 opacity-10">
          <div class="absolute top-1/4 left-1/4 w-64 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent transform rotate-45"></div>
          <div class="absolute bottom-1/4 right-1/4 w-64 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent transform -rotate-45"></div>
          <div class="absolute top-1/2 left-0 w-1/2 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          <div class="absolute top-0 left-1/2 w-1 h-1/2 bg-gradient-to-b from-transparent via-cyan-400 to-transparent"></div>
        </div>
        
        <!-- Corner Glow Effects -->
        <div class="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <!-- Content -->
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <!-- Certification Badge -->
          <div class="inline-flex items-center gap-3 mb-8 bg-gradient-to-r from-cyan-900/40 to-teal-900/40 backdrop-blur-md px-6 py-3 rounded-full border border-cyan-700/30 shadow-xl">
            <div class="w-8 h-8 bg-gradient-to-br from-cyan-500 to-teal-400 rounded-full flex items-center justify-center">
              <span class="material-symbols-outlined text-white text-sm">verified</span>
            </div>
            <span class="text-cyan-200 font-semibold tracking-wider text-sm">CERTIFIED BY DEPARTEMEN PERINDUSTRIAN</span>
          </div>
          
          <!-- Main Headline -->
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            <span class="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">
              Menghidupkan Kembali Aset Anda
            </span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-light tracking-wide">
            Dengan Presisi Digital
          </p>
          
          <!-- Description Card -->
          <div class="max-w-3xl mx-auto backdrop-blur-sm bg-gradient-to-b from-white/5 to-white/3 p-8 rounded-2xl border border-white/10 shadow-2xl">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 mt-1">
                <div class="w-10 h-10 bg-gradient-to-br from-cyan-600 to-teal-500 rounded-lg flex items-center justify-center">
                  <span class="material-symbols-outlined text-white">sync_alt</span>
                </div>
              </div>
              <p class="text-lg text-gray-200 leading-relaxed">
                Ketiadaan gambar teknis bukan lagi hambatan. Tim engineering kami memiliki sertifikasi resmi dari Departemen Perindustrian untuk layanan <span class="font-bold text-white">Reverse Engineering & Product Design</span>. Kami menjembatani kesenjangan antara komponen fisik yang sudah ada dan kebutuhan data digital untuk reproduksi atau modifikasi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Visualization -->
    <section class="py-16 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 mb-4">
            <div class="w-2 h-8 bg-gradient-to-b from-cyan-500 to-teal-400 rounded-full"></div>
            <span class="text-cyan-400 font-semibold tracking-wider uppercase text-sm">DIGITAL TRANSFORMATION</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            <span class="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              Proses Digitalisasi Komponen
            </span>
          </h2>
          <p class="text-lg text-gray-400 max-w-3xl mx-auto">
            Transformasi objek fisik menjadi data digital yang akurat dan dapat dimodifikasi
          </p>
        </div>

        <!-- Process Flow -->
        <div class="relative mb-16">
          <!-- Connecting Lines -->
          <div class="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/20 via-teal-500/40 to-blue-500/20 hidden md:block"></div>
          
          <div class="grid md:grid-cols-3 gap-8 relative">
            <!-- Step 1 -->
            <div class="text-center">
              <div class="relative mb-8">
                <!-- Step Number -->
                <div class="w-20 h-20 mx-auto bg-gradient-to-br from-cyan-600 to-teal-500 rounded-full flex items-center justify-center mb-4 shadow-xl">
                  <span class="material-symbols-outlined text-white text-3xl">scanner</span>
                </div>
                <!-- Connecting Dot -->
                <div class="absolute top-1/2 -right-4 w-8 h-8 bg-gradient-to-br from-cyan-500 to-teal-400 rounded-full border-4 border-gray-900 hidden md:block"></div>
              </div>
              <h3 class="text-xl font-bold text-white mb-3">3D Scanning</h3>
              <p class="text-gray-300">Capture data permukaan objek fisik dengan teknologi pemindaian terkini</p>
            </div>

            <!-- Step 2 -->
            <div class="text-center">
              <div class="relative mb-8">
                <!-- Step Number -->
                <div class="w-20 h-20 mx-auto bg-gradient-to-br from-teal-600 to-blue-500 rounded-full flex items-center justify-center mb-4 shadow-xl">
                  <span class="material-symbols-outlined text-white text-3xl">architecture</span>
                </div>
                <!-- Connecting Dots -->
                <div class="absolute top-1/2 -left-4 w-8 h-8 bg-gradient-to-br from-cyan-500 to-teal-400 rounded-full border-4 border-gray-900 hidden md:block"></div>
                <div class="absolute top-1/2 -right-4 w-8 h-8 bg-gradient-to-br from-teal-500 to-blue-400 rounded-full border-4 border-gray-900 hidden md:block"></div>
              </div>
              <h3 class="text-xl font-bold text-white mb-3">CAD Modeling</h3>
              <p class="text-gray-300">Konversi data point cloud menjadi model CAD parametrik</p>
            </div>

            <!-- Step 3 -->
            <div class="text-center">
              <div class="relative mb-8">
                <!-- Step Number -->
                <div class="w-20 h-20 mx-auto bg-gradient-to-br from-blue-600 to-indigo-500 rounded-full flex items-center justify-center mb-4 shadow-xl">
                  <span class="material-symbols-outlined text-white text-3xl">verified</span>
                </div>
                <!-- Connecting Dot -->
                <div class="absolute top-1/2 -left-4 w-8 h-8 bg-gradient-to-br from-teal-500 to-blue-400 rounded-full border-4 border-gray-900 hidden md:block"></div>
              </div>
              <h3 class="text-xl font-bold text-white mb-3">Quality Validation</h3>
              <p class="text-gray-300">Verifikasi akurasi model dan optimasi untuk produksi</p>
            </div>
          </div>
        </div>

        <!-- Visual Comparison -->
        <div class="backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/3 rounded-2xl border border-white/10 p-8 shadow-2xl">
          <h3 class="text-2xl font-bold text-white mb-8 text-center">Dari Fisik ke Digital</h3>
          <div class="grid md:grid-cols-2 gap-8">
            <!-- Physical Side -->
            <div class="text-center">
              <div class="mb-6">
                <div class="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span class="material-symbols-outlined text-white text-3xl">cube</span>
                </div>
                <h4 class="text-xl font-bold text-white mb-2">Komponen Fisik</h4>
                <p class="text-gray-400">Tanpa dokumentasi teknis</p>
              </div>
              <div class="h-48 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center">
                <div class="relative">
                  <!-- Physical Part Visualization -->
                  <div class="w-32 h-32 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg transform rotate-12 shadow-lg">
                    <div class="absolute inset-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-md"></div>
                    <div class="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-500 rounded-full"></div>
                    <div class="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Digital Side -->
            <div class="text-center">
              <div class="mb-6">
                <div class="w-16 h-16 bg-gradient-to-br from-cyan-600 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span class="material-symbols-outlined text-white text-3xl">polyline</span>
                </div>
                <h4 class="text-xl font-bold text-white mb-2">Model CAD 3D</h4>
                <p class="text-gray-400">Data digital lengkap dengan parameter</p>
              </div>
              <div class="h-48 rounded-xl bg-gradient-to-br from-cyan-900/30 to-teal-900/30 border border-cyan-500/20 flex items-center justify-center">
                <div class="relative">
                  <!-- Digital CAD Visualization -->
                  <div class="w-32 h-32 bg-gradient-to-br from-cyan-800/50 to-teal-800/50 rounded-lg shadow-lg border border-cyan-500/30">
                    <!-- Grid Pattern -->
                    <div class="absolute inset-0 opacity-20" style="background-image: linear-gradient(90deg, #06b6d4 1px, transparent 1px), linear-gradient(180deg, #06b6d4 1px, transparent 1px); background-size: 20px 20px;"></div>
                    <!-- 3D Object -->
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20">
                      <div class="w-full h-full bg-gradient-to-br from-cyan-500/30 to-teal-500/30 border border-cyan-400/40 rounded-lg transform rotate-45"></div>
                      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-cyan-400/40 to-teal-400/40 border border-cyan-300/40 rounded"></div>
                    </div>
                  </div>
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
            <div class="w-2 h-8 bg-gradient-to-b from-cyan-500 to-teal-400 rounded-full"></div>
            <span class="text-cyan-400 font-semibold tracking-wider uppercase text-sm">KEUNGGULAN LAYANAN</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            <span class="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              Solusi Reverse Engineering
            </span>
          </h2>
          <p class="text-lg text-gray-400 max-w-3xl mx-auto">
            Teknologi dan metodologi terdepan untuk digitalisasi dan validasi komponen
          </p>
        </div>

        <!-- Services Grid -->
        <div class="grid md:grid-cols-2 gap-8 mb-16">
          <!-- Service 1 -->
          <div class="group relative backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/3 rounded-2xl border border-white/10 overflow-hidden hover:border-cyan-500/30 transition-all duration-500">
            <!-- Background Glow -->
            <div class="absolute inset-0 bg-gradient-to-r from-cyan-900/20 via-transparent to-teal-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div class="relative p-8">
              <!-- Header -->
              <div class="flex items-center gap-4 mb-8">
                <div class="w-16 h-16 bg-gradient-to-br from-cyan-600 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span class="material-symbols-outlined text-white text-3xl">grid_3x3</span>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-white">Digitalisasi Komponen</h3>
                  <div class="flex items-center gap-2 mt-2">
                    <span class="text-sm font-medium bg-gradient-to-r from-cyan-500 to-teal-400 bg-clip-text text-transparent px-3 py-1 rounded-full border border-cyan-500/30 backdrop-blur-sm">High Accuracy Scanning</span>
                  </div>
                </div>
              </div>
              
              <!-- Description -->
              <p class="text-gray-300 mb-8 leading-relaxed">
                Mengubah objek fisik menjadi data CAD 3D yang akurat menggunakan teknologi pemindaian terkini dengan presisi tinggi untuk reproduksi atau modifikasi.
              </p>
              
              <!-- Features -->
              <div class="space-y-4 mb-8">
                <div class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-green-400 mt-1">check_circle</span>
                  <div>
                    <h4 class="font-semibold text-white mb-1">Laser Scanning Technology</h4>
                    <p class="text-gray-400 text-sm">Akurasi hingga ±0.025mm untuk detail permukaan kompleks</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-green-400 mt-1">check_circle</span>
                  <div>
                    <h4 class="font-semibold text-white mb-1">Point Cloud Processing</h4>
                    <p class="text-gray-400 text-sm">Konversi data mentah menjadi model geometris yang rapi</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-green-400 mt-1">check_circle</span>
                  <div>
                    <h4 class="font-semibold text-white mb-1">Multi-Format Export</h4>
                    <p class="text-gray-400 text-sm">Support STL, STEP, IGES, Parasolid untuk kompatibilitas luas</p>
                  </div>
                </div>
              </div>
              
              <!-- Technical Specs -->
              <div class="bg-gradient-to-br from-cyan-900/30 to-teal-900/30 rounded-xl p-6 border border-cyan-500/20">
                <h4 class="font-bold text-white mb-4 flex items-center gap-3">
                  <span class="material-symbols-outlined text-teal-400">tune</span>
                  Spesifikasi Teknis
                </h4>
                <div class="grid grid-cols-2 gap-4">
                  <div class="text-center p-3 bg-gradient-to-b from-white/5 to-transparent rounded-lg">
                    <div class="text-lg font-bold text-cyan-300 mb-1">±0.025mm</div>
                    <div class="text-xs text-gray-400">Scanning Accuracy</div>
                  </div>
                  <div class="text-center p-3 bg-gradient-to-b from-white/5 to-transparent rounded-lg">
                    <div class="text-lg font-bold text-cyan-300 mb-1">0.1mm</div>
                    <div class="text-xs text-gray-400">Point Spacing</div>
                  </div>
                  <div class="text-center p-3 bg-gradient-to-b from-white/5 to-transparent rounded-lg">
                    <div class="text-lg font-bold text-cyan-300 mb-1">16+</div>
                    <div class="text-xs text-gray-400">File Formats</div>
                  </div>
                  <div class="text-center p-3 bg-gradient-to-b from-white/5 to-transparent rounded-lg">
                    <div class="text-lg font-bold text-cyan-300 mb-1">100%</div>
                    <div class="text-xs text-gray-400">Data Integrity</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Service 2 -->
          <div class="group relative backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/3 rounded-2xl border border-white/10 overflow-hidden hover:border-cyan-500/30 transition-all duration-500">
            <!-- Background Glow -->
            <div class="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-indigo-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div class="relative p-8">
              <!-- Header -->
              <div class="flex items-center gap-4 mb-8">
                <div class="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span class="material-symbols-outlined text-white text-3xl">design_services</span>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-white">Validasi Desain</h3>
                  <div class="flex items-center gap-2 mt-2">
                    <span class="text-sm font-medium bg-gradient-to-r from-blue-500 to-indigo-400 bg-clip-text text-transparent px-3 py-1 rounded-full border border-blue-500/30 backdrop-blur-sm">CAD/CAM Integration</span>
                  </div>
                </div>
              </div>
              
              <!-- Description -->
              <p class="text-gray-300 mb-8 leading-relaxed">
                Didukung oleh perangkat lunak CAD/CAM terdepan seperti Unigraphics dan Pro/Engineer untuk memastikan integritas dan fungsionalitas desain ulang.
              </p>
              
              <!-- Software Capabilities -->
              <div class="space-y-4 mb-8">
                <div class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-green-400 mt-1">check_circle</span>
                  <div>
                    <h4 class="font-semibold text-white mb-1">Unigraphics NX</h4>
                    <p class="text-gray-400 text-sm">Siemens PLM solution untuk design, simulation, dan manufacturing</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-green-400 mt-1">check_circle</span>
                  <div>
                    <h4 class="font-semibold text-white mb-1">Pro/Engineer (Creo)</h4>
                    <p class="text-gray-400 text-sm">Parametric modeling dengan robust assembly management</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-green-400 mt-1">check_circle</span>
                  <div>
                    <h4 class="font-semibold text-white mb-1">Simulation & Analysis</h4>
                    <p class="text-gray-400 text-sm">FEA, CFD, dan kinematic analysis untuk validasi desain</p>
                  </div>
                </div>
              </div>
              
              <!-- Validation Process -->
              <div class="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-xl p-6 border border-blue-500/20">
                <h4 class="font-bold text-white mb-4 flex items-center gap-3">
                  <span class="material-symbols-outlined text-indigo-400">verified</span>
                  Proses Validasi
                </h4>
                <div class="space-y-4">
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span class="material-symbols-outlined text-white text-sm">1</span>
                    </div>
                    <span class="text-sm text-gray-300">Geometric Dimensioning & Tolerancing (GD&T)</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span class="material-symbols-outlined text-white text-sm">2</span>
                    </div>
                    <span class="text-sm text-gray-300">Interference & Clearance Analysis</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span class="material-symbols-outlined text-white text-sm">3</span>
                    </div>
                    <span class="text-sm text-gray-300">Design for Manufacturing (DFM) Review</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Applications Section -->
        <div class="backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/3 rounded-2xl border border-white/10 p-8 shadow-2xl">
          <h3 class="text-2xl font-bold text-white mb-8 text-center">Aplikasi Industri</h3>
          <div class="grid md:grid-cols-3 gap-6">
            <div class="text-center p-6 bg-gradient-to-br from-white/5 to-white/3 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
              <div class="w-12 h-12 bg-gradient-to-br from-cyan-600 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span class="material-symbols-outlined text-white">engineering</span>
              </div>
              <h4 class="text-lg font-bold text-white mb-2">Spare Parts Reproduction</h4>
              <p class="text-gray-400 text-sm">Produksi ulang komponen yang sudah tidak diproduksi</p>
            </div>
            
            <div class="text-center p-6 bg-gradient-to-br from-white/5 to-white/3 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span class="material-symbols-outlined text-white">upgrade</span>
              </div>
              <h4 class="text-lg font-bold text-white mb-2">Design Modification</h4>
              <p class="text-gray-400 text-sm">Upgrade dan optimasi desain existing</p>
            </div>
            
            <div class="text-center p-6 bg-gradient-to-br from-white/5 to-white/3 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
              <div class="w-12 h-12 bg-gradient-to-br from-teal-600 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span class="material-symbols-outlined text-white">inventory_2</span>
              </div>
              <h4 class="text-lg font-bold text-white mb-2">Documentation Recovery</h4>
              <p class="text-gray-400 text-sm">Pembuatan dokumentasi teknis yang hilang</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technology Stack -->
    <section class="py-16 bg-gradient-to-b from-gray-900 to-gray-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-12">
          <div class="inline-flex items-center gap-2 mb-4">
            <div class="w-2 h-8 bg-gradient-to-b from-cyan-500 to-teal-400 rounded-full"></div>
            <span class="text-cyan-400 font-semibold tracking-wider uppercase text-sm">TECHNOLOGY STACK</span>
          </div>
          <h2 class="text-3xl font-bold text-white mb-4">
            <span class="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              Software & Hardware
            </span>
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <!-- Software -->
          <div class="backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/3 rounded-2xl p-8 border border-white/10">
            <h3 class="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span class="material-symbols-outlined text-cyan-400">computer</span>
              Software Solutions
            </h3>
            <div class="space-y-4">
              <div class="flex items-center justify-between p-4 bg-gradient-to-br from-cyan-900/20 to-teal-900/20 rounded-lg">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-gradient-to-br from-cyan-600 to-teal-500 rounded-lg flex items-center justify-center">
                    <span class="material-symbols-outlined text-white">code</span>
                  </div>
                  <div>
                    <div class="font-semibold text-white">Unigraphics NX</div>
                    <div class="text-sm text-gray-400">Siemens PLM Software</div>
                  </div>
                </div>
                <span class="text-xs text-cyan-300 bg-cyan-900/30 px-3 py-1 rounded-full">CAD/CAM/CAE</span>
              </div>
              
              <div class="flex items-center justify-between p-4 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 rounded-lg">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-500 rounded-lg flex items-center justify-center">
                    <span class="material-symbols-outlined text-white">design_services</span>
                  </div>
                  <div>
                    <div class="font-semibold text-white">Pro/Engineer (Creo)</div>
                    <div class="text-sm text-gray-400">PTC Parametric</div>
                  </div>
                </div>
                <span class="text-xs text-blue-300 bg-blue-900/30 px-3 py-1 rounded-full">Parametric 3D</span>
              </div>
              
              <div class="flex items-center justify-between p-4 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center">
                    <span class="material-symbols-outlined text-white">polyline</span>
                  </div>
                  <div>
                    <div class="font-semibold text-white">Geomagic Design X</div>
                    <div class="text-sm text-gray-400">3D Systems</div>
                  </div>
                </div>
                <span class="text-xs text-purple-300 bg-purple-900/30 px-3 py-1 rounded-full">Reverse Engineering</span>
              </div>
            </div>
          </div>

          <!-- Hardware -->
          <div class="backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/3 rounded-2xl p-8 border border-white/10">
            <h3 class="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span class="material-symbols-outlined text-teal-400">hardware</span>
              Hardware Equipment
            </h3>
            <div class="space-y-4">
              <div class="flex items-center justify-between p-4 bg-gradient-to-br from-teal-900/20 to-emerald-900/20 rounded-lg">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-gradient-to-br from-teal-600 to-emerald-500 rounded-lg flex items-center justify-center">
                    <span class="material-symbols-outlined text-white">scanner</span>
                  </div>
                  <div>
                    <div class="font-semibold text-white">3D Laser Scanner</div>
                    <div class="text-sm text-gray-400">High Precision</div>
                  </div>
                </div>
                <span class="text-xs text-teal-300 bg-teal-900/30 px-3 py-1 rounded-full">±0.025mm</span>
              </div>
              
              <div class="flex items-center justify-between p-4 bg-gradient-to-br from-amber-900/20 to-orange-900/20 rounded-lg">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-gradient-to-br from-amber-600 to-orange-500 rounded-lg flex items-center justify-center">
                    <span class="material-symbols-outlined text-white">precision_manufacturing</span>
                  </div>
                  <div>
                    <div class="font-semibold text-white">CMM Arms</div>
                    <div class="text-sm text-gray-400">Portable Measurement</div>
                  </div>
                </div>
                <span class="text-xs text-amber-300 bg-amber-900/30 px-3 py-1 rounded-full">7-axis</span>
              </div>
              
              <div class="flex items-center justify-between p-4 bg-gradient-to-br from-gray-900/20 to-slate-900/20 rounded-lg">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-gradient-to-br from-gray-600 to-slate-500 rounded-lg flex items-center justify-center">
                    <span class="material-symbols-outlined text-white">developer_board</span>
                  </div>
                  <div>
                    <div class="font-semibold text-white">Workstation</div>
                    <div class="text-sm text-gray-400">High Performance</div>
                  </div>
                </div>
                <span class="text-xs text-gray-300 bg-gray-900/30 px-3 py-1 rounded-full">64GB RAM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative py-20 overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0 bg-gradient-to-r from-cyan-900/40 via-gray-900 to-teal-900/40">
        <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-teal-400/10 to-blue-500/10 animate-gradient-x"></div>
      </div>
      
      <!-- Floating Elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-cyan-500/5 to-transparent rounded-full blur-3xl"></div>
        <div class="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tr from-teal-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <!-- Content -->
      <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <!-- Heading -->
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
            Butuh <span class="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">Reverse Engineering</span>?
          </h2>
          
          <!-- Subtitle -->
          <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Konsultasikan komponen Anda yang membutuhkan digitalisasi dengan tim certified engineer kami.
          </p>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <!-- Primary CTA -->
            <router-link 
              to="/contact" 
              class="group relative bg-gradient-to-r from-cyan-600 to-teal-500 hover:from-cyan-700 hover:to-teal-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 overflow-hidden"
            >
              <!-- Hover Effect -->
              <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-white/10 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <!-- Content -->
              <span class="material-symbols-outlined relative">upload</span>
              <span class="relative">Kirim Data Komponen</span>
            </router-link>
            
            <!-- Secondary CTA -->
            <a 
              href="tel:+62812207030" 
              class="group relative bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 border-2 border-white/30 hover:border-white flex items-center justify-center gap-3 hover:scale-105 backdrop-blur-sm"
            >
              <span class="material-symbols-outlined">call</span>
              <span>+62 812 207 030</span>
              
              <!-- Animated Underline -->
              <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-300 group-hover:w-full transition-all duration-300"></div>
            </a>
          </div>
          
          <!-- Support Text -->
          <p class="mt-8 text-gray-400 text-sm">
            Sertifikasi Departemen Perindustrian menjamin kualitas dan akurasi layanan kami
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

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

.animate-pulse {
  animation: pulse 2s ease-in-out infinite;
}

/* Circuit Line Animation */
@keyframes circuit-glow {
  0%, 100% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.3;
  }
}

.circuit-line {
  animation: circuit-glow 3s ease-in-out infinite;
}

/* 3D Rotation Effect */
@keyframes rotate-3d {
  0% {
    transform: rotateX(0) rotateY(0);
  }
  100% {
    transform: rotateX(360deg) rotateY(360deg);
  }
}

.rotate-3d {
  animation: rotate-3d 20s linear infinite;
}

/* Scan Line Effect */
@keyframes scan-line {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
}

.scan-line {
  animation: scan-line 2s linear infinite;
}
</style>
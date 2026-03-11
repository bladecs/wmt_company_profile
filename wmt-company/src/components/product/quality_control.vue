<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
    <!-- Hero Section -->
    <section class="relative py-20 md:py-32 overflow-hidden">
      <!-- Background with Pure CSS Gradients -->
      <div class="absolute inset-0">
        <!-- Base Gradient - Emerald/Gray for Quality/Precision -->
        <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-emerald-950 to-gray-900"></div>
        
        <!-- Precision Grid Pattern -->
        <div class="absolute inset-0 opacity-5">
          <div class="absolute inset-0" style="
            background-image: 
              linear-gradient(90deg, #10b981 1px, transparent 1px),
              linear-gradient(180deg, #10b981 1px, transparent 1px);
            background-size: 40px 40px;
          "></div>
        </div>
        
        <!-- Central Quality Seal -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl"></div>
        
        <!-- Corner Precision Dots -->
        <div class="absolute top-1/4 left-1/4 w-4 h-4 bg-emerald-400/20 rounded-full"></div>
        <div class="absolute top-1/4 right-1/4 w-4 h-4 bg-emerald-400/20 rounded-full"></div>
        <div class="absolute bottom-1/4 left-1/4 w-4 h-4 bg-emerald-400/20 rounded-full"></div>
        <div class="absolute bottom-1/4 right-1/4 w-4 h-4 bg-emerald-400/20 rounded-full"></div>
        
        <!-- Quality Lines -->
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-emerald-400/10 to-transparent"></div>
        <div class="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/10 to-transparent"></div>
      </div>
      
      <!-- Content -->
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <!-- ISO Certification Badge -->
          <div class="inline-flex items-center gap-3 mb-8 bg-gradient-to-r from-emerald-900/40 to-green-900/40 backdrop-blur-md px-6 py-3 rounded-full border border-emerald-700/30 shadow-xl">
            <div class="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-400 rounded-full flex items-center justify-center">
              <span class="material-symbols-outlined text-white text-sm">verified</span>
            </div>
            <span class="text-emerald-200 font-semibold tracking-wider text-sm">ISO 9001:2015 CERTIFIED</span>
          </div>
          
          <!-- Main Headline -->
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            <span class="bg-gradient-to-r from-emerald-400 via-green-300 to-teal-400 bg-clip-text text-transparent">
              Standar Kualitas Tanpa Kompromi
            </span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-light tracking-wide">
            Jaminan Presisi, Konsistensi, dan Keandalan
          </p>
          
          <!-- Description Card -->
          <div class="max-w-3xl mx-auto backdrop-blur-sm bg-gradient-to-b from-white/5 to-white/3 p-8 rounded-2xl border border-white/10 shadow-2xl">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 mt-1">
                <div class="w-10 h-10 bg-gradient-to-br from-emerald-600 to-green-500 rounded-lg flex items-center justify-center">
                  <span class="material-symbols-outlined text-white">workspace_premium</span>
                </div>
              </div>
              <p class="text-lg text-gray-200 leading-relaxed">
                Kepuasan pelanggan adalah prioritas yang kami jaga melalui sistem kontrol kualitas yang ketat. Fasilitas kami telah tersertifikasi <span class="font-bold text-white">ISO 9001:2015 (Sistem Manajemen Mutu)</span>, menjamin bahwa setiap produk yang keluar dari lini produksi telah lolos uji kelayakan yang komprehensif.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ISO Certification Section -->
    <section class="py-16 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- ISO Certification Display -->
        <div class="backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/3 rounded-2xl border border-white/10 p-8 shadow-2xl mb-16">
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <!-- ISO Info -->
            <div>
              <div class="flex items-center gap-3 mb-6">
                <div class="w-14 h-14 bg-gradient-to-br from-emerald-600 to-green-500 rounded-xl flex items-center justify-center">
                  <span class="material-symbols-outlined text-white text-2xl">verified</span>
                </div>
                <div>
                  <h2 class="text-2xl font-bold text-white">ISO 9001:2015</h2>
                  <p class="text-emerald-400">Quality Management System</p>
                </div>
              </div>
              
              <div class="space-y-4">
                <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-emerald-400">check_circle</span>
                  <span class="text-gray-300">Sistem manajemen mutu terstandar internasional</span>
                </div>
                <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-emerald-400">check_circle</span>
                  <span class="text-gray-300">Continuous improvement process</span>
                </div>
                <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-emerald-400">check_circle</span>
                  <span class="text-gray-300">Customer satisfaction focus</span>
                </div>
                <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-emerald-400">check_circle</span>
                  <span class="text-gray-300">Documented quality procedures</span>
                </div>
              </div>
            </div>
            
            <!-- Certification Visual -->
            <div class="text-center">
              <div class="inline-block p-8 bg-gradient-to-br from-emerald-900/30 to-green-900/30 rounded-2xl border border-emerald-500/20">
                <div class="w-48 h-48 mx-auto relative mb-6">
                  <!-- ISO Seal -->
                  <div class="absolute inset-0 bg-gradient-to-br from-emerald-500 to-green-400 rounded-full blur-xl opacity-20"></div>
                  <div class="absolute inset-8 bg-gradient-to-br from-emerald-600 to-green-500 rounded-full flex items-center justify-center shadow-2xl">
                    <div class="text-center">
                      <div class="text-4xl font-bold text-white">ISO</div>
                      <div class="text-xl text-white mt-2">9001:2015</div>
                    </div>
                  </div>
                </div>
                <div class="text-emerald-300 font-semibold">Quality Management System</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Quality Standards -->
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 mb-4">
            <div class="w-2 h-8 bg-gradient-to-b from-emerald-500 to-green-400 rounded-full"></div>
            <span class="text-emerald-400 font-semibold tracking-wider uppercase text-sm">STANDAR KUALITAS</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            <span class="bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent">
              Prinsip Jaminan Mutu Kami
            </span>
          </h2>
        </div>

        <!-- Quality Principles Grid -->
        <div class="grid md:grid-cols-4 gap-6 mb-16">
          <div class="text-center p-6 backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/3 rounded-xl border border-white/10">
            <div class="w-14 h-14 bg-gradient-to-br from-emerald-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="material-symbols-outlined text-white">precision_manufacturing</span>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">Akurasi</h3>
            <p class="text-gray-400 text-sm">Presisi mikron pada setiap pengukuran</p>
          </div>
          
          <div class="text-center p-6 backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/3 rounded-xl border border-white/10">
            <div class="w-14 h-14 bg-gradient-to-br from-emerald-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="material-symbols-outlined text-white">repeat</span>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">Konsistensi</h3>
            <p class="text-gray-400 text-sm">Standar yang sama untuk setiap batch produksi</p>
          </div>
          
          <div class="text-center p-6 backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/3 rounded-xl border border-white/10">
            <div class="w-14 h-14 bg-gradient-to-br from-emerald-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="material-symbols-outlined text-white">visibility</span>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">Transparansi</h3>
            <p class="text-gray-400 text-sm">Dokumentasi dan traceability lengkap</p>
          </div>
          
          <div class="text-center p-6 backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/3 rounded-xl border border-white/10">
            <div class="w-14 h-14 bg-gradient-to-br from-emerald-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="material-symbols-outlined text-white">upgrade</span>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">Perbaikan Berkelanjutan</h3>
            <p class="text-gray-400 text-sm">Continuous quality enhancement</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CMM Inspection Section -->
    <section class="py-16 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 mb-4">
            <div class="w-2 h-8 bg-gradient-to-b from-emerald-500 to-green-400 rounded-full"></div>
            <span class="text-emerald-400 font-semibold tracking-wider uppercase text-sm">FASILITAS INSPEKSI</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            <span class="bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent">
              Teknologi Inspeksi Presisi Tinggi
            </span>
          </h2>
          <p class="text-lg text-gray-400 max-w-3xl mx-auto">
            Menggunakan peralatan terdepan untuk memastikan akurasi dan kesesuaian dengan spesifikasi teknis
          </p>
        </div>

        <!-- CMM Inspection Main Card -->
        <div class="group relative backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/3 rounded-2xl border border-white/10 overflow-hidden hover:border-emerald-500/30 transition-all duration-500 mb-12">
          <!-- Background Glow -->
          <div class="absolute inset-0 bg-gradient-to-r from-emerald-900/20 via-transparent to-green-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div class="relative md:flex">
            <!-- Left Side - CMM Visualization -->
            <div class="md:w-2/5 bg-gradient-to-br from-emerald-900/50 to-green-900/50 p-8 flex flex-col justify-center relative overflow-hidden">
              <!-- Animated Background -->
              <div class="absolute inset-0">
                <div class="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-green-400/10 to-teal-500/10 animate-gradient-x"></div>
              </div>
              
              <div class="relative text-center">
                <!-- CMM Machine Icon -->
                <div class="w-32 h-32 mx-auto mb-6 relative">
                  <div class="absolute inset-0 bg-gradient-to-br from-emerald-500 to-green-400 rounded-lg blur-xl opacity-30"></div>
                  <div class="absolute inset-4 bg-gradient-to-br from-emerald-600 to-green-500 rounded-lg flex items-center justify-center shadow-2xl">
                    <span class="material-symbols-outlined text-white text-5xl">precision_manufacturing</span>
                  </div>
                </div>
                
                <!-- Accuracy Badge -->
                <div class="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-900/60 to-green-900/60 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-500/30 mb-6">
                  <span class="material-symbols-outlined text-yellow-400">target</span>
                  <span class="text-white font-semibold tracking-wide text-sm">MICRON-LEVEL ACCURACY</span>
                </div>
                
                <!-- CMM Stats -->
                <div class="grid grid-cols-2 gap-4">
                  <div class="text-center p-3 bg-gradient-to-br from-white/10 to-white/5 rounded-lg border border-white/10">
                    <div class="text-lg font-bold text-white mb-1">±0.001</div>
                    <div class="text-xs text-emerald-300">mm Accuracy</div>
                  </div>
                  <div class="text-center p-3 bg-gradient-to-br from-white/10 to-white/5 rounded-lg border border-white/10">
                    <div class="text-lg font-bold text-white mb-1">3D</div>
                    <div class="text-xs text-emerald-300">Axis Measurement</div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Right Side - CMM Details -->
            <div class="md:w-3/5 p-8">
              <!-- Header -->
              <div class="flex items-center gap-4 mb-8">
                <div class="w-12 h-12 bg-gradient-to-br from-emerald-600 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span class="material-symbols-outlined text-white text-2xl">monitoring</span>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-white">CMM Inspection</h3>
                  <div class="flex items-center gap-2 mt-2">
                    <span class="text-sm font-medium bg-gradient-to-r from-emerald-500 to-green-400 bg-clip-text text-transparent px-3 py-1 rounded-full border border-emerald-500/30 backdrop-blur-sm">Coordinate Measuring Machine</span>
                  </div>
                </div>
              </div>
              
              <!-- Description -->
              <p class="text-gray-300 mb-8 leading-relaxed">
                Kami menggunakan mesin <span class="font-bold text-white">CMM (Coordinate Measuring Machine)</span> untuk memverifikasi dimensi geometris produk dengan akurasi mikron, memastikan kesesuaian produk dengan spesifikasi teknis yang disepakati.
              </p>
              
              <!-- CMM Capabilities -->
              <div class="grid md:grid-cols-2 gap-4 mb-8">
                <div class="flex items-center gap-3 p-3 bg-gradient-to-br from-white/5 to-white/3 rounded-lg border border-white/10">
                  <span class="material-symbols-outlined text-emerald-400">check_circle</span>
                  <span class="text-gray-300">3D geometric measurement</span>
                </div>
                <div class="flex items-center gap-3 p-3 bg-gradient-to-br from-white/5 to-white/3 rounded-lg border border-white/10">
                  <span class="material-symbols-outlined text-emerald-400">check_circle</span>
                  <span class="text-gray-300">Non-contact probe system</span>
                </div>
                <div class="flex items-center gap-3 p-3 bg-gradient-to-br from-white/5 to-white/3 rounded-lg border border-white/10">
                  <span class="material-symbols-outlined text-emerald-400">check_circle</span>
                  <span class="text-gray-300">Automated scanning</span>
                </div>
                <div class="flex items-center gap-3 p-3 bg-gradient-to-br from-white/5 to-white/3 rounded-lg border border-white/10">
                  <span class="material-symbols-outlined text-emerald-400">check_circle</span>
                  <span class="text-gray-300">Real-time data analysis</span>
                </div>
              </div>
              
              <!-- Measurement Parameters -->
              <div class="bg-gradient-to-br from-emerald-900/30 to-green-900/30 rounded-xl p-6 border border-emerald-500/20">
                <h4 class="font-bold text-white mb-4 flex items-center gap-3">
                  <span class="material-symbols-outlined text-green-400">straighten</span>
                  Parameter Pengukuran
                </h4>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div class="text-center p-3 bg-gradient-to-b from-white/5 to-transparent rounded-lg">
                    <div class="text-lg font-bold text-emerald-300 mb-1">X, Y, Z</div>
                    <div class="text-xs text-gray-400">Coordinate Axes</div>
                  </div>
                  <div class="text-center p-3 bg-gradient-to-b from-white/5 to-transparent rounded-lg">
                    <div class="text-lg font-bold text-emerald-300 mb-1">±0.001mm</div>
                    <div class="text-xs text-gray-400">Linear Accuracy</div>
                  </div>
                  <div class="text-center p-3 bg-gradient-to-b from-white/5 to-transparent rounded-lg">
                    <div class="text-lg font-bold text-emerald-300 mb-1">±1μm</div>
                    <div class="text-xs text-gray-400">Repeatability</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Additional Inspection Methods -->
        <div class="grid md:grid-cols-3 gap-6">
          <!-- Visual Inspection -->
          <div class="group relative backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/3 rounded-xl border border-white/10 p-6 hover:border-emerald-500/30 transition-all duration-300">
            <div class="w-12 h-12 bg-gradient-to-br from-emerald-600 to-green-500 rounded-lg flex items-center justify-center mb-4">
              <span class="material-symbols-outlined text-white">visibility</span>
            </div>
            <h4 class="text-lg font-bold text-white mb-3">Visual Inspection</h4>
            <p class="text-gray-400 text-sm">Pemeriksaan visual oleh inspektur bersertifikasi untuk mendeteksi cacat permukaan dan assembly.</p>
          </div>
          
          <!-- Dimensional Check -->
          <div class="group relative backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/3 rounded-xl border border-white/10 p-6 hover:border-emerald-500/30 transition-all duration-300">
            <div class="w-12 h-12 bg-gradient-to-br from-emerald-600 to-green-500 rounded-lg flex items-center justify-center mb-4">
              <span class="material-symbols-outlined text-white">straighten</span>
            </div>
            <h4 class="text-lg font-bold text-white mb-3">Dimensional Check</h4>
            <p class="text-gray-400 text-sm">Pengukuran dimensi menggunakan alat ukur presisi seperti micrometer, caliper, dan height gauge.</p>
          </div>
          
          <!-- Surface Roughness -->
          <div class="group relative backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/3 rounded-xl border border-white/10 p-6 hover:border-emerald-500/30 transition-all duration-300">
            <div class="w-12 h-12 bg-gradient-to-br from-emerald-600 to-green-500 rounded-lg flex items-center justify-center mb-4">
              <span class="material-symbols-outlined text-white">texture</span>
            </div>
            <h4 class="text-lg font-bold text-white mb-3">Surface Roughness Test</h4>
            <p class="text-gray-400 text-sm">Pengukuran kekasaran permukaan untuk memastikan kualitas finishing sesuai spesifikasi.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Quality Process Flow -->
    <section class="py-16 bg-gradient-to-b from-gray-900 to-gray-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 mb-4">
            <div class="w-2 h-8 bg-gradient-to-b from-emerald-500 to-green-400 rounded-full"></div>
            <span class="text-emerald-400 font-semibold tracking-wider uppercase text-sm">PROSES KONTROL KUALITAS</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            <span class="bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent">
              Siklus Jaminan Mutu Lengkap
            </span>
          </h2>
        </div>

        <!-- Process Timeline -->
        <div class="relative">
          <!-- Timeline Line -->
          <div class="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-green-400 to-teal-500 hidden md:block"></div>
          
          <!-- Process Steps -->
          <div class="space-y-12">
            <!-- Step 1 -->
            <div class="relative md:flex md:items-center md:justify-between">
              <!-- Left Side -->
              <div class="md:w-5/12 md:text-right mb-8 md:mb-0">
                <div class="inline-block backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/3 p-6 rounded-2xl border border-white/10">
                  <div class="flex md:flex-row-reverse items-center gap-4">
                    <div class="w-14 h-14 bg-gradient-to-br from-emerald-600 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span class="material-symbols-outlined text-white">checklist</span>
                    </div>
                    <div>
                      <h3 class="text-xl font-bold text-white mb-2">Incoming Material Inspection</h3>
                      <p class="text-gray-300">Verifikasi kualitas material masuk sebelum proses produksi</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Center Dot -->
              <div class="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2">
                <div class="w-6 h-6 bg-gradient-to-br from-emerald-500 to-green-400 rounded-full border-4 border-gray-900"></div>
              </div>
              
              <!-- Right Side (Empty for alignment) -->
              <div class="md:w-5/12"></div>
            </div>

            <!-- Step 2 -->
            <div class="relative md:flex md:items-center md:justify-between">
              <!-- Left Side (Empty for alignment) -->
              <div class="md:w-5/12"></div>
              
              <!-- Center Dot -->
              <div class="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2">
                <div class="w-6 h-6 bg-gradient-to-br from-green-500 to-teal-400 rounded-full border-4 border-gray-900"></div>
              </div>
              
              <!-- Right Side -->
              <div class="md:w-5/12">
                <div class="inline-block backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/3 p-6 rounded-2xl border border-white/10">
                  <div class="flex items-center gap-4">
                    <div class="w-14 h-14 bg-gradient-to-br from-green-600 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span class="material-symbols-outlined text-white">monitoring</span>
                    </div>
                    <div>
                      <h3 class="text-xl font-bold text-white mb-2">In-Process Quality Control</h3>
                      <p class="text-gray-300">Monitoring real-time selama proses manufaktur</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Step 3 -->
            <div class="relative md:flex md:items-center md:justify-between">
              <!-- Left Side -->
              <div class="md:w-5/12 md:text-right mb-8 md:mb-0">
                <div class="inline-block backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/3 p-6 rounded-2xl border border-white/10">
                  <div class="flex md:flex-row-reverse items-center gap-4">
                    <div class="w-14 h-14 bg-gradient-to-br from-teal-600 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span class="material-symbols-outlined text-white">precision_manufacturing</span>
                    </div>
                    <div>
                      <h3 class="text-xl font-bold text-white mb-2">Final CMM Inspection</h3>
                      <p class="text-gray-300">Pengukuran komprehensif menggunakan CMM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Center Dot -->
              <div class="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2">
                <div class="w-6 h-6 bg-gradient-to-br from-teal-500 to-cyan-400 rounded-full border-4 border-gray-900"></div>
              </div>
              
              <!-- Right Side (Empty for alignment) -->
              <div class="md:w-5/12"></div>
            </div>

            <!-- Step 4 -->
            <div class="relative md:flex md:items-center md:justify-between">
              <!-- Left Side (Empty for alignment) -->
              <div class="md:w-5/12"></div>
              
              <!-- Center Dot -->
              <div class="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2">
                <div class="w-6 h-6 bg-gradient-to-br from-cyan-500 to-blue-400 rounded-full border-4 border-gray-900"></div>
              </div>
              
              <!-- Right Side -->
              <div class="md:w-5/12">
                <div class="inline-block backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/3 p-6 rounded-2xl border border-white/10">
                  <div class="flex items-center gap-4">
                    <div class="w-14 h-14 bg-gradient-to-br from-cyan-600 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span class="material-symbols-outlined text-white">verified</span>
                    </div>
                    <div>
                      <h3 class="text-xl font-bold text-white mb-2">Certificate of Conformity</h3>
                      <p class="text-gray-300">Dokumen resmi kelulusan produk untuk pengiriman</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quality Documentation -->
    <section class="py-16 bg-gradient-to-b from-gray-950 to-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/3 rounded-2xl border border-white/10 p-8 shadow-2xl">
          <h3 class="text-2xl font-bold text-white mb-8 text-center">Dokumentasi Kualitas</h3>
          <div class="grid md:grid-cols-2 gap-8">
            <!-- Reports -->
            <div>
              <h4 class="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span class="material-symbols-outlined text-emerald-400">description</span>
                Laporan Inspeksi
              </h4>
              <div class="space-y-4">
                <div class="flex items-center gap-3 p-4 bg-gradient-to-br from-emerald-900/20 to-green-900/20 rounded-lg">
                  <span class="material-symbols-outlined text-emerald-400">picture_as_pdf</span>
                  <span class="text-gray-300">Dimensional Inspection Report</span>
                </div>
                <div class="flex items-center gap-3 p-4 bg-gradient-to-br from-emerald-900/20 to-green-900/20 rounded-lg">
                  <span class="material-symbols-outlined text-emerald-400">picture_as_pdf</span>
                  <span class="text-gray-300">Material Certification</span>
                </div>
                <div class="flex items-center gap-3 p-4 bg-gradient-to-br from-emerald-900/20 to-green-900/20 rounded-lg">
                  <span class="material-symbols-outlined text-emerald-400">picture_as_pdf</span>
                  <span class="text-gray-300">Surface Finish Analysis</span>
                </div>
              </div>
            </div>
            
            <!-- Standards -->
            <div>
              <h4 class="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span class="material-symbols-outlined text-green-400">school</span>
                Standar Referensi
              </h4>
              <div class="space-y-4">
                <div class="flex items-center gap-3 p-4 bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-lg">
                  <span class="material-symbols-outlined text-green-400">library_books</span>
                  <span class="text-gray-300">ISO 9001:2015 Standards</span>
                </div>
                <div class="flex items-center gap-3 p-4 bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-lg">
                  <span class="material-symbols-outlined text-green-400">library_books</span>
                  <span class="text-gray-300">GD&T ASME Y14.5</span>
                </div>
                <div class="flex items-center gap-3 p-4 bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-lg">
                  <span class="material-symbols-outlined text-green-400">library_books</span>
                  <span class="text-gray-300">Customer Specifications</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative py-20 overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0 bg-gradient-to-r from-emerald-900/40 via-gray-900 to-green-900/40">
        <div class="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-green-400/10 to-teal-500/10 animate-gradient-x"></div>
      </div>
      
      <!-- Floating Elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-emerald-500/5 to-transparent rounded-full blur-3xl"></div>
        <div class="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tr from-green-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <!-- Content -->
      <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <!-- Heading -->
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
            Pertanyaan Tentang <span class="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">Standar Kualitas</span>?
          </h2>
          
          <!-- Subtitle -->
          <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Hubungi tim quality assurance kami untuk informasi lebih lanjut mengenai sistem kontrol kualitas dan sertifikasi.
          </p>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <!-- Primary CTA -->
            <router-link 
              to="/contact" 
              class="group relative bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-700 hover:to-green-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl hover:shadow-emerald-500/25 hover:scale-105 overflow-hidden"
            >
              <!-- Hover Effect -->
              <div class="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-white/10 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <!-- Content -->
              <span class="material-symbols-outlined relative">chat</span>
              <span class="relative">Konsultasi Quality Assurance</span>
            </router-link>
            
            <!-- Secondary CTA -->
            <a 
              href="tel:+62812207030" 
              class="group relative bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 border-2 border-white/30 hover:border-white flex items-center justify-center gap-3 hover:scale-105 backdrop-blur-sm"
            >
              <span class="material-symbols-outlined">call</span>
              <span>+62 812 207 030</span>
              
              <!-- Animated Underline -->
              <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-green-300 group-hover:w-full transition-all duration-300"></div>
            </a>
          </div>
          
          <!-- Support Text -->
          <p class="mt-8 text-gray-400 text-sm">
            ISO 9001:2015 Certified Quality Management System
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

/* Precision Grid Animation */
@keyframes grid-move {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 40px 40px;
  }
}

.grid-animation {
  animation: grid-move 20s linear infinite;
}

/* Quality Seal Pulse */
@keyframes seal-pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4);
  }
  50% {
    box-shadow: 0 0 0 20px rgba(16, 185, 129, 0);
  }
}

.seal-pulse {
  animation: seal-pulse 2s infinite;
}

/* Checkmark Animation */
@keyframes checkmark {
  0% {
    stroke-dashoffset: 50;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

.checkmark-animation {
  animation: checkmark 0.5s ease-in-out forwards;
}

/* Precision Dot Glow */
@keyframes dot-glow {
  0%, 100% {
    opacity: 0.2;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.2);
  }
}

.dot-glow {
  animation: dot-glow 2s ease-in-out infinite;
}

/* Measurement Line Animation */
@keyframes measure-line {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

.measure-line {
  animation: measure-line 1s ease-out forwards;
}
</style>
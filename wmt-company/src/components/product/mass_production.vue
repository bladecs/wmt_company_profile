<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
    <!-- Hero Section -->
    <section class="relative py-20 md:py-32 overflow-hidden">
      <!-- Background with Pure CSS Gradients -->
      <div class="absolute inset-0">
        <!-- Base Gradient - Steel Blue/Industrial Gray -->
        <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-950 to-gray-900"></div>
        
        <!-- Industrial Grid Pattern -->
        <div class="absolute inset-0 opacity-5">
          <div class="absolute inset-0" style="
            background-image: 
              linear-gradient(90deg, #64748b 1px, transparent 1px),
              linear-gradient(180deg, #64748b 1px, transparent 1px);
            background-size: 60px 60px;
          "></div>
        </div>
        
        <!-- Production Glow -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <!-- Factory Beam Effects -->
        <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-slate-500/20 to-transparent"></div>
        <div class="absolute top-1/3 left-0 w-1/4 h-1 bg-gradient-to-r from-blue-500/30 to-transparent transform rotate-45"></div>
        <div class="absolute bottom-1/3 right-0 w-1/4 h-1 bg-gradient-to-r from-transparent to-slate-500/30 transform -rotate-45"></div>
      </div>
      
      <!-- Content -->
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <!-- Experience Badge -->
          <div class="inline-flex items-center gap-3 mb-8 bg-gradient-to-r from-slate-900/40 to-blue-900/40 backdrop-blur-md px-6 py-3 rounded-full border border-slate-700/30 shadow-xl">
            <div class="w-8 h-8 bg-gradient-to-br from-slate-500 to-blue-400 rounded-full flex items-center justify-center">
              <span class="material-symbols-outlined text-white text-sm">history</span>
            </div>
            <span class="text-slate-200 font-semibold tracking-wider text-sm">SINCE 2002 • 22+ YEARS EXPERIENCE</span>
          </div>
          
          <!-- Main Headline -->
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            <span class="bg-gradient-to-r from-blue-400 via-slate-300 to-slate-400 bg-clip-text text-transparent">
              Mitra Manufaktur Terpercaya
            </span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-light tracking-wide">
            Untuk Skala Industri
          </p>
          
          <!-- Description Card -->
          <div class="max-w-3xl mx-auto backdrop-blur-sm bg-gradient-to-b from-white/5 to-white/3 p-8 rounded-2xl border border-white/10 shadow-2xl">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 mt-1">
                <div class="w-10 h-10 bg-gradient-to-br from-slate-600 to-blue-500 rounded-lg flex items-center justify-center">
                  <span class="material-symbols-outlined text-white">factory</span>
                </div>
              </div>
              <p class="text-lg text-gray-200 leading-relaxed">
                Dengan pengalaman sejak tahun <span class="font-bold text-white">2002</span> melayani sektor otomotif dan industri nasional, <span class="font-bold text-white">Wafiq Mitra Teknik (WMT)</span> memiliki kapasitas dan kompetensi untuk menangani produksi massal dengan konsistensi kualitas yang tinggi dan pengiriman tepat waktu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Production Capacity -->
    <section class="py-16 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 mb-4">
            <div class="w-2 h-8 bg-gradient-to-b from-blue-500 to-slate-400 rounded-full"></div>
            <span class="text-blue-400 font-semibold tracking-wider uppercase text-sm">KAPASITAS PRODUKSI</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            <span class="bg-gradient-to-r from-white via-slate-100 to-white bg-clip-text text-transparent">
              Skala Industri yang Handal
            </span>
          </h2>
          <p class="text-lg text-gray-400 max-w-3xl mx-auto">
            Infrastruktur produksi massal yang dirancang untuk konsistensi, presisi, dan efisiensi tinggi
          </p>
        </div>

        <!-- Capacity Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div class="text-center p-6 backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/3 rounded-xl border border-white/10">
            <div class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent mb-2">22+</div>
            <div class="text-sm text-gray-400">Tahun Pengalaman</div>
          </div>
          
          <div class="text-center p-6 backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/3 rounded-xl border border-white/10">
            <div class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent mb-2">50K+</div>
            <div class="text-sm text-gray-400">Komponen/Tahun</div>
          </div>
          
          <div class="text-center p-6 backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/3 rounded-xl border border-white/10">
            <div class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent mb-2">99.8%</div>
            <div class="text-sm text-gray-400">On-Time Delivery</div>
          </div>
          
          <div class="text-center p-6 backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/3 rounded-xl border border-white/10">
            <div class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent mb-2">±0.01</div>
            <div class="text-sm text-gray-400">mm Tolerance</div>
          </div>
        </div>

        <!-- Production Facility -->
        <div class="backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/3 rounded-2xl border border-white/10 p-8 shadow-2xl mb-16">
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <!-- Facility Info -->
            <div>
              <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span class="material-symbols-outlined text-blue-400">business</span>
                Fasilitas Produksi Massal
              </h3>
              
              <div class="space-y-4">
                <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-blue-400">check_circle</span>
                  <span class="text-gray-300">Automated production lines untuk efisiensi tinggi</span>
                </div>
                <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-blue-400">check_circle</span>
                  <span class="text-gray-300">Real-time production monitoring system</span>
                </div>
                <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-blue-400">check_circle</span>
                  <span class="text-gray-300">In-line quality control automation</span>
                </div>
                <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-blue-400">check_circle</span>
                  <span class="text-gray-300">Just-in-Time (JIT) manufacturing capability</span>
                </div>
              </div>
            </div>
            
            <!-- Facility Visualization -->
            <div class="text-center">
              <div class="inline-block p-6 bg-gradient-to-br from-slate-900/30 to-blue-900/30 rounded-2xl border border-slate-500/20">
                <div class="w-48 h-48 mx-auto relative mb-6">
                  <!-- Production Line Visualization -->
                  <div class="absolute inset-0 bg-gradient-to-br from-slate-700/40 to-blue-700/40 rounded-lg">
                    <!-- Conveyor Line -->
                    <div class="absolute top-1/2 left-4 right-4 h-4 bg-gradient-to-r from-slate-600 to-blue-500 rounded-full"></div>
                    <!-- Products -->
                    <div class="absolute top-1/2 left-8 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-blue-600 to-slate-500 rounded-lg transform -rotate-12"></div>
                    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-br from-blue-700 to-slate-600 rounded-lg"></div>
                    <div class="absolute top-1/2 right-8 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-blue-600 to-slate-500 rounded-lg transform rotate-12"></div>
                  </div>
                </div>
                <div class="text-slate-300 font-semibold">Automated Production Line</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Production Scope -->
    <section class="py-16 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 mb-4">
            <div class="w-2 h-8 bg-gradient-to-b from-blue-500 to-slate-400 rounded-full"></div>
            <span class="text-blue-400 font-semibold tracking-wider uppercase text-sm">LINGKUP PRODUKSI MASSAL</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            <span class="bg-gradient-to-r from-white via-slate-100 to-white bg-clip-text text-transparent">
              Kompetensi Inti Produksi
            </span>
          </h2>
          <p class="text-lg text-gray-400 max-w-3xl mx-auto">
            Spesialisasi dalam tiga bidang utama produksi massal dengan teknologi terkini
          </p>
        </div>

        <!-- Production Categories -->
        <div class="space-y-12">
          <!-- Mold & Dies -->
          <div class="group relative backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/3 rounded-2xl border border-white/10 overflow-hidden hover:border-blue-500/30 transition-all duration-500">
            <!-- Background Glow -->
            <div class="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div class="relative md:flex">
              <!-- Left Side - Visual -->
              <div class="md:w-2/5 bg-gradient-to-br from-blue-900/50 to-slate-900/50 p-8 flex flex-col justify-center relative overflow-hidden">
                <!-- Animated Background -->
                <div class="absolute inset-0">
                  <div class="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-slate-400/10 to-blue-500/10 animate-gradient-x"></div>
                </div>
                
                <div class="relative text-center">
                  <!-- Icon -->
                  <div class="w-32 h-32 mx-auto mb-6 relative">
                    <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-slate-400 rounded-full blur-xl opacity-30"></div>
                    <div class="absolute inset-4 bg-gradient-to-br from-blue-600 to-slate-500 rounded-full flex items-center justify-center shadow-2xl">
                      <span class="material-symbols-outlined text-white text-5xl">construction</span>
                    </div>
                  </div>
                  
                  <!-- Badge -->
                  <div class="inline-flex items-center gap-2 bg-gradient-to-r from-blue-900/60 to-slate-900/60 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-500/30 mb-6">
                    <span class="material-symbols-outlined text-yellow-400">precision_manufacturing</span>
                    <span class="text-white font-semibold tracking-wide text-sm">FOUNDATION OF MASS PRODUCTION</span>
                  </div>
                  
                  <!-- Quick Stats -->
                  <div class="grid grid-cols-2 gap-4">
                    <div class="text-center p-3 bg-gradient-to-br from-white/10 to-white/5 rounded-lg border border-white/10">
                      <div class="text-sm text-blue-300 mb-1">Plastic</div>
                      <div class="text-lg font-bold text-white">Mold</div>
                    </div>
                    <div class="text-center p-3 bg-gradient-to-br from-white/10 to-white/5 rounded-lg border border-white/10">
                      <div class="text-sm text-slate-300 mb-1">Metal</div>
                      <div class="text-lg font-bold text-white">Dies</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Right Side - Details -->
              <div class="md:w-3/5 p-8">
                <!-- Header -->
                <div class="flex items-center gap-4 mb-8">
                  <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-slate-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span class="material-symbols-outlined text-white text-2xl">hardware</span>
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-white">Mold & Dies Manufacturing</h3>
                    <div class="flex items-center gap-2 mt-2">
                      <span class="text-sm font-medium bg-gradient-to-r from-blue-500 to-slate-400 bg-clip-text text-transparent px-3 py-1 rounded-full border border-blue-500/30 backdrop-blur-sm">Foundation of Mass Production</span>
                    </div>
                  </div>
                </div>
                
                <!-- Description -->
                <p class="text-gray-300 mb-8 leading-relaxed">
                  Sebagai fondasi produksi massal, kami ahli dalam pembuatan <span class="font-bold text-white">Plastic Mold</span> dan <span class="font-bold text-white">Metal Dies</span> (termasuk dies forging dan casting). Portofolio kami mencakup pembuatan dies core cylinder head untuk sepeda motor Honda dan dies forging untuk perusahaan nasional.
                </p>
                
                <!-- Capabilities -->
                <div class="grid md:grid-cols-2 gap-4 mb-8">
                  <div class="flex items-center gap-3 p-3 bg-gradient-to-br from-white/5 to-white/3 rounded-lg border border-white/10">
                    <span class="material-symbols-outlined text-blue-400">check_circle</span>
                    <span class="text-gray-300">Plastic Injection Molds</span>
                  </div>
                  <div class="flex items-center gap-3 p-3 bg-gradient-to-br from-white/5 to-white/3 rounded-lg border border-white/10">
                    <span class="material-symbols-outlined text-blue-400">check_circle</span>
                    <span class="text-gray-300">Die Casting Dies</span>
                  </div>
                  <div class="flex items-center gap-3 p-3 bg-gradient-to-br from-white/5 to-white/3 rounded-lg border border-white/10">
                    <span class="material-symbols-outlined text-blue-400">check_circle</span>
                    <span class="text-gray-300">Forging Dies</span>
                  </div>
                  <div class="flex items-center gap-3 p-3 bg-gradient-to-br from-white/5 to-white/3 rounded-lg border border-white/10">
                    <span class="material-symbols-outlined text-blue-400">check_circle</span>
                    <span class="text-gray-300">Stamping Dies</span>
                  </div>
                </div>
                
                <!-- Applications -->
                <div class="bg-gradient-to-br from-blue-900/30 to-slate-900/30 rounded-xl p-6 border border-blue-500/20">
                  <h4 class="font-bold text-white mb-4 flex items-center gap-3">
                    <span class="material-symbols-outlined text-slate-400">apps</span>
                    Aplikasi Industri
                  </h4>
                  <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div class="flex items-center gap-2">
                      <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span class="text-sm text-gray-300">Automotive Parts</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span class="text-sm text-gray-300">Consumer Goods</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <div class="w-2 h-2 bg-slate-400 rounded-full"></div>
                      <span class="text-sm text-gray-300">Industrial Components</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <div class="w-2 h-2 bg-slate-400 rounded-full"></div>
                      <span class="text-sm text-gray-300">Packaging</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span class="text-sm text-gray-300">Electronics Housing</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <div class="w-2 h-2 bg-slate-400 rounded-full"></div>
                      <span class="text-sm text-gray-300">Medical Devices</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Plastic Injection -->
          <div class="group relative backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/3 rounded-2xl border border-white/10 overflow-hidden hover:border-cyan-500/30 transition-all duration-500">
            <!-- Background Glow -->
            <div class="absolute inset-0 bg-gradient-to-r from-cyan-900/20 via-transparent to-teal-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div class="relative md:flex flex-row-reverse">
              <!-- Left Side - Visual -->
              <div class="md:w-2/5 bg-gradient-to-br from-cyan-900/50 to-teal-900/50 p-8 flex flex-col justify-center relative overflow-hidden">
                <!-- Animated Background -->
                <div class="absolute inset-0">
                  <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-teal-400/10 to-cyan-500/10 animate-gradient-x"></div>
                </div>
                
                <div class="relative text-center">
                  <!-- Icon -->
                  <div class="w-32 h-32 mx-auto mb-6 relative">
                    <div class="absolute inset-0 bg-gradient-to-br from-cyan-500 to-teal-400 rounded-full blur-xl opacity-30"></div>
                    <div class="absolute inset-4 bg-gradient-to-br from-cyan-600 to-teal-500 rounded-full flex items-center justify-center shadow-2xl">
                      <span class="material-symbols-outlined text-white text-5xl">inventory_2</span>
                    </div>
                  </div>
                  
                  <!-- Badge -->
                  <div class="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-900/60 to-teal-900/60 backdrop-blur-sm px-4 py-2 rounded-full border border-cyan-500/30 mb-6">
                    <span class="material-symbols-outlined text-yellow-400">auto_mode</span>
                    <span class="text-white font-semibold tracking-wide text-sm">HIGH VOLUME PRODUCTION</span>
                  </div>
                  
                  <!-- Quick Stats -->
                  <div class="grid grid-cols-2 gap-4">
                    <div class="text-center p-3 bg-gradient-to-br from-white/10 to-white/5 rounded-lg border border-white/10">
                      <div class="text-sm text-cyan-300 mb-1">Cycle Time</div>
                      <div class="text-lg font-bold text-white">15-30s</div>
                    </div>
                    <div class="text-center p-3 bg-gradient-to-br from-white/10 to-white/5 rounded-lg border border-white/10">
                      <div class="text-sm text-teal-300 mb-1">Cavity</div>
                      <div class="text-lg font-bold text-white">1-32</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Right Side - Details -->
              <div class="md:w-3/5 p-8">
                <!-- Header -->
                <div class="flex items-center gap-4 mb-8">
                  <div class="w-12 h-12 bg-gradient-to-br from-cyan-600 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span class="material-symbols-outlined text-white text-2xl">precision_manufacturing</span>
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-white">Plastic Injection Products</h3>
                    <div class="flex items-center gap-2 mt-2">
                      <span class="text-sm font-medium bg-gradient-to-r from-cyan-500 to-teal-400 bg-clip-text text-transparent px-3 py-1 rounded-full border border-cyan-500/30 backdrop-blur-sm">Precision Injection Molding</span>
                    </div>
                  </div>
                </div>
                
                <!-- Description -->
                <p class="text-gray-300 mb-8 leading-relaxed">
                  Produksi massal komponen plastik presisi untuk berbagai sektor, mulai dari otomotif, elektronik, hingga kebutuhan rumah tangga dengan konsistensi kualitas dan dimensional stability yang superior.
                </p>
                
                <!-- Features -->
                <div class="grid md:grid-cols-2 gap-4 mb-8">
                  <div class="flex items-center gap-3 p-3 bg-gradient-to-br from-white/5 to-white/3 rounded-lg border border-white/10">
                    <span class="material-symbols-outlined text-cyan-400">check_circle</span>
                    <span class="text-gray-300">High-tonnage injection machines</span>
                  </div>
                  <div class="flex items-center gap-3 p-3 bg-gradient-to-br from-white/5 to-white/3 rounded-lg border border-white/10">
                    <span class="material-symbols-outlined text-cyan-400">check_circle</span>
                    <span class="text-gray-300">Robotic part extraction</span>
                  </div>
                  <div class="flex items-center gap-3 p-3 bg-gradient-to-br from-white/5 to-white/3 rounded-lg border border-white/10">
                    <span class="material-symbols-outlined text-cyan-400">check_circle</span>
                    <span class="text-gray-300">In-mold decoration capability</span>
                  </div>
                  <div class="flex items-center gap-3 p-3 bg-gradient-to-br from-white/5 to-white/3 rounded-lg border border-white/10">
                    <span class="material-symbols-outlined text-cyan-400">check_circle</span>
                    <span class="text-gray-300">Overmolding & insert molding</span>
                  </div>
                </div>
                
                <!-- Material Options -->
                <div class="bg-gradient-to-br from-cyan-900/30 to-teal-900/30 rounded-xl p-6 border border-cyan-500/20">
                  <h4 class="font-bold text-white mb-4 flex items-center gap-3">
                    <span class="material-symbols-outlined text-teal-400">layers</span>
                    Material Plastik
                  </h4>
                  <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div class="text-center p-3 bg-gradient-to-b from-white/5 to-transparent rounded-lg">
                      <div class="text-sm font-bold text-cyan-300 mb-1">ABS</div>
                      <div class="text-xs text-gray-400">High Impact</div>
                    </div>
                    <div class="text-center p-3 bg-gradient-to-b from-white/5 to-transparent rounded-lg">
                      <div class="text-sm font-bold text-cyan-300 mb-1">Polycarbonate</div>
                      <div class="text-xs text-gray-400">High Strength</div>
                    </div>
                    <div class="text-center p-3 bg-gradient-to-b from-white/5 to-transparent rounded-lg">
                      <div class="text-sm font-bold text-cyan-300 mb-1">Nylon</div>
                      <div class="text-xs text-gray-400">Wear Resistant</div>
                    </div>
                    <div class="text-center p-3 bg-gradient-to-b from-white/5 to-transparent rounded-lg">
                      <div class="text-sm font-bold text-cyan-300 mb-1">Polypropylene</div>
                      <div class="text-xs text-gray-400">Chemical Resistant</div>
                    </div>
                    <div class="text-center p-3 bg-gradient-to-b from-white/5 to-transparent rounded-lg">
                      <div class="text-sm font-bold text-cyan-300 mb-1">PEEK</div>
                      <div class="text-xs text-gray-400">High Temp</div>
                    </div>
                    <div class="text-center p-3 bg-gradient-to-b from-white/5 to-transparent rounded-lg">
                      <div class="text-sm font-bold text-cyan-300 mb-1">Custom Blends</div>
                      <div class="text-xs text-gray-400">On Request</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Metal & Aluminium Components -->
          <div class="group relative backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/3 rounded-2xl border border-white/10 overflow-hidden hover:border-amber-500/30 transition-all duration-500">
            <!-- Background Glow -->
            <div class="absolute inset-0 bg-gradient-to-r from-amber-900/20 via-transparent to-orange-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div class="relative md:flex">
              <!-- Left Side - Visual -->
              <div class="md:w-2/5 bg-gradient-to-br from-amber-900/50 to-orange-900/50 p-8 flex flex-col justify-center relative overflow-hidden">
                <!-- Animated Background -->
                <div class="absolute inset-0">
                  <div class="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-orange-400/10 to-amber-500/10 animate-gradient-x"></div>
                </div>
                
                <div class="relative text-center">
                  <!-- Icon -->
                  <div class="w-32 h-32 mx-auto mb-6 relative">
                    <div class="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-400 rounded-full blur-xl opacity-30"></div>
                    <div class="absolute inset-4 bg-gradient-to-br from-amber-600 to-orange-500 rounded-full flex items-center justify-center shadow-2xl">
                      <span class="material-symbols-outlined text-white text-5xl">hardware</span>
                    </div>
                  </div>
                  
                  <!-- Badge -->
                  <div class="inline-flex items-center gap-2 bg-gradient-to-r from-amber-900/60 to-orange-900/60 backdrop-blur-sm px-4 py-2 rounded-full border border-amber-500/30 mb-6">
                    <span class="material-symbols-outlined text-yellow-400">bolt</span>
                    <span class="text-white font-semibold tracking-wide text-sm">HIGH STRENGTH COMPONENTS</span>
                  </div>
                  
                  <!-- Quick Stats -->
                  <div class="grid grid-cols-2 gap-4">
                    <div class="text-center p-3 bg-gradient-to-br from-white/10 to-white/5 rounded-lg border border-white/10">
                      <div class="text-sm text-amber-300 mb-1">Metal</div>
                      <div class="text-lg font-bold text-white">Steel</div>
                    </div>
                    <div class="text-center p-3 bg-gradient-to-br from-white/10 to-white/5 rounded-lg border border-white/10">
                      <div class="text-sm text-orange-300 mb-1">Alloy</div>
                      <div class="text-lg font-bold text-white">Aluminium</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Right Side - Details -->
              <div class="md:w-3/5 p-8">
                <!-- Header -->
                <div class="flex items-center gap-4 mb-8">
                  <div class="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span class="material-symbols-outlined text-white text-2xl">engineering</span>
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-white">Metal & Aluminium Components</h3>
                    <div class="flex items-center gap-2 mt-2">
                      <span class="text-sm font-medium bg-gradient-to-r from-amber-500 to-orange-400 bg-clip-text text-transparent px-3 py-1 rounded-full border border-amber-500/30 backdrop-blur-sm">Precision Metal Parts</span>
                    </div>
                  </div>
                </div>
                
                <!-- Description -->
                <p class="text-gray-300 mb-8 leading-relaxed">
                  Kami melayani produksi massal komponen logam dan aluminium, termasuk part presisi seperti <span class="font-bold text-white">knuckle</span>, komponen turbin, serta <span class="font-bold text-white">jig & fixture</span> yang membutuhkan ketahanan material tinggi dengan toleransi ketat.
                </p>
                
                <!-- Processes -->
                <div class="grid md:grid-cols-2 gap-4 mb-8">
                  <div class="flex items-center gap-3 p-3 bg-gradient-to-br from-white/5 to-white/3 rounded-lg border border-white/10">
                    <span class="material-symbols-outlined text-amber-400">check_circle</span>
                    <span class="text-gray-300">Precision CNC Machining</span>
                  </div>
                  <div class="flex items-center gap-3 p-3 bg-gradient-to-br from-white/5 to-white/3 rounded-lg border border-white/10">
                    <span class="material-symbols-outlined text-amber-400">check_circle</span>
                    <span class="text-gray-300">Die Casting Production</span>
                  </div>
                  <div class="flex items-center gap-3 p-3 bg-gradient-to-br from-white/5 to-white/3 rounded-lg border border-white/10">
                    <span class="material-symbols-outlined text-amber-400">check_circle</span>
                    <span class="text-gray-300">Forging & Stamping</span>
                  </div>
                  <div class="flex items-center gap-3 p-3 bg-gradient-to-br from-white/5 to-white/3 rounded-lg border border-white/10">
                    <span class="material-symbols-outlined text-amber-400">check_circle</span>
                    <span class="text-gray-300">Heat Treatment</span>
                  </div>
                </div>
                
                <!-- Component Types -->
                <div class="bg-gradient-to-br from-amber-900/30 to-orange-900/30 rounded-xl p-6 border border-amber-500/20">
                  <h4 class="font-bold text-white mb-4 flex items-center gap-3">
                    <span class="material-symbols-outlined text-orange-400">category</span>
                    Tipe Komponen
                  </h4>
                  <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div class="flex items-center gap-2">
                      <div class="w-2 h-2 bg-amber-400 rounded-full"></div>
                      <span class="text-sm text-gray-300">Automotive Knuckle</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <div class="w-2 h-2 bg-amber-400 rounded-full"></div>
                      <span class="text-sm text-gray-300">Turbine Components</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <div class="w-2 h-2 bg-amber-400 rounded-full"></div>
                      <span class="text-sm text-gray-300">Jig & Fixture</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <div class="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span class="text-sm text-gray-300">Structural Parts</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <div class="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span class="text-sm text-gray-300">Brackets & Mounts</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <div class="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span class="text-sm text-gray-300">Precision Shafts</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Client Trust Section -->
    <section class="py-16 bg-gradient-to-b from-gray-900 to-gray-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 mb-4">
            <div class="w-2 h-8 bg-gradient-to-b from-blue-500 to-slate-400 rounded-full"></div>
            <span class="text-blue-400 font-semibold tracking-wider uppercase text-sm">KLIEN & KEPERCAYAAN INDUSTRI</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            <span class="bg-gradient-to-r from-white via-slate-100 to-white bg-clip-text text-transparent">
              Dipercaya oleh Industri Terkemuka
            </span>
          </h2>
          <p class="text-lg text-gray-400 max-w-3xl mx-auto">
            Kualitas dan reliabilitas kami telah menjadikan WMT sebagai mitra strategis dalam rantai pasok industri nasional
          </p>
        </div>

        <!-- Client Portfolio -->
        <div class="backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/3 rounded-2xl border border-white/10 p-8 shadow-2xl mb-16">
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <!-- PT Pindad -->
            <div class="text-center p-6 bg-gradient-to-br from-slate-900/30 to-blue-900/30 rounded-xl border border-slate-500/20">
              <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-slate-500 rounded-full flex items-center justify-center">
                <span class="material-symbols-outlined text-white text-2xl">military_tech</span>
              </div>
              <h4 class="text-lg font-bold text-white mb-2">PT Pindad</h4>
              <p class="text-gray-400 text-sm">Defense & Heavy Industry</p>
            </div>
            
            <!-- PT Komatsu Indonesia -->
            <div class="text-center p-6 bg-gradient-to-br from-slate-900/30 to-blue-900/30 rounded-xl border border-slate-500/20">
              <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-slate-500 rounded-full flex items-center justify-center">
                <span class="material-symbols-outlined text-white text-2xl">construction</span>
              </div>
              <h4 class="text-lg font-bold text-white mb-2">PT Komatsu Indonesia</h4>
              <p class="text-gray-400 text-sm">Heavy Equipment</p>
            </div>
            
            <!-- PT Astra Otoparts -->
            <div class="text-center p-6 bg-gradient-to-br from-slate-900/30 to-blue-900/30 rounded-xl border border-slate-500/20">
              <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-slate-500 rounded-full flex items-center justify-center">
                <span class="material-symbols-outlined text-white text-2xl">directions_car</span>
              </div>
              <h4 class="text-lg font-bold text-white mb-2">PT Astra Otoparts</h4>
              <p class="text-gray-400 text-sm">Automotive Components</p>
            </div>
            
            <!-- PT Toyota -->
            <div class="text-center p-6 bg-gradient-to-br from-slate-900/30 to-blue-900/30 rounded-xl border border-slate-500/20">
              <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-slate-500 rounded-full flex items-center justify-center">
                <span class="material-symbols-outlined text-white text-2xl">factory</span>
              </div>
              <h4 class="text-lg font-bold text-white mb-2">PT Toyota</h4>
              <p class="text-gray-400 text-sm">Automotive Manufacturing</p>
            </div>
          </div>
        </div>

        <!-- Industries Served -->
        <div class="backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/3 rounded-2xl border border-white/10 p-8 shadow-2xl">
          <h3 class="text-2xl font-bold text-white mb-8 text-center">Industri yang Kami Layani</h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div class="text-center p-4">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-slate-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span class="material-symbols-outlined text-white">directions_car</span>
              </div>
              <div class="text-sm text-gray-300">Automotive</div>
            </div>
            
            <div class="text-center p-4">
              <div class="w-12 h-12 bg-gradient-to-br from-cyan-600 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span class="material-symbols-outlined text-white">devices</span>
              </div>
              <div class="text-sm text-gray-300">Electronics</div>
            </div>
            
            <div class="text-center p-4">
              <div class="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span class="material-symbols-outlined text-white">medical_services</span>
              </div>
              <div class="text-sm text-gray-300">Medical Devices</div>
            </div>
            
            <div class="text-center p-4">
              <div class="w-12 h-12 bg-gradient-to-br from-emerald-600 to-green-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span class="material-symbols-outlined text-white">package</span>
              </div>
              <div class="text-sm text-gray-300">Consumer Goods</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quality Commitment -->
    <section class="py-16 bg-gradient-to-b from-gray-950 to-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/3 rounded-2xl border border-white/10 p-8 shadow-2xl">
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <!-- Quality Commitment -->
            <div>
              <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span class="material-symbols-outlined text-emerald-400">verified</span>
                Komitmen Kualitas
              </h3>
              
              <div class="space-y-4">
                <div class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-emerald-400 mt-1">check_circle</span>
                  <div>
                    <h4 class="font-semibold text-white mb-1">ISO 9001:2015 Certified</h4>
                    <p class="text-gray-400 text-sm">Sistem manajemen mutu terstandar internasional</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-emerald-400 mt-1">check_circle</span>
                  <div>
                    <h4 class="font-semibold text-white mb-1">Statistical Process Control</h4>
                    <p class="text-gray-400 text-sm">Real-time quality monitoring dan control</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-emerald-400 mt-1">check_circle</span>
                  <div>
                    <h4 class="font-semibold text-white mb-1">Traceability System</h4>
                    <p class="text-gray-400 text-sm">Full material dan production traceability</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Production Excellence -->
            <div>
              <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span class="material-symbols-outlined text-blue-400">rocket_launch</span>
                Keunggulan Produksi
              </h3>
              
              <div class="space-y-4">
                <div class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-blue-400 mt-1">check_circle</span>
                  <div>
                    <h4 class="font-semibold text-white mb-1">Lean Manufacturing</h4>
                    <p class="text-gray-400 text-sm">Sistem produksi efisien dengan waste minimal</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-blue-400 mt-1">check_circle</span>
                  <div>
                    <h4 class="font-semibold text-white mb-1">Continuous Improvement</h4>
                    <p class="text-gray-400 text-sm">Kaizen dan optimisasi berkelanjutan</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-blue-400 mt-1">check_circle</span>
                  <div>
                    <h4 class="font-semibold text-white mb-1">Supply Chain Integration</h4>
                    <p class="text-gray-400 text-sm">Koordinasi optimal dengan vendor dan customer</p>
                  </div>
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
      <div class="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-gray-900 to-blue-900/40">
        <div class="absolute inset-0 bg-gradient-to-r from-slate-500/10 via-blue-400/10 to-slate-500/10 animate-gradient-x"></div>
      </div>
      
      <!-- Floating Elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-slate-500/5 to-transparent rounded-full blur-3xl"></div>
        <div class="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <!-- Content -->
      <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <!-- Heading -->
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
            Siap Jadi <span class="bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent">Mitra Produksi</span> Anda?
          </h2>
          
          <!-- Subtitle -->
          <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Diskusikan kebutuhan produksi massal Anda dengan tim ahli kami dan dapatkan solusi manufaktur yang scalable dan reliable.
          </p>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <!-- Primary CTA -->
            <router-link 
              to="/contact" 
              class="group relative bg-gradient-to-r from-blue-600 to-slate-500 hover:from-blue-700 hover:to-slate-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl hover:shadow-blue-500/25 hover:scale-105 overflow-hidden"
            >
              <!-- Hover Effect -->
              <div class="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-white/10 to-slate-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <!-- Content -->
              <span class="material-symbols-outlined relative">request_quote</span>
              <span class="relative">Request Production Quote</span>
            </router-link>
            
            <!-- Secondary CTA -->
            <a 
              href="tel:+62812207030" 
              class="group relative bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 border-2 border-white/30 hover:border-white flex items-center justify-center gap-3 hover:scale-105 backdrop-blur-sm"
            >
              <span class="material-symbols-outlined">call</span>
              <span>+62 812 207 030</span>
              
              <!-- Animated Underline -->
              <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-slate-300 group-hover:w-full transition-all duration-300"></div>
            </a>
          </div>
          
          <!-- Support Text -->
          <p class="mt-8 text-gray-400 text-sm">
            Free capacity analysis dan production feasibility study untuk proyek Anda
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

/* Industrial Beam Animation */
@keyframes beam-scan {
  0% {
    transform: translateX(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(100%) rotate(45deg);
  }
}

.beam-scan {
  animation: beam-scan 10s linear infinite;
}

/* Production Line Animation */
@keyframes conveyor-move {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.conveyor-animation {
  animation: conveyor-move 3s linear infinite;
}

/* Factory Pulse Animation */
@keyframes factory-pulse {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.02);
  }
}

.factory-pulse {
  animation: factory-pulse 3s ease-in-out infinite;
}

/* Industrial Grid Animation */
@keyframes grid-move {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 60px 60px;
  }
}

.grid-animation {
  animation: grid-move 20s linear infinite;
}

/* Quality Stamp Animation */
@keyframes stamp-approve {
  0% {
    transform: scale(0) rotate(0deg);
    opacity: 0;
  }
  50% {
    transform: scale(1.1) rotate(5deg);
    opacity: 1;
  }
  100% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
}

.stamp-animation {
  animation: stamp-approve 0.5s ease-out forwards;
}
</style>
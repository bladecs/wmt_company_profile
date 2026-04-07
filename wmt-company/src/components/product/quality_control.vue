<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
    <section class="relative overflow-hidden py-24 md:py-32">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-br from-gray-950 via-emerald-950 to-gray-900"></div>
        <div class="absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-3xl animate-pulse-soft"></div>
        <div class="absolute left-0 top-0 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl"></div>
        <div class="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-green-500/10 blur-3xl"></div>

        <div class="absolute inset-0 opacity-10">
          <div class="absolute inset-0 inspection-grid"></div>
        </div>
      </div>

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <div class="mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-700/30 bg-gradient-to-r from-emerald-900/40 to-green-900/40 px-6 py-3 shadow-xl backdrop-blur-md">
            <div class="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-green-400">
              <span class="material-symbols-outlined text-sm text-white">verified</span>
            </div>
            <span class="text-sm font-semibold tracking-[0.22em] text-emerald-200">
              INSPECTION & QUALITY ASSURANCE
            </span>
          </div>

          <h1 class="mb-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            <span class="bg-gradient-to-r from-emerald-400 via-green-300 to-teal-300 bg-clip-text text-transparent">
              Verifikasi Kualitas
            </span>
            <br>
            dengan Measurement dan NDT
          </h1>

          <p class="mx-auto mb-10 max-w-3xl text-xl font-light tracking-wide text-gray-300 md:text-2xl">
            Pemeriksaan dimensi dan non-destructive testing untuk memastikan akurasi, integritas, dan kesiapan produk.
          </p>

          <div class="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-gradient-to-b from-white/7 to-white/4 p-8 shadow-2xl backdrop-blur-sm">
            <div class="flex flex-col items-start gap-4 text-left md:flex-row">
              <div class="mt-1 flex-shrink-0">
                <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-green-500">
                  <span class="material-symbols-outlined text-white">workspace_premium</span>
                </div>
              </div>
              <p class="text-lg leading-relaxed text-gray-200">
                Layanan inspection kami difokuskan pada
                <span class="font-bold text-white"> Measurement </span>
                untuk verifikasi dimensi dan toleransi, serta
                <span class="font-bold text-white"> NDT </span>
                untuk memeriksa kondisi material tanpa merusak komponen. Kombinasi keduanya membantu memastikan kualitas produk sebelum digunakan atau dikirimkan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-16 text-center">
          <div class="mb-4 inline-flex items-center gap-2">
            <div class="h-8 w-2 rounded-full bg-gradient-to-b from-emerald-500 to-green-400"></div>
            <span class="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">Inspection Flow</span>
          </div>
          <h2 class="mb-4 text-3xl font-bold text-white md:text-4xl">
            <span class="bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent">
              Proses Verifikasi Komponen
            </span>
          </h2>
          <p class="mx-auto max-w-3xl text-lg text-gray-400">
            Inspection dilakukan melalui pengukuran dimensi dan evaluasi kondisi material untuk memastikan kualitas menyeluruh.
          </p>
        </div>

        <div class="relative mb-16">
          <div class="absolute left-0 right-0 top-1/2 hidden h-0.5 bg-gradient-to-r from-emerald-500/20 via-green-500/40 to-teal-500/20 md:block"></div>

          <div class="relative grid gap-8 md:grid-cols-3">
            <div class="text-center">
              <div class="relative mb-8">
                <div class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-600 to-green-500 shadow-xl">
                  <span class="material-symbols-outlined text-3xl text-white">straighten</span>
                </div>
                <div class="absolute -right-4 top-1/2 hidden h-8 w-8 rounded-full border-4 border-gray-900 bg-gradient-to-br from-emerald-500 to-green-400 md:block"></div>
              </div>
              <h3 class="mb-3 text-xl font-bold text-white">Measurement</h3>
              <p class="text-gray-300">
                Pengukuran dimensi, geometri, dan toleransi untuk memastikan kesesuaian dengan drawing atau spesifikasi teknis.
              </p>
            </div>

            <div class="text-center">
              <div class="relative mb-8">
                <div class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-teal-500 shadow-xl">
                  <span class="material-symbols-outlined text-3xl text-white">health_and_safety</span>
                </div>
                <div class="absolute -left-4 top-1/2 hidden h-8 w-8 rounded-full border-4 border-gray-900 bg-gradient-to-br from-emerald-500 to-green-400 md:block"></div>
                <div class="absolute -right-4 top-1/2 hidden h-8 w-8 rounded-full border-4 border-gray-900 bg-gradient-to-br from-green-500 to-teal-400 md:block"></div>
              </div>
              <h3 class="mb-3 text-xl font-bold text-white">NDT</h3>
              <p class="text-gray-300">
                Pemeriksaan non-destruktif untuk mendeteksi indikasi cacat material atau discontinuity tanpa merusak part.
              </p>
            </div>

            <div class="text-center">
              <div class="relative mb-8">
                <div class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-teal-600 to-cyan-500 shadow-xl">
                  <span class="material-symbols-outlined text-3xl text-white">task_alt</span>
                </div>
                <div class="absolute -left-4 top-1/2 hidden h-8 w-8 rounded-full border-4 border-gray-900 bg-gradient-to-br from-green-500 to-teal-400 md:block"></div>
              </div>
              <h3 class="mb-3 text-xl font-bold text-white">Release Decision</h3>
              <p class="text-gray-300">
                Hasil inspection digunakan sebagai dasar acceptance, corrective action, maupun release untuk tahap berikutnya.
              </p>
            </div>
          </div>
        </div>

        <div class="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/3 p-8 shadow-2xl backdrop-blur-sm">
          <h3 class="mb-8 text-center text-2xl font-bold text-white">Dari Verifikasi ke Keputusan</h3>
          <div class="grid gap-8 md:grid-cols-2">
            <div class="text-center">
              <div class="mb-6">
                <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-gray-600 to-gray-500">
                  <span class="material-symbols-outlined text-3xl text-white">inventory_2</span>
                </div>
                <h4 class="mb-2 text-xl font-bold text-white">Komponen Aktual</h4>
                <p class="text-gray-400">Part yang perlu diverifikasi dimensi, kondisi permukaan, dan integritas materialnya.</p>
              </div>
              <div class="flex h-52 items-center justify-center rounded-xl border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900">
                <div class="relative">
                  <div class="h-32 w-36 rounded-2xl border border-gray-600 bg-gradient-to-br from-gray-700 to-gray-800 shadow-lg"></div>
                  <div class="absolute -left-6 top-6 h-20 w-2 rounded-full bg-gradient-to-b from-emerald-400/40 to-transparent"></div>
                  <div class="absolute -right-6 top-6 h-20 w-2 rounded-full bg-gradient-to-b from-emerald-400/40 to-transparent"></div>
                  <div class="absolute left-1/2 top-[-20px] h-2 w-28 -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-400/40 to-transparent"></div>
                </div>
              </div>
            </div>

            <div class="text-center">
              <div class="mb-6">
                <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-green-500">
                  <span class="material-symbols-outlined text-3xl text-white">fact_check</span>
                </div>
                <h4 class="mb-2 text-xl font-bold text-white">Inspection Result</h4>
                <p class="text-gray-400">Data hasil ukur dan evaluasi NDT untuk memastikan part memenuhi requirement.</p>
              </div>
              <div class="flex h-52 items-center justify-center rounded-xl border border-emerald-500/20 bg-gradient-to-br from-emerald-900/30 to-green-900/30">
                <div class="grid w-56 grid-cols-2 gap-3">
                  <div class="rounded-xl border border-emerald-400/25 bg-white/5 p-4 text-left">
                    <div class="mb-2 text-xs uppercase tracking-[0.18em] text-emerald-300">Dimensional</div>
                    <div class="text-lg font-bold text-white">OK</div>
                  </div>
                  <div class="rounded-xl border border-emerald-400/25 bg-white/5 p-4 text-left">
                    <div class="mb-2 text-xs uppercase tracking-[0.18em] text-emerald-300">NDT</div>
                    <div class="text-lg font-bold text-white">Clear</div>
                  </div>
                  <div class="col-span-2 rounded-xl border border-emerald-400/25 bg-white/5 p-4 text-left">
                    <div class="mb-2 text-xs uppercase tracking-[0.18em] text-emerald-300">Decision</div>
                    <div class="text-lg font-bold text-white">Ready for next stage</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-16 text-center">
          <div class="mb-4 inline-flex items-center gap-2">
            <div class="h-8 w-2 rounded-full bg-gradient-to-b from-emerald-500 to-green-400"></div>
            <span class="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">Core Services</span>
          </div>
          <h2 class="mb-4 text-3xl font-bold text-white md:text-4xl">
            <span class="bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent">
              Measurement & NDT
            </span>
          </h2>
          <p class="mx-auto max-w-3xl text-lg text-gray-400">
            Dua pendekatan inspection yang saling melengkapi untuk memverifikasi akurasi dimensi sekaligus kondisi material.
          </p>
        </div>

        <div class="mb-16 grid gap-8 md:grid-cols-2">
          <div class="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-sm transition-all duration-500 hover:border-emerald-500/30">
            <div class="absolute inset-0 bg-gradient-to-r from-emerald-900/20 via-transparent to-green-900/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

            <div class="relative p-8">
              <div class="mb-8 overflow-hidden rounded-xl border border-white/10">
                <img src="../../assets/img/slider-1.png" alt="Measurement inspection" class="h-64 w-full object-cover">
              </div>

              <div class="mb-8 flex items-center gap-4">
                <div class="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-green-500 shadow-lg">
                  <span class="material-symbols-outlined text-3xl text-white">straighten</span>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-white">Measurement</h3>
                  <div class="mt-2 flex items-center gap-2">
                    <span class="rounded-full border border-emerald-500/30 px-3 py-1 text-sm font-medium text-emerald-300 backdrop-blur-sm">
                      Dimensional Verification
                    </span>
                  </div>
                </div>
              </div>

              <p class="mb-8 leading-relaxed text-gray-300">
                Measurement digunakan untuk memverifikasi ukuran, posisi fitur, dan toleransi komponen agar sesuai dengan drawing, CAD reference, atau standar mutu yang telah ditentukan.
              </p>

              <div class="mb-8 space-y-4">
                <div class="flex items-start gap-3">
                  <span class="material-symbols-outlined mt-1 text-green-400">check_circle</span>
                  <div>
                    <h4 class="mb-1 font-semibold text-white">Dimensional Check</h4>
                    <p class="text-sm text-gray-400">Memeriksa ukuran linear, diameter, depth, dan posisi fitur penting pada part.</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="material-symbols-outlined mt-1 text-green-400">check_circle</span>
                  <div>
                    <h4 class="mb-1 font-semibold text-white">Tolerance Review</h4>
                    <p class="text-sm text-gray-400">Membandingkan hasil ukur dengan requirement drawing atau spesifikasi teknis.</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="material-symbols-outlined mt-1 text-green-400">check_circle</span>
                  <div>
                    <h4 class="mb-1 font-semibold text-white">Report Preparation</h4>
                    <p class="text-sm text-gray-400">Menyusun hasil pengukuran dalam format yang mudah ditinjau untuk approval.</p>
                  </div>
                </div>
              </div>

              <div class="rounded-xl border border-emerald-500/20 bg-gradient-to-br from-emerald-900/30 to-green-900/30 p-6">
                <h4 class="mb-4 flex items-center gap-3 font-bold text-white">
                  <span class="material-symbols-outlined text-green-400">monitoring</span>
                  Fokus Measurement
                </h4>
                <div class="grid grid-cols-2 gap-4">
                  <div class="rounded-lg bg-gradient-to-b from-white/5 to-transparent p-3 text-center">
                    <div class="mb-1 text-lg font-bold text-emerald-300">Size</div>
                    <div class="text-xs text-gray-400">Critical dimensions</div>
                  </div>
                  <div class="rounded-lg bg-gradient-to-b from-white/5 to-transparent p-3 text-center">
                    <div class="mb-1 text-lg font-bold text-emerald-300">Tolerance</div>
                    <div class="text-xs text-gray-400">Specification fit</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-sm transition-all duration-500 hover:border-green-500/30">
            <div class="absolute inset-0 bg-gradient-to-r from-green-900/20 via-transparent to-teal-900/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

            <div class="relative p-8">
              <div class="mb-8 overflow-hidden rounded-xl border border-white/10">
                <img src="../../assets/img/slider-3.png" alt="NDT inspection" class="h-64 w-full object-cover">
              </div>

              <div class="mb-8 flex items-center gap-4">
                <div class="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-green-600 to-teal-500 shadow-lg">
                  <span class="material-symbols-outlined text-3xl text-white">health_and_safety</span>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-white">NDT</h3>
                  <div class="mt-2 flex items-center gap-2">
                    <span class="rounded-full border border-green-500/30 px-3 py-1 text-sm font-medium text-green-300 backdrop-blur-sm">
                      Non-Destructive Testing
                    </span>
                  </div>
                </div>
              </div>

              <p class="mb-8 leading-relaxed text-gray-300">
                NDT dilakukan untuk mengevaluasi kondisi material dan mendeteksi indikasi cacat tanpa mengubah atau merusak komponen, sehingga sangat penting untuk quality assurance pada part kritis.
              </p>

              <div class="mb-8 space-y-4">
                <div class="flex items-start gap-3">
                  <span class="material-symbols-outlined mt-1 text-green-400">check_circle</span>
                  <div>
                    <h4 class="mb-1 font-semibold text-white">Surface Indication Review</h4>
                    <p class="text-sm text-gray-400">Mengevaluasi indikasi awal pada area kritis yang berpotensi mempengaruhi performa komponen.</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="material-symbols-outlined mt-1 text-green-400">check_circle</span>
                  <div>
                    <h4 class="mb-1 font-semibold text-white">Integrity Assessment</h4>
                    <p class="text-sm text-gray-400">Memastikan kondisi material tetap layak tanpa perlu membongkar atau merusak part.</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="material-symbols-outlined mt-1 text-green-400">check_circle</span>
                  <div>
                    <h4 class="mb-1 font-semibold text-white">Acceptance Support</h4>
                    <p class="text-sm text-gray-400">Memberikan dasar evaluasi untuk keputusan release, repair, atau tindakan korektif.</p>
                  </div>
                </div>
              </div>

              <div class="rounded-xl border border-green-500/20 bg-gradient-to-br from-green-900/30 to-teal-900/30 p-6">
                <h4 class="mb-4 flex items-center gap-3 font-bold text-white">
                  <span class="material-symbols-outlined text-teal-400">shield</span>
                  Fokus NDT
                </h4>
                <div class="grid grid-cols-2 gap-4">
                  <div class="rounded-lg bg-gradient-to-b from-white/5 to-transparent p-3 text-center">
                    <div class="mb-1 text-lg font-bold text-green-300">Integrity</div>
                    <div class="text-xs text-gray-400">Material condition</div>
                  </div>
                  <div class="rounded-lg bg-gradient-to-b from-white/5 to-transparent p-3 text-center">
                    <div class="mb-1 text-lg font-bold text-green-300">Detection</div>
                    <div class="text-xs text-gray-400">Non-destructive review</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/3 p-8 shadow-2xl backdrop-blur-sm">
          <h3 class="mb-8 text-center text-2xl font-bold text-white">Aplikasi Inspection</h3>
          <div class="grid gap-6 md:grid-cols-3">
            <div class="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/3 p-6 text-center transition-all duration-300 hover:border-emerald-500/30">
              <div class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-600 to-green-500">
                <span class="material-symbols-outlined text-white">rule</span>
              </div>
              <h4 class="mb-2 text-lg font-bold text-white">Incoming Inspection</h4>
              <p class="text-sm text-gray-400">Memastikan material atau part dari supplier sesuai requirement sebelum masuk proses.</p>
            </div>

            <div class="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/3 p-6 text-center transition-all duration-300 hover:border-emerald-500/30">
              <div class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-green-600 to-teal-500">
                <span class="material-symbols-outlined text-white">settings_input_component</span>
              </div>
              <h4 class="mb-2 text-lg font-bold text-white">In-Process Control</h4>
              <p class="text-sm text-gray-400">Monitoring quality selama proses machining, fabrication, atau assembly berlangsung.</p>
            </div>

            <div class="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/3 p-6 text-center transition-all duration-300 hover:border-emerald-500/30">
              <div class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-teal-600 to-cyan-500">
                <span class="material-symbols-outlined text-white">local_shipping</span>
              </div>
              <h4 class="mb-2 text-lg font-bold text-white">Final Release</h4>
              <p class="text-sm text-gray-400">Memberikan dasar keputusan akhir sebelum produk dikirim atau dipasang pada sistem pelanggan.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-gradient-to-b from-gray-900 to-gray-950 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-12 text-center">
          <div class="mb-4 inline-flex items-center gap-2">
            <div class="h-8 w-2 rounded-full bg-gradient-to-b from-emerald-500 to-green-400"></div>
            <span class="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">Inspection Support</span>
          </div>
          <h2 class="text-3xl font-bold text-white">
            <span class="bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent">
              Report & Verification Basis
            </span>
          </h2>
        </div>

        <div class="grid gap-8 md:grid-cols-2">
          <div class="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/3 p-8 backdrop-blur-sm">
            <h3 class="mb-6 flex items-center gap-3 text-xl font-bold text-white">
              <span class="material-symbols-outlined text-emerald-400">description</span>
              Documentation Output
            </h3>

            <div class="space-y-4">
              <div class="flex items-center gap-3 rounded-lg bg-gradient-to-br from-emerald-900/20 to-green-900/20 p-4">
                <span class="material-symbols-outlined text-emerald-400">assignment</span>
                <span class="text-gray-300">Dimensional inspection report</span>
              </div>
              <div class="flex items-center gap-3 rounded-lg bg-gradient-to-br from-emerald-900/20 to-green-900/20 p-4">
                <span class="material-symbols-outlined text-emerald-400">assignment_turned_in</span>
                <span class="text-gray-300">Acceptance status summary</span>
              </div>
              <div class="flex items-center gap-3 rounded-lg bg-gradient-to-br from-emerald-900/20 to-green-900/20 p-4">
                <span class="material-symbols-outlined text-emerald-400">history_edu</span>
                <span class="text-gray-300">Inspection traceability notes</span>
              </div>
            </div>
          </div>

          <div class="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/3 p-8 backdrop-blur-sm">
            <h3 class="mb-6 flex items-center gap-3 text-xl font-bold text-white">
              <span class="material-symbols-outlined text-green-400">fact_check</span>
              Verification Basis
            </h3>

            <div class="space-y-4">
              <div class="flex items-center gap-3 rounded-lg bg-gradient-to-br from-green-900/20 to-emerald-900/20 p-4">
                <span class="material-symbols-outlined text-green-400">straighten</span>
                <span class="text-gray-300">Drawing and dimensional requirement</span>
              </div>
              <div class="flex items-center gap-3 rounded-lg bg-gradient-to-br from-green-900/20 to-emerald-900/20 p-4">
                <span class="material-symbols-outlined text-green-400">checklist</span>
                <span class="text-gray-300">Customer or internal inspection standard</span>
              </div>
              <div class="flex items-center gap-3 rounded-lg bg-gradient-to-br from-green-900/20 to-emerald-900/20 p-4">
                <span class="material-symbols-outlined text-green-400">verified_user</span>
                <span class="text-gray-300">Quality acceptance criteria</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative overflow-hidden py-20">
      <div class="absolute inset-0 bg-gradient-to-r from-emerald-900/40 via-gray-900 to-green-900/40">
        <div class="absolute inset-0 animate-gradient-x bg-gradient-to-r from-emerald-500/10 via-green-400/10 to-teal-500/10"></div>
      </div>

      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -left-1/2 -top-1/2 h-full w-full rounded-full bg-gradient-to-br from-emerald-500/5 to-transparent blur-3xl"></div>
        <div class="absolute -bottom-1/2 -right-1/2 h-full w-full rounded-full bg-gradient-to-tr from-green-500/5 to-transparent blur-3xl"></div>
      </div>

      <div class="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="mb-6 text-3xl font-bold text-white md:text-4xl">
            Butuh <span class="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">Inspection Support</span>?
          </h2>

          <p class="mx-auto mb-8 max-w-2xl text-xl text-gray-300">
            Konsultasikan kebutuhan measurement dan NDT Anda untuk memastikan komponen siap digunakan, dirakit, atau dikirim.
          </p>

          <div class="flex flex-col justify-center gap-4 sm:flex-row">
            <router-link
              to="/contact"
              class="group relative flex items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-emerald-600 to-green-500 px-8 py-4 font-semibold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:from-emerald-700 hover:to-green-600 hover:shadow-emerald-500/25"
            >
              <div class="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-white/10 to-green-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              <span class="material-symbols-outlined relative">chat</span>
              <span class="relative">Konsultasi Inspection</span>
            </router-link>

            <a
              href="tel:+62812207030"
              class="group relative flex items-center justify-center gap-3 rounded-xl border-2 border-white/30 bg-transparent px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white hover:bg-white/10"
            >
              <span class="material-symbols-outlined">call</span>
              <span>+62 812 207 030</span>
              <div class="absolute -bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-gradient-to-r from-emerald-400 to-green-300 transition-all duration-300 group-hover:w-full"></div>
            </a>
          </div>

          <p class="mt-8 text-sm text-gray-400">
            Measurement memverifikasi dimensi, sementara NDT membantu memastikan kondisi material tetap aman tanpa merusak komponen.
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
@keyframes gradient-x {
  0%,
  100% {
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

@keyframes pulse-soft {
  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.65;
  }
}

.animate-pulse-soft {
  animation: pulse-soft 2.4s ease-in-out infinite;
}

.inspection-grid {
  background-image:
    linear-gradient(90deg, rgba(16, 185, 129, 0.7) 1px, transparent 1px),
    linear-gradient(180deg, rgba(16, 185, 129, 0.7) 1px, transparent 1px);
  background-size: 42px 42px;
}
</style>

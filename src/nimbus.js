document.querySelector('#app2').innerHTML = `
    <div class="flex flex-col justify-center divide-y-2 divide-[#1a2436]">
        <header>
            <div class="flex flex-row items-center justify-between px-32 py-2">
                <span class="text-[#8b5cf6] text-xl font-semibold">Nimbus</span>
                <div class="">
                <span class="text-[#5a6170] mx-2">Accueil</span>
                <span class="text-white mx-2">Formules</span>
                <span class="text-[#5a6170] mx-2">Aide</span>
                </div>
                <button class="
                    bg-[#7c3aed] text-white text-base rounded-md px-6 h-10 font-semibold cursor-pointer">
                Se connecter
                </button>
            </div>
        </header>
        <main class="pt-24">
            <section class="flex flex-col justify-center items-center">
                <h2 class="text-4xl font-bold text-white">
                    Une formule pour chaque écran
                </h2>
                <p class="text-base text-slate-300 py-2">
                    <span>Changez ou résiliez à tout moment. Sans engagement.</span>
                </p>
            </section>
            <section class="flex flex-row items-center justify-center gap-4 pt-8">
                <div class="bg-[#0f172a] relative rounded-md p-4 border-[#7c3aed] border-2">
                    <span class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed] px-4 py-1 text-white text-xs font-semibold">
                        Plus populaire
                    </span>
                    <div class="flex flex-col my-2">
                       <span class="text-white text-lg font-semibold">Standard</span>
                       <span class="text-[#5a6170] text-sm">LE BON ÉQUILIBRE</span>
                    </div>
                    <div class="my-4">
                        <span class="text-white text-2xl font-bold">13.99€</span><span class="text-[#5a6170] text-xs">/mois</span>
                    </div>
                    <ul class="m-4 list-['✓_'] space-y-2 marker:text-xs text-[#5a6170]">
                        <li class="text-sm text-[#a4adbb]">2 écrans en simultané</li>
                        <li class="text-sm text-[#a4adbb]">Qualité full HD</li>
                        <li class="text-sm text-[#a4adbb]">Téléchargement hors ligne</li>
                        <li class="text-sm text-[#a4adbb]">Profils enfants</li>
                    </ul>
                    <button class="text-white cursor-pointer bg-[#7c3aed] rounded-md w-3xs h-10">Choisir</button>
                </div>
                <div class="bg-[#0f172a] rounded-md p-4 border-[#1a2436]">
                    <div class="flex flex-col my-2">
                       <span class="text-white text-lg font-semibold">Essentiel</span>
                       <span class="text-[#5a6170] text-sm">POUR DEMARRER</span>
                    </div>
                    <div class="my-4">
                        <span class="text-white text-2xl font-bold">8.99€</span><span class="text-[#5a6170] text-xs">/mois</span>
                    </div>
                    <ul class="m-4 list-['✓_'] space-y-2 marker:text-xs text-[#5a6170]">
                        <li class="text-sm text-[#a4adbb]">1 écran à la fois</li>
                        <li class="text-sm text-[#a4adbb]">Qualité full HD</li>
                        <li class="text-sm text-[#a4adbb]">Téléchargement hors ligne</li>
                    </ul>
                    <button class="text-white cursor-pointer bg-[#1e293b] rounded-md w-3xs h-10">Choisir</button>
                </div>
                <div class="bg-[#0f172a] rounded-md p-4 border-[#1a2436]">
                    <div class="flex flex-col my-2">
                       <span class="text-white text-lg font-semibold">Premium</span>
                       <span class="text-[#5a6170] text-sm">LE GRAND CONFORT</span>
                    </div>
                    <div class="my-4">
                        <span class="text-white text-2xl font-bold">17.99€</span><span class="text-[#5a6170] text-xs">/mois</span>
                    </div>
                    <ul class="m-4 list-['✓_'] space-y-2 marker:text-xs text-[#5a6170]">
                        <li class="text-sm text-[#a4adbb]">4 écrans en simultané</li>
                        <li class="text-sm text-[#a4adbb]">Qualité 4K + HDR</li>
                        <li class="text-sm text-[#a4adbb]">Téléchargement hors ligne</li>
                        <li class="text-sm text-[#a4adbb]">Profils enfants</li>
                    </ul>
                    <button class="text-white cursor-pointer bg-[#1e293b] rounded-md w-3xs h-10">Choisir</button>
                </div>
            </section>
            <section>
                <h3 class="text-2xl font-semibold text-white">Comparer les formules</h3>
                <div class="flex flex-col divide-y-2 divide-[#1a2436]">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </section>
            <section></section>
        </main>
        <footer class="flex flex-row justify-between items-center px-32 py-10">
            <div class="flex flex-col">
                <span class="text-white">Assistance</span>
                <div class="text-[#5a6170] text-sm flex flex-col pt-1">
                    <span>Centre d'aide</span>
                    <span>Contact</span>
                </div>
            </div>
            <div class="flex flex-col">
                <span class="text-white">Entreprise</span>
                <div class="text-[#5a6170] text-sm flex flex-col pt-1">
                    <span>À propos</span>
                    <span>Carrière</span>
                </div>
            </div>
            <div class="flex flex-col">
                <span class="text-white">Légal</span>
                <div class="text-[#5a6170] text-sm flex flex-col pt-1">
                    <span>Confidentialité</span>
                    <span>Conditions</span>
                </div>
            </div>
            <div class="flex flex-col">
                <span class="text-white">Assistance</span>
                <div class="text-[#5a6170] text-sm flex flex-col pt-1">
                    <span>Centre d'aide</span>
                    <span>Contact</span>
                </div>
            </div>
        </footer>
    </div>
`
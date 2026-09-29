document.querySelector("#app").innerHTML = `
    <header class="bg-slate-950">
        <div class="flex flex-row items-center justify-between px-16 py-2">
            <span class="text-violet-400 text-xl font-semibold">Nimbus</span>
            <button class="
            bg-violet-500 text-white text-base rounded-md px-6 py-3 font-semibold cursor-pointer"
            >
                Se connecter
            </button>
        </div>
    </header>
    <main class="flex flex-col justify-center items-center">
        <section class="py-12">
            <h1 class="flex flex-col justify-center items-center text-5xl font-bold text-white">
                <span>Toutes vos séries, sans</span>
                <span>coupure publicitaire.</span>
            </h1>
            <p class="flex flex-col justify-between items-center text-base text-slate-300 py-4">
                <span>Un seul abonnement, un accès illimité. Regardez où vous voulez, quand vous voulez,</span>
                <span>résiliable à tout moment.</span>
            </p>
            <div class="flex flex-row justify-center items-center gap-2 pt-6">
                <input type="text" class="text-slate-300 bg-slate-800 pl-4 pr-16 py-3 rounded-md text-base" placeholder="Adresse e-mail" />
                <input type="submit" class="text-white bg-violet-500 font-semibold rounded-md text-base px-6 py-3 cursor-pointer" value="Commencer →" />
            </div>
        </section>
        <section class="flex flex-col">
            <div>
                <span class="text-white font-semibold">Tendences du moment</span>
                <div class="flex flex-row gap-3">
                    <div class="w-40 h-54 rounded-md bg-linear-to-br from-violet-800 to-indigo-950"></div>
                    <div class="w-40 h-54 rounded-md bg-linear-to-br from-sky-800 to-sky-950"></div>
                    <div class="w-40 h-54 rounded-md bg-linear-to-br from-rose-700 to-rose-950"></div>
                    <div class="w-40 h-54 rounded-md bg-linear-to-br from-amber-700 to-amber-950"></div>
                    <div class="w-40 h-54 rounded-md bg-linear-to-br from-emerald-700 to-teal-950"></div>
                    <div class="w-40 h-54 rounded-md bg-linear-to-br from-violet-800 to-indigo-950"></div>
                </div>
            </div>
                <span class="text-white font-semibold">Nouveauté</span>
                <div class="flex flex-row gap-3">
                    <div class="w-40 h-54 rounded-md bg-linear-to-br from-gray-700 to-gray-900"></div>
                    <div class="w-40 h-54 rounded-md bg-linear-to-br from-sky-800 to-sky-950"></div>
                    <div class="w-40 h-54 rounded-md bg-linear-to-br from-emerald-700 to-teal-950"></div>
                    <div class="w-40 h-54 rounded-md bg-linear-to-br from-rose-700 to-rose-950"></div>
                    <div class="w-40 h-54 rounded-md bg-linear-to-br from-amber-700 to-amber-950"></div>
                    <div class="w-40 h-54 rounded-md bg-linear-to-br from-violet-800 to-indigo-950"></div>
                </div>
            </div>
        </section>
        <section>
            <div>
                <span>Qualité 4K</span>
                <p>Une image nette sur tous vos écrans compatibles.</p>
            </div>
            <div>
                <span>Plusieurs écrans</span>
                <p>Jusqu'à 4 profils sur 1 seul abonnement.</p>
            </div>
            <div>
                <span>Téléchargement</span>
                <p>Regardez hors connexion, en avion ou en déplacement.</p>
            </div>
            <div>
                <span>Résiliable à tout moment</span>
                <p>Aucun engagement, aucune surprise sur la facture</p>
            </div>
        </section>
        <section>
            <h2>Questions fréquentes</h2>
            <ul>
                <li>Combien coûte nimbus ?</li>
                <li>Où puis-je regarder nimbus ?</li>
                <li>Comment résilier mon abonnement ?</li>
            </ul>
        </section>
    </main>
    <footer></footer>
`
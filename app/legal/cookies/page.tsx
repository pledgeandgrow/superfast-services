import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de Cookies | Superfast Services',
  description: 'Découvrez comment Superfast Services utilise les cookies et comment vous pouvez gérer vos préférences.',
}

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Politique de Cookies
          </h1>
          <p className="text-gray-600 mb-8">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Qu&apos;est-ce qu&apos;un Cookie ?</h2>
              <p className="leading-relaxed">
                Un cookie est un petit fichier texte stocké sur votre appareil (ordinateur, tablette, smartphone) lorsque vous visitez un site web. 
                Les cookies permettent au site de mémoriser vos actions et préférences (comme la langue, la taille de police, etc.) pendant une certaine période, 
                afin que vous n&apos;ayez pas à les ressaisir à chaque visite ou navigation entre les pages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Comment Utilisons-nous les Cookies ?</h2>
              <p className="leading-relaxed mb-4">
                Superfast Services utilise des cookies pour améliorer votre expérience sur notre site web et pour analyser l&apos;utilisation de nos services. 
                Nous utilisons différents types de cookies :
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Types de Cookies Utilisés</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">3.1 Cookies Strictement Nécessaires</h3>
                  <p className="leading-relaxed mb-2">
                    Ces cookies sont essentiels au fonctionnement du site web. Ils vous permettent de naviguer sur le site et d&apos;utiliser ses fonctionnalités.
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Cookies de session</li>
                    <li>Cookies de sécurité</li>
                    <li>Cookies d&apos;authentification</li>
                  </ul>
                  <p className="mt-2 text-sm text-gray-600">Durée : Session ou 24 heures</p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">3.2 Cookies de Performance</h3>
                  <p className="leading-relaxed mb-2">
                    Ces cookies collectent des informations sur la façon dont les visiteurs utilisent notre site web, comme les pages les plus visitées.
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Google Analytics</li>
                    <li>Mesure d&apos;audience</li>
                    <li>Analyse du trafic</li>
                  </ul>
                  <p className="mt-2 text-sm text-gray-600">Durée : 13 mois maximum</p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">3.3 Cookies de Fonctionnalité</h3>
                  <p className="leading-relaxed mb-2">
                    Ces cookies permettent au site de mémoriser vos choix (comme votre langue ou région) pour vous offrir une expérience personnalisée.
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Préférences linguistiques</li>
                    <li>Paramètres d&apos;affichage</li>
                    <li>Préférences utilisateur</li>
                  </ul>
                  <p className="mt-2 text-sm text-gray-600">Durée : 12 mois</p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">3.4 Cookies de Ciblage/Publicitaires</h3>
                  <p className="leading-relaxed mb-2">
                    Ces cookies sont utilisés pour diffuser des publicités pertinentes pour vous et vos intérêts.
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Publicités ciblées</li>
                    <li>Remarketing</li>
                    <li>Mesure de campagnes</li>
                  </ul>
                  <p className="mt-2 text-sm text-gray-600">Durée : 13 mois maximum</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cookies Tiers</h2>
              <p className="leading-relaxed mb-4">
                Nous utilisons également des services tiers qui peuvent déposer des cookies sur votre appareil :
              </p>
              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <div>
                  <p className="font-semibold text-gray-900">Google Analytics</p>
                  <p className="text-sm text-gray-600">Analyse du trafic et du comportement des utilisateurs</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Google Maps</p>
                  <p className="text-sm text-gray-600">Affichage de cartes et localisation</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Réseaux Sociaux</p>
                  <p className="text-sm text-gray-600">Partage de contenu (Facebook, LinkedIn, Twitter)</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Gestion de vos Préférences</h2>
              <p className="leading-relaxed mb-4">
                Vous pouvez contrôler et/ou supprimer les cookies comme vous le souhaitez. Voici comment :
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 Via votre Navigateur</h3>
              <p className="leading-relaxed mb-4">
                La plupart des navigateurs vous permettent de refuser ou d&apos;accepter les cookies. Voici comment accéder aux paramètres des cookies :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li><strong>Chrome :</strong> Paramètres &gt; Confidentialité et sécurité &gt; Cookies</li>
                <li><strong>Firefox :</strong> Options &gt; Vie privée et sécurité &gt; Cookies</li>
                <li><strong>Safari :</strong> Préférences &gt; Confidentialité &gt; Cookies</li>
                <li><strong>Edge :</strong> Paramètres &gt; Confidentialité &gt; Cookies</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 Outils de Gestion</h3>
              <p className="leading-relaxed mb-4">
                Vous pouvez également utiliser des outils en ligne pour gérer vos préférences :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><a href="https://www.youronlinechoices.com/fr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Your Online Choices</a></li>
                <li><a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Analytics Opt-out</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Conséquences du Refus des Cookies</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                <p className="leading-relaxed">
                  <strong>Important :</strong> Si vous choisissez de bloquer ou de supprimer les cookies, certaines fonctionnalités de notre site 
                  peuvent ne pas fonctionner correctement. Par exemple, vous pourriez ne pas pouvoir accéder à certaines zones du site ou 
                  recevoir des informations personnalisées.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies et Données Personnelles</h2>
              <p className="leading-relaxed">
                Certains cookies peuvent collecter des données personnelles. Ces données sont traitées conformément à notre 
                <a href="/legal/privacy" className="text-blue-600 hover:underline ml-1">Politique de Confidentialité</a> et au RGPD.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Durée de Conservation</h2>
              <p className="leading-relaxed">
                Les cookies sont conservés pour une durée maximale de 13 mois conformément aux recommandations de la CNIL. 
                Au-delà de cette période, votre consentement sera à nouveau sollicité.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Modifications de la Politique</h2>
              <p className="leading-relaxed">
                Nous pouvons modifier cette politique de cookies à tout moment pour refléter les changements dans nos pratiques ou pour d&apos;autres raisons opérationnelles, 
                légales ou réglementaires. Nous vous encourageons à consulter régulièrement cette page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Plus d&apos;Informations</h2>
              <p className="leading-relaxed mb-4">
                Pour en savoir plus sur les cookies et comment les gérer :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><a href="https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">CNIL - Cookies et traceurs</a></li>
                <li><a href="https://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">All About Cookies</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact</h2>
              <p className="leading-relaxed mb-4">
                Pour toute question concernant notre utilisation des cookies :
              </p>
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="font-semibold text-gray-900">Superfast Services</p>
                <p>Email : contact@superfastservices.com</p>
                <p>WhatsApp : +971 54 511 6447</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

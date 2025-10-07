import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Conditions Générales de Service | Superfast Services',
  description: 'Consultez nos conditions générales de service pour comprendre les termes et conditions d\'utilisation de nos services logistiques.',
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Conditions Générales de Service
          </h1>
          <p className="text-gray-600 mb-8">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptation des Conditions</h2>
              <p className="leading-relaxed">
                En accédant et en utilisant les services de Superfast Services, vous acceptez d&apos;être lié par ces conditions générales de service. 
                Si vous n&apos;acceptez pas ces conditions, veuillez ne pas utiliser nos services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description des Services</h2>
              <p className="leading-relaxed mb-4">
                Superfast Services fournit des services de logistique internationale comprenant :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Fret aérien international</li>
                <li>Transport terrestre</li>
                <li>Gestion de grands projets logistiques</li>
                <li>Services complémentaires (entreposage, dédouanement, etc.)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Obligations du Client</h2>
              <p className="leading-relaxed mb-4">Le client s&apos;engage à :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Fournir des informations exactes et complètes concernant les marchandises à transporter</li>
                <li>Respecter les réglementations douanières et d&apos;importation/exportation applicables</li>
                <li>Emballer correctement les marchandises conformément aux normes internationales</li>
                <li>Payer les frais convenus dans les délais spécifiés</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Tarification et Paiement</h2>
              <p className="leading-relaxed mb-4">
                Les tarifs sont établis sur devis personnalisé en fonction de la nature, du poids, du volume et de la destination des marchandises. 
                Les conditions de paiement sont spécifiées dans chaque devis et doivent être respectées.
              </p>
              <p className="leading-relaxed">
                Tout retard de paiement peut entraîner des pénalités et/ou la suspension des services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Responsabilité et Assurance</h2>
              <p className="leading-relaxed mb-4">
                Superfast Services s&apos;engage à transporter les marchandises avec le plus grand soin. Toutefois, notre responsabilité est limitée conformément aux conventions internationales applicables (Convention de Varsovie pour le transport aérien, CMR pour le transport routier).
              </p>
              <p className="leading-relaxed">
                Nous recommandons fortement à nos clients de souscrire une assurance marchandises transportées pour une couverture complète.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Force Majeure</h2>
              <p className="leading-relaxed">
                Superfast Services ne peut être tenu responsable des retards ou de l&apos;impossibilité d&apos;exécuter ses obligations en cas de force majeure, 
                incluant mais non limité à : catastrophes naturelles, guerres, grèves, restrictions gouvernementales, pandémies, ou tout autre événement indépendant de notre volonté.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Marchandises Interdites</h2>
              <p className="leading-relaxed mb-4">
                Nous n&apos;acceptons pas le transport de :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Matières dangereuses non déclarées</li>
                <li>Produits illégaux ou contrefaits</li>
                <li>Substances interdites par les réglementations internationales</li>
                <li>Marchandises périssables sans accord préalable</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Annulation et Modification</h2>
              <p className="leading-relaxed">
                Toute annulation ou modification de commande doit être notifiée par écrit. Des frais d&apos;annulation peuvent s&apos;appliquer 
                selon le stade d&apos;avancement du service au moment de la demande d&apos;annulation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Réclamations</h2>
              <p className="leading-relaxed">
                Toute réclamation concernant les marchandises doit être formulée par écrit dans les 7 jours suivant la livraison. 
                Les réclamations tardives ne pourront pas être prises en compte.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Droit Applicable</h2>
              <p className="leading-relaxed">
                Ces conditions générales sont régies par le droit français. Tout litige sera soumis à la compétence exclusive des tribunaux de Paris.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Modification des Conditions</h2>
              <p className="leading-relaxed">
                Superfast Services se réserve le droit de modifier ces conditions générales à tout moment. 
                Les modifications entreront en vigueur dès leur publication sur notre site web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact</h2>
              <p className="leading-relaxed">
                Pour toute question concernant ces conditions générales, veuillez nous contacter à :
              </p>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
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

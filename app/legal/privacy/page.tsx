import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | Superfast Services',
  description: 'Découvrez comment Superfast Services collecte, utilise et protège vos données personnelles.',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Politique de Confidentialité
          </h1>
          <p className="text-gray-600 mb-8">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                Superfast Services s&apos;engage à protéger la confidentialité et la sécurité de vos données personnelles. 
                Cette politique de confidentialité explique comment nous collectons, utilisons, partageons et protégeons vos informations personnelles 
                conformément au Règlement Général sur la Protection des Données (RGPD) et aux lois applicables.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Responsable du Traitement</h2>
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="font-semibold text-gray-900">Superfast Services</p>
                <p>Email : contact@superfastservices.com</p>
                <p>WhatsApp : +971 54 511 6447</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Données Collectées</h2>
              <p className="leading-relaxed mb-4">Nous collectons les types de données suivants :</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Données d&apos;Identification</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Adresse postale</li>
                <li>Informations de l&apos;entreprise</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Données de Transaction</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Détails des commandes et expéditions</li>
                <li>Informations de facturation</li>
                <li>Historique des transactions</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">3.3 Données Techniques</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Adresse IP</li>
                <li>Type de navigateur</li>
                <li>Données de navigation (cookies)</li>
                <li>Données de localisation (si autorisées)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Finalités du Traitement</h2>
              <p className="leading-relaxed mb-4">Nous utilisons vos données pour :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Fournir et gérer nos services logistiques</li>
                <li>Traiter vos commandes et expéditions</li>
                <li>Communiquer avec vous concernant vos demandes</li>
                <li>Améliorer nos services et votre expérience utilisateur</li>
                <li>Respecter nos obligations légales et réglementaires</li>
                <li>Prévenir la fraude et garantir la sécurité</li>
                <li>Vous envoyer des informations marketing (avec votre consentement)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Base Légale du Traitement</h2>
              <p className="leading-relaxed mb-4">Nous traitons vos données sur les bases légales suivantes :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Exécution du contrat :</strong> Pour fournir nos services logistiques</li>
                <li><strong>Obligation légale :</strong> Pour respecter les réglementations douanières et fiscales</li>
                <li><strong>Intérêt légitime :</strong> Pour améliorer nos services et prévenir la fraude</li>
                <li><strong>Consentement :</strong> Pour les communications marketing (révocable à tout moment)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Partage des Données</h2>
              <p className="leading-relaxed mb-4">Nous pouvons partager vos données avec :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Partenaires logistiques :</strong> Transporteurs, compagnies aériennes, agents de dédouanement</li>
                <li><strong>Prestataires de services :</strong> Hébergement web, services de paiement, outils d&apos;analyse</li>
                <li><strong>Autorités compétentes :</strong> Douanes, autorités fiscales (si requis par la loi)</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Nous ne vendons jamais vos données personnelles à des tiers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Transferts Internationaux</h2>
              <p className="leading-relaxed">
                Dans le cadre de nos services internationaux, vos données peuvent être transférées vers des pays hors de l&apos;Union Européenne. 
                Nous nous assurons que ces transferts sont effectués conformément au RGPD, notamment par l&apos;utilisation de clauses contractuelles types 
                ou d&apos;autres mécanismes de protection appropriés.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Durée de Conservation</h2>
              <p className="leading-relaxed mb-4">Nous conservons vos données personnelles :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Données clients :</strong> Pendant la durée de la relation commerciale + 5 ans (obligations comptables)</li>
                <li><strong>Données de prospection :</strong> 3 ans à compter du dernier contact</li>
                <li><strong>Données de navigation :</strong> 13 mois maximum (cookies)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Vos Droits</h2>
              <p className="leading-relaxed mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Droit d&apos;accès :</strong> Obtenir une copie de vos données personnelles</li>
                <li><strong>Droit de rectification :</strong> Corriger vos données inexactes ou incomplètes</li>
                <li><strong>Droit à l&apos;effacement :</strong> Demander la suppression de vos données</li>
                <li><strong>Droit à la limitation :</strong> Restreindre le traitement de vos données</li>
                <li><strong>Droit à la portabilité :</strong> Recevoir vos données dans un format structuré</li>
                <li><strong>Droit d&apos;opposition :</strong> Vous opposer au traitement de vos données</li>
                <li><strong>Droit de retirer votre consentement :</strong> À tout moment pour les traitements basés sur le consentement</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Pour exercer vos droits, contactez-nous à : contact@superfastservices.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Sécurité des Données</h2>
              <p className="leading-relaxed">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre 
                la perte, l&apos;accès non autorisé, la divulgation, l&apos;altération ou la destruction. Cela inclut le chiffrement, 
                les contrôles d&apos;accès, les sauvegardes régulières et la formation de notre personnel.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Cookies</h2>
              <p className="leading-relaxed">
                Notre site utilise des cookies pour améliorer votre expérience. Pour plus d&apos;informations, consultez notre 
                <a href="/legal/cookies" className="text-blue-600 hover:underline ml-1">Politique de Cookies</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Modifications</h2>
              <p className="leading-relaxed">
                Nous pouvons modifier cette politique de confidentialité à tout moment. Les modifications entreront en vigueur dès leur publication sur notre site. 
                Nous vous encourageons à consulter régulièrement cette page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Réclamations</h2>
              <p className="leading-relaxed">
                Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL 
                (Commission Nationale de l&apos;Informatique et des Libertés) ou de l&apos;autorité de protection des données de votre pays.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact</h2>
              <p className="leading-relaxed mb-4">
                Pour toute question concernant cette politique de confidentialité ou vos données personnelles :
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

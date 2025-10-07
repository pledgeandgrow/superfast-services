import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions Légales | Superfast Services',
  description: 'Mentions légales et informations sur Superfast Services, votre partenaire en logistique internationale.',
}

export default function LegalNotice() {
  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mentions Légales
          </h1>
          <p className="text-gray-600 mb-8">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Éditeur du Site</h2>
              <div className="bg-blue-50 rounded-lg p-6 space-y-2">
                <p><strong className="text-gray-900">Raison sociale :</strong> Superfast Services</p>
                <p><strong className="text-gray-900">Forme juridique :</strong> [À compléter - SARL, SAS, etc.]</p>
                <p><strong className="text-gray-900">Capital social :</strong> [À compléter]</p>
                <p><strong className="text-gray-900">Siège social :</strong> [À compléter - Adresse complète]</p>
                <p><strong className="text-gray-900">SIRET :</strong> [À compléter]</p>
                <p><strong className="text-gray-900">TVA intracommunautaire :</strong> [À compléter]</p>
                <p><strong className="text-gray-900">Email :</strong> contact@superfastservices.com</p>
                <p><strong className="text-gray-900">Téléphone :</strong> +971 54 511 6447</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Directeur de la Publication</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p><strong className="text-gray-900">Nom :</strong> [À compléter]</p>
                <p><strong className="text-gray-900">Qualité :</strong> [À compléter - Gérant, Président, etc.]</p>
                <p><strong className="text-gray-900">Email :</strong> contact@superfastservices.com</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Hébergement du Site</h2>
              <div className="bg-gray-50 rounded-lg p-6 space-y-2">
                <p><strong className="text-gray-900">Hébergeur :</strong> Vercel Inc.</p>
                <p><strong className="text-gray-900">Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
                <p><strong className="text-gray-900">Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">vercel.com</a></p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Propriété Intellectuelle</h2>
              <p className="leading-relaxed mb-4">
                L&apos;ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, etc.) est la propriété exclusive de Superfast Services 
                ou de ses partenaires et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
              </p>
              <p className="leading-relaxed mb-4">
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, 
                quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Superfast Services.
              </p>
              <p className="leading-relaxed">
                Toute exploitation non autorisée du site ou de l&apos;un quelconque des éléments qu&apos;il contient sera considérée comme 
                constitutive d&apos;une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Marques et Logos</h2>
              <p className="leading-relaxed">
                Les marques, logos, signes et tout autre signe distinctif reproduits sur ce site sont la propriété de Superfast Services 
                ou font l&apos;objet d&apos;une autorisation d&apos;utilisation. Toute reproduction totale ou partielle de ces marques ou de ces logos 
                effectuée à partir des éléments du site sans l&apos;autorisation expresse de Superfast Services est prohibée.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Liens Hypertextes</h2>
              <p className="leading-relaxed mb-4">
                Le site peut contenir des liens hypertextes vers d&apos;autres sites. Superfast Services n&apos;exerce aucun contrôle sur ces sites 
                et décline toute responsabilité quant à leur contenu.
              </p>
              <p className="leading-relaxed">
                La création de liens hypertextes vers le site www.superfastservices.com nécessite l&apos;autorisation préalable et écrite de Superfast Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Protection des Données Personnelles</h2>
              <p className="leading-relaxed mb-4">
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, 
                vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression et d&apos;opposition aux données personnelles vous concernant.
              </p>
              <p className="leading-relaxed">
                Pour plus d&apos;informations, consultez notre <a href="/legal/privacy" className="text-blue-600 hover:underline">Politique de Confidentialité</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cookies</h2>
              <p className="leading-relaxed">
                Le site utilise des cookies pour améliorer l&apos;expérience utilisateur et analyser le trafic. 
                Pour en savoir plus, consultez notre <a href="/legal/cookies" className="text-blue-600 hover:underline">Politique de Cookies</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Responsabilité</h2>
              <p className="leading-relaxed mb-4">
                Superfast Services s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées sur ce site. 
                Toutefois, Superfast Services ne peut garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des informations mises à disposition sur ce site.
              </p>
              <p className="leading-relaxed mb-4">
                En conséquence, Superfast Services décline toute responsabilité pour :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site</li>
                <li>Tout dommage résultant d&apos;une intrusion frauduleuse d&apos;un tiers ayant entraîné une modification des informations</li>
                <li>Tout dommage direct ou indirect causé à l&apos;utilisateur, quelle qu&apos;en soit la nature</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Disponibilité du Site</h2>
              <p className="leading-relaxed">
                Superfast Services s&apos;efforce de maintenir accessible le site 24h/24 et 7j/7, sauf en cas de force majeure ou d&apos;événement hors de son contrôle, 
                et sous réserve des éventuelles pannes et interventions de maintenance nécessaires au bon fonctionnement du site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Droit Applicable et Juridiction</h2>
              <p className="leading-relaxed mb-4">
                Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut d&apos;accord amiable, 
                le litige sera porté devant les tribunaux français conformément aux règles de compétence en vigueur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Médiation</h2>
              <p className="leading-relaxed">
                Conformément aux dispositions du Code de la consommation concernant le règlement amiable des litiges, 
                Superfast Services adhère au Service du Médiateur [À compléter si applicable].
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Crédits</h2>
              <div className="bg-gray-50 rounded-lg p-6 space-y-2">
                <p><strong className="text-gray-900">Conception et développement :</strong> [À compléter]</p>
                <p><strong className="text-gray-900">Crédits photos :</strong> [À compléter - Sources des images]</p>
                <p><strong className="text-gray-900">Icônes :</strong> Lucide Icons</p>
                <p><strong className="text-gray-900">Framework :</strong> Next.js, React, Tailwind CSS</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact</h2>
              <p className="leading-relaxed mb-4">
                Pour toute question concernant les mentions légales ou le site en général :
              </p>
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="font-semibold text-gray-900">Superfast Services</p>
                <p>Email : contact@superfastservices.com</p>
                <p>WhatsApp : +971 54 511 6447</p>
              </div>
            </section>

            <div className="mt-12 p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded">
              <p className="text-sm text-gray-700">
                <strong>Note :</strong> Certaines informations marquées [À compléter] doivent être renseignées avec les données spécifiques de votre entreprise 
                (numéro SIRET, adresse du siège social, capital social, etc.). Assurez-vous de mettre à jour ces informations avant la mise en production du site.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

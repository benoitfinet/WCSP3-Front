import Footer from '../Footer/Footer';
import Navbar from '../Nav/Navbar';
import PhotoBanner from '../Nav/img/IMAGE_2.jpg';

import './RulesPages.css';

function Reglement () {
  return (
    <div>
       <Navbar imgbanner={PhotoBanner} textbanner="Reglement intérieur" />
        <div className="Activites">
          <div className="Activitespadding">
            <div className="Activites-content">
              <h3 className="title-reglement">L’ACCES AU PARC, A TOUTES LES ZONES D’ACTIVITES ET AUX STRUCTURES EN HAUTEUR EST INTERDIT EN DEHORS DES HEURES D’OUVERTURE.</h3>
                <p className="para-reglement">
                    L’accès au site et des différentes activités proposés implique la lecture obligatoire et l’acceptation du présent règlement interne.<br/>
                    La pratique des activités sont physiques, le non-respect des règles peut entrainer des blessures.
                </p>
              <h3 className="title-reglement">DESCRIPTION DE LA PRATIQUE ET DES ACTIVITES</h3>
                <p className="para-reglement">
                    Atout Branches est un parc à espace d’activités ludique permettant aux pratiquants des faire plusieurs activités :<br/><br/>
                    - Parcours acrobatiques en hauteur.<br/>
                    - Escape Game 100% naturel.<br/>
                    - Parcours d'énigmes.<br/>
                    - Chasse au trésor.<br/>
                    - Laser Game.<br/><br/>
                    <span>- Les parcours acrobatiques en hauteur (PAH)</span>, permettent aux pratiquants de cheminer en hauteur de façon autonome et plus ou moins acrobatique, sur et entre les arbres ou autres supports naturels ou non.<br></br>
                    Le parc se compose de plus de 100 ateliers répartis sur 11 parcours de difficultés croissantes.<br></br>
                    Tous les parcours exceptés pitchoune sont équipés d’une ligne de vie continue, garantissant une sécurité des participants tout au long de l’activité.<br></br>
                    Les parcours sont distingués par leurs noms, des chiffres et codes couleurs indiqués par des pancartes à chaque début de parcours.<br></br><br/>
                    <span>-Un ESCAPE GAME 100% naturel.</span> Saurez-vous trouver le refuge et y entrer ? Vous avez 1h pour cela.<br></br>
                    Fouillez la forêt à la recherche des objets indispensables pour trouver et déverrouiller la porte d'accès.<br/><br/>
                    <span>- Un parcours d'énigmes.</span> Testez vos capacités d'orientation et votre perspicacité avec les parcours d'énigmes.
                    Un livret de jeu vous donne toutes les instructions pour parcourir la forêt en résolvant les énigmes.<br></br><br/>
                    <span>- Une chasse au trésor</span>. La chasse au trésor qui fait appel votre maitrise de l'orientation.
                    Retrouvez les coffres forts cachés dans le parc pour reconstituer la clé du mystère.<br/><br/>
                    <span>- Le laser Game</span>, une activité ludique et sportive à pratiquer en famille, entre amis ou collaborateurs.<br></br> Uniquement des rayons infrarouges sont émis depuis le fusil laser, vous êtes donc virtuellement touché, aucuns risques de blessures avec les billes.<br></br> Les différents scénarios permettent une variante des jeux. Ils permettent de renouveler l’expérience Laser Game en procurant de nouvelles sensations à travers des rôles à jouer. NOUVEAUTE 2021.<br/><br/>
                    Toutes ces activités proposées par Atout Branches développent l’équilibre, la concentration, la psychomotricité, le mental, enseigne l'autonomie, aiguise la prise de décision, apprend à penser et à agir sous pression, augmente le niveau de condition physique, développe l'estime de soi.<br></br>
                    Le suivi de ces consignes est obligatoire en toutes circonstances.<br></br>
                    Le non-respect des consignes peut entrainer des blessures.<br></br>
                    <br></br>
                    Les prestations comprennent selon les formules :<br/><br/>
                    - L’accès aux différentes activités.<br></br>
                    - La fourniture est la mise en place de l’équipement de protection individuelle (EPI) des pratiquants.<br></br>
                    - Les consignes d’utilisation du matériel et les explications de début de séance de chaque activité.<br></br>
                    - La mise en application sur parcours test obligatoire et validé par un opérateur pour le PAH.<br></br>
                    - La surveillance, les conseils et/ou les aides éventuelles en cour de séance.<br></br>
                </p>
              <h3 className="title-reglement">CONDITIONS D’ACCES AU SITE (APPLICABLE A TOUTES PERSONNES PRESENTES)</h3><br></br>
                <p className="para-reglement">
                - Avant de commencer, vous êtes invité(e) à consulter le plan d’organisation de sécurité et de secours (identification des personnes responsables, numéros de téléphone d’urgence, cheminements à respecter…)<br></br>
                - Avoir souscrit, au préalable, à une assurance en responsabilité civil.<br></br>
                - Adopter en toute circonstance un comportement responsable et prudent pour vous, pour les autres personnes et pour le matériel.<br></br>
                - Respecter la signalisation en vigueur , ne pas gêner les pratiquants en restant à proximité des ateliers.<br></br>
                - Rester vigilant à l’environnement en faisant attention aux branches, racines et installations.<br></br>
                - Ne pas courir dans les allées, respecter les balisages et les cheminements au sols pour protéger le site naturel.<br></br>
                - Ne pas fumer, ni vapoter, ni faire de feux. Il est rappelé que le parc se situe en milieu boisé et sensible. Une zone fumeur est disponible ( zone terrasse près de l’accueil).<br></br>
                - Garder le site propre. Des poubelles sont mises à votre disposition avec un tri sélectif.<br></br>
                - La direction se réserve le droit de refuser l’accès au parc et aux installations à toute personne
                dont elle estimerait qu’elle ne remplit pas les conditions prévu au présent règlement.<br></br>
                </p>
              <h3 className="title-reglement">CONDITIONS DE PRATIQUE DES ACTIVITES</h3><br></br>
                <p className="para-reglement">
                - S’être acquitté d’un droit d’entrée.<br></br>
                - Porter une tenue adapté à l’exercices des activités d’extérieur (tenue sportive, chaussures fermées, les cheveux longs doivent être attachés, les foulards et colliers retirés, les lunettes doivent être munies d’un système de maintien).<br></br>
                - Ne garder sur vous aucun objet susceptible de tomber. Des casiers sécurisés sont à votre disposition gratuitement.<br></br>
                - Être en bonne santé et n’être affecté d’aucuns troubles psychologiques. La pratique est interdite à toute personne ayant consommé de l’alcool ou toute substances pouvant altérés les capacités de réflexion et physiques.<br></br>
                - La pratique des activités du parc sont déconseillés aux femmes enceintes. Pour votre sécurité et votre confort, les personnes pesant plus de 100 kg doivent demander l’avis au responsable avant tout achat d’activités.<br></br>
                - Avoir suivi les explications de début de séance et avoir réalisé le parcours test d’initiation avec succès, celui-ci doit être validé par un opérateur = conditions obligatoires avant l’accès à l’activité de PAH.<br></br>
                - La signalétique à l’entrée de chaque atelier doit être consultée et respectée comme le matériel, les plates-formes et les ateliers ne devront pas être surchargés.<br></br>
                - Respecter les consignes de sécurités inscrites sur les panneaux devant chaque zones activités.<br></br>
                <br></br>
                </p>
                <table className="tableau-reglement">
                  <tbody>
                  <tr>
                      <th scope="row"></th>
                      <th className="th-reglement">PICCOLO PITCHOUN COLIBRI OUISTITI</th>
                      <th className="th-reglement">PARCOURS VERTS</th>
                      <th className="th-reglement">PARCOURS JAUNES</th>
                      <th className="th-reglement">PARCOURTS BLEUS</th>
                      <th className="th-reglement">PARCOURS ROUGE 1 ET 2</th>
                      <th className="th-reglement">PARCOURS PANORAMIQUE</th>
                      <th className="th-reglement" >PARCOURS NOIR</th>
                      <th className="th-reglement">PARCOURS EBENE</th>
                    </tr>
                    <tr>
                      <th scope="row">Surveillance obligatoire d’un adulte depuis le sol</th>
                      <td className="td-reglement">OBLIGATOIRE</td>
                      <td className="td-reglement">OBLIGATOIRE</td>
                      <td className="td-reglement">OBLIGATOIRE</td>
                      <td className="td-reglement">CONSEILLE</td>
                      <td className="td-reglement">CONSEILLE</td>
                      <td className="td-reglement">CONSEILLE</td>
                      <td className="td-reglement">CONSEILLE</td>
                      <td className="td-reglement">CONSEILLE</td>
                    </tr>
                    <tr>
                      <th scope="row">Accompagnement d’un adulte sur les parcours</th>
                      <td className="td-reglement">INTERDIT</td>
                      <td className="td-reglement">CONSEILLE</td>
                      <td className="td-reglement">CONSEILLE</td>
                      <td className="td-reglement">CONSEILLE</td>
                      <td className="td-reglement">CONSEILLE</td>
                      <td className="td-reglement">CONSEILLE</td>
                      <td className="td-reglement">CONSEILLE</td>
                      <td className="td-reglement">CONSEILLE</td>
                    </tr>
                  </tbody>
                </table>
                <p className="para-reglement">
                  Toute personne qui a l’issu des explications des consignes de sécurité ne se sent pas capable, physiquement ou moralement d’effectué seul et correctement les manipulations indispensables à une évolution de façon autonome de chaque activité, doit renoncer à la pratique de l’activité. Il en est de même pour toutes personne n’ayant pas réussi la validation du parcours test d’initiation PAH. Aucun remboursement ne sera accordé ultérieurement.<br/><br/>
                  Vous effectuez les différentes activités et parcours en pratique autonome : vous êtes responsable de votre propre sécurité.<br/><br/>
                  - Chaque pratiquants est équipés par nos soins. Tout équipements enlevés doit être remis et contrôlés par un opérateur.<br/>
                  - Le pratiquant doit obligatoirement porter les équipements de protection individuel (EPI) fourni par l’établissement Atout Branches : baudrier, casque et gants. Il est interdit d’utiliser son propre équipement.<br/>
                  - En cas de problème, prévenir un opérateur par tout moyen utile. Des sifflets sont à votre disposition sur des parcours. Les opérateurs sont facilement reconnaissables avec leurs teeshirt Atout Branches.
                </p>
                <h3 className="title-reglement">Il est interdit :</h3>
                  <p className="para-reglement">
                    - D’accéder à une activité sans avoir l’âge et le forfait requis. Il est possible d’être surclasser sur accord du responsable du site pour le PAH.<br/>
                    - D’Interrompre et de quitter un parcours sans l’autorisation et l’assistance d’un opérateur. Des échelles sont présente sur certains parcours afin de pouvoir quitter celui-ci en toute sécurité.<br/>
                    - De retirer sont équipements de protection individuel (baudriers, casque et gants) sur les parcours.<br/>
                    - De venir directement en aide à un pratiquant sur les parcours, de monter sur les parcours sans baudriers, d’utiliser une échelle pour monter sur un parcours. Seuls les employés d’Atout Branches sont habilités à la faire.<br/>
                    - Des sortir de l’enceinte du parc avec tous type d’équipements appartenant au parc.<br/>
                    - De retirer le matériel en dehors de la plateforme d’équipement PAH.<br/>
                    - De fumer dans toute l’enceinte du parc. Une zone fumeur est à votre disposition à l’extérieur et au niveau du portail d’entrée.
                  </p>
                <h3 className="title-reglement">ASSURANCE ET CONTROLE DES INSTALATIONS</h3>
                  <p className="para-reglement">
                    Dans le cadre de l’exploitation de son parc, Atout Branches a soumis à un contrat d’assurance en responsabilité civil auprès de AXA. La société Atout Branches ne pourra être tenue pour responsable de la détérioration, perte ou vols d’effet personnels (tenue, objets …) des pratiquants, des accompagnateurs ou des visiteurs. Ni pour les dégradations ou vols qui pourraient survenir dans les véhicules stationnés sur le parking. Atout Branches décline toute responsabilité en cas d’accident survenu à la suite du non-respect des consignes de sécurités. Atout Branches se réserve le droit de réclamer des indemnités financières aux participants en cas de perte ou de dégradations de matériels.
                    Chaque année, la société SOLEUS control l’état et le bon fonctionnement des installations des parcours acrobatiques en hauteur.
                  </p>
                <h3 className="title-reglement">OUVERTURE ET FERMETURE DU SITE</h3>
                  <p className="para-reglement">
                  Le parc est ouvert de Mars à Octobre, aux périodes indiquées sur les brochures et sur le site internet.<br></br> L’accès au parc, aux zones d’activités et aux structures en hauteur est interdit en dehors des heures d’ouverture.<br></br> En cas de mauvaises conditions météorologiques (vent fort, orages avec risque de foudre …), la direction se réserve le droit d’évacuer temporairement ou définitivement le parc pour votre propre sécurité.<br></br> La société Atout Branches n’assure aucunes responsabilités en cas de non-respect des consignes de sécurité et du présent règlement intérieur.<br></br><br/>
                  La direction se réserve le droit d’exclure toutes personnes :<br></br><br/>
                  - Ne respectant pas les consignes.<br></br>
                  - Ayant un comportement dangereux pour lui-même ou pour les autres.<br></br>
                  - Irrespectueuses envers le personnel du parc, des installations ou de l’environnement.<br></br>
                  La direction peut prendre et faire appliquer toute décisions qui lui semble justifié.<br></br>
                  </p>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  );
}

export default Reglement;

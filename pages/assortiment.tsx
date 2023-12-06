import React from 'react';
import CarouselWithText from '../components/assorty';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import NestedCarousel from '../components/nestedCarousel';

const Merlot2022 = [
  {
    imageSrc:
      'https://scontent-otp1-1.xx.fbcdn.net/v/t39.30808-6/353792295_653908490096039_1986689439329358693_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_ohc=XUm-sdd6BlMAX_cvBdN&_nc_ht=scontent-otp1-1.xx&oh=00_AfC0sxf2_D4tIOD4zAOYnv3aLjK68MBOIwmbEqOeu-aJAQ&oe=6573EDE2',
    text1:
      'Descoperiți armonia gustativă perfectă cu Terassele Hagimus Chardonnay 2022, o ediție limitată ce promite să îmbogățească orice masă.',
    text2:
      ' Acest vin alb sec se potrivește de minune cu o varietate de preparate, evidențiind subtilitățile fiecărui ingredient. Încercați-l alături de o pastă cremoasă, unde complexitatea sa va complementa textura bogată și savoarea delicată.',
    text3:
      ' Este un partener de încredere pentru fructe de mare, accentuând prospețimea și aromele oceanice. Vinul se îmbină armonios și cu brânzeturi, atât cele moi, cât și cele tari, creând un echilibru între aromele puternice și caracterul său fructat. Nu în ultimul rând, Terassele Hagimus Chardonnay 2022 este o alegere excelentă pentru a însoți preparatele cu pui și sosuri cremoase, îmbogățind fiecare îmbucătură cu o notă elegantă de citrice și fructe albe.',
    text4:
      'Și pentru o cină vegetală, permiteți vinului să vă surprindă alături de legume coapte, unde complexitatea sa va sublinia dulceața naturală și textura crocantă. Fiecare sticlă servește nu doar ca o băutură rafinată, ci și ca un acompaniator versatil pentru un spectru larg de mâncăruri, transformând fiecare masă într-o ocazie specială."',
  },
  {
    imageSrc:
      'https://scontent-otp1-1.xx.fbcdn.net/v/t39.30808-6/354226169_653908493429372_8627972898086339421_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_ohc=Go8988-EaekAX9f3i15&_nc_ht=scontent-otp1-1.xx&oh=00_AfBINZX_-vG2_MwGc4XuL5qgk01-nZ8YVHFdHQewtgoPbA&oe=65726D04',
    text1:
      'Prima impresie sugerată este aceea de fructe de pădure, în special de afine și mure. Aceste fructe sunt adesea asociate cu Merlot-uri de calitate, indicând un vin cu corp mediu și note vibrant de fructe proaspete, care pot oferi o aciditate plăcută și o anumită dulceață naturală.',
    text2:
      'În plus, aroma de prune și cireșe adaugă o complexitate de straturi, contribuind la profilul general al vinului cu note mai dulci și mai rotunde. Prunele adesea aduc un caracter bogat și ușor picant, în timp ce cireșele pot introduce o ușoară acrișoare și profunzime. Această combinație sugerează că vinul ar putea avea o structură echilibrată și o persistență aromatică îndelungată.',
    text3:
      'Aromele de smochine și condimente sunt de așteptat să completeze buchetul vinului cu o complexitate suplimentară. Smochinele aduc adesea o dulceață subtilă și o textură moale în vinuri, în timp ce notele de condimente pot sugera o maturare în butoaie de lemn, care adaugă straturi suplimentare de vanilie, piper sau chiar tonuri ușor fumate, contribuind la complexitatea și rafinamentul vinului.',
    text4:
      'În ansamblu, "Terasele Hagimus Merlot 2022" pare să fie un vin roșu sec care se mândrește cu un profil aromatic divers și echilibrat, capabil să satisfacă palatele celor care apreciază vinișoarele cu note fructate și o ușoară complexitate condimentată.',
  },

  {
    imageSrc:
      'https://scontent-otp1-1.xx.fbcdn.net/v/t39.30808-6/353792295_653908486762706_7680420092527994845_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_ohc=PBmC16yRzewAX81QwLs&_nc_ht=scontent-otp1-1.xx&oh=00_AfDYoZLMfKvP4iBlR0TwDpQMliKlMifSCwG4oz5j7xmJiQ&oe=6575BFE2',
    text1: '',
    text2: '',
    text3: '',
    text4: '',
  },
];

const Chardonay = [
  {
    imageSrc:
      'https://scontent-otp1-1.xx.fbcdn.net/v/t39.30808-6/354063465_653901656763389_8975291543110034820_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_ohc=u9Ckbk9DexoAX8aY3qO&_nc_ht=scontent-otp1-1.xx&oh=00_AfBlzxqnIprOUjYp8typP9loBeXfIg23O5I-ApkwG4LMpw&oe=65741DDA',
    text1:
      'Pasta cremoasă este prima în listă, sugerând că textura bogată și aromele intense ale vinului se potrivesc perfect cu mâncărurile lactate și onctuoase. Chardonnay-ul, cu notele sale adesea untuoase și cu un indiciu de vanilie datorat maturării în butoi, învăluie și echilibrează bogăția pastelor cu sosuri pe bază de smântână sau parmezan, fără a domina delicatețea aromelor.',
    text2:
      'Pe de altă parte, asortarea cu fructe de mare sugerează că acest Chardonnay are o aciditate care poate tăia prin grăsimea fructelor de mare, lăsând loc unei senzații de prospețime în gură. Aromele citrice și minerale ale vinului, care pot apărea în urma fermentației sau a contactului cu drojdia, complementază gustul de mare al scoicilor, creveților și crustaceelor, creând un echilibru între vin și mâncare.',
    text3:
      'Brânzeturile, atât cele moi cât și cele tari, sunt de asemenea partenere excelente pentru Chardonnay. Brânzeturile moi, cu texturile lor bogate și adesea cremoase, sunt contrastate frumos de structura vinului, în timp ce cele tari și sărate sunt echilibrate de fructuozitatea și corpul vinului. Această diversitate de arome și texturi între brânzeturi și vin creează o simfonie de gusturi care se întăresc reciproc.',
    text4:
      'În final, păsările de curte și legumele coapte adaugă un alt nivel de versatilitate la potențialul de pairing al acestui Chardonnay. Gustul bogat și textura cărnii de pui sau curcan sunt îmbunătățite de complexitatea vinului, în timp ce dulceața naturală a legumelor coapte este scoasă în evidență de aromele fructate și de vanilie ale vinului.',
  },
  {
    imageSrc:
      'https://scontent-otp1-1.xx.fbcdn.net/v/t39.30808-6/353614614_653901643430057_3170843274827378466_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3635dc&_nc_ohc=YNLu17g1GY0AX8di_UI&_nc_ht=scontent-otp1-1.xx&oh=00_AfASCejzaOfukhBrFXwJ6VwUJDT1cicMw05lQpOmZdMlPw&oe=65742B24',
    text1:
      'În primul rând, profilul aromatic al acestui Chardonnay 2022 emană cu generozitate notele tropicale de ananas, care promit o explozie de prospețime în palat. Aromele de ananas sunt adesea asociate cu vini albe tinere și vibrante, semnalând o aciditate plăcută care echilibrează bogăția gustului. O astfel de prezență tropicală poate sugera că vinul a fost fermentat sau maturat în condiții care au permis păstrarea și amplificarea acestor arome primare, vibrant de fructate.',
    text2:
      'În al doilea rând, notele de măr copt adaugă o dimensiune de adâncime și complexitate acestui vin, indicând posibil o maturare scurtă în butoaie de lemn sau o fermentație malolactică controlată. Mărul copt aduce aminte de căldura și confortul, introducând o nuanță reconfortantă care complementează fructele mai exotice. Acest echilibru între dulceață și aciditate este adesea căutat în vinurile Chardonnay de calitate, oferind o experiență senzorială bogată.',
    text3:
      'Al treilea element aromatic, perele, aduce o delicatețe în acest buchet olfactiv. Perele sunt adesea asociate cu finețea și eleganța, sugerând că acest Chardonnay ar putea avea o textură mătăsoasă și o persistență aromatică de durată. Aromele de pară în vinuri pot indica, de asemenea, o aciditate echilibrată și o structură bine definită, oferind vinului o coloană vertebrală solidă.',
    text4:
      'În cele din urmă, adăugarea aromelor de banană, pepene și piersică completează profilul cu o varietate de arome dulci și zemoase. Bananele sugerează o ușoară cremozitate, în timp ce pepenele și piersica adaugă o senzație de suculență și prospețime. ',
  },
  {
    imageSrc: '',
    text1: '',
    text2: '',
    text3: '',
    text4: '',
  },
];

const merlotRose = [
  {
    imageSrc:
      'https://scontent-otp1-1.xx.fbcdn.net/v/t39.30808-6/352216769_2174092732759634_8618905335071776334_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=gUP-nkRrg9MAX86gEz1&_nc_ht=scontent-otp1-1.xx&oh=00_AfBkXf5EuXJMDBibKx4WJdFFy4AglapBetM2sH4FqNLIXQ&oe=65755716',
    text1: '',
    text2: '',
    text3: '',
    text4: '',
  },
  {
    imageSrc:
      'https://scontent-otp1-1.xx.fbcdn.net/v/t39.30808-6/352385667_928071678270245_9128792324285425003_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_ohc=kS0qfr51dNwAX-X7VC9&_nc_ht=scontent-otp1-1.xx&oh=00_AfCh_iJUVXUqRCop-8gM4otibvZJVVvfBPTz0GJHj8qAdA&oe=6574C2F2',
    text1: '',
    text2: '',
    text3: '',
    text4: '',
  },
  {
    imageSrc:
      'https://scontent-otp1-1.xx.fbcdn.net/v/t39.30808-6/352296383_217758891165572_7075752700975825486_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=3635dc&_nc_ohc=FgdMwcH_FcwAX9THmfE&_nc_ht=scontent-otp1-1.xx&oh=00_AfBVUMkrpAxStJreXeY2pnnwD7X6yfWJXP3I5jxeL6on6g&oe=6574E9A2',
    text1: '',
    text2: '',
    text3: '',
    text4: '',
  },
];

const Sauvignon = [
  {
    imageSrc:
      'https://scontent-otp1-1.xx.fbcdn.net/v/t39.30808-6/353441756_651276497025905_6457919240115998568_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=dXWPU0FHHGsAX8l8bto&_nc_ht=scontent-otp1-1.xx&oh=00_AfDG6vt_XJMbniqAa3LbDCUgafzsVO1imnTqkapHHsditA&oe=6575C6FB',
    text1: '',
    text2: '',
    text3: '',
    text4: '',
  },
  {
    imageSrc:
      'https://scontent-otp1-1.xx.fbcdn.net/v/t39.30808-6/352778368_651276433692578_1536183706111268243_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=TKAsSq2MpgwAX8_MDkF&_nc_ht=scontent-otp1-1.xx&oh=00_AfCZxjSc_YaJRtkTyUa1wBRiQN6JcVzeyTCJD_3So6BNsw&oe=657480E3',
    text1: '',
    text2: '',
    text3: '',
    text4: '',
  },
  {
    imageSrc:
      'https://scontent-otp1-1.xx.fbcdn.net/v/t39.30808-6/352523393_651276423692579_4313216928735254122_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=J1p7nUHU994AX-rN_HV&_nc_ht=scontent-otp1-1.xx&oh=00_AfBmeSPDGVc46sURSDqVuYImBVm9NGcTU5W34KOwTtoSoQ&oe=65764F70',
    text1: '',
    text2: '',
    text3: '',
    text4: '',
  },
];

const blancMerlot = [
  {
    imageSrc:
      'https://scontent-otp1-1.xx.fbcdn.net/v/t39.30808-6/353855641_653898813430340_2107118235116032807_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=msNtz4pv8y0AX854DnF&_nc_ht=scontent-otp1-1.xx&oh=00_AfAXQatnmEQ2luU2zuwsbEIN-_D3aHrt5d7NI-0lJdgUVA&oe=65765670',
    text1: '',
    text2: '',
    text3: '',
    text4: '',
  },
  {
    imageSrc:
      'https://scontent-otp1-1.xx.fbcdn.net/v/t39.30808-6/354037980_653898853430336_6784676211962370109_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_ohc=Xfa4GgfTcT8AX9PQ0Rn&_nc_ht=scontent-otp1-1.xx&oh=00_AfAVIbZND0JJefxfd9fbeqhB0m6t_xBMAXVxncT16pFTbg&oe=657600EE',
    text1: '',
    text2: '',
    text3: '',
    text4: '',
  },
  {
    imageSrc:
      'https://scontent-otp1-1.xx.fbcdn.net/v/t39.30808-6/353855931_653898816763673_3278020393110671272_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_ohc=9OaOQJw-GzkAX_i-0HN&_nc_ht=scontent-otp1-1.xx&oh=00_AfBzvDkMCZEOs97fDe40mVGpl3SsJXhveXYiOMqX8KmHsA&oe=6574AB06',
    text1: '',
    text2: '',
    text3: '',
    text4: '',
  },
];

const assortiment = () => {
  return (
    <div>
      <Header></Header>
      <NestedCarousel>
        <CarouselWithText items={Merlot2022}></CarouselWithText>
        <CarouselWithText items={Chardonay}></CarouselWithText>
        <CarouselWithText items={merlotRose}></CarouselWithText>
        <CarouselWithText items={Sauvignon}></CarouselWithText>
        <CarouselWithText items={blancMerlot}></CarouselWithText>
      </NestedCarousel>

      <Footer></Footer>
    </div>
  );
};

export default assortiment;

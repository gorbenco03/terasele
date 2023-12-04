import React from 'react';
import CarouselWithText from '../components/assorty';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

const Merlot2022 = [
  {
    imageSrc:
      'https://scontent-otp1-1.xx.fbcdn.net/v/t39.30808-6/353792295_653908490096039_1986689439329358693_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_ohc=XUm-sdd6BlMAX_cvBdN&_nc_ht=scontent-otp1-1.xx&oh=00_AfC0sxf2_D4tIOD4zAOYnv3aLjK68MBOIwmbEqOeu-aJAQ&oe=6573EDE2',
    text: 'Desigur, iată un text care încorporează toate preparatele prezentate în imagine, ca o recomandare de pairing pentru vinul din imagine : Descoperiți armonia gustativă perfectă cu Terassele Hagimus Chardonnay 2022, o ediție limitată ce promite să îmbogățească orice masă. Acest vin alb sec se potrivește de minune cu o varietate de preparate, evidențiind subtilitățile fiecărui ingredient. Încercați-l alături de o pastă cremoasă, unde complexitatea sa va complementa textura bogată și savoarea delicată. Este un partener de încredere pentru fructe de mare, accentuând prospețimea și aromele oceanice. Vinul se îmbină armonios și cu brânzeturi, atât cele moi, cât și cele tari, creând un echilibru între aromele puternice și caracterul său fructat. Nu în ultimul rând, Terassele Hagimus Chardonnay 2022 este o alegere excelentă pentru a însoți preparatele cu pui și sosuri cremoase, îmbogățind fiecare îmbucătură cu o notă elegantă de citrice și fructe albe. Și pentru o cină vegetală, permiteți vinului să vă surprindă alături de legume coapte, unde complexitatea sa va sublinia dulceața naturală și textura crocantă. Fiecare sticlă servește nu doar ca o băutură rafinată, ci și ca un acompaniator versatil pentru un spectru larg de mâncăruri, transformând fiecare masă într-o ocazie specială."',
  },
  {
    imageSrc:
      'https://scontent-otp1-1.xx.fbcdn.net/v/t39.30808-6/354226169_653908493429372_8627972898086339421_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_ohc=Go8988-EaekAX9f3i15&_nc_ht=scontent-otp1-1.xx&oh=00_AfBINZX_-vG2_MwGc4XuL5qgk01-nZ8YVHFdHQewtgoPbA&oe=65726D04',
    text: 'Text for Image 2',
  },
  {
    imageSrc:
      'https://scontent-otp1-1.xx.fbcdn.net/v/t39.30808-6/353792295_653908486762706_7680420092527994845_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_ohc=OIImMdczdnUAX-mI4He&_nc_ht=scontent-otp1-1.xx&oh=00_AfBbSDsOFe1pUegq4SfLLD2R10nPj1lJXvJDpql0aDYltQ&oe=6573C5A2',
    text: 'Text for Image 3',
  },
];
const Chardonnay2022 = [
  {
    imageSrc:
      'https://scontent-otp1-1.xx.fbcdn.net/v/t39.30808-6/353614614_653901643430057_3170843274827378466_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3635dc&_nc_ohc=YNLu17g1GY0AX8di_UI&_nc_ht=scontent-otp1-1.xx&oh=00_AfASCejzaOfukhBrFXwJ6VwUJDT1cicMw05lQpOmZdMlPw&oe=65742B24',
    text: 'Text for Image 1',
  },
  {
    imageSrc:
      'https://scontent-otp1-1.xx.fbcdn.net/v/t39.30808-6/353668661_653901606763394_6940336673116074941_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3635dc&_nc_ohc=nywVJ54U4r8AX89SRDa&_nc_ht=scontent-otp1-1.xx&oh=00_AfC4B-tTPnE4g005tOUYTGxvsxusC05zHGsQFfZRMJ5ROQ&oe=65731303',
    text: 'Text for Image 2',
  },
  {
    imageSrc:
      'https://scontent-otp1-1.xx.fbcdn.net/v/t39.30808-6/354063465_653901656763389_8975291543110034820_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_ohc=u2ayDpWquFMAX8j6_y9&_nc_ht=scontent-otp1-1.xx&oh=00_AfDNIdt4Xm523ggc-H_LHzCe9l0nRLYZ7t-FcEkvcQxO7g&oe=65741DDA',
    text: 'Text for Image 3',
  },
];

const assortiment = () => {
  return (
    <div>
      <Header></Header>
      <CarouselWithText items={Merlot2022}></CarouselWithText>
      <CarouselWithText items={Chardonnay2022}></CarouselWithText>
      <Footer></Footer>
    </div>
  );
};

export default assortiment;

import Image from 'next/image';
import myImage from '../src/assets/hagimus.png';
const stats = [
  { label: 'Fondat', value: '2019' },
  { label: 'Angajați', value: '10' },
  { label: 'Țări', value: '12' },
  { label: 'Colecți', value: '5' },
];

export function Content() {
  return (
    <div className="bg-white  py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto  grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0  lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4 ">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <Image
                className="absolute inset-0 h-full w-full object-cover brightness-125 saturate-0"
                src={myImage}
                alt="logo"
              />
              <div className="absolute inset-0 bg-gray-200 mix-blend-multiply" />
              <div
                className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
                aria-hidden="true"
              >
                <div
                  className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-40"
                  style={{
                    clipPath:
                      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                  }}
                />
              </div>

              <figure className="relative isolate">
                <figcaption className="mt-24  pt-6 text-sm leading-6 text-gray-300">
                  <strong className="font-semibold  text-white ">
                    Gherghelejiu Serghei,
                  </strong>{' '}
                  Fondatorul Terasele Hagimus
                </figcaption>
              </figure>
            </div>
          </div>
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Terasele Hagimus: Perla Vinicolă a Moldovei, Unde Tradiția
                Întâlnește Inovația
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                  Vinăria Terasele Hagimus, situată în pitoreasca regiune a
                  Moldovei, este un simbol al tradiției și inovației în arta
                  vinificației. Această vinărie, înconjurată de dealuri
                  însorite, este renumită pentru terasele sale care se întind pe
                  colinele suave, unde vița de vie este cultivată cu grijă și
                  dedicare.
                </p>
                <p className="mt-8">
                  Clădirile vinăriei, cu arhitectura lor rustică și modernă, se
                  îmbină armonios cu peisajul natural, creând un decor de vis
                  pentru degustările de vin. Terasele Hagimus se mândrește cu o
                  gamă variată de vinuri, de la cele albe și ușoare, până la
                  roșii robuste și aromate, fiecare reflectând unicitatea
                  solului și microclimatului local.
                </p>
                <p className="mt-8">
                  Oaspeții vinăriei sunt invitați să participe la tururi
                  ghidate, să exploreze cramele și să descopere secretele
                  vinificației, într-o atmosferă caldă și primitorie.
                </p>
              </div>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4">
              {stats.map((stat, statIdx) => (
                <div key={statIdx}>
                  <dt className="text-sm font-semibold leading-6 text-gray-600">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

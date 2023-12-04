import Image from 'next/image';
import Link from 'next/link';

export function Cloud() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Explorați vinurile noastre în următoarele locații
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <Link href="https://wine.md/">
            <Image
              className="col-span-2 max-h-10 w-full object-contain lg:col-span-1"
              src="https://wine.md/assets/template/images/logo.png"
              alt="Transistor"
              width={158}
              height={48}
            />
          </Link>
          <Link href="https://icascaval.md/">
            <Image
              className="col-span-2 max-h-28 w-full object-contain lg:col-span-1"
              src="https://static.tildacdn.com/tild6666-3537-4431-b364-343734313166/Logo_v13.png"
              alt="Reform"
              width={158}
              height={48}
            />
          </Link>
          <Link href="https://winetime.md/">
            <Image
              className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
              src="https://winetime.md/img/svg-icons/logo-dark.svg"
              alt="Tuple"
              width={158}
              height={100}
            />
          </Link>
          <Link href="https://www.facebook.com/winerepublic2022/">
            <Image
              className="col-span-2 max-h-28   w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://s3-ap-southeast-2.amazonaws.com/craftypint/crafty/seller/Wine-Republic-logo-1.png"
              alt="SavvyCal"
              width={158}
              height={48}
            />
          </Link>
          <Link href="https://pegas.md/ro">
            <Image
              className="col-span-2   max-h-16 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://pegas.md/images/logo.png"
              alt="Statamic"
              width={158}
              height={48}
            />
          </Link>
          <Link href="https://www.facebook.com/teatrulgastronomic/">
            <Image
              className="col-span-2  max-h-16 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://starcard.md/wp-content/uploads/2021/08/teatru-gastronomic.png"
              alt="Statamic"
              width={158}
              height={48}
            />
          </Link>
          <Link href="https://www.facebook.com/teatrulgastronomic/">
            <Image
              className="col-span-2  max-h-16 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://starcard.md/wp-content/uploads/2021/08/teatru-gastronomic.png"
              alt="Statamic"
              width={158}
              height={48}
            />
          </Link>
          <Link href="https://www.facebook.com/teatrulgastronomic/">
            <Image
              className="col-span-2  max-h-16 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://starcard.md/wp-content/uploads/2021/08/teatru-gastronomic.png"
              alt="Statamic"
              width={158}
              height={48}
            />
          </Link>
          <Link href="https://www.facebook.com/teatrulgastronomic/">
            <Image
              className="col-span-2  max-h-16 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://starcard.md/wp-content/uploads/2021/08/teatru-gastronomic.png"
              alt="Statamic"
              width={158}
              height={48}
            />
          </Link>

          <Link href="https://www.facebook.com/teatrulgastronomic/">
            <Image
              className="col-span-2  max-h-16 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://starcard.md/wp-content/uploads/2021/08/teatru-gastronomic.png"
              alt="Statamic"
              width={158}
              height={48}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

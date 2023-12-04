import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon, PlusIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';

const filters = [
  {
    id: 'color',
    name: 'Tip',
    options: [
      { value: 'white', label: 'Alb' },
      { value: 'red', label: 'Rosu' },
      { value: 'rose', label: 'Rose' },
    ],
  },
  {
    id: 'category',
    name: 'Soi de poamă',
    options: [
      { value: 'new-arrivals', label: 'Cabernet' },
      { value: 'tees', label: 'Merlot' },
      { value: 'crewnecks', label: 'Sauvignon' },
    ],
  },
  {
    id: 'year',
    name: 'Anul',
    options: [
      { value: '2023', label: '2023' },
      { value: '2022', label: '2022' },
      { value: '2021', label: '2021' },
      { value: '2020', label: '2020' },
      { value: '2019', label: '2019' },
    ],
  },
];
const products = [
  {
    id: 1,
    name: 'Sauvignon Blanc',
    href: '#',
    price: '',
    description:
      'Vin alb sec. Aromă: cu accente de citrice și completată de nuanţe florale ',
    imageSrc:
      'https://crama.md/wp-content/uploads/2023/05/cramamd_terasele-hagimus-sauvignon-blanc.png',
    imageAlt: 'Sauvignon Blanc',

    year: 2023,
  },
  {
    id: 2,
    name: 'Merlot Rose',
    href: '#',
    price: '',
    description:
      'Look like a visionary CEO and wear the same black t-shirt every day.',
    imageSrc:
      'https://crama.md/wp-content/uploads/2023/06/cramamd_terasele-hagimus-merlot-rose.png',
    imageAlt: 'Front of plain black t-shirt.',
    year: 2021,
  },
  {
    id: 3,
    name: 'Merlot Rosu',
    href: '#',
    price: '',
    description:
      'Look like a visionary CEO and wear the same black t-shirt every day.',
    imageSrc:
      'https://crama.md/wp-content/uploads/2023/06/cramamd_terasele-hagimus-merlot-rosu.png',
    imageAlt: 'Front of plain black t-shirt.',
    year: 2019,
  },
  {
    id: 4,
    name: 'Cuvee Rouge',
    href: '#',
    year: 2020,
    price: '',
    description: 'Vinaria Gogu',
    imageSrc:
      'https://crama.md/wp-content/uploads/2023/04/cramamd_gogu-winery-cuvee-rouge-315x581.png',
    imageAlt: 'Front of plain black t-shirt.',
  },
  {
    id: 5,
    name: 'Cuvee Rouge Royal',
    href: '#',
    price: '',
    year: 2022,
    description: 'Chateau Cristi ',
    imageSrc:
      'https://crama.md/wp-content/uploads/2023/05/cramamd_chateau-cristi-cuvee-rouge-royal-315x581.png',
    imageAlt: 'Cuve',
  },
  {
    id: 6,
    name: 'Vin Rose Sec',
    href: '#',
    price: '',
    description:
      'Look like a visionary CEO and wear the same black t-shirt every day.',
    imageSrc:
      'https://crama.md/wp-content/uploads/2023/05/cramamd_vinum-estate-rara-neagra-2021.png',
    imageAlt: 'Rose Sec.',
    year: 2020,
  },
  {
    id: 7,
    name: 'Vin Roșu Dulce',
    href: '#',
    price: '',
    description:
      'Look like a visionary CEO and wear the same black t-shirt every day.',
    imageSrc:
      'https://crama.md/wp-content/uploads/2023/05/cramamd_vinum-estate-rara-neagra-2021.png',
    imageAlt: 'Rosu Dulce',
    year: 2022,
  },
  {
    id: 8,
    name: 'Chardonay',
    href: '#',
    year: 2023,
    price: '',
    description: 'Chardonay alb foarte bun',
    imageSrc:
      'https://crama.md/wp-content/uploads/2023/04/cramamd_gogu-winery-cuvee-rouge-315x581.png',
    imageAlt: 'Chardonay.',
  },
];

function classNames({ classes = [] }: { classes?: any[] } = {}) {
  return classes.filter(Boolean).join(' ');
}

export function CategoryComponent() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedYears, setSelectedYears] = useState<number[]>([]);

  const handleYearChange = (e: { target: { value: string; checked: any } }) => {
    const year = parseInt(e.target.value, 10);
    setSelectedYears((prevYears) => {
      if (e.target.checked) {
        // Adaugă anul în array dacă este selectat
        return [...prevYears, year];
      } else {
        // Elimină anul din array dacă este deselectat
        return prevYears.filter((y) => y !== year);
      }
    });
  };

  const filteredProducts = products.filter((product) => {
    // Verifică dacă anul produsului se află în array-ul selectedYears
    return selectedYears.length === 0 || selectedYears.includes(product.year);
  });

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="relative -mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4">
                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.name}
                        className="border-t border-gray-200 pb-4 pt-4"
                      >
                        {({ open }) => (
                          <fieldset>
                            <legend className="w-full px-2">
                              <Disclosure.Button className="flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500">
                                <span className="text-sm font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex h-7 items-center">
                                  <ChevronDownIcon
                                    className={classNames({
                                      classes: [
                                        open ? '-rotate-180' : 'rotate-0',
                                        'h-5 w-5 transform',
                                      ],
                                    })}
                                    aria-hidden="true"
                                  />
                                </span>
                              </Disclosure.Button>
                            </legend>
                            <Disclosure.Panel className="px-4 pb-2 pt-4">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      value={option.value}
                                      type="checkbox"
                                      onChange={handleYearChange}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />

                                    <label
                                      htmlFor={`${section.id}-${optionIdx}-mobile`}
                                      className="ml-3 text-sm text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </fieldset>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
          <div className="border-b border-gray-200 pb-10 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Descoperă gama vinurilor noastre
            </h1>
            <p className="mt-4 text-base text-gray-500">
              Alege vinul ce ți se potrivește cel mai bine.
            </p>
          </div>

          <div className="pb-24 pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
            <aside>
              <h2 className="sr-only">Filters</h2>

              <button
                type="button"
                className="inline-flex items-center lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="text-sm font-medium text-gray-700">
                  Filters
                </span>
                <PlusIcon
                  className="ml-1 h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
              </button>

              <div className="hidden lg:block">
                <form className="space-y-10 divide-y divide-gray-200">
                  {filters.map((section, sectionIdx) => (
                    <div
                      key={section.name}
                      className={sectionIdx === 0 ? '' : 'pt-10'}
                    >
                      <fieldset>
                        <legend className="block text-sm font-medium text-gray-900">
                          {section.name}
                        </legend>
                        <div className="space-y-3 pt-6">
                          {section.options.map((option, optionIdx) => (
                            <div
                              key={option.value}
                              className="flex items-center"
                            >
                              <input
                                id={`${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                value={option.value}
                                type="checkbox"
                                onChange={handleYearChange}
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />

                              <label
                                htmlFor={`${section.id}-${optionIdx}`}
                                className="ml-3 text-sm text-gray-600"
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </fieldset>
                    </div>
                  ))}
                </form>
              </div>
            </aside>

            <section
              aria-labelledby="product-heading"
              className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3"
            >
              <h2 id="product-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1  gap-y-4 sm:grid-cols-2  sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
                  >
                    <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
                      <Image
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-scale-down"
                      />
                    </div>
                    <div className="flex flex-1 flex-col  space-y-2 p-4">
                      <h3 className="text-sm font-medium text-gray-900">
                        <a href={product.href}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.name}
                        </a>
                      </h3>
                      <p className="text-sm text-gray-500">
                        {product.description}
                      </p>
                      <div className="flex flex-1 flex-col justify-end">
                        <p className="text-sm italic text-gray-500">
                          Colectia {product.year}
                        </p>
                        <p className="text-base font-medium text-gray-900">
                          {product.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

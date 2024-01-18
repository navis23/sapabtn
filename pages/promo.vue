<template>
    <div class="relative">
        <div class="relative min-h-screen px-4 lg:px-32 pt-28">
            <div class="relative z-20 flex flex-nowrap w-full justify-evenly items-center gap-x-6 mb-8 ">
				<h3 class="text-2xl whitespace-nowrap lg:text-4xl font-black text-btn-blue">
					List Seluruh Promo
				</h3>
				<div class=" bg-gradient-to-r from-btn-yellow via-btn-red to-btn-blue2 w-full h-[0.2rem] rounded-r-full">
				</div>
			</div>
            <div class="flex items-start gap-6 relative pb-20">
                <div class="w-64 sticky top-5">
                    <div class="bg-slate-50 p-4 shadow-md shadow-gray-400 rounded-lg z-40">
                        <p class="text-btn-blue text-lg font-bold pb-1 mb-3 border-b-2 border-gray-200">
                            Kategori
                        </p>
                        <div class="space-y-2 text-xs">
                            <div class="flex justify-between items-center px-3 py-2 bg-btn-blue2 text-btn-yellow rounded-lg">
                                <p class="font-semibold">
                                    All Data
                                </p>
                                <Icon name="lucide:check-circle-2" class="text-lg text-btn-yellow" />
                            </div>
                            <div class="flex justify-between items-center px-3 py-2 bg-btn-yellow text-btn-blue2 rounded-lg">
                                <p class="font-medium">
                                    BTN Mobile
                                </p>
                            </div>
                            <div class="flex justify-between items-center px-3 py-2 bg-btn-yellow text-btn-blue2 rounded-lg">
                                <p class="font-medium">
                                    Poin Spekta
                                </p>
                            </div>
                            <div class="flex justify-between items-center px-3 py-2 bg-btn-yellow text-btn-blue2 rounded-lg">
                                <p class="font-medium">
                                    Kartu Debit BTN Visa
                                </p>
                            </div>
                            <div class="flex justify-between items-center px-3 py-2 bg-btn-yellow text-btn-blue2 rounded-lg">
                                <p class="font-medium">
                                    Food & Beverages
                                </p>
                            </div>
                            <div class="flex justify-between items-center px-3 py-2 bg-btn-yellow text-btn-blue2 rounded-lg">
                                <p class="font-medium">
                                    Groceries
                                </p>
                            </div>
                            <div class="flex justify-between items-center px-3 py-2 bg-btn-yellow text-btn-blue2 rounded-lg">
                                <p class="font-medium">
                                    Fashion & Beauty
                                </p>
                            </div>
                            <div class="flex justify-between items-center px-3 py-2 bg-btn-yellow text-btn-blue2 rounded-lg">
                                <p class="font-medium">
                                    Hotels
                                </p>
                            </div>
                            <div class="flex justify-between items-center px-3 py-2 bg-btn-yellow text-btn-blue2 rounded-lg">
                                <p class="font-medium">
                                    Hobbies
                                </p>
                            </div>
                            <div class="flex justify-between items-center px-3 py-2 bg-btn-yellow text-btn-blue2 rounded-lg">
                                <p class="font-medium">
                                    Electronics & Gadget
                                </p>
                            </div>
                            <div class="flex justify-between items-center px-3 py-2 bg-btn-yellow text-btn-blue2 rounded-lg">
                                <p class="font-medium">
                                    Health Services
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full relative">
                    <div class="relative z-20 grid grid-cols-12 gap-6">
                        <!-- start promos card -->
                        <div class="col-span-12 lg:col-span-6 grid grid-cols-6 shadow-md bg-slate-50 shadow-gray-400 rounded-lg overflow-hidden">
                            <div class="col-span-6 lg:col-span-2">
                                <nuxt-img src="/img/promo01.jpg" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center w-full"/>
                            </div>					
                            <div class="relative col-span-6 lg:col-span-4 p-3 flex flex-col gap-2">
                                <p class="font-semibold font-oswald text-base text-btn-blue">
                                    Flash Sale 11.11 BTN Spekta
                                </p>
                                <div class="space-y-1">
                                    <div class="flex items-center gap-x-2">
                                        <p class="leading-none">
                                            <Icon name="lucide:clock" class="text-sm text-btn-blue2" />
                                        </p>
                                        <p class="text-xs">1 November 2023 s.d. 31 March 2024</p>
                                    </div>
                                    <div class="flex items-center gap-x-2">
                                        <p class="leading-none">
                                            <Icon name="lucide:book" class="text-sm text-btn-blue2" />
                                        </p>
                                        <p class="text-xs">Nasabah melakukan penukaran poin melalui BTN Mobile dengan melakukan klik pada menu Poin Spekta</p>
                                    </div>
                                    <div class="flex items-center pb-20 lg:pb-0 gap-x-2">
                                        <p class="leading-none">
                                            <Icon name="lucide:users" class="text-sm text-btn-blue2" />
                                        </p>
                                        <p class="text-xs">Seluruh nasabah bank BTN yang memiliki Poin Spekta</p>
                                    </div>
                                </div>
                                <div class="absolute bottom-4 right-4 flex items-center justify-end gap-x-2">
                                    <nuxt-link to="/">
                                        <ButtonBaseMini class="btn-invert">
                                            <Icon name="lucide:clipboard-list" class="text-sm" />
                                            <span>Detail</span>
                                        </ButtonBaseMini>
                                    </nuxt-link>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-12 lg:col-span-6 grid grid-cols-6 shadow-md bg-slate-50 shadow-gray-400 rounded-lg overflow-hidden">
                            <div class="col-span-6 lg:col-span-2">
                                <nuxt-img src="/img/promo03.jpg" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center w-full"/>
                            </div>					
                            <div class="relative col-span-6 lg:col-span-4 p-3 flex flex-col gap-2">
                                <p class="font-semibold font-oswald text-base text-btn-blue">
                                    Transaksi Kartu Debit BTN VISA di Alfamart & Indomaret
                                </p>
                                <div class="space-y-1">
                                    <div class="flex items-center gap-x-2">
                                        <p class="leading-none">
                                            <Icon name="lucide:clock" class="text-sm text-btn-blue2" />
                                        </p>
                                        <p class="text-xs">1 November 2023 s.d. 31 December 2023</p>
                                    </div>
                                    <div class="flex items-center gap-x-2">
                                        <p class="leading-none">
                                            <Icon name="lucide:book" class="text-sm text-btn-blue2" />
                                        </p>
                                        <p class="text-xs">Kartu Debit BTN Visa</p>
                                    </div>
                                    <div class="flex items-center pb-20 lg:pb-0 gap-x-2">
                                        <p class="leading-none">
                                            <Icon name="lucide:users" class="text-sm text-btn-blue2" />
                                        </p>
                                        <p class="text-xs">Nasabah/konsumen BTN Perorangan dan Bisnis</p>
                                    </div>
                                </div>
                                <div class="absolute bottom-4 right-4 flex items-center justify-end gap-x-2">
                                    <nuxt-link to="/">
                                        <ButtonBaseMini class="btn-invert">
                                            <Icon name="lucide:clipboard-list" class="text-sm" />
                                            <span>Detail</span>
                                        </ButtonBaseMini>
                                    </nuxt-link>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-12 lg:col-span-6 grid grid-cols-6 shadow-md bg-slate-50 shadow-gray-400 rounded-lg overflow-hidden">
                            <div class="col-span-6 lg:col-span-2">
                                <nuxt-img src="/img/promo02.jpg" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center w-full"/>
                            </div>					
                            <div class="relative col-span-6 lg:col-span-4 p-3 flex flex-col gap-2">
                                <p class="font-semibold font-oswald text-base text-btn-blue">
                                    Flash Sale BTN Poin Spekta November
                                </p>
                                <div class="space-y-1">
                                    <div class="flex items-center gap-x-2">
                                        <p class="leading-none">
                                            <Icon name="lucide:clock" class="text-sm text-btn-blue2" />
                                        </p>
                                        <p class="text-xs">27 November 2023 s.d. 01 December 2023</p>
                                    </div>
                                    <div class="flex items-center gap-x-2">
                                        <p class="leading-none">
                                            <Icon name="lucide:book" class="text-sm text-btn-blue2" />
                                        </p>
                                        <p class="text-xs">Poin Spekta</p>
                                    </div>
                                    <div class="flex items-center pb-20 lg:pb-0 gap-x-2">
                                        <p class="leading-none">
                                            <Icon name="lucide:users" class="text-sm text-btn-blue2" />
                                        </p>
                                        <p class="text-xs">Seluruh nasabah bank BTN yang memiliki poin Spekta</p>
                                    </div>
                                </div>
                                <div class="absolute bottom-4 right-4 flex items-center justify-end gap-x-2">
                                    <nuxt-link to="/">
                                        <ButtonBaseMini class="btn-invert">
                                            <Icon name="lucide:clipboard-list" class="text-sm" />
                                            <span>Detail</span>
                                        </ButtonBaseMini>
                                    </nuxt-link>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-12 lg:col-span-6 grid grid-cols-6 shadow-md bg-slate-50 shadow-gray-400 rounded-lg overflow-hidden">
                            <div class="col-span-6 lg:col-span-2">
                                <nuxt-img src="/img/promo04.jpg" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center w-full"/>
                            </div>					
                            <div class="relative col-span-6 lg:col-span-4 p-3 flex flex-col gap-2">
                                <p class="font-semibold font-oswald text-base text-btn-blue">
                                    Program PLN Prepaid Untung Melimpah
                                </p>
                                <div class="space-y-1">
                                    <div class="flex items-center gap-x-2">
                                        <p class="leading-none">
                                            <Icon name="lucide:clock" class="text-sm text-btn-blue2" />
                                        </p>
                                        <p class="text-xs">25 November 2023 s.d. 10 December 2023</p>
                                    </div>
                                    <div class="flex items-center gap-x-2">
                                        <p class="leading-none">
                                            <Icon name="lucide:book" class="text-sm text-btn-blue2" />
                                        </p>
                                        <p class="text-xs">BTN Mobile</p>
                                    </div>
                                    <div class="flex items-center pb-20 lg:pb-0 gap-x-2">
                                        <p class="leading-none">
                                            <Icon name="lucide:users" class="text-sm text-btn-blue2" />
                                        </p>
                                        <p class="text-xs">Nasabah/konsumen BTN Perorangan</p>
                                    </div>
                                </div>
                                <div class="absolute bottom-4 right-4 flex items-center justify-end gap-x-2">
                                    <nuxt-link to="/">
                                        <ButtonBaseMini class="btn-invert">
                                            <Icon name="lucide:clipboard-list" class="text-sm" />
                                            <span>Detail</span>
                                        </ButtonBaseMini>
                                    </nuxt-link>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-12 lg:col-span-6 grid grid-cols-6 shadow-md bg-slate-50 shadow-gray-400 rounded-lg overflow-hidden">
                            <div class="col-span-6 lg:col-span-2">
                                <nuxt-img src="/img/promo01.jpg" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center w-full"/>
                            </div>					
                            <div class="relative col-span-6 lg:col-span-4 p-3 flex flex-col gap-2">
                                <p class="font-semibold font-oswald text-base text-btn-blue">
                                    Flash Sale 11.11 BTN Spekta
                                </p>
                                <div class="space-y-1">
                                    <div class="flex items-center gap-x-2">
                                        <p class="leading-none">
                                            <Icon name="lucide:clock" class="text-sm text-btn-blue2" />
                                        </p>
                                        <p class="text-xs">1 November 2023 s.d. 31 March 2024</p>
                                    </div>
                                    <div class="flex items-center gap-x-2">
                                        <p class="leading-none">
                                            <Icon name="lucide:book" class="text-sm text-btn-blue2" />
                                        </p>
                                        <p class="text-xs">Nasabah melakukan penukaran poin melalui BTN Mobile dengan melakukan klik pada menu Poin Spekta</p>
                                    </div>
                                    <div class="flex items-center pb-20 lg:pb-0 gap-x-2">
                                        <p class="leading-none">
                                            <Icon name="lucide:users" class="text-sm text-btn-blue2" />
                                        </p>
                                        <p class="text-xs">Seluruh nasabah bank BTN yang memiliki Poin Spekta</p>
                                    </div>
                                </div>
                                <div class="absolute bottom-4 right-4 flex items-center justify-end gap-x-2">
                                    <nuxt-link to="/">
                                        <ButtonBaseMini class="btn-invert">
                                            <Icon name="lucide:clipboard-list" class="text-sm" />
                                            <span>Detail</span>
                                        </ButtonBaseMini>
                                    </nuxt-link>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-12 lg:col-span-6 grid grid-cols-6 shadow-md bg-slate-50 shadow-gray-400 rounded-lg overflow-hidden">
                            <div class="col-span-6 lg:col-span-2">
                                <nuxt-img src="/img/promo03.jpg" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center w-full"/>
                            </div>					
                            <div class="relative col-span-6 lg:col-span-4 p-3 flex flex-col gap-2">
                                <p class="font-semibold font-oswald text-base text-btn-blue">
                                    Transaksi Kartu Debit BTN VISA di Alfamart & Indomaret
                                </p>
                                <div class="space-y-1">
                                    <div class="flex items-center gap-x-2">
                                        <p class="leading-none">
                                            <Icon name="lucide:clock" class="text-sm text-btn-blue2" />
                                        </p>
                                        <p class="text-xs">1 November 2023 s.d. 31 December 2023</p>
                                    </div>
                                    <div class="flex items-center gap-x-2">
                                        <p class="leading-none">
                                            <Icon name="lucide:book" class="text-sm text-btn-blue2" />
                                        </p>
                                        <p class="text-xs">Kartu Debit BTN Visa</p>
                                    </div>
                                    <div class="flex items-center pb-20 lg:pb-0 gap-x-2">
                                        <p class="leading-none">
                                            <Icon name="lucide:users" class="text-sm text-btn-blue2" />
                                        </p>
                                        <p class="text-xs">Nasabah/konsumen BTN Perorangan dan Bisnis</p>
                                    </div>
                                </div>
                                <div class="absolute bottom-4 right-4 flex items-center justify-end gap-x-2">
                                    <nuxt-link to="/">
                                        <ButtonBaseMini class="btn-invert">
                                            <Icon name="lucide:clipboard-list" class="text-sm" />
                                            <span>Detail</span>
                                        </ButtonBaseMini>
                                    </nuxt-link>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-12 lg:col-span-6 grid grid-cols-6 shadow-md bg-slate-50 shadow-gray-400 rounded-lg overflow-hidden">
                            <div class="col-span-6 lg:col-span-2">
                                <nuxt-img src="/img/promo02.jpg" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center w-full"/>
                            </div>					
                            <div class="relative col-span-6 lg:col-span-4 p-3 flex flex-col gap-2">
                                <p class="font-semibold font-oswald text-base text-btn-blue">
                                    Flash Sale BTN Poin Spekta November
                                </p>
                                <div class="space-y-1">
                                    <div class="flex items-center gap-x-2">
                                        <p class="leading-none">
                                            <Icon name="lucide:clock" class="text-sm text-btn-blue2" />
                                        </p>
                                        <p class="text-xs">27 November 2023 s.d. 01 December 2023</p>
                                    </div>
                                    <div class="flex items-center gap-x-2">
                                        <p class="leading-none">
                                            <Icon name="lucide:book" class="text-sm text-btn-blue2" />
                                        </p>
                                        <p class="text-xs">Poin Spekta</p>
                                    </div>
                                    <div class="flex items-center pb-20 lg:pb-0 gap-x-2">
                                        <p class="leading-none">
                                            <Icon name="lucide:users" class="text-sm text-btn-blue2" />
                                        </p>
                                        <p class="text-xs">Seluruh nasabah bank BTN yang memiliki poin Spekta</p>
                                    </div>
                                </div>
                                <div class="absolute bottom-4 right-4 flex items-center justify-end gap-x-2">
                                    <nuxt-link to="/">
                                        <ButtonBaseMini class="btn-invert">
                                            <Icon name="lucide:clipboard-list" class="text-sm" />
                                            <span>Detail</span>
                                        </ButtonBaseMini>
                                    </nuxt-link>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-12 lg:col-span-6 grid grid-cols-6 shadow-md bg-slate-50 shadow-gray-400 rounded-lg overflow-hidden">
                            <div class="col-span-6 lg:col-span-2">
                                <nuxt-img src="/img/promo04.jpg" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center w-full"/>
                            </div>					
                            <div class="relative col-span-6 lg:col-span-4 p-3 flex flex-col gap-2">
                                <p class="font-semibold font-oswald text-base text-btn-blue">
                                    Program PLN Prepaid Untung Melimpah
                                </p>
                                <div class="space-y-1">
                                    <div class="flex items-center gap-x-2">
                                        <p class="leading-none">
                                            <Icon name="lucide:clock" class="text-sm text-btn-blue2" />
                                        </p>
                                        <p class="text-xs">25 November 2023 s.d. 10 December 2023</p>
                                    </div>
                                    <div class="flex items-center gap-x-2">
                                        <p class="leading-none">
                                            <Icon name="lucide:book" class="text-sm text-btn-blue2" />
                                        </p>
                                        <p class="text-xs">BTN Mobile</p>
                                    </div>
                                    <div class="flex items-center pb-20 lg:pb-0 gap-x-2">
                                        <p class="leading-none">
                                            <Icon name="lucide:users" class="text-sm text-btn-blue2" />
                                        </p>
                                        <p class="text-xs">Nasabah/konsumen BTN Perorangan</p>
                                    </div>
                                </div>
                                <div class="absolute bottom-4 right-4 flex items-center justify-end gap-x-2">
                                    <nuxt-link to="/">
                                        <ButtonBaseMini class="btn-invert">
                                            <Icon name="lucide:clipboard-list" class="text-sm" />
                                            <span>Detail</span>
                                        </ButtonBaseMini>
                                    </nuxt-link>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-12 lg:col-span-6 grid grid-cols-6 shadow-md bg-slate-50 shadow-gray-400 rounded-lg overflow-hidden">
                            <div class="col-span-6 lg:col-span-2">
                                <nuxt-img src="/img/promo01.jpg" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center w-full"/>
                            </div>					
                            <div class="relative col-span-6 lg:col-span-4 p-3 flex flex-col gap-2">
                                <p class="font-semibold font-oswald text-base text-btn-blue">
                                    Flash Sale 11.11 BTN Spekta
                                </p>
                                <div class="space-y-1">
                                    <div class="flex items-center gap-x-2">
                                        <p class="leading-none">
                                            <Icon name="lucide:clock" class="text-sm text-btn-blue2" />
                                        </p>
                                        <p class="text-xs">1 November 2023 s.d. 31 March 2024</p>
                                    </div>
                                    <div class="flex items-center gap-x-2">
                                        <p class="leading-none">
                                            <Icon name="lucide:book" class="text-sm text-btn-blue2" />
                                        </p>
                                        <p class="text-xs">Nasabah melakukan penukaran poin melalui BTN Mobile dengan melakukan klik pada menu Poin Spekta</p>
                                    </div>
                                    <div class="flex items-center pb-20 lg:pb-0 gap-x-2">
                                        <p class="leading-none">
                                            <Icon name="lucide:users" class="text-sm text-btn-blue2" />
                                        </p>
                                        <p class="text-xs">Seluruh nasabah bank BTN yang memiliki Poin Spekta</p>
                                    </div>
                                </div>
                                <div class="absolute bottom-4 right-4 flex items-center justify-end gap-x-2">
                                    <nuxt-link to="/">
                                        <ButtonBaseMini class="btn-invert">
                                            <Icon name="lucide:clipboard-list" class="text-sm" />
                                            <span>Detail</span>
                                        </ButtonBaseMini>
                                    </nuxt-link>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-12 lg:col-span-6 grid grid-cols-6 shadow-md bg-slate-50 shadow-gray-400 rounded-lg overflow-hidden">
                            <div class="col-span-6 lg:col-span-2">
                                <nuxt-img src="/img/promo03.jpg" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center w-full"/>
                            </div>					
                            <div class="relative col-span-6 lg:col-span-4 p-3 flex flex-col gap-2">
                                <p class="font-semibold font-oswald text-base text-btn-blue">
                                    Transaksi Kartu Debit BTN VISA di Alfamart & Indomaret
                                </p>
                                <div class="space-y-1">
                                    <div class="flex items-center gap-x-2">
                                        <p class="leading-none">
                                            <Icon name="lucide:clock" class="text-sm text-btn-blue2" />
                                        </p>
                                        <p class="text-xs">1 November 2023 s.d. 31 December 2023</p>
                                    </div>
                                    <div class="flex items-center gap-x-2">
                                        <p class="leading-none">
                                            <Icon name="lucide:book" class="text-sm text-btn-blue2" />
                                        </p>
                                        <p class="text-xs">Kartu Debit BTN Visa</p>
                                    </div>
                                    <div class="flex items-center pb-20 lg:pb-0 gap-x-2">
                                        <p class="leading-none">
                                            <Icon name="lucide:users" class="text-sm text-btn-blue2" />
                                        </p>
                                        <p class="text-xs">Nasabah/konsumen BTN Perorangan dan Bisnis</p>
                                    </div>
                                </div>
                                <div class="absolute bottom-4 right-4 flex items-center justify-end gap-x-2">
                                    <nuxt-link to="/">
                                        <ButtonBaseMini class="btn-invert">
                                            <Icon name="lucide:clipboard-list" class="text-sm" />
                                            <span>Detail</span>
                                        </ButtonBaseMini>
                                    </nuxt-link>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-12 lg:col-span-6 grid grid-cols-6 shadow-md bg-slate-50 shadow-gray-400 rounded-lg overflow-hidden">
                            <div class="col-span-6 lg:col-span-2">
                                <nuxt-img src="/img/promo02.jpg" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center w-full"/>
                            </div>					
                            <div class="relative col-span-6 lg:col-span-4 p-3 flex flex-col gap-2">
                                <p class="font-semibold font-oswald text-base text-btn-blue">
                                    Flash Sale BTN Poin Spekta November
                                </p>
                                <div class="space-y-1">
                                    <div class="flex items-center gap-x-2">
                                        <p class="leading-none">
                                            <Icon name="lucide:clock" class="text-sm text-btn-blue2" />
                                        </p>
                                        <p class="text-xs">27 November 2023 s.d. 01 December 2023</p>
                                    </div>
                                    <div class="flex items-center gap-x-2">
                                        <p class="leading-none">
                                            <Icon name="lucide:book" class="text-sm text-btn-blue2" />
                                        </p>
                                        <p class="text-xs">Poin Spekta</p>
                                    </div>
                                    <div class="flex items-center pb-20 lg:pb-0 gap-x-2">
                                        <p class="leading-none">
                                            <Icon name="lucide:users" class="text-sm text-btn-blue2" />
                                        </p>
                                        <p class="text-xs">Seluruh nasabah bank BTN yang memiliki poin Spekta</p>
                                    </div>
                                </div>
                                <div class="absolute bottom-4 right-4 flex items-center justify-end gap-x-2">
                                    <nuxt-link to="/">
                                        <ButtonBaseMini class="btn-invert">
                                            <Icon name="lucide:clipboard-list" class="text-sm" />
                                            <span>Detail</span>
                                        </ButtonBaseMini>
                                    </nuxt-link>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-12 lg:col-span-6 grid grid-cols-6 shadow-md bg-slate-50 shadow-gray-400 rounded-lg overflow-hidden">
                            <div class="col-span-6 lg:col-span-2">
                                <nuxt-img src="/img/promo04.jpg" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center w-full"/>
                            </div>					
                            <div class="relative col-span-6 lg:col-span-4 p-3 flex flex-col gap-2">
                                <p class="font-semibold font-oswald text-base text-btn-blue">
                                    Program PLN Prepaid Untung Melimpah
                                </p>
                                <div class="space-y-1">
                                    <div class="flex items-center gap-x-2">
                                        <p class="leading-none">
                                            <Icon name="lucide:clock" class="text-sm text-btn-blue2" />
                                        </p>
                                        <p class="text-xs">25 November 2023 s.d. 10 December 2023</p>
                                    </div>
                                    <div class="flex items-center gap-x-2">
                                        <p class="leading-none">
                                            <Icon name="lucide:book" class="text-sm text-btn-blue2" />
                                        </p>
                                        <p class="text-xs">BTN Mobile</p>
                                    </div>
                                    <div class="flex items-center pb-20 lg:pb-0 gap-x-2">
                                        <p class="leading-none">
                                            <Icon name="lucide:users" class="text-sm text-btn-blue2" />
                                        </p>
                                        <p class="text-xs">Nasabah/konsumen BTN Perorangan</p>
                                    </div>
                                </div>
                                <div class="absolute bottom-4 right-4 flex items-center justify-end gap-x-2">
                                    <nuxt-link to="/">
                                        <ButtonBaseMini class="btn-invert">
                                            <Icon name="lucide:clipboard-list" class="text-sm" />
                                            <span>Detail</span>
                                        </ButtonBaseMini>
                                    </nuxt-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
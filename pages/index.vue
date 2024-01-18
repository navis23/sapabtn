<template>
	<div class="relative overflow-hidden">
		<!-- hero section -->
		<div class="relative min-h-screen px-4 lg:px-32 pt-28 overflow-hidden">
			<div class="flex flex-col items-center justify-center h-full">
				<div v-motion-fade class="text-center space-y-1 z-10">
					<h1 class="text-3xl lg:text-6xl font-bold text-btn-blue2" >Informasi Promo</h1>
					<div class="flex gap-x-2 lg:gap-x-3 items-center justify-center">
						<h1 class="text-3xl lg:text-6xl font-bold text-btn-blue2">& Program </h1>
						<nuxt-img src="/img/logobtn.png" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center h-6 lg:h-12"/>
						<h1 class="text-3xl lg:text-6xl font-bold text-btn-blue2">Dalam</h1>
					</div>
					<h1 class="text-3xl lg:text-6xl font-bold text-btn-brown" >Genggaman Anda</h1>
					<p class="text-sm lg:text-sm pt-3 text-btn-red font-semibold">
						<span class="px-2 py-1 bg-btn-red bg-opacity-10  rounded-full">
							Prototype program for BTN KC Mojokerto
						</span>
					</p>
				</div>
				<button v-motion-fade class="relative z-10 mt-4 lg:mt-8 p-2 rounded-full flex items-center border-4 border-btn-blue2 text-btn-blue2 w-10 lg:w-12 h-10 lg:h-12 justify-center hover:scale-105 transition-all duration-300 hover:bg-btn-blue hover:border-btn-blue hover:text-btn-yellow">
					<Icon name="lucide:arrow-down" class="text-2xl lg:text-4xl" />
				</button>
				<div v-motion-fade  class="relative flex gap-x-2 lg:gap-x-6 justify-evenly items-center text-center w-full mb-4 mt-8 z-30">
					<div class=" bg-gradient-to-r from-btn-yellow to-btn-red w-full h-[0.2rem] rounded-l-full">
					</div>
					<h3 class="text-2xl lg:text-4xl font-black text-btn-blue2 leading-none tracking-tight whitespace-nowrap uppercase font-oswald">
						<span class="text-btn-red">hot promo</span> for you
					</h3>
					<div class=" bg-gradient-to-r from-btn-red to-btn-blue2 w-full h-[0.2rem] rounded-r-full">
					</div>
				</div>
				<div v-motion-slide-bottom :delay="500" class="relative w-full rounded-lg z-20 bg-gradient-to-r from-btn-yellow via-btn-red to-btn-blue2 p-3 lg:p-6">
					<div class="grid grid-cols-12 gap-3 lg:gap-6">
						<div class="col-span-6 lg:col-span-3 rounded-lg overflow-hidden cursor-pointer shadow-lg shadow-gray-700 hover:scale-105 transition-all duration-300 ">
							<nuxt-img src="/img/promo01.jpg" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center"/>
						</div>
						<div class="col-span-6 lg:col-span-3 rounded-lg overflow-hidden cursor-pointer shadow-lg shadow-gray-700 hover:scale-105 transition-all duration-300 ">
							<nuxt-img src="/img/promo03.jpg" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center"/>
						</div>
						<div class="col-span-6 lg:col-span-3 rounded-lg overflow-hidden cursor-pointer shadow-lg shadow-gray-700 hover:scale-105 transition-all duration-300 ">
							<nuxt-img src="/img/promo02.jpg" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center"/>
						</div>
						<div class="col-span-6 lg:col-span-3 rounded-lg overflow-hidden cursor-pointer shadow-lg shadow-gray-700 hover:scale-105 transition-all duration-300 ">
							<nuxt-img src="/img/promo04.jpg" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center"/>
						</div>
					</div>
				</div>
				<div class="relative flex gap-x-2 lg:gap-x-6 justify-evenly items-center text-center w-full mt-6 lg:mt-8 z-30">
					<div class=" bg-gradient-to-r from-btn-yellow via-btn-red to-btn-blue2 w-full h-[0.2rem] rounded-full">
					</div>
				</div>
			</div>
			<p class="absolute py-10 -right-72 lg:-right-16 opacity-10 top-5">
				<Icon name="ElementThree" class="text-[35rem] lg:text-[50rem]"/>
			</p>
			<p class="absolute py-10 -left-28 lg:-left-72 opacity-10 bottom-20 lg:-bottom-28">
				<Icon name="ElementThree" class="text-[25rem] lg:text-[40rem] rotate-90"/>
			</p>
		</div>

		<!-- latest promo section -->
		<div class="relative px-4 lg:px-32 py-10 lg:py-20 overflow-hidden">
			<div class="relative z-20 flex items-center justify-between mb-8">
				<h3 class="text-2xl lg:text-4xl font-black text-btn-blue">
					Promo Terbaru
				</h3>
				<nuxt-link to="/promo">
                    <ButtonBaseSmall class="btn shadow-md shadow-gray-400">
                        <Icon name="lucide:arrow-up-right-from-circle" class="text-lg" />
                        <span>Selengkapnya</span>
                    </ButtonBaseSmall>
                </nuxt-link>
			</div>
			<div class="relative z-20 grid grid-cols-12 gap-6">
				<!-- start promos card -->
				<div class="col-span-12 lg:col-span-6 grid grid-cols-6 shadow-md bg-slate-50 shadow-gray-400 rounded-lg overflow-hidden">
					<div class="col-span-6 lg:col-span-2">
						<nuxt-img src="/img/promo01.jpg" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center w-full"/>
					</div>					
					<div class="relative col-span-6 lg:col-span-4 p-3 flex flex-col gap-3">
						<p class="font-semibold font-oswald text-xl text-btn-blue">
							Flash Sale 11.11 BTN Spekta
						</p>
						<div class="space-y-2">
							<div class="flex items-center gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:clock" class="text-lg text-btn-blue" />
								</p>
								<p class="text-sm">1 November 2023 s.d. 31 March 2024</p>
							</div>
							<div class="flex items-center gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:book" class="text-lg text-btn-blue" />
								</p>
								<p class="text-sm">Nasabah melakukan penukaran poin melalui BTN Mobile dengan melakukan klik pada menu Poin Spekta</p>
							</div>
							<div class="flex items-center pb-20 lg:pb-0 gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:users" class="text-lg text-btn-blue" />
								</p>
								<p class="text-sm">Seluruh nasabah bank BTN yang memiliki Poin Spekta</p>
							</div>
						</div>
						<div class="absolute bottom-4 right-4 flex items-center justify-end gap-x-2">
							<nuxt-link to="/">
								<ButtonBaseSmall class="btn-invert">
									<Icon name="lucide:clipboard-list" class="text-lg" />
									<span>Detail Promo</span>
								</ButtonBaseSmall>
							</nuxt-link>
						</div>
					</div>
				</div>
				<div class="col-span-12 lg:col-span-6 grid grid-cols-6 shadow-md bg-slate-50 shadow-gray-400 rounded-lg overflow-hidden">
					<div class="col-span-6 lg:col-span-2">
						<nuxt-img src="/img/promo03.jpg" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center w-full"/>
					</div>					
					<div class="relative col-span-6 lg:col-span-4 p-3 flex flex-col gap-3">
						<p class="font-semibold font-oswald text-xl text-btn-blue">
							Transaksi Kartu Debit BTN VISA di Alfamart & Indomaret
						</p>
						<div class="space-y-2">
							<div class="flex items-center gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:clock" class="text-lg text-btn-blue" />
								</p>
								<p class="text-sm">1 November 2023 s.d. 31 December 2023</p>
							</div>
							<div class="flex items-center gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:book" class="text-lg text-btn-blue" />
								</p>
								<p class="text-sm">Kartu Debit BTN Visa</p>
							</div>
							<div class="flex items-center pb-20 lg:pb-0 gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:users" class="text-lg text-btn-blue" />
								</p>
								<p class="text-sm">Nasabah/konsumen BTN Perorangan dan Bisnis</p>
							</div>
						</div>
						<div class="absolute bottom-4 right-4 flex items-center justify-end gap-x-2">
							<nuxt-link to="/">
								<ButtonBaseSmall class="btn-invert">
									<Icon name="lucide:clipboard-list" class="text-lg" />
									<span>Detail Promo</span>
								</ButtonBaseSmall>
							</nuxt-link>
						</div>
					</div>
				</div>
				<div class="col-span-12 lg:col-span-6 grid grid-cols-6 shadow-md bg-slate-50 shadow-gray-400 rounded-lg overflow-hidden">
					<div class="col-span-6 lg:col-span-2">
						<nuxt-img src="/img/promo02.jpg" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center w-full"/>
					</div>					
					<div class="relative col-span-6 lg:col-span-4 p-3 flex flex-col gap-3">
						<p class="font-semibold font-oswald text-xl text-btn-blue">
							Flash Sale BTN Poin Spekta November
						</p>
						<div class="space-y-2">
							<div class="flex items-center gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:clock" class="text-lg text-btn-blue" />
								</p>
								<p class="text-sm">27 November 2023 s.d. 01 December 2023</p>
							</div>
							<div class="flex items-center gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:book" class="text-lg text-btn-blue" />
								</p>
								<p class="text-sm">Poin Spekta</p>
							</div>
							<div class="flex items-center pb-20 lg:pb-0 gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:users" class="text-lg text-btn-blue" />
								</p>
								<p class="text-sm">Seluruh nasabah bank BTN yang memiliki poin Spekta</p>
							</div>
						</div>
						<div class="absolute bottom-4 right-4 flex items-center justify-end gap-x-2">
							<nuxt-link to="/">
								<ButtonBaseSmall class="btn-invert">
									<Icon name="lucide:clipboard-list" class="text-lg" />
									<span>Detail Promo</span>
								</ButtonBaseSmall>
							</nuxt-link>
						</div>
					</div>
				</div>
				<div class="col-span-12 lg:col-span-6 grid grid-cols-6 shadow-md bg-slate-50 shadow-gray-400 rounded-lg overflow-hidden">
					<div class="col-span-6 lg:col-span-2">
						<nuxt-img src="/img/promo04.jpg" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center w-full"/>
					</div>					
					<div class="relative col-span-6 lg:col-span-4 p-3 flex flex-col gap-3">
						<p class="font-semibold font-oswald text-xl text-btn-blue">
							Program PLN Prepaid Untung Melimpah
						</p>
						<div class="space-y-2">
							<div class="flex items-center gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:clock" class="text-lg text-btn-blue" />
								</p>
								<p class="text-sm">25 November 2023 s.d. 10 December 2023</p>
							</div>
							<div class="flex items-center gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:book" class="text-lg text-btn-blue" />
								</p>
								<p class="text-sm">BTN Mobile</p>
							</div>
							<div class="flex items-center pb-20 lg:pb-0 gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:users" class="text-lg text-btn-blue" />
								</p>
								<p class="text-sm">Nasabah/konsumen BTN Perorangan</p>
							</div>
						</div>
						<div class="absolute bottom-4 right-4 flex items-center justify-end gap-x-2">
							<nuxt-link to="/">
								<ButtonBaseSmall class="btn-invert">
									<Icon name="lucide:clipboard-list" class="text-lg" />
									<span>Detail Promo</span>
								</ButtonBaseSmall>
							</nuxt-link>
						</div>
					</div>
				</div>
			</div>
			<p class="absolute py-10 -right-72 lg:-right-16 opacity-10 top-5">
				<Icon name="ElementThree" class="text-[35rem] lg:text-[50rem]"/>
			</p>
			<p class="absolute py-10 -left-28 lg:-left-72 opacity-10 bottom-20 lg:-bottom-28">
				<Icon name="ElementThree" class="text-[25rem] lg:text-[40rem] rotate-90"/>
			</p>
		</div>

		<!-- latest program section -->
		<div class="relative px-4 lg:px-32 py-10 lg:pb-28 overflow-hidden">
			<div class="relative z-20 flex items-center justify-between mb-8">
				<h3 class="text-2xl lg:text-4xl font-black text-btn-blue">
					Program Terbaru
				</h3>
				<nuxt-link to="/program">
                    <ButtonBaseSmall class="btn shadow-md shadow-gray-400">
                        <Icon name="lucide:arrow-up-right-from-circle" class="text-lg" />
                        <span>Selengkapnya</span>
                    </ButtonBaseSmall>
                </nuxt-link>
			</div>

			<div class="relative z-20 grid grid-cols-12 gap-6">
				<div class="relative col-span-12 lg:col-span-4 flex flex-col shadow-md bg-slate-50 shadow-gray-400 rounded-lg overflow-hidden">
					<nuxt-img src="/img/comichrz.png" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center w-full"/>
					<div class="relative py-6 px-8">
						<p class="font-semibold font-oswald text-xl text-btn-blue pb-3">
							Program EXPO (Extra e-Deposito)
						</p>
						<div class="space-y-2">
							<div class="flex items-center gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:clock" class="text-lg text-btn-blue" />
								</p>
								<p class="text-sm">01 November 2023 s.d. 31 December 2023</p>
							</div>
							<div class="flex items-center gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:book" class="text-lg text-btn-blue" />
								</p>
								<p class="text-sm">eDeposito BTN</p>
							</div>
							<div class="flex items-center pb-16 gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:users" class="text-lg text-btn-blue" />
								</p>
								<p class="text-sm">Seluruh Outlet Bank BTN (KC/KCP Kelas 1/KCP Kelas 2)</p>
							</div>
						</div>
					</div>
					<div class="absolute bottom-6 left-8 flex items-center justify-end gap-x-2">
						<nuxt-link to="/">
							<ButtonBaseSmall class="btn-invert">
								<Icon name="lucide:clipboard-list" class="text-lg" />
								<span>Detail Program</span>
							</ButtonBaseSmall>
						</nuxt-link>
					</div>
					
				</div>
				<div class="relative col-span-12 lg:col-span-4 flex flex-col shadow-md bg-slate-50 shadow-gray-400 rounded-lg overflow-hidden">
					<nuxt-img src="/img/comichrz.png" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center w-full"/>
					<div class="relative py-6 px-8">
						<p class="font-semibold font-oswald text-xl text-btn-blue pb-3">
							Program Akuisisi, Transaksi dan Loyalty (ATRAKSI)
						</p>
						<div class="space-y-2">
							<div class="flex items-center gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:clock" class="text-lg text-btn-blue" />
								</p>
								<p class="text-sm">01 Agustus 2023 s.d. 31 December 2023</p>
							</div>
							<div class="flex items-center gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:book" class="text-lg text-btn-blue" />
								</p>
								<p class="text-sm">Tabungan BTN Bisnis di Seluruh Outlet Bank BTN (KC/KCP Kelas 1/KCP Kelas 2)</p>
							</div>
							<div class="flex items-center pb-16 gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:users" class="text-lg text-btn-blue" />
								</p>
								<p class="text-sm">Nasabah Perorangan Bank BTN</p>
							</div>
						</div>
					</div>
					<div class="absolute bottom-6 left-8 flex items-center justify-end gap-x-2">
						<nuxt-link to="/">
							<ButtonBaseSmall class="btn-invert">
								<Icon name="lucide:clipboard-list" class="text-lg" />
								<span>Detail Program</span>
							</ButtonBaseSmall>
						</nuxt-link>
					</div>
					
				</div>
				<div class="relative col-span-12 lg:col-span-4 flex flex-col shadow-md bg-slate-50 shadow-gray-400 rounded-lg overflow-hidden">
					<nuxt-img src="/img/comichrz.png" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center w-full"/>
					<div class="relative py-6 px-8">
						<p class="font-semibold font-oswald text-xl text-btn-blue pb-3">
							Program Welcome to BTN Mobile IV
						</p>
						<div class="space-y-2">
							<div class="flex items-center gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:clock" class="text-lg text-btn-blue" />
								</p>
								<p class="text-sm">25 November 2023 s.d. 24 December 2023</p>
							</div>
							<div class="flex items-center gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:book" class="text-lg text-btn-blue" />
								</p>
								<p class="text-sm">BTN Mobile</p>
							</div>
							<div class="flex items-center pb-16 gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:users" class="text-lg text-btn-blue" />
								</p>
								<p class="text-sm">Nasabah Perorangan Bank BTN</p>
							</div>
						</div>
					</div>
					<div class="absolute bottom-6 left-8 flex items-center justify-end gap-x-2">
						<nuxt-link to="/">
							<ButtonBaseSmall class="btn-invert">
								<Icon name="lucide:clipboard-list" class="text-lg" />
								<span>Detail Program</span>
							</ButtonBaseSmall>
						</nuxt-link>
					</div>
					
				</div>
			</div>
			<p class="absolute py-10 -right-72 lg:-right-16 opacity-10 top-5">
				<Icon name="ElementThree" class="text-[35rem] lg:text-[50rem]"/>
			</p>
			<p class="absolute py-10 -left-28 lg:-left-72 opacity-10 bottom-20 lg:-bottom-28">
				<Icon name="ElementThree" class="text-[25rem] lg:text-[40rem] rotate-90"/>
			</p>
		</div>
	</div>
</template>
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
					<div class=" bg-gradient-to-r from-btn-blue2 to-btn-red w-full h-[0.2rem] rounded-l-full">
					</div>
					<h3 class="text-2xl lg:text-4xl font-black text-btn-blue2 leading-none tracking-tight whitespace-nowrap uppercase font-oswald">
						<span class="text-btn-red">special promo</span> for you
					</h3>
					<div class=" bg-gradient-to-r from-btn-red to-btn-yellow w-full h-[0.2rem] rounded-r-full">
					</div>
				</div>
				<div v-motion-slide-bottom :delay="500" class="relative w-full rounded-lg z-20 bg-gradient-to-r from-btn-blue2 via-btn-red to-btn-yellow p-3 lg:p-6">
					<div class="grid grid-cols-12 gap-3 lg:gap-6">
						<div class="col-span-6 lg:col-span-3 rounded-lg overflow-hidden cursor-pointer shadow-lg shadow-gray-700 hover:scale-105 transition-all duration-300 ">
							<nuxt-img src="/img/promo06.jpg" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center"/>
						</div>
						<div class="col-span-6 lg:col-span-3 rounded-lg overflow-hidden cursor-pointer shadow-lg shadow-gray-700 hover:scale-105 transition-all duration-300 ">
							<nuxt-img src="/img/promo05.jpg" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center"/>
						</div>
						<div class="col-span-6 lg:col-span-3 rounded-lg overflow-hidden cursor-pointer shadow-lg shadow-gray-700 hover:scale-105 transition-all duration-300 ">
							<nuxt-img src="/img/promo01.jpg" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center"/>
						</div>
						<div class="col-span-6 lg:col-span-3 rounded-lg overflow-hidden cursor-pointer shadow-lg shadow-gray-700 hover:scale-105 transition-all duration-300 ">
							<nuxt-img src="/img/promo03.jpg" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center"/>
						</div>
					</div>
				</div>
				<div class="relative flex gap-x-2 lg:gap-x-6 justify-evenly items-center text-center w-full mt-6 lg:mt-8 z-30">
					<div class=" bg-gradient-to-r from-btn-blue2 via-btn-red to-btn-yellow w-full h-[0.2rem] rounded-full">
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
				<div v-for="(item, index) in all_promo.slice(0,4)" :key="index" class="col-span-12 lg:col-span-6 grid grid-cols-6 shadow-md bg-slate-50 shadow-gray-400 rounded-lg overflow-hidden">
					<div class="col-span-6 lg:col-span-2">
						<nuxt-img :src="item.gambar_promo" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center w-full"/>
					</div>					
					<div class="relative col-span-6 lg:col-span-4 p-3 flex flex-col gap-3">
						<p class="font-semibold font-oswald text-xl text-btn-blue">
							{{ item.nama_promo }}
						</p>
						<div class="space-y-2">
							<div class="flex items-center gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:clock" class="text-lg text-btn-blue" />
								</p>
								<p class="text-sm">{{ item.periode_promo }}</p>
							</div>
							<div class="flex items-center gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:book" class="text-lg text-btn-blue" />
								</p>
								<p class="text-sm">{{ item.jenis_promo }}</p>
							</div>
							<div class="flex items-center pb-20 lg:pb-0 gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:users" class="text-lg text-btn-blue" />
								</p>
								<p class="text-sm">{{ item.nasabah_promo }}</p>
							</div>
						</div>
						<div class="absolute bottom-4 right-4 flex items-center justify-end gap-x-2">
							<nuxt-link :to="`/promo/${item.id_promo}`">
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
			<div class="relative flex gap-x-2 lg:gap-x-6 justify-evenly items-center text-center w-full mt-6 lg:mt-8 z-30">
					<div class=" bg-gradient-to-r from-btn-blue2 via-btn-red to-btn-yellow w-full h-[0.2rem] rounded-full">
					</div>
				</div>
		</div>
		

		<!-- latest program section -->
		<div class="relative px-4 lg:px-32 py-10 lg:pb-28 overflow-hidden">
			<div class="relative z-20 flex items-center justify-between mb-6">
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
				<div v-for="(item, index) in all_program.slice(0,3)" :key="index" class="relative col-span-12 lg:col-span-4 flex flex-col">
					<div class="relative h-36 px-6">

						<nuxt-img src="/img/comichrz3.png" format="webp" loading="lazy" sizes="sm:50vw" class="top-2 lg:top-1 z-20 absolute object-cover object-center w-80"/>
					</div>
					<div class="relative pb-6 pt-14 px-8 shadow-md bg-slate-50 shadow-gray-400 rounded-lg overflow-hidden">
						<p class="font-semibold font-oswald text-xl text-btn-blue pb-3">
							{{ item.nama_program }}
						</p>
						<div class="space-y-2">
							<div class="flex items-center gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:clock" class="text-lg text-btn-blue" />
								</p>
								<p class="text-sm">{{ item.periode_program }}</p>
							</div>
							<div class="flex items-center gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:book" class="text-lg text-btn-blue" />
								</p>
								<p class="text-sm">{{ item.jenis_program }}</p>
							</div>
							<div class="flex items-center gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:users" class="text-lg text-btn-blue" />
								</p>
								<p class="text-sm">{{ item.nasabah_program }}</p>
							</div>
							<div class="flex items-center pb-16 gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:map-pin" class="text-lg text-btn-blue" />
								</p>
								<p class="text-sm">{{ item.lokasi_program }}</p>
							</div>
						</div>
					</div>
					<div class="absolute bottom-6 left-8 flex items-center justify-end gap-x-2">
						<nuxt-link :to="`/program/${item.id_program}`">
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

<script setup lang="ts">
const storePromo = usePromoStore()

const {
    all_promo,
	all_program
} = storeToRefs(storePromo)
</script>

<style scoped>

</style>
<template>
    <div class="relative overflow-hidden">
        <div class="relative min-h-screen px-4 lg:px-32 pt-28 overflow-hidden">
            <div class="relative z-20 flex flex-nowrap w-full justify-evenly items-center gap-x-6 mb-8 ">
				<h3 class="text-2xl whitespace-nowrap lg:text-4xl font-black text-btn-blue">
					List Seluruh Program
				</h3>
				<div class=" bg-gradient-to-r from-btn-blue2 via-btn-red to-btn-yellow w-full h-[0.2rem] rounded-r-full">
				</div>
			</div>
            <div class="relative z-20 grid grid-cols-12 pb-20 gap-6">
				<div v-for="(item, index) in all_program" :key="index" class="relative col-span-12 lg:col-span-4 flex flex-col">
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
        </div>
    </div>
</template>

<script setup lang="ts">
const storePromo = usePromoStore()

const {
    all_program
} = storeToRefs(storePromo)
</script>

<style scoped>

</style>
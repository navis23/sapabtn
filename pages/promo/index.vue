<template>
    <div class="relative">
        <div class="relative min-h-screen px-4 lg:px-32 pt-28">
            <div class="relative z-20 flex flex-nowrap w-full justify-evenly items-center gap-x-6 mb-8 ">
				<h3 class="text-2xl whitespace-nowrap lg:text-4xl font-black text-btn-blue">
					List Seluruh Promo
				</h3>
				<div class=" bg-gradient-to-r from-btn-blue2 via-btn-red to-btn-yellow w-full h-[0.2rem] rounded-r-full">
				</div>
			</div>
            <div class="flex items-start gap-6 relative pb-20">
                <div class="w-64 hidden lg:block sticky top-5">
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
                        <div v-for="(item, index) in all_promo" :key="index" class="col-span-12 lg:col-span-6 grid grid-cols-6 shadow-md bg-slate-50 shadow-gray-400 rounded-lg overflow-hidden">
                            <div class="col-span-6 lg:col-span-2">
                                <nuxt-img :src="item.gambar_promo" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center w-full"/>
                            </div>					
                            <div class="relative col-span-6 lg:col-span-4 p-3 flex flex-col gap-2">
                                <p class="font-semibold font-oswald text-base text-btn-blue">
                                    {{ item.nama_promo }}
                                </p>
                                <div class="space-y-1">
                                    <div class="flex items-center gap-x-2">
                                        <p class="leading-none">
                                            <Icon name="lucide:clock" class="text-sm text-btn-blue2" />
                                        </p>
                                        <p class="text-xs">{{ item.periode_promo }}</p>
                                    </div>
                                    <div class="flex items-center gap-x-2">
                                        <p class="leading-none">
                                            <Icon name="lucide:book" class="text-sm text-btn-blue2" />
                                        </p>
                                        <p class="text-xs">{{ item.jenis_promo }}</p>
                                    </div>
                                    <div class="flex items-center pb-20 lg:pb-0 gap-x-2">
                                        <p class="leading-none">
                                            <Icon name="lucide:users" class="text-sm text-btn-blue2" />
                                        </p>
                                        <p class="text-xs">{{ item.nasabah_promo }}</p>
                                    </div>
                                </div>
                                <div class="absolute bottom-4 right-4 flex items-center justify-end gap-x-2">
                                    <nuxt-link :to="`/promo/${item.id_promo}`">
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
const storePromo = usePromoStore()

const {
    all_promo
} = storeToRefs(storePromo)
</script>

<style scoped>

</style>
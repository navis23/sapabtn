<template>
    <div class="relative overflow-hidden">
        <div v-for="(item, index) in selectedPromo" :key="index" class="relative min-h-screen px-4 lg:px-32 pt-28">
            <h1 class="relative z-20 text-2xl lg:text-4xl font-black text-btn-blue mb-6 lg:mb-10">
				{{ item.nama_promo }}
			</h1>
            <div class="relative z-20 grid grid-cols-12 mb-20 overflow-hidden">
                <div class="col-span-12 lg:col-span-5 overflow-hidden">
                    <nuxt-img :src="item.gambar_promo" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center rounded-lg w-full"/>
                </div>					
                <div class="relative col-span-12 lg:col-span-7 py-3 lg:py-0 pl-0 lg:pl-6 flex flex-col gap-3">
                    <div class="p-3 border rounded-lg space-y-2">
                        <p class="font-oswald text-gray-500 text-sm lg:text-lg">Deskripsi</p>
                        <p class="text-lg lg:text-xl text-btn-blue leading-1">
                            {{ item.deskripsi_promo }}
                        </p>
                    </div>
                    
                    <div class="p-3 border rounded-lg space-y-2">
                        <p class="font-oswald text-gray-500 text-sm lg:text-lg">Promo Info</p>
                        <div class="flex items-center gap-x-2">
                            <p class="leading-none">
                                <Icon name="lucide:clock" class="text-sm lg:text-base text-btn-blue2" />
                            </p>
                            <p class="text-xs lg:text-base">{{ item.periode_promo }}</p>
                        </div>
                        <div class="flex items-center gap-x-2">
                            <p class="leading-none">
                                <Icon name="lucide:book" class="text-sm lg:text-base text-btn-blue2" />
                            </p>
                            <p class="text-xs lg:text-base">{{ item.jenis_promo }}</p>
                        </div>
                        <div class="flex items-center gap-x-2">
                            <p class="leading-none">
                                <Icon name="lucide:users" class="text-sm lg:text-base text-btn-blue2" />
                            </p>
                            <p class="text-xs lg:text-base">{{ item.nasabah_promo }}</p>
                        </div>
                    </div>
                    <div class="p-3 border rounded-lg space-y-2">
                        <p class="font-oswald text-gray-500 text-sm lg:text-lg">Syarat dan Ketentuan</p>
                        <div v-for="(i, idx) in selectedPromo[0].syarat_promo" :key="idx" class="flex items-center gap-x-2">
                            <p class="leading-none">
                                <Icon name="lucide:chevron-right-circle" class="text-sm lg:text-base text-btn-blue2" />
                            </p>
                            <p class="text-xs lg:text-base">{{ i.keterangan }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <p class="absolute py-10 -right-72 lg:-right-16 opacity-10 top-5">
				<Icon name="ElementThree" class="text-[35rem] lg:text-[50rem]"/>
			</p>
			<p class="absolute py-10 -left-10 lg:-left-72 opacity-10 bottom-20 lg:-bottom-18">
				<Icon name="ElementThree" class="text-[32rem] lg:text-[40rem] rotate-90"/>
			</p>
        </div>
    </div>
</template>

<script setup lang="ts">
const route = useRoute()

console.log(route.params.id)

const storePromo = usePromoStore()

const {
    all_promo
} = storeToRefs(storePromo)

const selectedPromo = computed(() =>
all_promo.value.filter(
        (p : any) => p.id_promo == route.params.id
    ) || []
)

</script>

<style scoped>

</style>
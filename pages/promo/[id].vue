<template>
    <div class="relative overflow-hidden">
        <div v-for="(item, index) in selectedPromo" :key="index" class="relative min-h-screen px-4 lg:px-32 pt-28">
            <h1 class="text-2xl whitespace-nowrap lg:text-4xl font-black text-btn-blue mb-6 lg:mb-10">
				{{ item.nama_promo }}
			</h1>
            <div class="grid grid-cols-12 mb-20 overflow-hidden">
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
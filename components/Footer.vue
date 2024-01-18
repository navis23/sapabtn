<template>
    <div class="relative overflow-hidden px-4 lg:px-32">
        <div class="relative flex gap-x-2 lg:gap-x-6 justify-evenly items-center text-center w-full z-30">
			<div class=" bg-gradient-to-r from-btn-yellow via-btn-red to-btn-blue2 w-full h-[0.2rem] rounded-full">
			</div>
		</div>
        <div class="relative z-20 flex flex-col lg:flex-row items-center gap-3 justify-between px-4 pt-8 pb-4 text-btn-blue2 overflow-hidden">
            <div>
                <nuxt-img src="/img/btnmobile2.png" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center h-10"/>
            </div>
            <div class="flex flex-col items-center gap-2">
                <nuxt-img src="/img/logobtn.png" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center h-12"/>
                <p class=" text-sm font-medium">
                    All Rights Reserved © Bank Tabungan Negara, 2023
                </p>
            </div>
            <div class="">
                <p class="uppercase italic font-oswald text-lg font-bold pb-2">
                    karena hidup gak cuma tentang hari ini 
                </p>
                <div class="flex items-center justify-center lg:justify-start">
                    <p>
                        <Icon name="fa6-solid:hashtag" class="text-[2.5rem]" />
                    </p>
                    <div class="flex flex-col font-sans">
                        <p class="italic text-[1.35rem] leading-none font-semibold">AyoPunyaRumah</p>
                        <p class="italic text-[1rem] leading-none font-semibold">DenganBankTabungan</p>
                    </div>
                </div>
            </div>
        </div>
        <p class="absolute py-10 opacity-10 -top-40 right-10">
			<Icon name="ElementThree" class="text-[40rem]"/>
		</p>
        <p class="absolute py-10 opacity-10 -top-40 left-10">
			<Icon name="ElementThree" class="text-[40rem]"/>
		</p>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
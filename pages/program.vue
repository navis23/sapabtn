<template>
    <div class="relative overflow-hidden">
        <div class="relative min-h-screen px-4 lg:px-32 pt-28 overflow-hidden">
            <div class="relative z-20 flex flex-nowrap w-full justify-evenly items-center gap-x-6 mb-8 ">
				<h3 class="text-2xl whitespace-nowrap lg:text-4xl font-black text-btn-blue">
					List Seluruh Program
				</h3>
				<div class=" bg-gradient-to-r from-btn-yellow via-btn-red to-btn-blue2 w-full h-[0.2rem] rounded-r-full">
				</div>
			</div>
            <div class="relative z-20 grid grid-cols-12 pb-20 gap-6">
                <div class="relative col-span-12 lg:col-span-3 flex flex-col shadow-md bg-slate-50 shadow-gray-400 rounded-lg overflow-hidden">
					<div class="relative px-4 pt-4 overflow-hidden">
                        <nuxt-img src="/img/comichrz.png" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center w-full"/>
                    </div>
					<div class="relative py-3 px-3">
						<p class="font-semibold font-oswald text-base text-btn-blue pb-2">
							Program EXPO (Extra e-Deposito)
						</p>
						<div class="space-y-1">
							<div class="flex items-center gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:clock" class="text-sm text-btn-blue" />
								</p>
								<p class="text-xs">01 November 2023 s.d. 31 December 2023</p>
							</div>
							<div class="flex items-center gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:book" class="text-sm text-btn-blue" />
								</p>
								<p class="text-xs">eDeposito BTN</p>
							</div>
							<div class="flex items-center pb-12 gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:users" class="text-sm text-btn-blue" />
								</p>
								<p class="text-xs">Seluruh Outlet Bank BTN (KC/KCP Kelas 1/KCP Kelas 2)</p>
							</div>
						</div>
					</div>
					<div class="absolute bottom-3 left-4 flex items-center justify-end gap-x-2">
						<nuxt-link to="/">
							<ButtonBaseMini class="btn-invert">
								<Icon name="lucide:clipboard-list" class="text-sm" />
								<span>Detail Program</span>
							</ButtonBaseMini>
						</nuxt-link>
					</div>
					
				</div>
                <div class="relative col-span-12 lg:col-span-3 flex flex-col shadow-md bg-slate-50 shadow-gray-400 rounded-lg overflow-hidden">
                    <div class="relative px-4 pt-4 overflow-hidden">
                        <nuxt-img src="/img/comichrz.png" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center w-full"/>
                    </div>
					<div class="relative py-3 px-3">
						<p class="font-semibold font-oswald text-base text-btn-blue pb-2">
							Program Welcome to BTN Mobile IV
						</p>
						<div class="space-y-1">
							<div class="flex items-center gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:clock" class="text-sm text-btn-blue" />
								</p>
								<p class="text-xs">25 November 2023 s.d. 24 December 2023</p>
							</div>
							<div class="flex items-center gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:book" class="text-sm text-btn-blue" />
								</p>
								<p class="text-xs">BTN Mobile</p>
							</div>
							<div class="flex items-center pb-12 gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:users" class="text-sm text-btn-blue" />
								</p>
								<p class="text-xs">Nasabah Perorangan Bank BTN</p>
							</div>
						</div>
					</div>
					<div class="absolute bottom-3 left-4 flex items-center justify-end gap-x-2">
						<nuxt-link to="/">
							<ButtonBaseMini class="btn-invert">
								<Icon name="lucide:clipboard-list" class="text-sm" />
								<span>Detail Program</span>
							</ButtonBaseMini>
						</nuxt-link>
					</div>
					
				</div>
				<div class="relative col-span-12 lg:col-span-3 flex flex-col shadow-md bg-slate-50 shadow-gray-400 rounded-lg overflow-hidden">
					<div class="relative px-4 pt-4 overflow-hidden">
                        <nuxt-img src="/img/comichrz.png" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center w-full"/>
                    </div>
					<div class="relative py-3 px-3">
						<p class="font-semibold font-oswald text-base text-btn-blue pb-2">
							Program Akuisisi, Transaksi dan Loyalty (ATRAKSI)
						</p>
						<div class="space-y-1">
							<div class="flex items-center gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:clock" class="text-sm text-btn-blue" />
								</p>
								<p class="text-xs">01 Agustus 2023 s.d. 31 December 2023</p>
							</div>
							<div class="flex items-center gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:book" class="text-sm text-btn-blue" />
								</p>
								<p class="text-xs">Tabungan BTN Bisnis di Seluruh Outlet Bank BTN (KC/KCP Kelas 1/KCP Kelas 2)</p>
							</div>
							<div class="flex items-center pb-12 gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:users" class="text-sm text-btn-blue" />
								</p>
								<p class="text-xs">Nasabah Perorangan Bank BTN</p>
							</div>
						</div>
					</div>
					<div class="absolute bottom-3 left-4 flex items-center justify-end gap-x-2">
						<nuxt-link to="/">
							<ButtonBaseMini class="btn-invert">
								<Icon name="lucide:clipboard-list" class="text-sm" />
								<span>Detail Program</span>
							</ButtonBaseMini>
						</nuxt-link>
					</div>
					
				</div>
				<div class="relative col-span-12 lg:col-span-3 flex flex-col shadow-md bg-slate-50 shadow-gray-400 rounded-lg overflow-hidden">
					<div class="relative px-4 pt-4 overflow-hidden">
                        <nuxt-img src="/img/comichrz.png" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center w-full"/>
                    </div>
					<div class="relative py-3 px-3">
						<p class="font-semibold font-oswald text-base text-btn-blue pb-2">
							Program Welcome to BTN Mobile IV
						</p>
						<div class="space-y-1">
							<div class="flex items-center gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:clock" class="text-sm text-btn-blue" />
								</p>
								<p class="text-xs">25 November 2023 s.d. 24 December 2023</p>
							</div>
							<div class="flex items-center gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:book" class="text-sm text-btn-blue" />
								</p>
								<p class="text-xs">BTN Mobile</p>
							</div>
							<div class="flex items-center pb-12 gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:users" class="text-sm text-btn-blue" />
								</p>
								<p class="text-xs">Nasabah Perorangan Bank BTN</p>
							</div>
						</div>
					</div>
					<div class="absolute bottom-3 left-4 flex items-center justify-end gap-x-2">
						<nuxt-link to="/">
							<ButtonBaseMini class="btn-invert">
								<Icon name="lucide:clipboard-list" class="text-sm" />
								<span>Detail Program</span>
							</ButtonBaseMini>
						</nuxt-link>
					</div>
					
				</div>
                <div class="relative col-span-12 lg:col-span-3 flex flex-col shadow-md bg-slate-50 shadow-gray-400 rounded-lg overflow-hidden">
					<div class="relative px-4 pt-4 overflow-hidden">
                        <nuxt-img src="/img/comichrz.png" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center w-full"/>
                    </div>
					<div class="relative py-3 px-3">
						<p class="font-semibold font-oswald text-base text-btn-blue pb-2">
							Program EXPO (Extra e-Deposito)
						</p>
						<div class="space-y-1">
							<div class="flex items-center gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:clock" class="text-sm text-btn-blue" />
								</p>
								<p class="text-xs">01 November 2023 s.d. 31 December 2023</p>
							</div>
							<div class="flex items-center gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:book" class="text-sm text-btn-blue" />
								</p>
								<p class="text-xs">eDeposito BTN</p>
							</div>
							<div class="flex items-center pb-12 gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:users" class="text-sm text-btn-blue" />
								</p>
								<p class="text-xs">Seluruh Outlet Bank BTN (KC/KCP Kelas 1/KCP Kelas 2)</p>
							</div>
						</div>
					</div>
					<div class="absolute bottom-3 left-4 flex items-center justify-end gap-x-2">
						<nuxt-link to="/">
							<ButtonBaseMini class="btn-invert">
								<Icon name="lucide:clipboard-list" class="text-sm" />
								<span>Detail Program</span>
							</ButtonBaseMini>
						</nuxt-link>
					</div>
					
				</div>
                <div class="relative col-span-12 lg:col-span-3 flex flex-col shadow-md bg-slate-50 shadow-gray-400 rounded-lg overflow-hidden">
                    <div class="relative px-4 pt-4 overflow-hidden">
                        <nuxt-img src="/img/comichrz.png" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center w-full"/>
                    </div>
					<div class="relative py-3 px-3">
						<p class="font-semibold font-oswald text-base text-btn-blue pb-2">
							Program Welcome to BTN Mobile IV
						</p>
						<div class="space-y-1">
							<div class="flex items-center gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:clock" class="text-sm text-btn-blue" />
								</p>
								<p class="text-xs">25 November 2023 s.d. 24 December 2023</p>
							</div>
							<div class="flex items-center gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:book" class="text-sm text-btn-blue" />
								</p>
								<p class="text-xs">BTN Mobile</p>
							</div>
							<div class="flex items-center pb-12 gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:users" class="text-sm text-btn-blue" />
								</p>
								<p class="text-xs">Nasabah Perorangan Bank BTN</p>
							</div>
						</div>
					</div>
					<div class="absolute bottom-3 left-4 flex items-center justify-end gap-x-2">
						<nuxt-link to="/">
							<ButtonBaseMini class="btn-invert">
								<Icon name="lucide:clipboard-list" class="text-sm" />
								<span>Detail Program</span>
							</ButtonBaseMini>
						</nuxt-link>
					</div>
					
				</div>
				<div class="relative col-span-12 lg:col-span-3 flex flex-col shadow-md bg-slate-50 shadow-gray-400 rounded-lg overflow-hidden">
					<div class="relative px-4 pt-4 overflow-hidden">
                        <nuxt-img src="/img/comichrz.png" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center w-full"/>
                    </div>
					<div class="relative py-3 px-3">
						<p class="font-semibold font-oswald text-base text-btn-blue pb-2">
							Program Akuisisi, Transaksi dan Loyalty (ATRAKSI)
						</p>
						<div class="space-y-1">
							<div class="flex items-center gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:clock" class="text-sm text-btn-blue" />
								</p>
								<p class="text-xs">01 Agustus 2023 s.d. 31 December 2023</p>
							</div>
							<div class="flex items-center gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:book" class="text-sm text-btn-blue" />
								</p>
								<p class="text-xs">Tabungan BTN Bisnis di Seluruh Outlet Bank BTN (KC/KCP Kelas 1/KCP Kelas 2)</p>
							</div>
							<div class="flex items-center pb-12 gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:users" class="text-sm text-btn-blue" />
								</p>
								<p class="text-xs">Nasabah Perorangan Bank BTN</p>
							</div>
						</div>
					</div>
					<div class="absolute bottom-3 left-4 flex items-center justify-end gap-x-2">
						<nuxt-link to="/">
							<ButtonBaseMini class="btn-invert">
								<Icon name="lucide:clipboard-list" class="text-sm" />
								<span>Detail Program</span>
							</ButtonBaseMini>
						</nuxt-link>
					</div>
					
				</div>
				<div class="relative col-span-12 lg:col-span-3 flex flex-col shadow-md bg-slate-50 shadow-gray-400 rounded-lg overflow-hidden">
					<div class="relative px-4 pt-4 overflow-hidden">
                        <nuxt-img src="/img/comichrz.png" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center w-full"/>
                    </div>
					<div class="relative py-3 px-3">
						<p class="font-semibold font-oswald text-base text-btn-blue pb-2">
							Program Welcome to BTN Mobile IV
						</p>
						<div class="space-y-1">
							<div class="flex items-center gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:clock" class="text-sm text-btn-blue" />
								</p>
								<p class="text-xs">25 November 2023 s.d. 24 December 2023</p>
							</div>
							<div class="flex items-center gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:book" class="text-sm text-btn-blue" />
								</p>
								<p class="text-xs">BTN Mobile</p>
							</div>
							<div class="flex items-center pb-12 gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:users" class="text-sm text-btn-blue" />
								</p>
								<p class="text-xs">Nasabah Perorangan Bank BTN</p>
							</div>
						</div>
					</div>
					<div class="absolute bottom-3 left-4 flex items-center justify-end gap-x-2">
						<nuxt-link to="/">
							<ButtonBaseMini class="btn-invert">
								<Icon name="lucide:clipboard-list" class="text-sm" />
								<span>Detail Program</span>
							</ButtonBaseMini>
						</nuxt-link>
					</div>
					
				</div>
                <div class="relative col-span-12 lg:col-span-3 flex flex-col shadow-md bg-slate-50 shadow-gray-400 rounded-lg overflow-hidden">
					<div class="relative px-4 pt-4 overflow-hidden">
                        <nuxt-img src="/img/comichrz.png" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center w-full"/>
                    </div>
					<div class="relative py-3 px-3">
						<p class="font-semibold font-oswald text-base text-btn-blue pb-2">
							Program EXPO (Extra e-Deposito)
						</p>
						<div class="space-y-1">
							<div class="flex items-center gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:clock" class="text-sm text-btn-blue" />
								</p>
								<p class="text-xs">01 November 2023 s.d. 31 December 2023</p>
							</div>
							<div class="flex items-center gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:book" class="text-sm text-btn-blue" />
								</p>
								<p class="text-xs">eDeposito BTN</p>
							</div>
							<div class="flex items-center pb-12 gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:users" class="text-sm text-btn-blue" />
								</p>
								<p class="text-xs">Seluruh Outlet Bank BTN (KC/KCP Kelas 1/KCP Kelas 2)</p>
							</div>
						</div>
					</div>
					<div class="absolute bottom-3 left-4 flex items-center justify-end gap-x-2">
						<nuxt-link to="/">
							<ButtonBaseMini class="btn-invert">
								<Icon name="lucide:clipboard-list" class="text-sm" />
								<span>Detail Program</span>
							</ButtonBaseMini>
						</nuxt-link>
					</div>
					
				</div>
                <div class="relative col-span-12 lg:col-span-3 flex flex-col shadow-md bg-slate-50 shadow-gray-400 rounded-lg overflow-hidden">
                    <div class="relative px-4 pt-4 overflow-hidden">
                        <nuxt-img src="/img/comichrz.png" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center w-full"/>
                    </div>
					<div class="relative py-3 px-3">
						<p class="font-semibold font-oswald text-base text-btn-blue pb-2">
							Program Welcome to BTN Mobile IV
						</p>
						<div class="space-y-1">
							<div class="flex items-center gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:clock" class="text-sm text-btn-blue" />
								</p>
								<p class="text-xs">25 November 2023 s.d. 24 December 2023</p>
							</div>
							<div class="flex items-center gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:book" class="text-sm text-btn-blue" />
								</p>
								<p class="text-xs">BTN Mobile</p>
							</div>
							<div class="flex items-center pb-12 gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:users" class="text-sm text-btn-blue" />
								</p>
								<p class="text-xs">Nasabah Perorangan Bank BTN</p>
							</div>
						</div>
					</div>
					<div class="absolute bottom-3 left-4 flex items-center justify-end gap-x-2">
						<nuxt-link to="/">
							<ButtonBaseMini class="btn-invert">
								<Icon name="lucide:clipboard-list" class="text-sm" />
								<span>Detail Program</span>
							</ButtonBaseMini>
						</nuxt-link>
					</div>
					
				</div>
				<div class="relative col-span-12 lg:col-span-3 flex flex-col shadow-md bg-slate-50 shadow-gray-400 rounded-lg overflow-hidden">
					<div class="relative px-4 pt-4 overflow-hidden">
                        <nuxt-img src="/img/comichrz.png" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center w-full"/>
                    </div>
					<div class="relative py-3 px-3">
						<p class="font-semibold font-oswald text-base text-btn-blue pb-2">
							Program Akuisisi, Transaksi dan Loyalty (ATRAKSI)
						</p>
						<div class="space-y-1">
							<div class="flex items-center gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:clock" class="text-sm text-btn-blue" />
								</p>
								<p class="text-xs">01 Agustus 2023 s.d. 31 December 2023</p>
							</div>
							<div class="flex items-center gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:book" class="text-sm text-btn-blue" />
								</p>
								<p class="text-xs">Tabungan BTN Bisnis di Seluruh Outlet Bank BTN (KC/KCP Kelas 1/KCP Kelas 2)</p>
							</div>
							<div class="flex items-center pb-12 gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:users" class="text-sm text-btn-blue" />
								</p>
								<p class="text-xs">Nasabah Perorangan Bank BTN</p>
							</div>
						</div>
					</div>
					<div class="absolute bottom-3 left-4 flex items-center justify-end gap-x-2">
						<nuxt-link to="/">
							<ButtonBaseMini class="btn-invert">
								<Icon name="lucide:clipboard-list" class="text-sm" />
								<span>Detail Program</span>
							</ButtonBaseMini>
						</nuxt-link>
					</div>
					
				</div>
				<div class="relative col-span-12 lg:col-span-3 flex flex-col shadow-md bg-slate-50 shadow-gray-400 rounded-lg overflow-hidden">
					<div class="relative px-4 pt-4 overflow-hidden">
                        <nuxt-img src="/img/comichrz.png" format="webp" loading="lazy" sizes="sm:50vw" class="object-cover object-center w-full"/>
                    </div>
					<div class="relative py-3 px-3">
						<p class="font-semibold font-oswald text-base text-btn-blue pb-2">
							Program Welcome to BTN Mobile IV
						</p>
						<div class="space-y-1">
							<div class="flex items-center gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:clock" class="text-sm text-btn-blue" />
								</p>
								<p class="text-xs">25 November 2023 s.d. 24 December 2023</p>
							</div>
							<div class="flex items-center gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:book" class="text-sm text-btn-blue" />
								</p>
								<p class="text-xs">BTN Mobile</p>
							</div>
							<div class="flex items-center pb-12 gap-x-2">
								<p class="leading-none">
									<Icon name="lucide:users" class="text-sm text-btn-blue" />
								</p>
								<p class="text-xs">Nasabah Perorangan Bank BTN</p>
							</div>
						</div>
					</div>
					<div class="absolute bottom-3 left-4 flex items-center justify-end gap-x-2">
						<nuxt-link to="/">
							<ButtonBaseMini class="btn-invert">
								<Icon name="lucide:clipboard-list" class="text-sm" />
								<span>Detail Program</span>
							</ButtonBaseMini>
						</nuxt-link>
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
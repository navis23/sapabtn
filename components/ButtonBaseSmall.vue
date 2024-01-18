<template>
    <button class="flex gap-x-1 text-sm justify-center items-center bg-sky-600 text-gsi-smokewhite py-2 px-3 rounded-full hover:bg-sky-500 hover:text-gray-100 transition ease-in-out duration-300 font-semibold">
        <slot />
    </button>
</template>

<script setup lang="ts">

</script>

<style lang="postcss" scoped>
.danger {
    @apply bg-red-600 hover:bg-red-500
}
.warning {
    @apply bg-yellow-600 hover:bg-yellow-500
}
.muted {
    @apply bg-slate-500 hover:bg-slate-400
}
.gold {
    @apply bg-gsi-gold text-slate-800 hover:bg-gsi-gold hover:text-gsi-darkblue
}
.mono {
    @apply bg-slate-50 text-gray-800 border hover:bg-white
}
.dark {
    @apply text-slate-50 bg-gray-800 hover:bg-gray-700
}
.hpoi {
    @apply text-gray-800 bg-hpoi-main hover:bg-gsi-gold
}
.btn {
    @apply text-btn-yellow bg-btn-blue2 hover:bg-btn-blue
} 
.btn-invert {
    @apply text-btn-blue2 bg-btn-yellow hover:bg-btn-brown hover:text-white
} 

</style>
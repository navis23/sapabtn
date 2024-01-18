<template>
    <button class="focus:outline-none bg-hpoi-main text-gsi-darkblue w-12 h-12 text-3xl flex justify-center items-center rounded-full hover:bg-gsi-darkblue hover:text-gsi-gold transition ease-in-out duration-300">
        <slot />
    </button>
</template>

<script setup lang="ts">

</script>

<style lang="postcss" scoped>
.danger {
    @apply bg-rose-600 hover:bg-rose-500
}
.warning {
    @apply bg-amber-600 hover:bg-amber-500
}
.muted {
    @apply bg-gray-500 hover:bg-gray-400
}
.mono {
    @apply bg-slate-50 text-gray-600 hover:bg-white
}
.dark {
    @apply text-gsi-gold bg-gsi-darkblue 
}
.btn {
    @apply text-btn-yellow bg-btn-blue2 hover:bg-btn-blue
}
.none {
    @apply text-gray-600 bg-white hover:bg-gray-100 hover:text-gray-800
}
.square {
    @apply rounded-md
}

.sm{
    @apply text-2xl w-10 h-10
}

.xs{
    @apply text-xl w-8 h-8
}

</style>
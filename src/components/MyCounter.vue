<template>
    <section>
        <h3>Counter: {{ counter }}</h3>
        <h3>Square: {{ squareCounter }}</h3>
        <div>
            <button class="btn" @:click="decrementar">-1</button>
            <button class="btn" @:click="incrementar">+1</button>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { useCounter } from '../composables/useCounter';

interface Props {
    value: number;
}
const props = defineProps<Props>();

const { counter, squareCounter } = useCounter(5);
</script>

<style scoped>
.btn {
    @apply p-5 bg-blue-500 rounded hover:bg-blue-700 mr-2;
}
</style>

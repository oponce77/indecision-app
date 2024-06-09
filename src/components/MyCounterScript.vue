<template>
    <section>
        <h3>Counter: {{ counter }}</h3>
        <h3>Square: {{ squareCounter }}</h3>
        <div>
            <button @:click="decrementar">-1</button>
            <button @:click="incrementar">+1</button>
        </div>
    </section>
</template>

<script lang="ts">
import { ref, computed, defineComponent } from 'vue';
import { useCounter } from '../composables/useCounter';

export default defineComponent({
    props: {
        value: { type: Number, required: true },
    },
    setup(props) {
        const { counter, squareCounter } = useCounter(5);
        //const counter = ref(props.value);
        //const squareCounter = computed(() => counter.value * counter.value);
        const incrementar = computed(() => {
            counter.value++;
        });
        const decrementar = computed(() => {
            counter.value--;
        });
        return {
            counter,
            squareCounter,
            incrementar,
            decrementar,
        };
    },
});
</script>

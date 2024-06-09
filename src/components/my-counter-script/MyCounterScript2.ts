import { ref, computed, defineComponent } from 'vue';
import { useCounter } from '@/composables/useCounter';

export default defineComponent({
    props: {
        value: { type: Number, required: true },
    },
    setup(props) {
        const { counter, squareCounter } = useCounter(5);
        //const counter = ref(props.value);
        // const squareCounter = computed(() => counter.value * counter.value);
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

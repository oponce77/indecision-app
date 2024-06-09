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

<script lang="ts" src="./MyCounterScript2"></script>

<!-- Fuente: https://tailwindcomponents.com/component/chat-layout -->
<template>
    <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
        <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
            <span>Mi esposa</span>
        </div>

        <!-- Chat Messages -->
        <ChatMessages :messages="messages"></ChatMessages>
        <MessageBox></MessageBox>
    </div>
</template>

<script setup lang="ts">
//import ChatMessages from '../components/chat/ChatMessages.vue';
import ChatMessages from '../components/chat/ChatMessages.vue';
import MessageBox from '../components/chat/MessageBox.vue';
import type { ChatMessage } from '../interfaces/chat-message.interface';
import { ref } from 'vue';

const messages = ref<ChatMessage[]>([
    {
        id: new Date().getTime(),
        message: 'Hola Mundo',
        itsMine: true,
    },
    {
        id: new Date().getTime() + 1,
        message: 'Quieres ir a tomar café',
        itsMine: true,
    },
    {
        id: new Date().getTime() + 2,
        message: 'Si',
        itsMine: false,
        image: 'https://yesno.wtf/assets/yes/3-422e51268d64d78241720a7de52fe121.gif',
    },
]);
</script>

<template>
  <div v-if="visible"></div>
</template>
<script setup lang="ts">
const { setClosed, visible } = usePolitePopup();

const onClickOk = async () => {
  setClosed();
  navigateTo('/newsletter');
};

const onClickClose = () => {
  setClosed();
};
</script>

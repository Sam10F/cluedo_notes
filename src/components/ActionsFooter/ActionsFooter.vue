<script setup lang="ts">
import { ref } from 'vue';
import { VaModal } from 'vuestic-ui';
import html2canvas from 'html2canvas';

const showModal = ref<boolean>(false);
const imgUrl = ref<string>();

const visibilityButtonClicked = () => {
  const mainTable = document.getElementById('MainTable');
  if (mainTable) {
    html2canvas(mainTable).then(function (canvas: HTMLCanvasElement) {
      canvas.toBlob(blob => {
        if (blob) {
          const blobUrl = URL.createObjectURL(blob);
          imgUrl.value = blobUrl;

          showModal.value = true;
        }
      });
    });
  }
};
</script>
<template>
  <VaModal
    v-model="showModal"
    :mobile-fullscreen="true"
    :close-button="true"
    :hide-default-actions="true"
  >
    <img :src="imgUrl" alt="notes overview" />
  </VaModal>
  <section class="ActionsFooter">
    <VaButton
      round
      icon="visibility"
      color="info"
      size="large"
      @click="visibilityButtonClicked()"
    />
  </section>
</template>
<style lang="scss">
.ActionsFooter {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 12px 20px;
  position: fixed;
  width: 100%;
  height: $actions-footer-height;
  bottom: 0;
  background-color: transparent;
  backdrop-filter: blur(20px);
}

.va-modal__dialog {
  display: flex;
  align-items: center;
  justify-content: center;

  .va-modal__inner {
    min-width: auto;

    .va-modal__message {
      img {
        width: 100%;
      }
    }
  }
}
</style>

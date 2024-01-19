<script setup lang="ts">
import { ref } from 'vue';
import { VaModal, VaButton } from 'vuestic-ui';
import html2canvas from 'html2canvas';
import { router } from '∼/router';

const showBigScreenModal = ref<boolean>(false);
const showCleanNotesModal = ref<boolean>(false);
const showFinishGameModal = ref<boolean>(false);

const imgUrl = ref<string>();

const showBigScreenButtonClicked = () => {
  const mainTable = document.getElementById('MainTable');
  if (mainTable) {
    html2canvas(mainTable).then(function (canvas: HTMLCanvasElement) {
      canvas.toBlob(blob => {
        if (blob) {
          const blobUrl = URL.createObjectURL(blob);
          imgUrl.value = blobUrl;

          showBigScreenModal.value = true;
        }
      });
    });
  }
};

const cleanNotesButtonClicked = () => {
  showCleanNotesModal.value = true;
};

const clearNotes = () => {
  router.go(0);
};

const finishGameButtonClicked = () => {
  showFinishGameModal.value = true;
};

const finishGame = () => {
  localStorage.removeItem('players');
  router.push('/');
};
</script>
<template>
  <!-- Finish game modal -->
  <VaModal
    v-model="showFinishGameModal"
    title="Terminar juego"
    :mobile-fullscreen="false"
    @ok="finishGame()"
  >
    ¿Quieres terminar el juego?
  </VaModal>

  <!-- Big screen modal -->
  <VaModal
    v-model="showBigScreenModal"
    :close-button="true"
    :hide-default-actions="true"
  >
    <img :src="imgUrl" alt="notes overview" />
  </VaModal>

  <!-- Clean notes modal -->
  <VaModal
    v-model="showCleanNotesModal"
    title="Limpiar notas"
    :mobile-fullscreen="false"
    @ok="clearNotes()"
  >
    ¿Quieres limpiar todas las notas?
  </VaModal>
  <section class="ActionsFooter">
    <VaButton
      round
      icon="delete"
      color="secondary"
      size="medium"
      @click="finishGameButtonClicked()"
    />
    <VaButton
      round
      icon="visibility"
      color="info"
      size="large"
      @click="showBigScreenButtonClicked()"
    />
    <VaButton
      round
      icon="replay"
      color="secondary"
      size="medium"
      @click="cleanNotesButtonClicked()"
    />
  </section>
</template>
<style lang="scss">
.ActionsFooter {
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
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

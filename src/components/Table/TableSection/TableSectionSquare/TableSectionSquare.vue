<script setup lang="ts">
import { ref } from 'vue';
import { VaPopover } from 'vuestic-ui';

const activeIcon = ref<string>('');

const setActiveIcon = (event: Event) => {
  activeIcon.value = (event.target as HTMLElement).innerText;
};
</script>
<template>
  <td class="TableSectionSquare">
    <VaPopover trigger="click" placement="bottom" :stick-to-edges="true">
      <VaButton color="#00000000" :icon="activeIcon"></VaButton>

      <template #title>
        <VaButton
          color="#FFFFFF"
          icon="restart_alt"
          :background-opacity="0"
          size="large"
          @click="activeIcon = ''"
        ></VaButton>
        <VaButton
          color="#FFFFFF"
          icon="close"
          :background-opacity="0"
          size="large"
        ></VaButton>
      </template>

      <template #body>
        <VaButton
          color="secondary"
          icon="check"
          size="large"
          @click="e => setActiveIcon(e)"
        ></VaButton>
        <VaButton
          color="secondary"
          icon="done_all"
          size="large"
          @click="e => setActiveIcon(e)"
        ></VaButton>
        <VaButton
          color="secondary"
          icon="question_mark"
          size="large"
          @click="e => setActiveIcon(e)"
        ></VaButton>
        <VaButton
          color="secondary"
          icon="star"
          size="large"
          @click="e => setActiveIcon(e)"
        ></VaButton>
      </template>
    </VaPopover>
  </td>
</template>
<style lang="scss">
.TableSectionSquare {
  text-align: center;

  .va-button {
    display: flex;
    width: 100%;
    height: 100%;
  }
}

.va-popover {
  &__body {
    display: flex;
    gap: 8px;
  }

  &__title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;

    button {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      min-width: 20px;
      min-height: 30px;
      color: white;

      i {
        color: white;
      }
    }
  }
}
</style>

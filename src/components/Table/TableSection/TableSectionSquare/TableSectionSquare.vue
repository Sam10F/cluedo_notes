<script setup lang="ts">
import { VaPopover } from 'vuestic-ui';
</script>
<template>
  <td class="TableSectionSquare">
    <VaPopover trigger="click" placement="bottom" :stick-to-edges="true">
      <VaButton color="#00000000"></VaButton>

      <template #title>
        <VaButton color="danger" icon="close"></VaButton>
      </template>

      <template #body>
        <p>Suspendisse pharetra risus magna, in luctus turpis mollis non.</p>
        <p>Donec est nulla, imperdiet id dapibus sed, consequat eget odio.</p>
      </template>
    </VaPopover>
  </td>
</template>
<style lang="scss" scoped>
.TableSectionSquare {
  text-align: center;

  .va-button {
    width: 100%;
    height: 100%;
  }
}
</style>

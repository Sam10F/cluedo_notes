<script setup lang="ts"></script>
<template>
  <section class="ActionsFooter">
    <VaButton round icon="visibility" color="info" size="large" />
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
</style>

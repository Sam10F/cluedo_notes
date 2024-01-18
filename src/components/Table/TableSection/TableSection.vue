<script setup lang="ts">
import { ITableSection } from './ITableSection';

defineProps<ITableSection>();
</script>
<template>
  <tr>
    <th class="SectionTitle">{{ title }}</th>
    <td v-for="i in columnNumber" :key="i"></td>
  </tr>
  <tr v-for="(row, i) in rows" :key="i">
    <th class="SectionValue">{{ row.label }}</th>
    <td v-for="i in columnNumber" :key="i"></td>
  </tr>
</template>
<style lang="scss">
.va-table {
  .SectionValue {
    font-weight: 500;
    border-bottom: 0;
  }

  .SectionTitle {
    border-top: 2px solid;
    border-bottom: 2px solid;

    & ~ td {
      border-top: 2px solid;
      border-bottom: 2px solid;
      border-left: 0;
    }
  }

  td {
    min-width: 50px;
    border-left: 1px solid;
  }

  &--striped {
    tr:nth-child(even) {
      th,
      td {
        background-color: var(--va-background-element);
      }
    }
    tr:nth-child(odd) {
      th,
      td {
        background-color: gainsboro;
      }
    }
  }
}
</style>

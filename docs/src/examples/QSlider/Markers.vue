<template>
  <div class="q-pa-md">
    <q-badge color="secondary">
      Model: {{ basicModel }} (0 to 10)
    </q-badge>
    <q-slider
      v-model="basicModel"
      markers
      :min="0"
      :max="10"
    />

    <q-badge color="secondary">
      Model: {{ greenModel }} (0 to 10)
    </q-badge>
    <q-slider
      v-model="greenModel"
      color="green"
      markers
      snap
      :min="0"
      :max="10"
    />

    <q-badge color="secondary">
      Model: {{ orangeModel }} (0 to 16, step 2, marker step 4)
    </q-badge>
    <q-slider
      v-model="orangeModel"
      color="orange"
      snap
      :step="2"
      :min="0"
      :max="16"
      :markers="4"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      basicModel: 2,
      greenModel: 0,
      orangeModel: 6
    }
  }
}
</script>

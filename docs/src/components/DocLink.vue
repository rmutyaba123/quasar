<template lang="pug">
router-link(
  v-if="internal === true"
  :to="to"
  custom
  v-slot="{ href, navigate }"
)
  a.doc-link(:href="href" @click="navigate")
    slot

a.doc-link(
  v-else
  :href="to"
  target="_blank"
  rel="noopener"
)
  slot
  q-icon(:name="mdiLaunch")
</template>

<script>
import {
  mdiLaunch
} from '@quasar/extras/mdi-v6'

export default {
  name: 'DocLink',

  created () {
    this.mdiLaunch = mdiLaunch
  },

  props: {
    to: String
  },

  computed: {
    internal () {
      return this.to.charAt(0) === '/'
    }
  }
}
</script>

<style lang="sass">
.doc-link
  color: $brand-primary
  font-weight: 500
  text-decoration: none
  outline: 0
  border-bottom: 1px dotted currentColor
  transition: opacity .2s
  white-space: nowrap

  &:hover
    opacity: .8

  .q-icon
    margin-top: -3px
    margin-left: 4px
</style>

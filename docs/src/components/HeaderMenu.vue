<template lang="pug">
div
  q-btn-dropdown.text-bold(:align="align", flat, no-caps, stretch, :label="`v${$q.version}`", auto-close)
    q-list(dense padding)
      q-item-label(header) Quasar UI v{{ $q.version }}
      q-item(clickable, to="/start/release-notes")
        q-item-section.text-teal(avatar)
          q-icon(:name="mdiClipboardText")
        q-item-section Release notes

      q-item(clickable, href="https://github.com/quasarframework/quasar/issues", target="_blank", rel="noopener")
        q-item-section.text-purple(avatar)
          q-icon(:name="mdiBugCheck")
        q-item-section Report a bug

      q-item(clickable, href="https://github.com/quasarframework/quasar", target="_blank", rel="noopener")
        q-item-section(avatar)
          q-icon(:name="fabGithub")
        q-item-section Repository

      q-separator.q-mb-sm.q-mt-md

      q-item-label(header) Newer Releases
      q-item(
        clickable
        :href="`https://v2.quasar.dev/start/upgrade-guide`"
        target="_blank"
        rel="noopener"
      )
        q-item-section
          .text-no-wrap.row.items-center
            | Quasar v2 docs
            q-icon.q-ml-xs(:name="mdiFire" color="negative" style="font-size: 2em")

      q-separator.q-mb-sm.q-mt-md

      q-item-label(header) Older Releases
      q-item(
        v-for="version in ['17', '16', '15', '14', '13']"
        :key="version"
        clickable
        :href="`https://v0-${version}.quasar-framework.org/`"
        target="_blank"
        rel="noopener"
      )
        q-item-section {{ `v0.${version}` }} docs

  q-btn-dropdown.text-bold(:align="align", flat, no-caps, stretch, label="Tools", auto-close)
    q-list(dense padding)
      q-item(clickable, href="https://awesome.quasar.dev", rel="noopener", target="_blank")
        q-item-section.text-yellow-9(avatar)
          q-icon(:name="mdiFlare")
        q-item-section Awesome List

      q-item(to="/app-extensions/discover")
        q-item-section.text-brand-primary(avatar)
          q-icon(:name="mdiFilePlus")
        q-item-section App Extensions

      q-item-label.q-mt-md(header) Helpers

      q-item(clickable, to="/icongenie")
        q-item-section.text-red(avatar)
          q-icon(:name="mdiStarCircle")
        q-item-section
          .row.no-wrap.items-center
            span Icon Genie CLI
            //- q-badge.q-ml-sm new

      q-item(clickable, to="/style/theme-builder")
        q-item-section.text-teal(avatar)
          q-icon(:name="mdiPaletteSwatch")
        q-item-section Theme Builder

      q-item(clickable, to="/style/dark-mode")
        q-item-section(avatar)
          q-icon(:name="mdiInvertColors")
        q-item-section Dark Mode

      q-item(clickable, href="layout-builder", target="_blank")
        q-item-section.text-brand-primary(avatar)
          q-icon(:name="mdiViewDashboard")
        q-item-section Layout Builder

      q-item(clickable, to="/layout/gallery")
        q-item-section.text-grey-8(avatar)
          q-icon(:name="mdiShoppingMusic")
        q-item-section Layout Gallery

      q-item(clickable, to="/layout/grid/flex-playground")
        q-item-section.text-orange(avatar)
          q-icon(:name="fasFlask")
        q-item-section
          .row.no-wrap.items-center
            span Flex Playground

      q-item-label.q-mt-md(header) Playground

      q-item(clickable, href="https://codepen.io/rstoenescu/pen/VgQbdx", target="_blank", rel="noopener")
        q-item-section.text-brown-5(avatar)
          q-icon(:name="fabCodepen")
        q-item-section Codepen

      q-item(clickable, href="https://jsfiddle.net/rstoenescu/rmaodk0f", target="_blank", rel="noopener")
        q-item-section.text-brand-primary(avatar)
          q-icon(:name="fabJsfiddle")
        q-item-section jsFiddle

      q-item(clickable, href="https://codesandbox.io/s/github/quasarframework/quasar-codesandbox/tree/legacy-v1", target="_blank", rel="noopener")
        q-item-section.text-black(avatar)
          q-icon(:name="fasCubes")
        q-item-section Codesandbox

  q-btn-dropdown.text-bold(:align="align", flat, no-caps, stretch, label="Support", auto-close)
    q-list(dense padding)

      q-item(clickable, href="https://chat.quasar.dev", rel="noopener", target="_blank")
        q-item-section.text-brand-primary(avatar)
          q-icon(:name="mdiChat")
        q-item-section Discord Chat

      q-item(clickable, href="https://forum.quasar.dev/", rel="noopener", target="_blank")
        q-item-section.text-secondary(avatar)
          q-icon(:name="mdiForum")
        q-item-section Forum

      q-item(clickable, href="https://github.com/quasarframework", rel="noopener", target="_blank")
        q-item-section(avatar)
          q-icon(:name="fabGithub")
        q-item-section GitHub Repositories

      q-item-label.q-mt-md(header) Social

      q-item(clickable, href="https://blog.quasar.dev", rel="noopener", target="_blank")
        q-item-section.text-brand-primary(avatar)
          q-icon(:name="mdiPost")
        q-item-section Blog

      q-item(clickable, href="https://github.com/quasarframework/quasar/discussions/categories/announcements", target="_blank", rel="noopener")
        q-item-section.text-purple(avatar)
          q-icon(:name="mdiBullhorn")
        q-item-section Announcements

      q-item(clickable, href="https://twitter.quasar.dev", target="_blank", rel="noopener")
        q-item-section.text-blue(avatar)
          q-icon(:name="fabTwitter")
        q-item-section Twitter

      q-item(clickable, href="https://facebook.quasar.dev", target="_blank", rel="noopener")
        q-item-section.text-blue-8(avatar)
          q-icon(:name="fabFacebook")
        q-item-section
          .row.no-wrap.items-center
            span Facebook

      q-item-label.q-mt-md(header) Donate

      q-item(clickable, href="https://donate.quasar.dev", target="_blank", rel="noopener")
        q-item-section(avatar)
          q-icon(:name="mdiCharity")
        q-item-section GitHub Sponsorship
</template>

<script>
import {
  fabGithub, fasFlask, fabCodepen, fabJsfiddle,
  fasCubes, fabTwitter, fabFacebook
} from '@quasar/extras/fontawesome-v6'

import {
  mdiPost, mdiForum, mdiChat, mdiBullhorn,
  mdiViewDashboard, mdiShoppingMusic, mdiClipboardText,
  mdiBugCheck, mdiFlare, mdiFilePlus, mdiPaletteSwatch,
  mdiInvertColors, mdiCharity, mdiStarCircle, mdiFire
} from '@quasar/extras/mdi-v6'

export default {
  name: 'HeaderMenu',

  props: {
    align: String
  },

  created () {
    this.fabGithub = fabGithub
    this.fasFlask = fasFlask
    this.fabCodepen = fabCodepen
    this.fabJsfiddle = fabJsfiddle
    this.fasCubes = fasCubes
    this.fabTwitter = fabTwitter
    this.fabFacebook = fabFacebook

    this.mdiPost = mdiPost
    this.mdiChat = mdiChat
    this.mdiForum = mdiForum
    this.mdiBullhorn = mdiBullhorn
    this.mdiViewDashboard = mdiViewDashboard
    this.mdiShoppingMusic = mdiShoppingMusic
    this.mdiClipboardText = mdiClipboardText
    this.mdiBugCheck = mdiBugCheck
    this.mdiFlare = mdiFlare
    this.mdiFilePlus = mdiFilePlus
    this.mdiPaletteSwatch = mdiPaletteSwatch
    this.mdiInvertColors = mdiInvertColors
    this.mdiCharity = mdiCharity
    this.mdiStarCircle = mdiStarCircle
    this.mdiFire = mdiFire
  }
}
</script>

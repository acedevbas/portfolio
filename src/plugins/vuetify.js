// src/plugins/vuetify.js

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles' // Стили Vuetify

const vuetify = createVuetify({
  components,
  directives,
})

export default vuetify

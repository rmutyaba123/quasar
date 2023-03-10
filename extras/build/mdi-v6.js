const packageName = '@mdi/svg'
const iconSetName = 'MDI'

// ------------

const glob = require('glob')
const { copySync } = require('fs-extra')
const { resolve } = require('path')

const skipped = []
const distFolder = resolve(__dirname, `../mdi-v6`)
const { defaultNameMapper, extract, writeExports } = require('./utils')

const svgFolder = resolve(__dirname, `../node_modules/${packageName}/svg/`)
const svgFiles = glob.sync(svgFolder + '/**/*.svg')
const iconNames = new Set()

const svgExports = []
const typeExports = []

svgFiles.forEach(file => {
  const name = defaultNameMapper(file, 'mdi')

  if (iconNames.has(name)) {
    return
  }

  try {
    const { svgDef, typeDef } = extract(file, name)
    svgExports.push(svgDef)
    typeExports.push(typeDef)

    iconNames.add(name)
  }
  catch(err) {
    console.error(err)
    skipped.push(name)
  }
})

writeExports(iconSetName, packageName, distFolder, svgExports, typeExports, skipped)

// then update webfont files

const webfont = [
  'materialdesignicons-webfont.woff',
  'materialdesignicons-webfont.woff2'
]

webfont.forEach(file => {
  copySync(
    resolve(__dirname, `../node_modules/@mdi/font/fonts/${file}`),
    resolve(__dirname, `../mdi-v6/${file}`)
  )
})

copySync(
  resolve(__dirname, `../node_modules/@mdi/font/LICENSE`),
  resolve(__dirname, `../mdi-v6/license.md`)
)
copySync(
  resolve(__dirname, `../node_modules/@mdi/svg/LICENSE`),
  resolve(__dirname, `../mdi-v6/LICENSE`)
)

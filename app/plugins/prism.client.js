import Prism from 'prismjs'

// テーマの読み込み
import 'prismjs/themes/prism-okaidia.css'

// プラグインの読み込み
import 'prismjs/plugins/toolbar/prism-toolbar.min.css'
import 'prismjs/plugins/toolbar/prism-toolbar.min.js'
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js'
import 'prismjs/plugins/inline-color/prism-inline-color.min.css'
import 'prismjs/plugins/inline-color/prism-inline-color.min.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.min.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.min.js'

// 言語の読み込み
import 'prismjs/components/prism-apacheconf'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-css-extras'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-markup-templating'
import 'prismjs/components/prism-php'
import 'prismjs/components/prism-pug'
import 'prismjs/components/prism-scss'

export default defineNuxtPlugin((nuxtApp) => {
  Prism
})

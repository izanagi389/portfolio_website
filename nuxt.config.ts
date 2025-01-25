// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', "nuxt-shiki", "@pinia/nuxt"],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    // and more...
  },
  compatibilityDate: '2024-07-06',
  css: ['assets/css/main.css'],
  runtimeConfig: {
    public: {
      site_title: "Izanagi's-portfolio-site"
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ja', prefix: 'og: https://ogp.me/ns#'
      },
      meta: [
        {
          "name": "viewport",
          "content": "width=device-width, initial-scale=1"
        },
        {
          "charset": "utf-8"
        }
      ],
      link: [
        {
          "rel": "preconnect",
          "href": "https://fonts.googleapis.com"
        },
        {
          "rel": "preconnect",
          "href": "https://fonts.gstatic.com",
          "crossorigin": ""
        },
        {
          "rel": "stylesheet",
          "href": "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap",
        },
        {
          "rel": "stylesheet",
          "href": "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css",
          "integrity": "sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==",
          "crossorigin": "anonymous",
          "referrerpolicy": "no-referrer"
        }
      ],
      style: [],
      script: [
        {
          "src": "https://platform.twitter.com/widgets.js",
        }
      ],
      noscript: []
    }
  },
  vite: {
    build: {
      target: ['es2022', 'edge89', 'firefox89', 'chrome89', 'safari15']
    },
  },
  build: {
    transpile: ['lodash-es', 'shiki']
  },
  nitro: {
    esbuild: {
      options: {
        // Node.js のバージョンのみ指定すればOK
        target: 'es2022',
      },
    },
  },

  shiki: {
    /* shiki options */
    defaultTheme: "github-dark-dimmed",
    defaultLang: "markdown",
    bundledLangs: ["1c", "1c-query", "abap", "actionscript-3", "ada", "adoc", "angular-html", "angular-ts", "apache", "apex", "apl", "applescript", "ara", "asciidoc", "asm", "astro", "awk", "ballerina", "bash", "bat", "batch", "be", "beancount", "berry", "bibtex", "bicep", "blade", "bsl", "cadence", "cairo", "cdc", "clarity", "clj", "clojure", "closure-templates", "cmake", "cmd", "cobol", "codeowners", "codeql", "coffee", "coffeescript", "common-lisp", "console", "coq", "cpp", "cql", "crystal", "cs", "csharp", "css", "csv", "cue", "cypher", "d", "dart", "dax", "desktop", "diff", "docker", "dockerfile", "dotenv", "dream-maker", "edge", "elisp", "elixir", "elm", "emacs-lisp", "erb", "erl", "erlang", "fennel", "fish", "fluent", "for", "fortran-fixed-form", "fortran-free-form", "fs", "fsharp", "fsl", "ftl", "gdresource", "gdscript", "gdshader", "genie", "gherkin", "git-commit", "git-rebase", "gjs", "gleam", "glimmer-js", "glimmer-ts", "glsl", "gnuplot", "go", "gql", "graphql", "groovy", "gts", "hack", "haml", "handlebars", "haskell", "haxe", "hbs", "hcl", "hjson", "hlsl", "hs", "html", "html-derivative", "http", "hxml", "hy", "imba", "ini", "jade", "java", "javascript", "jinja", "jison", "jl", "js", "json", "json5", "jsonc", "jsonl", "jsonnet", "jssm", "jsx", "julia", "kotlin", "kql", "kt", "kts", "kusto", "latex", "lean", "lean4", "less", "liquid", "lisp", "lit", "log", "logo", "lua", "luau", "make", "makefile", "markdown", "marko", "matlab", "md", "mdc", "mdx", "mediawiki", "mermaid", "mips", "mipsasm", "mmd", "mojo", "move", "nar", "narrat", "nextflow", "nf", "nginx", "nim", "nix", "nu", "nushell", "objc", "objective-c", "objective-cpp", "ocaml", "pascal", "perl", "perl6", "php", "plsql", "po", "postcss", "pot", "potx", "powerquery", "powershell", "prisma", "prolog", "properties", "proto", "protobuf", "ps", "ps1", "pug", "puppet", "purescript", "py", "python", "ql", "qml", "qmldir", "qss", "r", "racket", "raku", "razor", "rb", "reg", "regex", "regexp", "rel", "riscv", "rs", "rst", "ruby", "rust", "sas", "sass", "scala", "scheme", "scss", "sdbl", "sh", "shader", "shaderlab", "shell", "shellscript", "shellsession", "smalltalk", "solidity", "soy", "sparql", "spl", "splunk", "sql", "ssh-config", "stata", "styl", "stylus", "svelte", "swift", "system-verilog", "systemd", "talon", "talonscript", "tasl", "tcl", "templ", "terraform", "tex", "tf", "tfvars", "toml", "ts", "ts-tags", "tsp", "tsv", "tsx", "turtle", "twig", "typ", "typescript", "typespec", "typst", "v", "vala", "vb", "verilog", "vhdl", "vim", "viml", "vimscript", "vue", "vue-html", "vy", "vyper", "wasm", "wenyan", "wgsl", "wiki", "wikitext", "wl", "wolfram", "xml", "xsl", "yaml", "yml", "zenscript", "zig", "zsh"]
  },

  routeRules: {
    // Homepage pre-rendered at build time
    '/privacy': { prerender: true },
    // Blog posts page generated on demand, revalidates in background, cached on CDN for 1 hour (3600 seconds)
    '/blog/category/**': { isr: 3600 },
    '/blog/tags/**': { isr: 3600 },
    // Blog post page generated on demand once until next deployment, cached on CDN
    '/blog/post/**': { prerender: true  },
    // Admin dashboard renders only on client-side
  }
})
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '',
  pages: {
    index: {
      // entry for the page(ページのエントリ)
      entry: 'src/index/main.js',
      // the source template(げんしテンプレート)
      template: 'public/index.html',
      // output as dist/index.html(dist/index.htmlとして出力します。)
      filename: 'index.html',
      // when using title option,(タイトルオプション使用時)
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>(テンプレートのタイトルタグは <title><%= htmlWebpackPlugin.options.title %></title> とする必要があります。)
      title: 'Index Page',
      // chunks to include on this page, by default includes(デフォルトでは、このページに含めるチャンクを含みます。)
      // extracted common chunks and vendor chunks.(は、コモンチャンクとベンダーチャンクを抽出した。)
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    users: {
      entry: 'src/users/main.js',
      template: 'public/users.html',
      filename: 'users.html',
      title: 'Users Page',
      chunks: ['chunk-vendors', 'chunk-common', 'users']
    },
    // when using the entry-only string format,(エントリーのみの文字列形式を使用した場合、)
    // template is inferred to be `public/subpage.html`(テンプレートは `public/subpage.html` と推定される。)
    // and falls back to `public/index.html` if not found.(が見つからなければ `public/index.html` にフォールバックする。)
    // Output filename is inferred to be `subpage.html`.(出力ファイル名は `subpage.html` と推論される。)
    // subpage: 'src/subpage/main.js'
  }
})

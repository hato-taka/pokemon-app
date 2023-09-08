# pokemon-app

# STEP0 環境構築

create-react-app で環境構築！

# STEP1

コンポーネントを作ろう！
`<PokemonThumbnails/>`コンポーネントを作る

# STEP2

子コンポーネントに props を渡そう！
`<App>` コンポーネントから`<PokemonThumbnails>`コンポーネントに props でデータを渡す
渡すデータは、この段階では固定値で渡す

# STEP3

CSS を実装する。
今回は、完成品の CSS をコピペする。  
※クラス名が間違っていないか確認すること

# STEP4

pokeAPI からデータを fetch()で取得  
useEffect() を使用する  
console.log で取得したデータを確認

# STEP5

useState()で状態管理する  
pokeAPI から fetch()で取得したデータを  
画面に表示させる

# STEP6

map()関数で繰り返し処理  
戻り値を`return`しないと描画させないので、  
`{ }` 波括弧で処理内容を囲わないこと！  
`( )` 括弧で囲う

```javascript
// OK!
map( (element, index) => (
  // 処理内容
));

// NG!
map( (element, index) => {
  // 処理内容
});
```

# STEP7

createPokemonObject()の作成  
個別のポケモンのデータを１つ１つ取得

# STEP8

forEach() で 1 つ 1 つのポケモンの
名前・画像・タイプを取得

# STEP9

API から取得したポケモンのデータを画面に表示させる

# STEP10

「もっとみる！」ボタンの追加

# STEP11

ローディング中の表示の追加

# STEP12

ポケモンのアイコン画像の追加

# STEP13

sort() で番号順に並び替える

# STEP14

ポケモンの名前・タイプを日本語に変換  
※develop/step16 に修正版  
commit f47b4186c1b1fc9ff70d8ebbbfc7fba602f6408d

# STEP15

firebase でデプロイ

参考記事:  
[Firebase でデプロイしよう！](https://qiita.com/hiroki-harada/items/ca22ac177db68e3c3796)

1. Firebase のプロジェクトを作成
2. パッケージのインストール

```shell
npm install -g firebase-tools
npm install --save firebase
```

3. firebase に login

```shell
firebase login
```

4. プロジェクトを初期化

```shell
firebase init
```

スペースキーで「Hosting」を選択して、Enter  
「Use an existing project」を選択  
`What do you want to use as your public directory? (public)` => `build` と入力  
`Configure as a single-page app (rewrite all urls to /index.html)?` `No`で大丈夫(多分`Yes`でも大丈夫)

5. デプロイする

```shell
firebase deploy
```

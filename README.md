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
{} 波括弧で処理内容を囲わないこと！
() 括弧で囲う

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

「もっと見る」ボタンの追加

# STEP8

loading 画面の追加

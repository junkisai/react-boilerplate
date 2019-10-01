# react-boilerplate

React Webアプリ（クライアントサイド）用のボイラープレート

## 構成

### ツール・ライブラリ

- webpack
- babel
- react
- redux
- styled-components

### ディレクトリ

- app
  - エントリポイントおよびアプリ間共通で使用するコンポーネント群（ヘッダー、トースト、エラー、etc.）
- pages
  - ページごとのコンポーネント（Class Component）
  - redux storeから値をもらったり、dispatchするのはここ
- components
  - app, pages以外のコンポーネント
- modules
  - reducerごとにAction, ActionCreator, Reducerを管理（[Ducks](https://qiita.com/uryyyyyyy/items/a88f37b76fe434c62bac)のデザインパターン）
- utils
  - 便利メソッド群

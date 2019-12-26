## Pull Request Process

通常、以下のフローで開発・リリースをおこないます。

- master ブランチから[作業ブランチ](#作業ブランチ名)を作成
- ローカル環境での変更・確認が終わったらコミットします
  - コミットメッセージは[以下に後述する形式](#Commit-Message)でお願いします
- 作業ブランチをPushしてPull Requestを作成します

## 作業ブランチ名

### Format

- type/branch-name
  - typeは以下に記述
  - ex.) feat/get-user-api

### Type

- **feat**:新規機能追加
- **fix**:バグ修正
- **refactor**:機能追加もバグ修正も行わないコードの修正
- **perf**:パフォーマンス改善のためのコード修正
- **style**:フォーマットの修正
- **docs**:ドキュメントの作成・更新
- **chore**:ツールやライブラリの導入・更新

## Commit Message

- コミットは[Emoji Prefix](https://goodpatch.com/blog/beautiful-commits-with-emojis/#Emoji_Prefix)を採用しています。
- 以下の手順でコミットメッセージ入力時にテンプレートを参照できるようになります。

### Emoji Prefix導入手順

1. `.github/.commit_template`の存在を確認する
2. `$ git config commit.template .github/.commit_template`を実行する
3. 以上で完了！こんな感じ👇でメッセージ入力時にサポートがでるよ！あとは下記のフォーマット通りにコミットメッセージを記述しましょう。
  - ![demo](https://user-images.githubusercontent.com/28256336/69148699-35ebfc00-0b18-11ea-8e96-dd4949a68a39.gif)

### Format

- :emoji:コミットメッセージ

### Emoji一覧

|  絵文字  |  名前  |  内容  |
| ---- | ---- | ---- |
|  :+1:  |  `:+1:`  |  機能改善  |
|  :bug:  |  `:bug:`  |  バグ修正  |
|  :sparkles:  |  `:sparkles:`  |  部分的な機能追加  |
|  :tada:  |  `:tada:`  |  盛大に祝うべき大きな機能追加  |
|  :recycle:  |  `:recycle:`  |  リファクタリング  |
|  :shower:  |  `:shower:`  |  不要な機能・使われなくなった機能の削除  |
|  :green_heart:  |  `:green_heart:`  |  テストやCIの修正・改善  |
|  :shirt:  |  `:shirt:`  |  Lintエラーの修正やコードスタイルの修正  |
|  :rocket:  |  `:rocket:`  |  パフォーマンス改善  |
|  :up:  |  `:up:`  |  依存パッケージなどのアップデート  |
|  :books:  |  `:books:`  |  ドキュメントの作成・更新  |
|  :construction:  |  `:construction:`  |  WIP(Work In Progress)  |
|  :lock:  |  `:lock:`  |  新機能の公開範囲の制限  |
|  :cop:  |  `:cop:`  |  セキュリティ関連の改善  |

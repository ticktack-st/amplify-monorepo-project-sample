# AWS CDK Cognito Infrastructure

このディレクトリには、AWS CDK を使用して Cognito ユーザープールとアイデンティティプールを構築するためのコードが含まれています。

## ファイル構成

- `bin/infra.ts` - CDK アプリケーションのエントリーポイント
- `lib/cognito-stack.ts` - Cognito スタックの定義
- `lib/cognito.ts` - Cognito 設定とヘルパー関数
- `package.json` - 依存関係とスクリプト
- `tsconfig.json` - TypeScript 設定
- `cdk.json` - CDK 設定

## セットアップ

1. 依存関係をインストール:

```bash
cd infra
npm install
```

2. AWS CLI の設定（まだの場合）:

```bash
aws configure
```

3. CDK のブートストラップ（初回のみ）:

```bash
npm run cdk bootstrap
```

## 使用方法

### ビルド

```bash
npm run build
```

### スタックの確認

```bash
npm run synth
```

### デプロイ

```bash
npm run deploy
```

### 差分確認

```bash
npm run diff
```

### スタックの削除

```bash
npm run destroy
```

## 環境別デプロイ

環境別にデプロイする場合は、コンテキスト変数を使用します：

```bash
# 開発環境
npm run cdk deploy -- --context environment=dev

# ステージング環境
npm run cdk deploy -- --context environment=staging

# 本番環境
npm run cdk deploy -- --context environment=prod
```

## 構築されるリソース

### Cognito User Pool

- ユーザープール（ユーザー管理）
- メール/ユーザー名でのサインイン
- パスワードポリシー
- MFA 設定（オプション）
- セルフサインアップ
- メールによるアカウント検証

### Cognito User Pool Client

- アプリケーションクライアント
- OAuth 2.0 サポート
- 認証フロー設定
- トークン有効期限設定

### Cognito Identity Pool

- フェデレーテッドアイデンティティ
- IAM ロールマッピング
- 認証済み/未認証ユーザーのアクセス制御

### User Pool Domain

- ホスト UI のカスタムドメイン

## 設定のカスタマイズ

`lib/cognito.ts`ファイルで以下の設定をカスタマイズできます：

- パスワードポリシー
- MFA 設定
- OAuth 設定
- コールバック URL
- トークン有効期限
- 標準属性

## 出力値

デプロイ後、以下の値が出力されます：

- `UserPoolId` - Cognito User Pool ID
- `UserPoolClientId` - Cognito User Pool Client ID
- `IdentityPoolId` - Cognito Identity Pool ID
- `UserPoolDomain` - Cognito User Pool Domain
- `Region` - AWS リージョン

これらの値はアプリケーションでの認証設定に使用してください。

## Next.js アプリケーションとの連携

出力された値を使用して、Next.js アプリケーションの Amplify 設定を更新してください：

```typescript
import { Amplify } from "aws-amplify";

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: "YOUR_USER_POOL_ID",
      userPoolClientId: "YOUR_USER_POOL_CLIENT_ID",
      identityPoolId: "YOUR_IDENTITY_POOL_ID",
    },
  },
});
```

## トラブルシューティング

### よくある問題

1. **ブートストラップエラー**

   - `cdk bootstrap`を実行してください

2. **権限エラー**

   - AWS IAM で CDK デプロイに必要な権限があることを確認してください

3. **ドメインプレフィックスの重複**
   - 他のスタックと重複しないよう、ユニークなプレフィックスを使用してください

# 環境変数を設定

```bash
set PGDATA="C:\Program Files\PostgreSQL\16\data"
```

# データベースステータスを確認

```bash
pg_ctl status
```

# データベースを起動

```bash
pg_ctl start
```

# データベースを終了

```bash
pg_ctl stop -D "C:/Program Files/PostgreSQL/16/data"
```

# ルートユーザーでログイン

```bash
psql -h localhost -p 5432 -U postgres
ユーザー postgres のパスワード：postgres
```

# 空のデータベースを作成

```bash
CREATE DATABASE "project-manager";
```

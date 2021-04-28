hello-docker-nodejs-app
====

docker-composeを使ってサービスを作ると、環境構築の再現性が高まるので、練習として簡単なウェブサービスを作った。

EC2のインスタンスでも動く

# 実行手順

* dockerとdocker-composeをインストールする
* git cloneでこのリポジトリをクローンする
* hello-docker-nodejs-appフォルダに入った後で以下を実行する

```
$ docker-compose build
$ docker-compose up
```

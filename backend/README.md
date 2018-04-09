# 食文化研究会 メディアプロジェクト

## Getting Started

1. Install [Docker for Mac](https://store.docker.com/editions/community/docker-ce-desktop-mac)

2. Next, you need to install docker-sync

```
gem install docker-sync
```

3. Next, running server

```
docker-sync-stack start
```

4. Access to http://0.0.0.0:3000


## Make command

### Server start with docker-sync

```
make start
```


### Server start with app-log

```
make start-app
```

### Build app

```
make build
```

### ReBuild app at no cache

```
make rebuild
```

### Clean container and rebuild

```
make clean-build
```

### Enter the app container

```
make enter-app
```

### Enter the db container

```
make enter-db
```
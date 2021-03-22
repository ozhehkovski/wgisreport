# 2GIS report

## Installation

1. install nodejs (node v14.15.4, npm v6.14.10) for your platform
2. go to project's directory
3. run `npm i`

## API Installation&RUN

1. Install JSON Server run: npm install -g json-server
2. Start JSON Server run: json-server --watch db.json

## Dev mode

1. make installation
2. do to project's directory
3. run `npm start`


### NPM packages

npm-check-updates
```bash
$ [sudo] npm i -g npm-check-updates
$ ncu [-u]
```

depcheck
```bash
$ [sudo] npm i -g depcheck
$ depcheck

### Build app:
```bash
$ npm run build
```

### Nginx

Run
```
$ /usr/bin/nginx [-t] [-c ~/my-nginx.conf]
```

`-t` - Don’t run, just test the configuration file. NGINX checks configuration for correct syntax and then try to open files referred in configuration.
`-c` - Specify which configuration file NGINX should use instead of the default.

```
$ sudo nginx -s stop
```

```
$ sudo nginx -s reload
```

### Docker

Build
```
$ docker build -t two-gis-report:0.0.1 .
```

Run
```
docker run [-d] -p "8000:9090" two-gis-report:0.0.1
```
Use key `-d` to exit from terminal without stop server\image

9090 - server's port of app

8000 - your local port to open app

Image list
```
$ docker image ls
```

Running images
```
$ docker ps
```

Stop image, get image name from `$ docker ps`
```
$ docker stop <CONTAINER ID>
```

Remove image
```
$ docker image rm -f <image id>
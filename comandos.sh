docker build --tag teste-jenkins .
docker stop app-brq
docker rm app-brq
docker run  -p 80:80 -d --name app-brq teste-jenkins
FROM nginx:alpine
LABEL Name=k8sExamplo Version=1.0
EXPOSE 80
COPY . /usr/share/nginx/html
FROM almalinux:9.3

RUN dnf update -y && \
    dnf module -y install nodejs:20/common && \
    dnf install python3 g++ make -y && \
    npm install -g npm@10.8.1 && \
    npm install -g n && \
    n 22.3.0 && \
    npm install -g @angular/cli@18.0.6

WORKDIR /usr/local/


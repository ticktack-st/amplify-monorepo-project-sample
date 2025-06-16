FROM node:24-bookworm-slim
ENV LANG=C.UTF-8
ENV TZ=Asia/Tokyo
WORKDIR /cdk

RUN apt-get update -y && apt-get upgrade -y && apt-get install -y \
    vim \
    curl \
    less \
    jq \
    zip \
    unzip \
    awscli
RUN apt-get clean && \
    rm -rf /var/cache/apt/archives/* && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* && \
    truncate -s 0 /var/log/*log
RUN npm install -g npm \
    && npm install -g aws-cdk \
    && npm install -g npm-check-updates \
    && npm install -g typescript \
    && npm install -g prettier
COPY package*.json .
RUN npm install

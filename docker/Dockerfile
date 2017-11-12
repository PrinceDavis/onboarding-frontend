FROM node:8.5.0
MAINTAINER Ossaija Thankgod<codebugsolved@gmail.com>
RUN useradd --user-group --create-home --shell /bin/false app && \
  npm set save-exact true && npm install nodemon --global && apt-get update

ENV HOME=/home/app
ENV PORT=4000

COPY ./onboarding-frontend/  $HOME/frontend/

RUN chown -R app:app $HOME/*
USER app
WORKDIR $HOME/frontend
RUN npm install

ENTRYPOINT ["npm", "run", "dev"]

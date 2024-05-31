FROM postgres

VOLUME rits-volume

COPY init.sql /docker-entrypoint-initdb.d/

# COPY env env

ENV POSTGRES_USER=postgres \
POSTGRES_PASSWORD=P05t&4eEs!

WORKDIR /db

# CMD [ "postgresql" ]

# docker build -t rits-db .
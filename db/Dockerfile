FROM postgres

WORKDIR /db

COPY init.sql init.sql

RUN init.sql

CMD [ "executable" ]
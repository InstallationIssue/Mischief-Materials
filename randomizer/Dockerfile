FROM golang:1.22.2 as build
WORKDIR /src
COPY src ./

RUN CGO_ENABLED=0 GOOS=linux go build -o docker-randomizer

FROM scratch
WORKDIR /app
USER randy
COPY --chown=node:node --from=build /src/docker-randomizer docker-randomizer

EXPOSE 8080

CMD [ "/docker-randomizer" ]
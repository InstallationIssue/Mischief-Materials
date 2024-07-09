FROM golang:1.22 AS build
WORKDIR /src
COPY src ./

RUN CGO_ENABLED=0 GOOS=linux go build -o docker-randomizer

FROM scratch
WORKDIR /app
COPY --from=build /src/docker-randomizer docker-randomizer

EXPOSE 10000

CMD [ "/app/docker-randomizer" ]

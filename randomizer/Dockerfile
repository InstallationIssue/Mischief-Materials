FROM golang:1.13

WORKDIR /app

COPY go.mod atoms ./

RUN go mod download

COPY go.main ./

RUN CGO_ENABLED=0 GOOS=linux go build -o docker-randomizer

EXPOSE 8082

CMD [ "/docker-randomizer" ]
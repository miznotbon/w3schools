FROM python:3.9-slim

WORKDIR /html

COPY . .

CMD [ "python", "-m", "http.server", "8000"]

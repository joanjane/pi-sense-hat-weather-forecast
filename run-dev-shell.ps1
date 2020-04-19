docker build -f "./dev.Dockerfile" -t dev-pi-sense-hat-weather-forecast .
docker run --rm -it -v "$(pwd):/src" dev-pi-sense-hat-weather-forecast /bin/sh

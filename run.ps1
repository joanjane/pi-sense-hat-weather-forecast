docker build -f "./x86.Dockerfile" -t pi-sense-hat-weather-forecast .
docker run --rm -it -v "$(pwd):/src" --env-file="./.env" pi-sense-hat-weather-forecast
#!/usr/bin/env bash

set -a
source services.envar

if [[ -z $developmentNet ]]; then
  echo "Creating development network"
  docker network create development
fi

if [[ ${NODE_ENV} == 'production' ]]; then
  echo "Launching application mode PRODUCTION..."
  export TARGET=release
else
  echo "Launching application mode DEVELOPMENT..."
  export TARGET=development
fi

docker-compose up -d --build
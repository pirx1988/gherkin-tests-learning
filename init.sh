#!/bin/bash
# $1 - environment
# $2 - X_VAULT_TOKEN
echo Creating env file

BASE_APP_URL=""
ENVIRONMENT=$1
X_VAULT_TOKEN=$2
ENV_FILENAME=""
case $ENVIRONMENT in
  "latest" )
      BASE_APP_URL="https://app-latest-us8.wfs.cloud"
      ENV_FILENAME=".env.latest" ;;
  "sprint" )
        ENV_FILENAME=".env.sprint"
        BASE_APP_URL="https://app-sprint-us8.wfs.cloud" ;;
  "production" )
        BASE_APP_URL="https://app-us8.wfs.cloud"
        ENV_FILENAME=".env" ;;


esac
echo $BASE_APP_URL


## Create .env file with parameters passed to script:

declare -a CONTENT
CONTENT+=("X_VAULT_TOKEN=\"$X_VAULT_TOKEN\"")
CONTENT+=("BASEURL=\"$BASE_APP_URL\"")
printf "%s\n" "${CONTENT[@]}" > $ENV_FILENAME



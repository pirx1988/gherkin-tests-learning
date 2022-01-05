#!/bin/bash
# $1 - environment
# $2 - X_VAULT_TOKEN
echo Creating env file

BASE_APP_URL=""
ENVIRONMENT=$1
case $ENVIRONMENT in
  "latest" )
      BASE_APP_URL="https://app-latest-us8.wfs.cloud/" ;;
  "sprint" )
        BASE_APP_URL="https://app-sprint-us8.wfs.cloud/" ;;
  "production" )
        BASE_APP_URL="https://app-us8.wfs.cloud/" ;;


esac
echo $BASE_APP_URL
## Create .env file with parameters

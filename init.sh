#!/bin/bash
# $1 - environment
# $2 - X_VAULT_TOKEN
# $3 - Suite Account

BASE_APP_URL=""
ENVIRONMENT=$1
X_VAULT_TOKEN=$2
SUITE_ACCOUNT=$3
$ROLE_ID=$4
VAULT_BASE_URL="https://vault-wf1.wfsaas.net"
ENV_FILENAME=".env.dev"

case $ENVIRONMENT in
  "latest" )
      BASE_APP_URL="https://app-latest-us8.wfs.cloud" ;;
  "sprint" )
      BASE_APP_URL="https://app-sprint-us8.wfs.cloud" ;;
  "production (EU1)" )
      BASE_APP_URL="https://app-eu1.wfs.cloud" ;;
  "production (EU3)" )
      BASE_APP_URL="https://app-eu3.wfs.cloud" ;;
  "production (US2)" )
      BASE_APP_URL="https://app-us2.wfs.cloud" ;;
  "production (US8)" )
      BASE_APP_URL="https://app-us8.wfs.cloud" ;;
  "production (AU3)" )
      BASE_APP_URL="https://app-au3.wfs.cloud" ;;
esac

## Defining the contents of the .env file:
declare -a CONTENT
CONTENT+=("ENVIRONMENT=\"$ENVIRONMENT\"")
CONTENT+=("X_VAULT_TOKEN=\"$X_VAULT_TOKEN\"")
CONTENT+=("BASEURL=\"$BASE_APP_URL\"")
CONTENT+=("ACCOUNT=\"$SUITE_ACCOUNT\"")
CONTENT+=("VAULT_BASE_URL=\"$VAULT_BASE_URL\"")
CONTENT+=("ROLE_ID=\"$ROLE_ID\"")

## Create .env file with parameters passed to script:
printf "%s\n" "${CONTENT[@]}" > $ENV_FILENAME
cat < $ENV_FILENAME


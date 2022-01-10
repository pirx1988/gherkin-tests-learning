#!/bin/bash
# $1 - environment
# $2 - X_VAULT_TOKEN
# $3 - Suite Account
echo Creating env file

BASE_APP_URL=""
ENVIRONMENT=$1
X_VAULT_TOKEN=$2
SUITE_ACCOUNT=$3
VAULT_BASE_URL="https://vault-wf1.wfsaas.net"

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

## Defining the contents of the .env file:
declare -a CONTENT
CONTENT+=("ENVIRONMENT=\"$ENVIRONMENT\"")
CONTENT+=("X_VAULT_TOKEN=\"$X_VAULT_TOKEN\"")
CONTENT+=("BASEURL=\"$BASE_APP_URL\"")
CONTENT+=("ACCOUNT=\"$SUITE_ACCOUNT\"")
CONTENT+=("VAULT_BASE_URL=\"$VAULT_BASE_URL\"")

ENV_FILENAME=""
## Create .env file with parameters passed to script:
printf "%s\n" "${CONTENT[@]}" > "$ENV_FILENAME"



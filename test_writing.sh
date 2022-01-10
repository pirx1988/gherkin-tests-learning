File=".env"

declare -a TmpWrite
X_VAULT_TOKEN="1312312"


TmpWrite+=("X_VAULT_TOKEN=$X_VAULT_TOKEN")
TmpWrite+=("test line2")
TmpWrite+=("test line3")
TmpWrite+=("test line4")
TmpWrite+=("test line5")
TmpWrite+=("test line6323")

printf "%s\n" "${TmpWrite[@]}" > $File
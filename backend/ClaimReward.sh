printf "$1\n" | evmosd tx distribution withdraw-all-rewards --from bwlkey --chain-id evmos_9000-4 --fees 3000000000001atevmos --gas 300000 --yes
echo $1
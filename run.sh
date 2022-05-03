#!/bin/sh

export NODE_ENV=production

while [ 1 ]
do
	node app_cpf.js &>> bitcoin.log
done


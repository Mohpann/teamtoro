#!/bin/sh

ps aux | grep run.sh | awk '{print $2}' | xargs kill -9
ps aux | grep app_cpf.js | awk '{print $2}' | xargs kill -9

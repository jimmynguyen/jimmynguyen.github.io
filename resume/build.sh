#!/bin/bash

rm -rf ./generated/

mkdir ./generated

mkdir ./generated/sections/

cp -R ./content/sections/ ./generated/sections/

python ./scripts/genResume.py
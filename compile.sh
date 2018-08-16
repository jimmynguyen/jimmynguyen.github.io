#!/bin/bash

rm -rf index.html

cd ./resume

bash build.sh

cd ..

python ./scripts/genIndex.py
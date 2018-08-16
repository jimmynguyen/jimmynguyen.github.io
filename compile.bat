:: Windows version of compile.sh

@echo off

del index.html > nul

cd ./resume

call ./build

cd ..

python ./scripts/genIndex.py
:: Windows version of build.sh

@echo off

rmdir /s /q "./generated/"

mkdir "./generated/"

mkdir "./generated/sections/"

copy "./content/sections/" "./generated/sections/" > nul

python ./scripts/genResume.py
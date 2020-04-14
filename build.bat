
set env=%1
if "%1%"=="" (
    set env="prod"
)
echo %env%
cd ui && yarn install && yarn build:%env% && cd ../ && mvn clean package -P %env%
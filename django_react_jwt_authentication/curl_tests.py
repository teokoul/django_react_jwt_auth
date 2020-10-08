curl --header "Content-Type: application/json" -X POST http://127.0.0.1:8000/api/token/obtain/ --data '{"username":"admin","password":"admin"}'

curl --header "Content-Type: application/json" -X POST http://127.0.0.1:8000/api/token/obtain/ --data '{"username":"user","password":"useruser"}'

curl --header "Content-Type: application/json" -X POST http://127.0.0.1:8000/api/user/create/ --data '{"email":"user@user.com","username":"user","password":"useruser"}'

curl --header "Content-Type: application/json" --header "Authorization: JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjAyMTU5NzMxLCJqdGkiOiI3M2QzMzVhNmU4NzQ0NDc5OTBlMThjOTY4ZGM3ZjAwYiIsInVzZXJfaWQiOjIsImZhdl9jb2xvciI6IiJ9.d3YGMII3GEz2aqz8SWQZC99KbeyaT7Vk75hZsYmFMAo"  -X GET http://127.0.0.1:8000/api/hello/
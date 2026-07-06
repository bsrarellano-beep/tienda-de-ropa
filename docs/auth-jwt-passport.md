# Instlación
```
npm i @nestjs/jwt passport-jwt bcrypt
npm i --save-dev @types/passport-jwt
```

# Arrancamos proyecto
```
npm run start:dev
```
# Modules & Resource
```
nest g mo module auth
nest g res modules/users
```
# Controllers & Services
```
nest g co modules/ auth
nest g s modules/auth

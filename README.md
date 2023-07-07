# node express modules structure

## Project Folder Structure
```
.
├── README.md
├── package.json
├── src
│   ├── config
│   │   ├── config.ts
│   │   ├── index.ts
│   │   └── logger.ts
│   ├── index.ts
│   ├── modules
│   │   ├── v1
│   │   │   ├── auth
│   │   │   │   ├── controller.ts
│   │   │   │   ├── routes.ts
│   │   │   │   └── service.ts
│   │   │   ├── market
│   │   │   │   ├── controller.ts
│   │   │   │   ├── routes.ts
│   │   │   │   └── service.ts
│   │   │   └── user
│   │   │       ├── controller.ts
│   │   │       ├── index.ts
│   │   │       ├── interface.ts
│   │   │       ├── model.ts
│   │   │       ├── routes.ts
│   │   │       └── service.ts
│   │   └── v2
│   │       └── user
│   │           ├── controller.ts
│   │           ├── index.ts
│   │           ├── model.ts
│   │           ├── routes.ts
│   │           └── service.ts
│   └── routes
│       ├── index.ts
│       ├── v1
│       │   └── route.ts
│       └── v2
│           └── route.ts
├── tsconfig.json
├── .env
├── .env
├── .gitignore
└── yarn.lock
```

## Basic Package
```
yarn add express dotenv   
yarn add -D typescript @types/express @types/node nodemon 
npx tsc --init

```
Hello, Full Stack Web Development Students✌️!

🧑‍💻 How to Setup Express Typescript?

    1. Create New Directory for ExpressTS Projects

    2. Inside New Directory, Execute this Command:

            ➡️ npm init --yes

    3. Install Express Typescript

            ➡️ npm i express 

            ➡️ npm i --save-dev @types/express

            ➡️ npm i -D typescript ts-node nodemon

    4. Initiate Typescript Configuration

            ➡️ npx tsc --init

    5. Replace `tsconfig.json` with This Configuration:
            
            {
                    "compilerOptions": {
                            "target": "ES6",
                            "module": "commonjs",
                            "outDir": "./dist",
                            "rootDir": "./src",
                            "strict": true,
                            "esModuleInterop": true,
                            "skipLibCheck": true
                    }
            }
            
    6. Replace Property `scripts` on `package.json` with this Code:

            "scripts": {
                    "dev": "nodemon",
                    "build": "tsc",
                    "start": "node dist/server.js"
            },

    7. Create New File with Name `nodemon.json` and Add this Configuration:

            {
                "watch": ["src"],
                "ext": "ts",
                "ignore": ["dist"],
                "exec": "ts-node src/server.ts"
            }

    8. Running Express Typescript Projects

            ➡️ npm run dev


            
🧑‍💻 How to Setup Prisma ORM (MySql/PostgreSql)?

    1. Install Package(s)

            ➡️ npm install prisma --save-dev

            ➡️ npx prisma init --datasource-provider mysql

                    ___ or ___

            ➡️ npx prisma init --datasource-provider postgresql        

    2. Edit `DATABASE_URL` on File `.env`
            
            DATABASE_URL="mysql://<USERNAME>:<PASSWORD>@localhost:3306/<DB_NAME>"

            DATABASE_URL="mysql://root:abc12345@localhost:3306/day08_prisma"

                    ___ or ___

            DATABASE_URL="postgresql://<USERNAME>:<PASSWORD>@localhost:5432/<DB_NAME>?schema=public"
            
            DATABASE_URL="postgresql://postgres:abc12345@localhost:5432/pwd_express_ts_prisma?schema=public"

    3. Create Model Inside `prisma > schema.prisma`:

            model User {
                    id        String        @id @default(cuid())
                    email     String        @unique
                    name      String
                    password   String

                    user_addresses UserAddress[]

                    createdAt   DateTime  @default(now())
                    updatedAt   DateTime  @updatedAt
                    deletedAt   DateTime?

                    @@map("users")
            }

            model UserAddress{
                    id        Int     @id @default(autoincrement())
                    consignee String
                    address   String

                    userId    String @unique
                    users User @relation(fields: [userId], references: [id])

                    createdAt   DateTime  @default(now())
                    updatedAt   DateTime  @updatedAt
                    deletedAt   DateTime?

                    @@map("user_addresses")
            }

    4. Migration Models

            ➡️ npx prisma migrate dev --name init

    5. Setup Seeders

            ▪️Create `seed.ts` on `prisma` directory

            ▪️Add this code on `package.json`:

                    "prisma": {
                            "seed": "node prisma/seed.ts"
                    }

            ▪️After that, execute this command:

                    ➡️ npx prisma db seed

    6. Formatting `schema.prisma` Scripts

            ➡️ npx prisma format

            ___ or ___

            ➡️ prisma format

    7. Reset Database Seeding
            ▪️Step-01

                    ➡️ npx prisma db push --force-reset

            ▪️Step-02

                    ➡️ npx prisma db push
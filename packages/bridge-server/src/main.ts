import { NestFactory } from "@nestjs/core";
import chalk from "chalk";
import { ApplicationModule } from "./modules/app.module";
import interceptors from "./interceptors";
import middlewares from "./middleware";
import {
    APP_NAME,
    PORT
} from "./constants";

async function bootstrap()
{
    const app = await NestFactory.create(ApplicationModule);
    app.setGlobalPrefix("/api");
    app.useGlobalInterceptors(...interceptors)
    middlewares.forEach(middldeware => app.use(middldeware));

    await app.listen(9001)
        .then(logApplicationStart);
}

function logApplicationStart()
{
    console.info(
        chalk.cyan('App') +
        chalk.green(' [') +
        chalk.blue(`${ APP_NAME }`) +
        chalk.green('] started on port'),
        chalk.green('[') +
        chalk.blue(PORT.toString()) +
        chalk.green('] ') +
        `http://localhost:${ PORT }`,
    );
}

bootstrap();

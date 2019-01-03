import { NestFactory } from "@nestjs/core";
import { ApplicationModule } from "./modules/app.module";
import { AppConfig } from "../common/config/app.config";
import  chalk from "chalk";
import { LoggingInterceptor } from "./interceptors";
import { frontendMiddleware } from "./middleware/frontend.middleware";
import { ImageSyncService } from "./modules/image_sync/image_sync.service";

declare const module: any;

async function bootstrap()
{
    const app = await NestFactory.create(ApplicationModule);
    app.setGlobalPrefix(AppConfig.API_URL);
    app.useGlobalInterceptors(new LoggingInterceptor());
    app.use(frontendMiddleware);
    
    await app.listen(AppConfig.PORT)
        .then(logApplicationStart);

    if (module.hot)
    {
        module.hot.accept();
        module.hot.dispose(() => app.close());   
    }
}
bootstrap();

function logApplicationStart()
{
    console.info(
        chalk.cyan('App') +
        chalk.green(' [') +
        chalk.blue(`${ AppConfig.APP_NAME }`) +
        chalk.green('] started on port'),
        chalk.green('[') +
        chalk.blue(AppConfig.PORT.toString()) +
        chalk.green('] ') +
        `http://localhost:${ AppConfig.PORT }`,
    );
}

import { NestInterceptor, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import chalk from 'chalk';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    intercept(
        context: ExecutionContext, 
        stream$: Observable<any>)
    {
        const httpContext = context.switchToHttp();
        const req = httpContext.getRequest();
        const gid = this.gid();
        const now = Date.now();

        console.info(`${ this.balise(req.method) + this.balise('START') } ${ chalk.cyan(req.originalUrl) } ${ gid }`);
        return stream$.pipe(
            tap(() => console.info(`${ this.balise(req.method) + this.balise('END') } ${ chalk.cyan(req.originalUrl) } ${ gid } ${chalk.green((Date.now() - now).toString() + 'ms')}`))
        );
    }

    balise(val: string): string {
        return chalk.green('[') + chalk.blue(val) + chalk.green(']');
    }

    gid(): string {
        let gid = '';
        for (let i = 0; i < 8; i++) {
        gid += this.s4();
        }
        return gid;
    }

    s4(): string {
        return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
}

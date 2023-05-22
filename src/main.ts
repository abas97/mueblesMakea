import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import cors  from 'cors';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe(
    {
      //esto hace que no me mandan cualquier otra cosa que no sea lo que defini con los dto
      whitelist:true
    }
  ))
  app.use(cors());
    
  
  await app.listen( process.env.PORT || 3000)
}
bootstrap();

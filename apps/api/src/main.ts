import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors()

  const config = new DocumentBuilder()
    .setTitle('ParkIt | Ankush')
    .setDescription(
      `The ParkIt API.
     <h1>ParkIt</h1>
     Go to <a href="/graphql" target="_blank" >/graphql</a>
     You might also need to use <a target="_blank" href="https://studio.apollographql.com/sandbox/explorer"> Apollo Explorer
</a> for a greater Experience .
    `,
    )
    .setVersion('0.1')
    .addBearerAuth()
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/', app, document)

  await app.listen(3000)
}
bootstrap()

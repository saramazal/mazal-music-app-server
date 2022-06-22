import {Module} from '@nestjs/common'
import {TrackModule} from './track/track.module'
import {MongooseModule} from '@nestjs/mongoose'
import {FileModule} from './file/file.module'

@Module({
  imports: [
    MongooseModule.forRoot(
     
    ),
    TrackModule,
    FileModule
  ]
})
export class AppModule {}

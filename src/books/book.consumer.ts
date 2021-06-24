import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import csv from 'csv-parser';
import fs from 'fs';

@Processor('book')
export class BookConsumer {
  @Process()
  async transcode(job: Job<any>) {
    const results = [];
    fs.createReadStream(`${__dirname}/src/assets/data.csv`)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        console.log(results);
        // [
        //   { NAME: 'Daffy Duck', AGE: '24' },
        //   { NAME: 'Bugs Bunny', AGE: '22' }
        // ]
      });

    let progress = 0;
    for (const result of results) {
      await console.log(job.data);
      progress += 10;
      await job.progress(progress);
    }
    return {};
  }
}

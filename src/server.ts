import { Server } from '@overnightjs/core';
import './util/module-alias';
import bodyParser from 'body-parser';
import init from 'module-alias';

export class SetupServer extends Server {
  constructor( private port = 3000 ) {
    super();
  }

  public init(): void {
    this.setupExpress();
  }

  private setupExpress(): void {
    this.app.use(bodyParser.json());
  }
}
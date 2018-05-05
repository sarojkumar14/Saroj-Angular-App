import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import * as StackTrace from 'stacktrace-js';
@Injectable()

export class GlobalErrorHandler extends ErrorHandler {
  constructor(private injector: Injector) {
    super();
  }

  handleError(error) {
    const location = this.injector.get(LocationStrategy);
    const message = error.message ? error.message : error.toString();
    const url = location instanceof HashLocationStrategy ? location.path() : '';

    // get the stack trace, lets grab the last 10 stacks only
    StackTrace.fromError(error).then(stackframes => {
      const stackString = stackframes
        .splice(0, 20)
        .map(function (sf) {
          return sf.toString();
        }).join('\n');
      console.log({ message, url, stack: stackString });
    });

    // IMPORTANT: Rethrow the error otherwise it gets swallowed
    throw error;
  }
}

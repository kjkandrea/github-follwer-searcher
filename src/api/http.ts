import { fromFetch } from 'rxjs/fetch';
import { catchError, of, switchMap } from 'rxjs';

console.log(process.env);

export const request = (uri: string) =>
  fromFetch(process.env.REACT_APP_API_URL + uri, {
    headers: {
      Authorization: process.env.REACT_APP_API_TOKEN as string, // local only
    },
  }).pipe(
    switchMap(response => (response.ok ? response.json() : of({ error: true, message: `Error ${response.status}` }))),
    catchError(err => {
      throw of({ error: true, message: err.message });
    }),
  );

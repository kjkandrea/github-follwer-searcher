import { fromFetch } from 'rxjs/fetch';
import { catchError, of, switchMap } from 'rxjs';

export const request = (uri: string) =>
  fromFetch(process.env.REACT_APP_API_URL + uri).pipe(
    switchMap(response => (response.ok ? response.json() : of({ error: true, message: `Error ${response.status}` }))),
    catchError(err => {
      console.error(err);
      return of({ error: true, message: err.message });
    }),
  );

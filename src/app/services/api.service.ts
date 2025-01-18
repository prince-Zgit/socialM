import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError, of } from 'rxjs'; // Import necessary operators

interface ApiResponse { // Define an interface for your JSON structure
  friends: any[];
  groups: any[];
  // ... other properties from your JSON
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: string = '../../assets/data/data.json'; // Relative path from the app root

  constructor(private http: HttpClient) {}

  getSampleData(): Observable<any> {
    return this.http.get<any>(this.baseUrl).pipe(
      catchError(this.handleError<any>('getSampleData', [])) // Handle errors
    );
  }

  getFriends(): Observable<any[]> {
    return this.http.get<ApiResponse>(this.baseUrl).pipe(
      map(res => res.friends), // Extract the 'friends' array
      catchError(this.handleError<any[]>('getFriends', []))
    );
  }

  getGroups(): Observable<any[]> {
    return this.http.get<ApiResponse>(this.baseUrl).pipe(
      map(res => res.groups), // Extract the 'groups' array
      catchError(this.handleError<any[]>('getGroups', []))
    );
  }

    /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
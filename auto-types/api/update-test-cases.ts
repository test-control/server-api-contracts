/* tslint:disable */
import { Request, Response } from 'express'

export namespace UpdateTestCases{
  export interface ApplicationJsonRequestBody {
    /**
     * Title
     */
    title?: string;
    /**
     * Test case description
     */
    description?: string;
  }
  export type RequestBody = ApplicationJsonRequestBody
  export interface PathRequestParams {
    entityId: string;
  }
  export interface QueryRequestParams {}
  export interface CookieRequestParams {}
  export interface HeaderRequestParams {}
  export type ApiRequest = Request<Required<PathRequestParams>, ResponseBody, RequestBody, QueryRequestParams>
  export interface ApplicationJson200ResponseBody {
    data: {
      /**
       * Unique id
       */
      id: string;
      /**
       * Title
       */
      title: string;
      /**
       * Test case description
       */
      description?: string;
      /**
       * Tree id
       */
      treeId: string;
    };
  }
  export type ResponseBody = ApplicationJson200ResponseBody
  export type ApiResponse = Response<ResponseBody>
}

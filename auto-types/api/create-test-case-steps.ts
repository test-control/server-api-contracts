/* tslint:disable */
import { Request, Response } from 'express'

export namespace CreateTestCaseSteps{
  export interface ApplicationJsonRequestBody {
    /**
     * Title
     */
    title: string;
    /**
     * Display after uuid item
     */
    displayAfter?: string;
  }
  export type RequestBody = ApplicationJsonRequestBody
  export interface PathRequestParams {
    testCaseId: string;
  }
  export interface QueryRequestParams {}
  export interface CookieRequestParams {}
  export interface HeaderRequestParams {}
  export type ApiRequest = Request<Required<PathRequestParams>, ResponseBody, RequestBody, QueryRequestParams>
  export interface ApplicationJson201ResponseBody {
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
       * Test case uuid
       */
      testCaseId: string;
      /**
       * Display after uuid item
       */
      displayAfter?: string;
    };
  }
  export interface ApplicationJson400ResponseBody {
    errors?: {
      /**
       * param path
       */
      path: string;
    }[];
    meta: {
      /**
       * Validation error
       */
      code:
        | "input-validation-error"
        | "400"
        | "411"
        | "412"
        | "413"
        | "414"
        | "415"
        | "416"
        | "417"
        | "418"
        | "421"
        | "422"
        | "424"
        | "431"
        | "451";
      [k: string]: unknown;
    } & {
      /**
       * Meta information about related exception
       */
      code: string;
      debug?: {
        /**
         * related debug context object
         */
        debug?: {
          [k: string]: unknown;
        };
        /**
         * related error string representation
         */
        err?: string;
        /**
         * Error object stringify
         */
        errObj?: string;
        [k: string]: unknown;
      };
    };
  }
  export type ResponseBody = ApplicationJson201ResponseBody | ApplicationJson400ResponseBody
  export type ApiResponse = Response<ResponseBody>
}

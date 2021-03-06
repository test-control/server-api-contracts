/* tslint:disable */
import { Request, Response } from 'express'

export namespace CreateTreeLeaf{
  export interface ApplicationJsonRequestBody {
    /**
     * Title of root leaf
     */
    title: string;
  }
  export type RequestBody = ApplicationJsonRequestBody
  export interface PathRequestParams {
    entityId: string;
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
       * Title of root leaf
       */
      title: string;
      createdAt: string;
      /**
       * path id
       */
      treePath: string;
      /**
       * Elements amount
       */
      elementsAmount: number;
    };
  }
  export type ResponseBody = ApplicationJson201ResponseBody
  export type ApiResponse = Response<ResponseBody>
}

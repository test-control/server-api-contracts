/* tslint:disable */
import { Request, Response } from 'express'

export namespace ListTreeLeaves{
  export interface PathRequestParams {
    entityId: string;
  }
  export interface QueryRequestParams {}
  export interface CookieRequestParams {}
  export interface HeaderRequestParams {}
  export type ApiRequest = Request<Required<PathRequestParams>, ResponseBody, {}, QueryRequestParams>
  export interface ApplicationJson200ResponseBody {
    data: {
      /**
       * Unique id
       */
      id: string;
      /**
       * Title of root leaf
       */
      title: string;
      /**
       * Id of parent
       */
      parentId?: string;
      createdAt: string;
    }[];
    meta: {
      /**
       * Total amount of items
       */
      total: number;
      /**
       * Items amount per page
       */
      perPage: number;
      /**
       * Last page number
       */
      lastPage: number;
      /**
       * Current page number projects
       */
      currentPage: number;
    };
  }
  export type ResponseBody = ApplicationJson200ResponseBody
  export type ApiResponse = Response<ResponseBody>
}

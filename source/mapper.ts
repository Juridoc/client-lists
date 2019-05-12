/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Injection from '@singleware/injection';
import * as RestDB from '@singleware/restdb';

import * as Core from '@juridoc/client-core';

import * as Requests from './requests';

import { Entity } from './entity';

/**
 * Lists mapper class.
 */
@Injection.Describe({ singleton: true, name: 'lists' })
@Class.Describe()
export class Mapper extends Class.Null {
  /**
   * Client instance.
   */
  @Injection.Inject(Core.Client)
  @Class.Private()
  private client!: Core.Client;

  /**
   * Mapper instance.
   */
  @Class.Private()
  private mapper = new RestDB.Mapper<Entity>(this.client, Entity);

  /**
   * Get the error entity from the last operation.
   */
  @Class.Public()
  public get error(): Core.Entities.Error | undefined {
    return this.client.error;
  }

  /**
   * Create a new list based on the specified creation request.
   * @param request List creation request.
   * @returns Returns a promise to get the list Id.
   * @throws Throws an error when the list wasn't created.
   */
  @Class.Public()
  public async create(request: Requests.Create): Promise<string> {
    return (await this.mapper.insertEx<Requests.Create, string>(Requests.Create, request))!;
  }

  /**
   * Load the list that corresponds to the specified list Id.
   * @param id List Id.
   * @param fields Fields to be selected.
   * @returns Returns a promise to get the list entity.
   */
  @Class.Public()
  public async load(id: string, fields?: string[]): Promise<Entity> {
    return (await this.mapper.findById(id, fields))!;
  }

  /**
   * Find all public lists that corresponds to the specified filter.
   * @param query Query filter.
   * @param fields Fields to be selected.
   * @returns Returns a promise to get the public lists or undefined when an error occurs.
   */
  @Class.Public()
  public async find(query: RestDB.Query, fields?: string[]): Promise<Entity[] | undefined> {
    return await this.mapper.find(query, fields, {
      path: `${RestDB.Schema.getStorageName(Entity)}/public`
    });
  }

  /**
   * Update the list that corresponds to the specified list Id based on the given update request.
   * @param id List Id.
   * @param request List update request.
   * @returns Returns a promise to get true when the list was updated, false otherwise.
   * @throws Throws an error when the list wasn't found.
   */
  @Class.Public()
  public async modify(id: string, request: Requests.Update): Promise<boolean> {
    return (await this.mapper.updateByIdEx(Requests.Update, id, request))!;
  }

  /**
   * List all lists that corresponds to the specified filter.
   * @param query Query filter.
   * @param fields Fields to be selected.
   * @returns Returns a promise to get the lists list or undefined when an error occurs.
   */
  @Class.Public()
  public async list(query: RestDB.Query, fields?: string[]): Promise<Entity[] | undefined> {
    return await this.mapper.find(query, fields);
  }

  /**
   * Count all lists that corresponds to the specified filter.
   * @param query Query filter.
   * @returns Returns a promise to get the number of lists or undefined when an error occurs.
   */
  @Class.Public()
  public async count(query: RestDB.Query): Promise<number | undefined> {
    return await this.mapper.count(query);
  }

  /**
   * Delete the list that corresponds to the specified list Id.
   * @param id List Id.
   * @returns Returns a promise to get true when the list was deleted, false otherwise.
   * @throws Throws an error when the document wasn't found.
   */
  @Class.Public()
  public async remove(id: string): Promise<boolean> {
    return (await this.mapper.deleteById(id))!;
  }
}

/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Core from '@juridoc/client-core';
import * as Requests from './requests';
import { Entity } from './entity';
/**
 * Lists mapper class.
 */
export declare class Mapper extends Class.Null {
    /**
     * Client instance.
     */
    private client;
    /**
     * Mapper instance.
     */
    private mapper;
    /**
     * Get the error entity from the last operation.
     */
    get error(): Core.Entities.Error | undefined;
    /**
     * Create a new list based on the specified creation request.
     * @param request List creation request.
     * @returns Returns a promise to get the list Id.
     * @throws Throws an error when the list wasn't created.
     */
    create(request: Requests.Create): Promise<string>;
    /**
     * Load the list that corresponds to the specified list Id.
     * @param id List Id.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the list entity.
     */
    load(id: string, fields?: string[]): Promise<Entity>;
    /**
     * Find all public lists that corresponds to the specified filter.
     * @param query Query filter.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the public lists or undefined when an error occurs.
     */
    find(query: RestDB.Query, fields?: string[]): Promise<Entity[] | undefined>;
    /**
     * Update the list that corresponds to the specified list Id based on the given update request.
     * @param id List Id.
     * @param request List update request.
     * @returns Returns a promise to get true when the list was updated, false otherwise.
     * @throws Throws an error when the list wasn't found.
     */
    modify(id: string, request: Requests.Update): Promise<boolean>;
    /**
     * List all lists that corresponds to the specified filter.
     * @param query Query filter.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the lists list or undefined when an error occurs.
     */
    list(query: RestDB.Query, fields?: string[]): Promise<Entity[] | undefined>;
    /**
     * Count all lists that corresponds to the specified filter.
     * @param query Query filter.
     * @returns Returns a promise to get the number of lists or undefined when an error occurs.
     */
    count(query: RestDB.Query): Promise<number | undefined>;
    /**
     * Delete the list that corresponds to the specified list Id.
     * @param id List Id.
     * @returns Returns a promise to get true when the list was deleted, false otherwise.
     * @throws Throws an error when the document wasn't found.
     */
    remove(id: string): Promise<boolean>;
}

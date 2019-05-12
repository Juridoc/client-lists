/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as ApiProfiles from '@juridoc/client-profiles';
import * as Internals from './internals';
import * as Types from './types';
/**
 * List entity class.
 */
export declare class Entity extends Class.Null {
    /**
     * List Id.
     */
    id: string;
    /**
     * Account Id.
     */
    accountId: string;
    /**
     * Profile entity.
     */
    profile?: ApiProfiles.Entity;
    /**
     * Creation date.
     */
    createdAt: Date;
    /**
     * Update date.
     */
    updatedAt?: Date;
    /**
     * List disposition.
     */
    disposition: Types.Disposition;
    /**
     * List title.
     */
    title: string;
    /**
     * List name.
     */
    name?: string;
    /**
     * Language priority.
     */
    priority: number;
    /**
     * Language code.
     */
    language: string;
    /**
     * List options.
     */
    optionList: Internals.Option[];
}

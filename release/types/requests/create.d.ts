/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Types from '../types';
import * as Internals from '../internals';
/**
 * List creation request.
 */
export declare class Create extends Class.Null {
    /**
     * List disposition.
     */
    disposition?: Types.Disposition;
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
    priority?: number;
    /**
     * Language code.
     */
    language: string;
    /**
     * List options.
     */
    optionList: Internals.Option[];
}

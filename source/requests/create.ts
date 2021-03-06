/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Types from '../types';
import * as Internals from '../internals';

/**
 * List creation request.
 */
@RestDB.Schema.Entity('lists')
@Class.Describe()
export class Create extends Class.Null {
  /**
   * List disposition.
   */
  @RestDB.Schema.Enumeration(Object.values(Types.Disposition))
  @Class.Public()
  public disposition?: Types.Disposition;

  /**
   * List title.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public title!: string;

  /**
   * List name.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public name?: string;

  /**
   * Language priority.
   */
  @RestDB.Schema.Number()
  @Class.Public()
  public priority?: number;

  /**
   * Language code.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public language!: string;

  /**
   * List options.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(Internals.Option)
  @Class.Public()
  public optionList!: Internals.Option[];
}

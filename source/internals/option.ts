/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * List option, entity class.
 */
@RestDB.Schema.Entity('lists/option')
@Class.Describe()
export class Option extends Class.Null {
  /**
   * Option value.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public value!: string;

  /**
   * Option label.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public label!: string;
}

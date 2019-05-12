/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as ApiProfiles from '@juridoc/client-profiles';

import * as Internals from './internals';
import * as Types from './types';

/**
 * List entity class.
 */
@RestDB.Schema.Entity('lists')
@Class.Describe()
export class Entity extends Class.Null {
  /**
   * List Id.
   */
  @RestDB.Schema.Primary()
  @RestDB.Schema.Id()
  @Class.Public()
  public id!: string;

  /**
   * Account Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public accountId!: string;

  /**
   * Profile entity.
   */
  @RestDB.Schema.Object(() => ApiProfiles.Entity, [
    'id',
    'contact.id',
    'contact.pictureId',
    'contact.name',
    'contact.personal.firstName',
    'contact.personal.lastName',
    'contact.professional.denomination'
  ])
  @Class.Public()
  public profile?: ApiProfiles.Entity;

  /**
   * Creation date.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Date()
  @Class.Public()
  public createdAt!: Date;

  /**
   * Update date.
   */
  @RestDB.Schema.Date()
  @Class.Public()
  public updatedAt?: Date;

  /**
   * List disposition.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Disposition))
  @Class.Public()
  public disposition!: Types.Disposition;

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
  @RestDB.Schema.Required()
  @RestDB.Schema.Number()
  @Class.Public()
  public priority!: number;

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

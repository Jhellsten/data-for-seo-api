const fetch = require('node-fetch')
import { ClientOptions, DFOClientOptions, DFOClientTypes } from './client.types'
import {
  EApiEndpoints,
  EMethods,
  GET_GOOGLE_LOCATIONS,
  GET_USER_DATA,
} from './endpoints'
import {
  AccountInfoType,
  DFOResponse,
  GoogleLanguagesType,
  GoogleLocationType,
} from './response.types'

export default class DataForSeoClient {
  private _username!: string
  private _password!: string
  private _version: DFOClientTypes

  constructor(_username: string, _password: string, _version: DFOClientTypes) {
    this._version = _version
    this._username = _username
    this._password = _password
  }

  public async getAccountInfo(): Promise<DFOResponse<AccountInfoType>> {
    const response = await this.initClient<AccountInfoType>(
      GET_USER_DATA.url,
      GET_USER_DATA.method
    )
    return response
  }
  public async getGoogleLocations(): Promise<DFOResponse<GoogleLocationType>> {
    const response = await this.initClient<GoogleLocationType>(
      EApiEndpoints.GET_GOOGLE_LOCATIONS,
      GET_GOOGLE_LOCATIONS.method
    )
    return response
  }
  public async getGoogleLanguages(): Promise<DFOResponse<GoogleLanguagesType>> {
    const response = await this.initClient<GoogleLanguagesType>(
      EApiEndpoints.GET_GOOGLE_LOCATIONS,
      GET_GOOGLE_LOCATIONS.method
    )
    return response
  }

  private async initClient<T>(
    endpoint: EApiEndpoints,
    method: EMethods,
    options?: ClientOptions
  ): Promise<DFOResponse<T>> {
    if (options) {
      if (options.version) {
        this.setVersion(options.version)
      }
    }
    try {
      const response = await fetch(
        `${DFOClientOptions[this._version]}/${endpoint}`,
        {
          method,
          headers: {
            Authorization: `Basic ${this.setCredentials()}`,
          },
        }
      )
      const data = await response.json()
      return data
    } catch (error) {
      throw error
    }
  }

  private setCredentials() {
    return Buffer.from(`${this._username}:${this._password}`).toString('base64')
  }

  private setVersion(version: DFOClientTypes) {
    this._version = version
  }
}

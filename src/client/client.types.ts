export type DFOClientOptions = {
  version: DFOClientTypes
}

// type

export type DFOClientTypes = keyof typeof DFOClientOptions

export const DFOClientOptions = {
  v3: 'https://api.dataforseo.com/v3',
  v2: 'https://api.dataforseo.com/v2',
  sandbox: 'https://sandbox.dataforseo.com/v3',
}

export type ClientOptions = {
  version: DFOClientTypes
  logging?: boolean
  mappingObject: any
}

export enum EMethods {
  'GET' = 'GET',
  'POST' = 'POST',
  'DELETE' = 'DELETE',
}

export enum EApiEndpoints {
  // Options for Google SERP API
  GET_GOOGLE_LOCATIONS_BY_COUNTRY = 'serp/google/locations/',
  GET_GOOGLE_LOCATIONS = 'serp/google/locations',
  GET_GOOGLE_LANGUAGES = 'serp/google/languages',
  POST_GOOGLE_SERP_ORGANIC = 'serp/google/organic/task_post',

  // Account related
  GET_USER_DATA = 'appendix/user_data',
}
export type Endpoints = keyof EApiEndpoints

// https://docs.dataforseo.com/v3/appendix/user_data
export const GET_USER_DATA = {
  url: EApiEndpoints.GET_USER_DATA,
  method: EMethods.GET,
}

// https://docs.dataforseo.com/v3/serp/google/locations
export const GET_GOOGLE_LOCATIONS = {
  url: EApiEndpoints.GET_GOOGLE_LOCATIONS,
  method: EMethods.GET,
}

// https://docs.dataforseo.com/v3/serp/google/locations/$country
export const GET_GOOGLE_LOCATIONS_BY_COUNTRY = {
  url: EApiEndpoints.GET_GOOGLE_LOCATIONS_BY_COUNTRY,
  method: EMethods.GET,
}

// https://docs.dataforseo.com/v3/serp/google/languages
export const GET_GOOGLE_LANGUAGES = {
  url: EApiEndpoints.GET_GOOGLE_LANGUAGES,
  method: EMethods.GET,
}

// https://docs.dataforseo.com/v3/serp/google/organic/task_post
export const POST_GOOGLE_SERP_ORGANIC = {
  url: EApiEndpoints.POST_GOOGLE_SERP_ORGANIC,
  method: EMethods.POST,
}

import { DFOClientTypes } from './client.types'

export const statuses = [
  {
    code: 20000,
    message: 'Ok.',
  },
  {
    code: 20100,
    message: 'Task Created.',
  },
  {
    code: 40000,
    message: 'You can set only one task at a time.',
  },
  {
    code: 40001,
    message: 'This id is used by another client, check the id.',
  },
  {
    code: 40002,
    message: 'This id is used by another search engine, check the Path.',
  },
  {
    code: 40003,
    message: 'This id is used by another search type, check the Path.',
  },
  {
    code: 40004,
    message: 'This id is used by another function, check the id.',
  },
  {
    code: 40006,
    message: 'You can set no more than 100 tasks at a time.',
  },
  {
    code: 40100,
    message:
      'You are not authorized to access this resource. See your login details here: https://app.dataforseo.com/api-dashboard .',
  },
  {
    code: 40101,
    message: 'Internal SE Server Error.',
  },
  {
    code: 40102,
    message: 'No Search Results.',
  },
  {
    code: 40103,
    message: 'Task execution failed, please try to resubmit the task.',
  },
  {
    code: 40200,
    message: 'Payment Required.',
  },
  {
    code: 40201,
    message:
      'Our algorithms found suspicious activity in your DataForSEO account. It has been temporarily blocked. For further details please contact our support team.',
  },
  {
    code: 40202,
    message: 'The rate-limit per minute has been exceeded.',
  },
  {
    code: 40203,
    message:
      'The cost limit has been exceeded. You can modify your cost limit in the user panel https://app.dataforseo.com/api-settings/api-limits .',
  },
  {
    code: 40204,
    message:
      'Access denied. Visit Plans and Subscriptions to activate your subscription and get access to this API: https://app.dataforseo.com/users/getrows .',
  },
  {
    code: 40205,
    message:
      'The duplicate task limit per hour has been exceeded. You can modify your limits in the user panel https://app.dataforseo.com/api-settings/api-limits .',
  },
  {
    code: 40206,
    message:
      'The duplicate task limit per day has been exceeded. You can modify your limits in the user panel https://app.dataforseo.com/api-settings/api-limits .',
  },
  {
    code: 40207,
    message:
      'Access denied. Your IP is not whitelisted. You can modify your IP whitelist in the user panel https://app.dataforseo.com/api-settings/api-access .',
  },
  {
    code: 40400,
    message: 'Not Found.',
  },
  {
    code: 40401,
    message: 'Task Not Found.',
  },
  {
    code: 40402,
    message: 'Invalid Path.',
  },
  {
    code: 40403,
    message: 'Results Expired.',
  },
  {
    code: 40404,
    message: 'No Prepared Data Found. Please Contact Our Support Team.',
  },
  {
    code: 40501,
    message: 'Invalid Field.',
  },
  {
    code: 40502,
    message: 'POST Data Is Empty.',
  },
  {
    code: 40503,
    message: 'POST Data Is Invalid.',
  },
  {
    code: 40504,
    message:
      'The number of intersecting keywords for the specified domains exceeds 10 million. Try specifying different domains.',
  },
  {
    code: 40505,
    message: 'You are using old data.',
  },
  {
    code: 40506,
    message: 'Unknown Fields in POST Data.',
  },
  {
    code: 40601,
    message: 'Task Handed.',
  },
  {
    code: 40602,
    message: 'Task In Queue.',
  },
  {
    code: 50000,
    message: 'Internal Error.',
  },
  {
    code: 50001,
    message: 'Error While Checking the Balance.',
  },
  {
    code: 50100,
    message: 'Not Implemented.',
  },
  {
    code: 50301,
    message: '3rd Party API Service Unavailable.',
  },
  {
    code: 50303,
    message: 'Update in progress. Please try after a few minutes.',
  },
  {
    code: 50304,
    message:
      'This function temporarily unavailable. Please contact support for more information.',
  },
  {
    code: 50401,
    message: 'Internal Error - Timeout.',
  },
] as const

type StatusCodes = typeof statuses[number]['code']
type StatusMessages = typeof statuses[number]['message']
type DFOPath = [string: DFOClientTypes, string: string, ...rest: string[]]

export type DFOResponse<T> = {
  version: string
  status_code: StatusCodes
  status_message: StatusMessages
  time: string
  cost: number
  tasks_count: number
  tasks_error: number
  tasks: DFOTaskResponse<T>
}
export type DFOTaskResponse<T> = {
  id: string
  status_code: StatusCodes
  status_message: StatusMessages
  time: string
  cost: number
  result_count: number
  path: DFOPath
  data: Record<string, string>
  result: T[]
}

export type GoogleLanguagesType = {
  language_name: string
  language_code: string
}

export type GoogleLocationType = {
  location_code: number
  location_name: string
  location_code_parent: number
  country_iso_code: string
  location_type: string
}

export type AccountInfoType = {
  login: string
  timezone: string
  rates: {
    limits: {
      day: {
        keywords_data: {
          live: {
            keywords_for_site: number
            search_volume: number
          }
          task_get: {
            keywords_for_site: number
            search_volume: number
          }
          task_post: {
            keywords_for_site: number
            search_volume: number
          }
        }
        total_keywords_data: number
        serp: {
          live: {
            advanced: number
            html: number
            regular: number
          }
          task_get: {
            advanced: number
            html: number
            regular: number
          }
          task_post: number
          tasks_ready: number
        }
        total_serp: number
      }
      minute: {
        keywords_data: {
          live: {
            keywords_for_site: number
            search_volume: number
          }
          task_get: {
            keywords_for_site: number
            search_volume: number
          }
          task_post: {
            keywords_for_site: number
            search_volume: number
          }
        }
        total_keywords_data: number
        serp: {
          live: {
            advanced: number
            html: number
            regular: number
          }
          task_get: {
            advanced: number
            html: number
            regular: number
          }
          task_post: number
          tasks_ready: number
        }
        total_serp: number
      }
    }
    statistics: {
      day: {
        keywords_data: {
          live: {
            keywords_for_site: number
            search_volume: number
          }
          task_get: {
            keywords_for_site: number
            search_volume: number
          }
          task_post: {
            keywords_for_site: number
            search_volume: number
          }
        }
        total_keywords_data: number
        serp: {
          live: {
            advanced: number
            html: number
            regular: number
          }
          task_get: {
            advanced: number
            html: number
            regular: number
          }
          task_post: number
          tasks_ready: number
        }
        total_serp: number
        value: string
      }
      minute: {
        keywords_data: {
          live: {
            keywords_for_site: number
            search_volume: number
          }
          task_get: {
            keywords_for_site: number
            search_volume: number
          }
          task_post: {
            keywords_for_site: number
            search_volume: number
          }
        }
        total_keywords_data: number
        serp: {
          live: {
            advanced: number
            html: number
            regular: number
          }
          task_get: {
            advanced: number
            html: number
            regular: number
          }
          task_post: number
          tasks_ready: number
        }
        total_serp: number
        value: string
      }
    }
  }
  money: {
    total: 1127004
    balance: 1116220.9
    limits: {
      day: {
        keywords_data: {
          live: {
            keywords_for_site: 0
            search_volume: 0
          }
          task_get: {
            keywords_for_site: 0
            search_volume: 0
          }
          task_post: {
            keywords_for_site: 0
            search_volume: 0
          }
        }
        total_keywords_data: 0
        serp: {
          live: {
            advanced: 0
            html: 0
            regular: 0
          }
          task_get: {
            advanced: 0
            html: 0
            regular: 0
          }
          task_post: 0
          tasks_ready: 0
        }
        total_serp: 0
      }
      minute: {
        keywords_data: {
          live: {
            keywords_for_site: 0
            search_volume: 0
          }
          task_get: {
            keywords_for_site: 0
            search_volume: 0
          }
          task_post: {
            keywords_for_site: 0
            search_volume: 0
          }
        }
        total_keywords_data: 0
        serp: {
          live: {
            advanced: 0
            html: 0
            regular: 0
          }
          task_get: {
            advanced: 0
            html: 0
            regular: 0
          }
          task_post: 0
          tasks_ready: 0
        }
        total_serp: 0
      }
    }
    statistics: {
      day: {
        keywords_data: {
          live: {
            keywords_for_site: 0
            search_volume: 0
          }
          task_get: {
            keywords_for_site: 0
            search_volume: 0
          }
          task_post: {
            keywords_for_site: 0
            search_volume: 0
          }
        }
        total_keywords_data: 0
        serp: {
          live: {
            advanced: 0
            html: 0
            regular: 0
          }
          task_get: {
            advanced: 0
            html: 0
            regular: 0
          }
          task_post: 0
          tasks_ready: 0
        }
        total_serp: 0
        value: '2019-11-14'
      }
      minute: {
        keywords_data: {
          live: {
            keywords_for_site: 0
            search_volume: 0
          }
          task_get: {
            keywords_for_site: 0
            search_volume: 0
          }
          task_post: {
            keywords_for_site: 0
            search_volume: 0
          }
        }
        total_keywords_data: 0
        serp: {
          live: {
            advanced: 0
            html: 0
            regular: 0
          }
          task_get: {
            advanced: 0
            html: 0
            regular: 0
          }
          task_post: 0
          tasks_ready: 0
        }
        total_serp: 0
        value: '2019-11-14 09:07'
      }
    }
  }
  price: {
    keywords_data: {
      live: {
        search_volume: {
          priority_low: {
            price_type: 'per_result'
            price: 0.05
          }
          priority_normal: {
            price_type: 'per_result'
            price: 0.05
          }
          priority_high: {
            price_type: 'per_result'
            price: 0.05
          }
        }
      }
      task_get: {
        search_volume: {
          priority_low: {
            price_type: 'per_result'
            price: 0.05
          }
          priority_normal: {
            price_type: 'per_result'
            price: 0.05
          }
          priority_high: {
            price_type: 'per_result'
            price: 0.05
          }
        }
      }
      task_post: {
        search_volume: {
          priority_low: {
            price_type: 'per_result'
            price: 0.05
          }
          priority_normal: {
            price_type: 'per_result'
            price: 0.05
          }
          priority_high: {
            price_type: 'per_result'
            price: 0.05
          }
        }
      }
    }
    serp: {
      live: {
        advanced: {
          priority_low: {
            price_type: 'per_result'
            price: 0
          }
          priority_normal: {
            price_type: 'per_result'
            price: 0
          }
          priority_high: {
            price_type: 'per_result'
            price: 0
          }
        }
        html: {
          priority_low: {
            price_type: 'per_result'
            price: 0
          }
          priority_normal: {
            price_type: 'per_result'
            price: 0
          }
          priority_high: {
            price_type: 'per_result'
            price: 0
          }
        }
        regular: {
          priority_low: {
            price_type: 'per_result'
            price: 0.05
          }
          priority_normal: {
            price_type: 'per_result'
            price: 0.05
          }
          priority_high: {
            price_type: 'per_result'
            price: 0.05
          }
        }
      }
      task_get: {
        advanced: {
          priority_low: {
            price_type: 'per_result'
            price: 0.05
          }
          priority_normal: {
            price_type: 'per_result'
            price: 0.05
          }
          priority_high: {
            price_type: 'per_result'
            price: 0.05
          }
        }
        html: {
          priority_low: {
            price_type: 'per_result'
            price: 0.05
          }
          priority_normal: {
            price_type: 'per_result'
            price: 0.05
          }
          priority_high: {
            price_type: 'per_result'
            price: 0.05
          }
        }
        regular: {
          priority_low: {
            price_type: 'per_result'
            price: 0.05
          }
          priority_normal: {
            price_type: 'per_result'
            price: 0.05
          }
          priority_high: {
            price_type: 'per_result'
            price: 0.05
          }
        }
      }
      task_post: {
        priority_low: {
          price_type: 'per_result'
          price: 0.05
        }
        priority_normal: {
          price_type: 'per_result'
          price: 0.05
        }
        priority_high: {
          price_type: 'per_result'
          price: 0.05
        }
      }
      tasks_ready: {
        priority_low: {
          price_type: 'per_result'
          price: 0
        }
        priority_normal: {
          price_type: 'per_result'
          price: 0
        }
        priority_high: {
          price_type: 'per_result'
          price: 0
        }
      }
    }
  }
}

enum EDFOPostBackDataType {
  REGULAR = 'regular',
  ADVANCED = 'advanced',
  HTML = 'html',
}
enum EDFODeviceType {
  DESKTOP = 'desktop',
  MOBILE = 'mobile',
}

export type GoogleSerpOrganicPostType = [
  // For better documentation you can visit https://docs.dataforseo.com/v3/serp/google/organic/task_post
  | {
      language_code: string
      location_code: number
      keyword: string
    }
  | {
      language_name: string
      location_name: string
      keyword: string
      priority: 1 | 2
      // Example google.co.uk, google.com.au, google.de
      se_domain?: 'string'
      // Takes the values: desktop or mobile, defaults to desktop
      device?: EDFODeviceType
      // if set to true, the related_result element in the response will be provided as a snippet of its parent organic result;
      // if set to false, the related_result element will be provided as a separate organic result;
      // default value: true
      group_organic_results?: boolean
      // calcualte pixel rankings for SERP elements in advanced results
      // Pixel ranking refers to the distance between the result snippet and top left corner of the screen;
      // Visit Help Center to learn more>>
      // by default, the parameter is set to false
      // Note: if set to true, the charge per task will be multiplied by 2
      calculate_rectangles?: boolean
      browser_screen_width?: boolean
      tag?: string
      browser_screen_resolution_ratio?: 1 | 2 | 3
      pingback_url: string
      url?: string
      postback_data?: EDFOPostBackDataType
      postback_url?: string
    }
]

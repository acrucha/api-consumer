
export interface Infos {
    activity_amount: number,
    average_duration_per_case: string,
    average_events_per_case: number,
    case_amount: number,
    event_amount: number,
    events_per_case: string,
    median_duration: string,
    variant_amount: number    
}

export const defaultInfos = <Infos> {
    activity_amount: 0,
    average_duration_per_case: "empty",
    average_events_per_case: 0,
    case_amount: 0,
    event_amount: 0,
    events_per_case: "empty",
    median_duration: "empty",
    variant_amount: 0
}
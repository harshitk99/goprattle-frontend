export type RoleType = 'Planner' | 'Performer' | 'Crew';

export interface RequirementData {
    eventName: string;
    eventType: string;
    eventDate: string;
    location: string;
    venue?: string;
    requiredRole: RoleType | '';
    roleDetails: {
        [key: string]: any;
    };
}

export const INITIAL_DATA: RequirementData = {
    eventName: '',
    eventType: '',
    eventDate: '',
    location: '',
    venue: '',
    requiredRole: '',
    roleDetails: {},
};

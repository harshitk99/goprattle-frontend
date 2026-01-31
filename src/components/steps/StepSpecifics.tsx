import React, { useEffect } from 'react';
import { RequirementData, RoleType } from '../../types';
import { Input } from '../ui/Input';

interface StepProps {
    data: RequirementData;
    updateFields: (fields: Partial<RequirementData>) => void;
}

export const StepSpecifics: React.FC<StepProps> = ({ data, updateFields }) => {

    const updateDetail = (key: string, value: any) => {
        updateFields({
            roleDetails: {
                ...data.roleDetails,
                [key]: value
            }
        });
    };

    const renderContent = () => {
        switch (data.requiredRole) {
            case 'Planner':
                return (
                    <>
                        <Input
                            label="Estimated Budget"
                            placeholder="$5,000"
                            value={data.roleDetails.budget || ''}
                            onChange={(e) => updateDetail('budget', e.target.value)}
                        />
                        <Input
                            label="Guest Count"
                            type="number"
                            value={data.roleDetails.guestCount || ''}
                            onChange={(e) => updateDetail('guestCount', e.target.value)}
                        />
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-gray-700">Services Needed</label>
                            <select
                                className="px-4 py-2 border rounded-md text-black"
                                value={data.roleDetails.serviceType || ''}
                                onChange={(e) => updateDetail('serviceType', e.target.value)}
                            >
                                <option value="">Select Service</option>
                                <option value="Full Planning">Full Planning</option>
                                <option value="Day-of Coordination">Day-of Coordination</option>
                                <option value="Consultation">Consultation</option>
                            </select>
                        </div>
                    </>
                );
            case 'Performer':
                return (
                    <>
                        <Input
                            label="Performance Type"
                            placeholder="e.g. Jazz Band, Magician"
                            value={data.roleDetails.performanceType || ''}
                            onChange={(e) => updateDetail('performanceType', e.target.value)}
                        />
                        <Input
                            label="Set Duration (Hours)"
                            type="number"
                            value={data.roleDetails.duration || ''}
                            onChange={(e) => updateDetail('duration', e.target.value)}
                        />
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-gray-700">Equipment Provided?</label>
                            <select
                                className="px-4 py-2 border rounded-md text-black"
                                value={data.roleDetails.hasEquipment || ''}
                                onChange={(e) => updateDetail('hasEquipment', e.target.value)}
                            >
                                <option value="">Select Option</option>
                                <option value="Yes">Yes, venue has sound/lights</option>
                                <option value="No">No, performer must bring</option>
                            </select>
                        </div>
                    </>
                );
            case 'Crew':
                return (
                    <>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-gray-700">Role Type</label>
                            <select
                                className="px-4 py-2 border rounded-md text-black"
                                value={data.roleDetails.crewType || ''}
                                onChange={(e) => updateDetail('crewType', e.target.value)}
                            >
                                <option value="">Select Role</option>
                                <option value="Sound Engineer">Sound Engineer</option>
                                <option value="Lighting Tech">Lighting Tech</option>
                                <option value="Security">Security</option>
                                <option value="Usher">Usher</option>
                            </select>
                        </div>
                        <Input
                            label="Shift Hours"
                            placeholder="e.g. 4pm - 12am"
                            value={data.roleDetails.shiftHours || ''}
                            onChange={(e) => updateDetail('shiftHours', e.target.value)}
                        />
                    </>
                );
            default:
                return <p>Please go back and select a role.</p>;
        }
    };

    return (
        <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-bold text-gray-800">
                {data.requiredRole} Details
            </h2>
            <p className="text-gray-500 mb-4">Specific information for the {data.requiredRole?.toLowerCase()}.</p>
            {renderContent()}
        </div>
    );
};

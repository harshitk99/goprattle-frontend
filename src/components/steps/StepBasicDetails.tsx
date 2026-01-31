import React from 'react';
import { RequirementData } from '../../types';
import { Input } from '../ui/Input';

interface StepProps {
    data: RequirementData;
    updateFields: (fields: Partial<RequirementData>) => void;
}

export const StepBasicDetails: React.FC<StepProps> = ({ data, updateFields }) => {
    return (
        <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-bold text-gray-800">Event Details</h2>
            <p className="text-gray-500 mb-4">Let's start with the basics of your event.</p>

            <Input
                label="Event Name"
                placeholder="e.g. Summer Music Festival"
                value={data.eventName}
                onChange={(e) => updateFields({ eventName: e.target.value })}
                autoFocus
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                    label="Event Type"
                    placeholder="e.g. Concert, Wedding"
                    value={data.eventType}
                    onChange={(e) => updateFields({ eventType: e.target.value })}
                />

                <Input
                    label="Date"
                    type="date"
                    value={data.eventDate}
                    onChange={(e) => updateFields({ eventDate: e.target.value })}
                />
            </div>

            <Input
                label="Location"
                placeholder="City, State"
                value={data.location}
                onChange={(e) => updateFields({ location: e.target.value })}
            />

            <Input
                label="Venue (Optional)"
                placeholder="Specific venue name"
                value={data.venue}
                onChange={(e) => updateFields({ venue: e.target.value })}
            />
        </div>
    );
};

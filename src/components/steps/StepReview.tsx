import React from 'react';
import { RequirementData } from '../../types';

interface StepProps {
    data: RequirementData;
}

export const StepReview: React.FC<StepProps> = ({ data }) => {
    return (
        <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-bold text-gray-800">Review & Submit</h2>
            <p className="text-gray-500 mb-4">Please verify your details before posting.</p>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 space-y-4">
                <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-1">Event</h3>
                    <p className="text-lg font-medium text-gray-900">{data.eventName}</p>
                    <p className="text-gray-600">{data.eventType} • {data.eventDate}</p>
                    <p className="text-gray-600">{data.location} {data.venue && `• ${data.venue}`}</p>
                </div>

                <div className="border-t border-gray-200 pt-4">
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-1">Requirement</h3>
                    <p className="text-lg font-medium text-blue-600">{data.requiredRole}</p>

                    <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                        {Object.entries(data.roleDetails).map(([key, value]) => (
                            <div key={key}>
                                <span className="text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}: </span>
                                <span className="font-medium text-gray-900">{String(value)}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

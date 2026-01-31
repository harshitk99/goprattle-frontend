import React from 'react';
import { RequirementData, RoleType } from '../../types';
import { Calendar, Mic2, Users } from 'lucide-react';

interface StepProps {
    data: RequirementData;
    updateFields: (fields: Partial<RequirementData>) => void;
}

const ROLES: { id: RoleType; label: string; icon: any; desc: string }[] = [
    { id: 'Planner', label: 'Event Planner', icon: Calendar, desc: 'Organize and manage logistics.' },
    { id: 'Performer', label: 'Performer', icon: Mic2, desc: 'Bands, DJs, Solo Artists.' },
    { id: 'Crew', label: 'Event Crew', icon: Users, desc: 'Technical, Security, Support staff.' },
];

export const StepRoleSelection: React.FC<StepProps> = ({ data, updateFields }) => {
    return (
        <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-bold text-gray-800">Who do you need?</h2>
            <p className="text-gray-500 mb-4">Select the type of professional you are looking to hire.</p>

            <div className="grid grid-cols-1 gap-4">
                {ROLES.map((role) => {
                    const Icon = role.icon;
                    const isSelected = data.requiredRole === role.id;

                    return (
                        <button
                            key={role.id}
                            onClick={() => updateFields({ requiredRole: role.id, roleDetails: {} })}
                            className={`p-4 border-2 rounded-xl text-left transition-all hover:scale-[1.02] flex items-center gap-4 ${isSelected
                                    ? 'border-blue-600 bg-blue-50 ring-2 ring-blue-200'
                                    : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                                }`}
                        >
                            <div className={`p-3 rounded-full ${isSelected ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}>
                                <Icon size={24} />
                            </div>
                            <div>
                                <h3 className={`font-bold ${isSelected ? 'text-blue-900' : 'text-gray-800'}`}>{role.label}</h3>
                                <p className="text-sm text-gray-500">{role.desc}</p>
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

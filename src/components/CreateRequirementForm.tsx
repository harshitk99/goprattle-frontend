'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { INITIAL_DATA, RequirementData } from '../types';
import { Button } from './ui/Button';
import { StepBasicDetails } from './steps/StepBasicDetails';
import { StepRoleSelection } from './steps/StepRoleSelection';
import { StepSpecifics } from './steps/StepSpecifics';
import { StepReview } from './steps/StepReview';
import { ChevronRight, ChevronLeft, Check } from 'lucide-react';

export default function CreateRequirementForm() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(0);
    const [data, setData] = useState<RequirementData>(INITIAL_DATA);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const updateFields = (fields: Partial<RequirementData>) => {
        setData(prev => ({ ...prev, ...fields }));
    };

    const steps = [
        <StepBasicDetails key="1" data={data} updateFields={updateFields} />,
        <StepRoleSelection key="2" data={data} updateFields={updateFields} />,
        <StepSpecifics key="3" data={data} updateFields={updateFields} />,
        <StepReview key="4" data={data} />,
    ];

    const next = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(prev => prev + 1);
        } else {
            submit();
        }
    };

    const back = () => {
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
        }
    };

    const submit = async () => {
        setIsSubmitting(true);
        setError(null);
        try {
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/requirements`, data);
            router.push('/?success=true');
        } catch (err: any) {
            console.error(err);
            setError(err.response?.data?.message || 'Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 max-w-2xl w-full mx-auto">

            <div className="bg-gray-50 px-8 py-4 border-b border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    {[0, 1, 2, 3].map((step) => (
                        <div
                            key={step}
                            className={`h-2 rounded-full transition-all duration-300 ${step <= currentStep ? 'w-8 bg-blue-600' : 'w-2 bg-gray-200'
                                }`}
                        />
                    ))}
                </div>
                <span className="text-sm font-semibold text-gray-500">Step {currentStep + 1} of 4</span>
            </div>

            <div className="p-8 min-h-[400px]">
                {error && (
                    <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm mb-4">
                        {error}
                    </div>
                )}
                {steps[currentStep]}
            </div>

            <div className="bg-gray-50 px-8 py-4 border-t border-gray-100 flex justify-between">
                <Button
                    variant="outline"
                    onClick={back}
                    disabled={currentStep === 0}
                    className={currentStep === 0 ? 'invisible' : ''}
                >
                    <ChevronLeft size={18} /> Back
                </Button>
                <Button onClick={next} isLoading={isSubmitting}>
                    {currentStep === steps.length - 1 ? (
                        <>Post Requirement <Check size={18} /></>
                    ) : (
                        <>Next Step <ChevronRight size={18} /></>
                    )}
                </Button>
            </div>
        </div>
    );
}

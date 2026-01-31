import CreateRequirementForm from '@/components/CreateRequirementForm';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PostPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-4xl mx-auto mb-8">
                <Link href="/" className="inline-flex items-center text-black-500 hover:text-gray-900 transition-colors mb-6">
                    <ArrowLeft size={20} className="mr-2" /> Back to Home
                </Link>
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-2">Create New Requirement</h1>
                    <p className="text-gray-500 text-lg">Detailed information helps us find the best match for your event.</p>
                </div>

                <CreateRequirementForm />
            </div>
        </div>
    );
}

"use client";

import { PDFDownloadLink } from '@react-pdf/renderer';
import { ResumeDocument } from '@/components/resume/ResumeDocument';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function DownloadResumeButton() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return <Button variant="outline" size="sm" disabled >Loading Resume...</Button>
    }

    return (
        <PDFDownloadLink document={<ResumeDocument />} fileName="V_Shrinath_Resume.pdf">
            {({ blob, url, loading, error }) => (
                <Button variant="outline" size="sm" disabled={loading} className="gap-2">
                    {loading ? 'Generating...' : <><FileText className="h-4 w-4" /> Download Resume</>}
                </Button>
            )}
        </PDFDownloadLink>
    );
}

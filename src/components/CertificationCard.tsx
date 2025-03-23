
import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';

interface CertificationCardProps {
  name: string;
  issuer: string;
  date: string;
  verificationUrl?: string;
  imageUrl?: string;
}

const CertificationCard = ({
  name,
  issuer,
  date,
  verificationUrl,
  imageUrl,
}: CertificationCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-lg border border-border bg-card hover:shadow-md transition-all duration-300 flex flex-col">
      <div className="p-6 flex items-start gap-4">
        <div className="bg-primary/10 rounded-md p-2.5 text-primary shrink-0">
          <Award size={24} />
        </div>
        
        <div className="space-y-2">
          <h3 className="text-lg font-medium">{name}</h3>
          <p className="text-muted-foreground">{issuer}</p>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar size={14} className="mr-1.5" />
            {date}
          </div>
          
          {verificationUrl && (
            <a
              href={verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline mt-2"
            >
              <ExternalLink size={16} />
              Verify Certificate
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;

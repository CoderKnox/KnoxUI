import React from 'react';
import * as LucideIcons from 'lucide-react';

export default function FeatureCard({ title, description, icon }) {
  const Icon = LucideIcons[icon];

  return (
    <div className="flex flex-col">
      <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
          {Icon && <Icon className="h-6 w-6 text-white" aria-hidden="true" />}
        </div>
        {title}
      </dt>
      <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
        <p className="flex-auto">{description}</p>
      </dd>
    </div>
  );
}


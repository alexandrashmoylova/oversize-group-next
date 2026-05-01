import React, { ReactNode } from "react";

type Props = {
  title: string;
  description: string;
  icon?: ReactNode;
};

export default function ServiceCard({ title, description, icon }: Props) {
  return (
    <div className="flex gap-4 items-start p-6 border rounded-lg shadow-sm">
      <div className="shrink-0 w-12 h-12 bg-[#fff7cc] rounded-full flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-[#545454] mt-2">{description}</p>
      </div>
    </div>
  );
}

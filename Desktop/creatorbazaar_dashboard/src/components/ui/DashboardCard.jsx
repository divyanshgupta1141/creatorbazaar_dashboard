import React from 'react';
import { Link } from 'react-router-dom';

const DashboardCard = ({ title, description, href, gradient = 'from-primary to-accent' }) => {
  return (
    <Link to={href} className="block group">
      <div className={`rounded-xl bg-dark shadow-md p-4 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer bg-gradient-to-br ${gradient} text-white min-h-[120px] relative overflow-hidden`}>
        <div className="relative z-10">
          <h3 className="text-lg font-semibold mb-2 leading-tight">{title}</h3>
          <p className="text-sm text-white/80 leading-relaxed">{description}</p>
        </div>
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </Link>
  );
};

export default DashboardCard;
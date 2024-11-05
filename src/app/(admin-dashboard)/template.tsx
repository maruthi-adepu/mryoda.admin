'use client'
import TopBar from '@/components/topbar';
import React from 'react';
 
export default function Template({ children }: { children: React.ReactNode }) {
  
  return (
    <div>
      <TopBar />
      <main>{children}</main>
    </div>
  );
}
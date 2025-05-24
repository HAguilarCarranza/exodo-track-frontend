'use client';

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import GuidesDailyPage from '@/components/guides/GuidesDailyPage';
import ProtectedRoute from '@/components/auth/ProtectedRoute';

export default function GuiasDiarias() {
  return (
    <ProtectedRoute>
      <MainLayout>
        <GuidesDailyPage />
      </MainLayout>
    </ProtectedRoute>
  );
} 
import React from 'react';
import { AppwriteProvider } from './appwrite/AppwriteContext';
import { Router } from './routes/Router';

export default function App() {
  return (
    <AppwriteProvider>
      <Router />
    </AppwriteProvider>
  );
}

// components/SplineViewer.js
'use client';  // Add this directive at the top

import React, { useEffect } from 'react';

const SplineViewer = ({ url }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.2/build/spline-viewer.js';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <spline-viewer url={url} style={{ width: '100%', height: '100vh' }}></spline-viewer>;
};

export default SplineViewer;
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Tab = ({ activeTab, label, onClick }) => {
  const [className, setClassName] = useState('tab-list-item');

  useEffect(() => {
    if (activeTab === label) {
      setClassName((prev) => prev + ' tab-list-active');
    } else {
      setClassName('tab-list-item');
    }
  }, [activeTab, label]);
  return (
    <>
      <li className={className} onClick={() => onClick(label)}>
        {label}
      </li>
    </>
  );
};

export default Tab;

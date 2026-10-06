import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Activity } from '../components/Activity';
import { Pinned } from '../components/Pinned';
import { Readme } from '../components/Readme';
import { Timeline } from '../components/Timeline';
import { WritingList } from '../components/WritingList';

export const Home = () => {
  const { hash } = useLocation();

  // Arriving from another page with /#work or /#experience: scroll to that section.
  useEffect(() => {
    if (!hash) return;
    document.getElementById(hash.slice(1))?.scrollIntoView();
  }, [hash]);

  return (
    <div className="mx-auto max-w-[920px] px-6 pt-24">
      <Readme />
      <Pinned />
      <Activity />
      <WritingList />
      <Timeline />
    </div>
  );
};

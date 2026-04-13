import { tools } from '@/lib/tools-data';
import ToolHub from '@/components/tools/ToolHub';

export const metadata = {
  title: 'Free Recruitment Tools | RecruitmentOS',
  description: 'Free AI-powered tools for recruitment agencies — cold email writers, audits, playbooks and more.',
};

export default function ToolsPage() {
  return <ToolHub tools={tools} />;
}

import { ContentPage } from '@/components/site';
export function generateStaticParams(){return ['machinery','construction','concrete-products','support','projects','about','contact'].map(section=>({section}));}
export default async function Page({params}){const {section}=await params;return <ContentPage section={section}/>;}

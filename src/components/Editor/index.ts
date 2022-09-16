import dynamic from 'next/dynamic';

// import {default as Editor} from './Editor'

export const Editor = dynamic(() => import('./Editor'), { ssr: false }); // client 사이드에서만 동작되기 때문에 ssr false로 설정
export const MarkDownViewer = dynamic(() => import('src/components/Editor/MarkDownViewer'), { ssr: false }); // client 사이드에서만 동작되기 때문에 ssr false로 설정

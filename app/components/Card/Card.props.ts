import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
	title: string;
	paragraph: string;
	createDate: string;
	tag: string;
	count: number | undefined;
	time?: string | undefined;
}
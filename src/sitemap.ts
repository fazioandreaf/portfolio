import {MetadataRoute} from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://fazioandrea.me',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: 'https://fazioandrea.me/about-me',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: 'https://fazioandrea.me/contact',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.5,
		},
	];
}

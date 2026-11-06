export type StoredNewsArticle = {
	id: number;
	topicKey: string;
	createdAt: string;
	headline: string;
	summary: string;
	fullArticle: string;
	seoTitle: string;
	seoDescription: string;
	seoKeywords: string[];
	tags: string[];
	imageUrl: string;
	sourceTitle: string;
	sourceUrl: string;
	sourcePublisher: string;
};

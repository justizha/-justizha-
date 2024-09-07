import BlogNavigation from "../../components/blogs/BlogNavigation";

export default function BlogLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<div className="test">
			{children}
			<BlogNavigation />
		</div>
	);
}

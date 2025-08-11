import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPostBySlug } from "@/data/blogPosts";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const params = useParams();
  const slug = params.slug as string;
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="py-16">
          <div className="container mx-auto px-6">
            <h1 className="text-2xl font-bold">Article not found</h1>
            <p className="text-muted-foreground">The blog you are looking for doesn&apos;t exist.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.coverImage,
    author: {
      "@type": "Organization",
      name: "ResoBit",
    },
    datePublished: post.date,
    keywords: post.tags.join(", "),
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-6">
          <article className="max-w-3xl mx-auto">
            <img src={post.coverImage} alt={post.title} className="w-full h-64 object-cover rounded-xl mb-6" />
            <h1 className="text-4xl font-bold mb-3">{post.title}</h1>
            <p className="text-muted-foreground mb-8">{post.description}</p>
            <div className="prose prose-invert max-w-none">{post.content}</div>
          </article>
        </div>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
};

export default BlogPost;



import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Personalizing Guest Experiences Through Technology",
    category: "Technology",
    image: "https://ext.same-assets.com/3782035030/4112040736.jpeg",
    link: "/blog/personalizing-guest-experiences-through-technology"
  },
  {
    id: 2,
    title: "Unlock the Full Potential of Your Property Management with OwnerRez",
    category: "Integration",
    image: "https://ext.same-assets.com/3738088833/1374794428.png",
    link: "/blog/unlock-the-full-potential-of-your-property-management-with-ownerrez"
  },
  {
    id: 3,
    title: "Why Task Management is Crucial for Your Hospitality Business",
    category: "Features",
    image: "https://ext.same-assets.com/4179688794/3828983632.png",
    link: "/blog/why-task-management-is-crucial-for-your-hospitality-business"
  }
];

export function BlogSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Latest Articles - <span className="text-primary">The SuiteLife</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={post.link}
              className="group block overflow-hidden rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <div className="text-sm text-primary font-medium mb-2">
                  {post.category}
                </div>
                <h3 className="font-semibold text-lg mb-4 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  Read more
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

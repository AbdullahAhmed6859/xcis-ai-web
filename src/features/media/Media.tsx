import { PortableText } from "next-sanity";
import Image from "next/image";
import { Author } from "../posts/author";
import { Categories } from "../posts/categories";
import { components } from "@/sanity/portableTextComponents";
import { MEDIUM_QUERYResult } from "@/sanity/types";
import { PublishedAt } from "../posts/published-at";
import { Title } from "../posts/title";
import { urlFor } from "@/sanity/lib/image";

function Media(props: NonNullable<MEDIUM_QUERYResult>) {
  const {
    // _id,
    title,
    author,
    mainImage,
    body,
    publishedAt,
    categories,
    // relatedPosts,
  } = props;

  return (
    <article className="grid lg:grid-cols-12 gap-y-12">
      <header className="lg:col-span-12 flex flex-col gap-4 items-start">
        <div className="flex gap-4 items-center">
          <Categories categories={categories} />
          <PublishedAt publishedAt={publishedAt} />
        </div>
        <Title>{title}</Title>
        <Author author={author} />
      </header>
      {mainImage ? (
        <figure className="lg:col-span-4 flex flex-col gap-2 items-start">
          <Image
            src={urlFor(mainImage).width(400).height(400).url()}
            width={400}
            height={400}
            alt=""
          />
        </figure>
      ) : null}
      {body ? (
        <div className="lg:col-span-7 lg:col-start-6 prose lg:prose-lg">
          <PortableText value={body} components={components} />
          {/* <RelatedPosts
            relatedPosts={relatedPosts}
            documentId={_id}
            documentType="post"
          /> */}
        </div>
      ) : null}
    </article>
  );
}

export default Media;

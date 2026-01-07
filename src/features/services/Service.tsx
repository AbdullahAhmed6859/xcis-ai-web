import { SERVICE_QUERYResult } from "@/sanity/types";
import { Title } from "../posts/title";

function Service(props: NonNullable<SERVICE_QUERYResult>) {
  const { title, description } = props;

  return (
    <article className="flex flex-col items-center">
      <header className="lg:col-span-12 flex flex-col gap-4 items-start">
        <Title>{title}</Title>
      </header>
      <div className="lg:col-span-7 lg:col-start-6 prose lg:prose-lg">
        <p>{description}</p>
      </div>
    </article>
  );
}

export default Service;

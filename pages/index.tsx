import { GetStaticProps, InferGetStaticPropsType } from "next";

type Props = {
  name: string;
  description: string;
};

export default function Home(
  props: InferGetStaticPropsType<typeof getStaticProps>
): React.ReactNode {
  return (
    <div>
      Hello {props.name} {props.description}
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      name: "andrew",
      description: "Hello",
    },
  };
};

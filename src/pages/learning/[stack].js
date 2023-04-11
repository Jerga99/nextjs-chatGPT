
import stacks from "@/data/stacks.json";
import Header from "@/components/Header";
import Message from "@/components/Message";
import Prompt from "@/components/Prompt";

export default function Stack({stack, stackKey}) {
  return (
    <div className="h-full flex flex-col">
      <Header logo={stack.logo} info={stack.info} />
      <hr className="my-4" />
      <div className="chat flex flex-col h-full overflow-scroll">
        <Message />
      </div>
      <div className="flex p-4">
        <Prompt />
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = Object.keys(stacks).map((key) => ({params: {stack: key}}));

  return {
    paths,
    fallback: false
  }
}

export  async function getStaticProps({params}) {
  return {
    props: {
      stack: stacks[params.stack],
      stackKey: params.stack
    }
  }
}

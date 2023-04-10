
import stacks from "../../data/stacks.json";

export default function Stack({stack, stackKey}) {
  return (
    <>
      <div>Teaching: {stackKey}</div>
      <div>{JSON.stringify(stack)}</div>
    </>
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

import { buildTags } from "@/pages/buildTags";

export async function getServerSideProps() {
  const response = await fetch('http://localhost:3000/api/get-toggle');
  const { toggle } = await response.json();
  return { props: { toggle } };
}

export default function Home(props) {
  return (
    <>
      <h1>Toggle value is: { Boolean(props.toggle).toString() }</h1>
      <h2>buildTags value is: { JSON.stringify(buildTags(props)) }</h2>
      {/*<h2 suppressHydrationWarning>buildTags value is: { JSON.stringify(buildTags(props)) }</h2>*/}
    </>
  )
}

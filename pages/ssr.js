import { useState } from "react";
import Image from "next/image";

const Index = ({ data }) => {
  const [count, setCount] = useState(0);
  return (
    <div style={{ textAlign: "justify" }}>
      Hola {data.name} {count}
      <div style={{ display: "block" }}>
        <Image
          alt=""
          src={data.image}
          width={300}
          height={300}
          onClick={() => setCount(count + 1)}
        />
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  await new Promise((r) => setTimeout(r, 1500));
  console.log("Hola desde el servidor");
  const res = await fetch(`https://rickandmortyapi.com/api/character/2`);
  const data = await res.json();

  return { props: { data } };
}

export default Index;

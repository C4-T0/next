import { useState, useEffect } from "react";
import Image from "next/image";

const Index = () => {
  const [srcImg, setsrcImg] = useState("");
  const [name, setName] = useState("placeholder");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://rickandmortyapi.com/api/character/2`);
      await new Promise((r) => setTimeout(r, 1500));
      console.log("Hola desde el cliente");
      const data = await res.json();
      setsrcImg(data.image);
      setName(data.name);
    };
    fetchData();
  }, []);

  console.log(srcImg);

  return (
    <div style={{ textAlign: "justify" }}>
      Hola {name} {count}
      <div style={{ display: "block" }}>
        {srcImg != "" ? (
          <Image
            alt=""
            src={srcImg}
            width={300}
            height={300}
            onClick={() => setCount(count + 1)}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Index;

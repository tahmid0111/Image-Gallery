import React, { Suspense, useState } from "react";
import ComponentLayout from "../../layout/ComponentLayout";
import Navbar2 from "../shared/Navbar2";
import { importData } from "./demoComponent/lazy";

const LazyComponent = () => {
  const [compo, setCompo] = useState("movies");
  const Message = importData(compo);
  const MyCompo = <Message />;

  const onHandleCompo = (compo) => {
    setCompo(compo);
  };
  return (
    <ComponentLayout>
      <Navbar2 onHandleCompo={onHandleCompo} />
      <Suspense fallback={<div>...loading</div>}>{MyCompo}</Suspense>
    </ComponentLayout>
  );
};

export default LazyComponent;

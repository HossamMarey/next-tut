import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Error = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="container pt-4">
      <div className="row">
        <h1>404 Page Not Found</h1>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          delectus, veniam sint voluptates, voluptatibus adipisci doloribus,
          mollitia architecto voluptas nulla consequatur! Ipsam illo consequatur
          autem assumenda. Error aperiam laborum voluptatem officiis fuga,
          distinctio expedita aspernatur hic unde quibusdam cum eos itaque
          consectetur et natus nostrum quisquam sint id deleniti fugiat!
        </p>
        <Link href="/">
          <a className="btn btn-dark  "> Go Home </a>
        </Link>
      </div>
    </div>
  );
};

export default Error;

import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <div className="container flex justify-center flex-col-reverse xl:flex-row h-screen">
        <div className=" xl:w-1/2">
          <h1 className="xl:text-4xl  text-8xl xl:pt-20">Welcome to Nextjs with Tailwind css and mongodb</h1>
          <p className="text-2xl pt-20">
            Get started by editing app directory
            <br />
            <code className="text-blue-500">pages/index.js</code>
            <br />
            add your types to lib/types
          </p>
          <div className="pt-20">
            <Link href="/subpage" className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
              Go to subpage
            </Link>
            <br />
            <br />
            <Link href="/with-api" className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
              Go to api endpoint
            </Link>
            <br />
            <br />

            <Link href="/with-api" className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
              Go to Mongo CRUD
            </Link>
          </div>
        </div>
        <div className="xl:w-1/2 w-full h-1/2">
          <Image src={"https://cdn.dribbble.com/userupload/3253954/file/original-eca5bf9580fded837c78ab35c4464fb1.jpg?compress=1&resize=1024x709"} width={800} height={500} alt="Image" />
        </div>
      </div>
    </>
  );
};
export default Page;

import { FC } from "react";
import "./app.css";

const RootLayout: FC = ({ children }) => {
  return (
    <>
      <html>
        <head></head>
        <body>
          <div className="">
            <div className="bg-indigo-600 w-full py-5 h-20  top-0 px-10 flex justify-end items-center text-white">
              <div className="container">Home | About | Contact</div>
            </div>
            <div className="">{children}</div>
          </div>
        </body>
      </html>
    </>
  );
};
export default RootLayout;

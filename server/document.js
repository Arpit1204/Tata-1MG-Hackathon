import React from "react";
import { Head, Body } from "catalyst-core";

function Document(props) {
  return (
    <html lang="en">
      <Head {...props}>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Body {...props} />
    </html>
  );
}
export default Document;

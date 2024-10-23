import Link from "next/link";
import { Fragment } from "react";

function Home(){
  return(
    <Fragment>
      <header>
        <ol>
          <Link href={"/"}><li>Home</li></Link>
          <Link href={"/about"}><li>About</li></Link>
          <Link href={"/contact"}><li>Contact</li></Link>
          <Link href={"/service_page"}><li>Services</li></Link>
        </ol>
      </header>
    </Fragment>
  )
}

export default Home;